import {test, expect} from '@playwright/test';
import es from '../messages/es.json';
import en from '../messages/en.json';

const routes = [
  {url:'/', lang:'es-PE', heading:'INGENIERO', about:false},
  {url:'/sobre-mi', lang:'es-PE', heading:'MÁS SOBRE MÍ', about:true},
  {url:'/en', lang:'en', heading:'SYSTEMS', about:false},
  {url:'/en/about', lang:'en', heading:'ABOUT ME', about:true}
];

test('translation catalogs have matching keys', () => {
  function keys(value: unknown, prefix=''): string[] {
    if (!value || typeof value !== 'object') return [prefix];
    return Object.entries(value).flatMap(([key, item]) => keys(item, `${prefix}.${key}`)).sort();
  }
  expect(keys(en)).toEqual(keys(es));
});

for(const theme of ['light','dark'] as const) for(const route of routes) {
  test(`${route.url} renders in ${theme}`, async ({page}, testInfo) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => {if(message.type()==='error') errors.push(message.text());});
    await page.emulateMedia({colorScheme:theme});
    const response = await page.goto(route.url);
    expect(response?.status()).toBe(200);
    expect(response?.headers()['link']).toContain('hreflang="en"');
    await expect(page.locator('html')).toHaveAttribute('lang',route.lang);
    await expect(page.locator('html')).toHaveClass(new RegExp(`\\b${theme}\\b`));
    await expect(page.locator('h1')).toContainText(route.heading);
    const colors = await page.locator('body').evaluate(el => ({background:getComputedStyle(el).backgroundColor, color:getComputedStyle(el).color}));
    expect(colors.background).toBe(theme==='light' ? 'rgb(250, 250, 247)' : 'rgb(10, 10, 10)');
    expect(colors.color).toBe(theme==='light' ? 'rgb(24, 32, 24)' : 'rgb(255, 255, 255)');
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
    const nav = await page.locator('.site-nav').boundingBox();
    expect(nav!.x).toBeGreaterThanOrEqual(0);
    expect(nav!.x+nav!.width).toBeLessThanOrEqual(page.viewportSize()!.width);
    if(route.about) {
      await page.getByRole('button',{name:/^(Enlarge|Ampliar) certificado|^Enlarge certificate/}).first().click();
      await expect(page.getByRole('dialog')).toBeVisible();
      await page.keyboard.press('Escape');
      await expect(page.getByRole('dialog')).not.toBeVisible();
    } else {
      await page.getByRole('button',{name:/Ver recorrido completo|View full journey/}).click();
      await expect(page.locator('.experience-details')).toHaveCount(5);
      await expect(page.locator('#contact-message')).toHaveAttribute('placeholder',route.lang==='en'?'I have an idea about…':'Tengo una idea sobre…');
      await expect(page.locator('.portrait-image')).toHaveAttribute('src','/images/foto_presentacion.png');
      await expect(page.getByRole('link',{name:/Download CV|Descargar CV/}).first()).toHaveAttribute('href','/documents/cv-luiggi-rosas.pdf');
    }
    if(theme === 'light' && route.lang === 'en') {
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({path:testInfo.outputPath('light-preview.png'), fullPage:true});
    }
    expect(errors).toEqual([]);
  });
}

test('theme follows system, persists, syncs tabs and survives locale navigation', async ({page,context}) => {
  await page.emulateMedia({colorScheme:'dark'});
  await page.goto('/');
  await expect(page.locator('html')).toHaveClass(/dark/);
  await page.emulateMedia({colorScheme:'light'});
  await expect(page.locator('html')).toHaveClass(/light/);
  await page.getByRole('button',{name:'Cambiar a modo oscuro'}).click();
  await page.reload();
  await expect(page.locator('html')).toHaveClass(/dark/);
  const other = await context.newPage();
  await other.goto('/sobre-mi');
  await expect(other.locator('html')).toHaveClass(/dark/);
  await page.getByRole('button',{name:'Cambiar a modo claro'}).click();
  await expect(other.locator('html')).toHaveClass(/light/);
  await page.getByRole('button',{name:'Cambiar idioma a inglés'}).click();
  await expect(page).toHaveURL('/en');
  await expect(page.locator('html')).toHaveClass(/light/);
});

test('language switch preserves route, query and hash; Spanish remains default', async ({page, context}) => {
  await page.goto('/sobre-mi?source=test#publicaciones');
  await page.getByRole('button',{name:'Cambiar idioma a inglés'}).click();
  await expect(page).toHaveURL('/en/about?source=test#publicaciones');
  await expect(page.locator('html')).toHaveAttribute('lang','en');
  await page.getByRole('link',{name:'Back to home'}).click();
  await expect(page).toHaveURL('/en#presentacion');
  await page.getByRole('button',{name:'Switch language to Spanish'}).click();
  await expect(page).toHaveURL('/#presentacion');
  await context.setExtraHTTPHeaders({'Accept-Language':'en-US,en;q=0.9'});
  await page.goto('/');
  await expect(page).toHaveURL('/');
  await expect(page.locator('html')).toHaveAttribute('lang','es-PE');
});

test('mobile menu supports keyboard dismissal and localized navigation', async ({page,isMobile}) => {
  test.skip(!isMobile);
  await page.goto('/en');
  await page.getByRole('button',{name:'Open menu'}).click();
  await expect(page.locator('#mobile-navigation')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button',{name:'Open menu'})).toBeFocused();
  await page.getByRole('button',{name:'Open menu'}).click();
  await page.locator('#mobile-navigation').getByRole('link',{name:'About me'}).click();
  await expect(page).toHaveURL('/en/about');
});

test('public assets bypass locale routing', async ({request}) => {
  for(const file of ['/images/foto_presentacion.png','/images/companies/clafcomp-logo.webp','/documents/cv-luiggi-rosas.pdf']) {
    const response = await request.get(file);
    expect(response.ok()).toBe(true);
    expect(response.url()).toContain(file);
  }
  expect((await request.get('/fr/unknown')).status()).toBe(404);
});

test('light theme has readable text and translated contact validation', async ({page}) => {
  await page.emulateMedia({colorScheme:'light'});
  await page.goto('/en');
  const ratio = await page.locator('.hero-description').evaluate(el => {
    const rgb = (color:string) => color.match(/[\d.]+/g)!.slice(0,3).map(Number);
    const luminance = (color:string) => rgb(color).map(v => {
      const c=v/255; return c<=0.04045 ? c/12.92 : ((c+0.055)/1.055)**2.4;
    }).reduce((sum,c,i)=>sum+c*[0.2126,0.7152,0.0722][i],0);
    const front=luminance(getComputedStyle(el).color);
    const back=luminance(getComputedStyle(document.body).backgroundColor);
    return (Math.max(front,back)+0.05)/(Math.min(front,back)+0.05);
  });
  expect(ratio).toBeGreaterThanOrEqual(4.5);
  await page.getByRole('radio',{name:'WhatsApp'}).check();
  await page.getByLabel('Your WhatsApp number').fill('123');
  await page.getByLabel('Your message', {exact:true}).fill('Hello');
  await page.getByRole('button',{name:'Send message',exact:true}).click();
  await expect(page.getByRole('status').last()).toHaveText('Check your WhatsApp number and include the country code.');
});
