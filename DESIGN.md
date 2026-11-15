# Guía de diseño y organización

El portafolio ofrece español e inglés y temas claro y oscuro. Usa Geist y Geist Mono, tarjetas con bordes sutiles y decoraciones astronómicas.

## Estilos

Los tokens de src/app/globals.css conectan las variables del tema con Tailwind CSS 4. Usar background, foreground, surface, muted, accent y on-accent. Las marcas y documentos conservan sus colores originales.

src/styles/layout.css contiene la estructura compartida, tipografía de secciones, foco y animaciones de aparición. Los CSS Modules junto a cada componente contienen sus estilos, estados y reglas responsivas. La clase local root limita los selectores a cada sección; los nombres del DOM se conservan para las animaciones y pruebas.

Las utilidades simples de Tailwind permanecen en className. Las posiciones y retrasos calculados permanecen dinámicos en JavaScript; las reglas estáticas van en CSS. El formulario tiene una sola hoja de estilos, sin una segunda capa global de sobrescrituras.

## Contenido y lógica

Los catálogos messages/es.json y messages/en.json contienen las traducciones. Los registros compartidos están en src/data; src/i18n/content.ts prepara el contenido en el servidor. src/lib/contact-message.ts contiene la validación y construcción del enlace de correo; el componente controla campos y estados visuales.

## Verificación

Comprobar ambas páginas, idiomas y temas en móvil y escritorio. Mantener contraste, etiquetas accesibles, controles de 44 px y movimiento reducido. Las pruebas están en tests/.
