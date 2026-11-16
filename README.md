# Portfolio de Luiggi Rosas

Portafolio bilingüe con Next.js, Tailwind CSS, next-intl y next-themes.
Dominio: **luant.me**.

## Desarrollo

Node.js 24 y Yarn 1.22.22.

```sh
yarn install --frozen-lockfile
yarn dev
```

## Compilación

```sh
yarn build
```

Genera el sitio estático en `out/`, con las rutas `/`, `/sobre-mi/`, `/en/`
y `/en/about/`. Los layouts por idioma comparten `src/components/locale-layout.tsx`.
Las traducciones están en `messages/es.json` y `messages/en.json`.

La 404 se exporta como `404.html`. Las vistas de mantenimiento están en
`/mantenimiento/` y `/en/maintenance/`, y también se muestran ante errores de
la aplicación. GitHub Pages no permite personalizar sus errores de servidor 5xx.

El workflow `.github/workflows/nextjs.yml` publica `out/` en GitHub Pages al
hacer push a `main` o ejecutarlo manualmente. El dominio se configura en
**Settings → Pages → Custom domain**. No requiere un servidor Node.js.
