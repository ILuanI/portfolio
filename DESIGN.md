# Guía de diseño — Portafolio de Luiggi Rosas

Este documento describe el diseño implementado en el proyecto y sirve como referencia para mantener la coherencia visual al añadir secciones o componentes. Los valores en píxeles corresponden a una raíz de 16 px y a la escala predeterminada de Tailwind CSS.

## Identidad visual

Portafolio personal de estilo sobrio y tecnológico: fondo oscuro, superficies discretas, texto blanco y acentos verde lima. La jerarquía se construye con tipografía, espacio y contraste; los degradados y brillos acompañan elementos concretos.

El contenido se presenta en español de Perú (`es-PE`), con mensajes breves, directos y cercanos.

## Paleta de colores

### Colores principales

Definidos en `src/app/globals.css` mediante `@theme inline`.

| Token | HEX | Utilidades | Uso |
| --- | --- | --- | --- |
| `--color-background` | `#0A0A0A` | `bg-background`, `text-background` | Fondo general y texto sobre botones claros o lima |
| `--color-foreground` | `#FFFFFF` | `text-foreground` | Texto principal |
| `--color-surface` | `#141414` | `bg-surface` | Navegación, tarjetas y botones secundarios |
| `--color-accent` | `#BDFB1F` | `text-accent`, `bg-accent`, `border-accent` | Nombre, acciones principales, selección y foco |

### Opacidades y capas

Las variantes translúcidas conservan el color base y se mezclan con la superficie que tengan debajo; no representan un gris HEX fijo.

| Aplicación | Valores presentes |
| --- | --- |
| Texto secundario | Blanco al 60–80 % |
| Fechas, metadatos y texto auxiliar | Blanco al 40–55 % |
| Placeholders | Blanco al 30 % |
| Bordes y divisores | Blanco al 5–15 % |
| Fondos suaves de controles y etiquetas | Blanco al 3–5 % |
| Fondos de selección y hover | Lima al 5–10 % |
| Campos del formulario | Negro al 15 % |

### Degradados y colores de apoyo

| Elemento | Colores | Dirección |
| --- | --- | --- |
| Títulos de Experiencia y Proyectos | Blanco → blanco → lima | Hacia la derecha |
| Detalle de experiencia | `#141414` → `#0A0A0A` | Hacia abajo y a la derecha |
| Panel de contacto | `#252628` → `#191A1C` | Hacia abajo y a la derecha |
| Preview de dashboard | `#24382C` → `#17241D` → `#0E1813` | Hacia abajo y a la derecha |
| Preview de tienda | `#403626` → `#1C1913` | Hacia abajo y a la derecha |
| Preview de planificador | `#27343E` → `#111B23` | Hacia abajo y a la derecha |
| Preview de portafolio | `#222B16` → `#172010` → `#10150D` | Hacia la derecha |

Las miniaturas de tienda añaden beige `#B49A6B` al 35 % y `#D8C59F` al 45 %. Las tarjetas de proyectos llevan una capa desde negro al 85 %, pasando por negro al 10 %, hasta transparente, orientada hacia arriba para facilitar la lectura del título.

Los distintivos de tecnologías usan colores de Tailwind: `red-400` para Laravel, `cyan-400` para React, `sky-400` para Inertia.js, `teal-400` para MySQL, `violet-400` para PHP y `orange-400` para Git. Los indicadores inactivos de la línea de tiempo usan `slate-500`. La bandera de Perú usa rojo `#D91023` y blanco.

## Tipografía

- **Principal:** Geist, cargada con `next/font/google` y aplicada mediante `font-sans`.
- **Monoespaciada:** Geist Mono, aplicada mediante `font-mono` en los distintivos de tecnologías.
- **Pesos habituales:** regular (400), medium (500) y semibold (600).
- **Títulos:** espaciado entre letras ajustado (`tracking-tight`).
- **Párrafos:** interlineado amplio (`leading-relaxed`).
- **Antetítulos:** 12 px, mayúsculas y espaciado de `0.24em` en Experiencia y Contacto.

| Elemento | Móvil | Pantallas mayores |
| --- | --- | --- |
| Nombre principal | 36 px | 48 px desde `sm`; 60 px desde `lg` |
| Títulos de Experiencia y Proyectos | 36 px | 48 px desde `sm` |
| Título de contacto | 30 px | 36 px desde `sm` |
| Profesión | 20 px | 24 px desde `sm` |
| Nombre de empresa en el detalle | 20 px | 24 px desde `sm` |
| Texto de cuerpo | 14–16 px | Según el componente |
| Botones y navegación | 14 px | 14 px |
| Metadatos y etiquetas | 12 px | 12–14 px |

## Composición y espaciado

- El contenido principal y el footer comparten `max-w-4xl`: 896 px de ancho máximo, incluidos los 24 px de padding a cada lado.
- El orden de las secciones es Presentación, Experiencia, Proyectos y Contacto.
- La navegación se centra sobre el contenido con un margen superior de 24 px.
- La presentación usa padding vertical de 64 px en móvil, 112 px desde `md` y 128 px desde `lg`.
- Experiencia y Proyectos usan 32 px de padding superior y 96 px inferior; el inferior aumenta a 128 px desde `md`.
- Contacto usa 32 px de padding superior y 64 px inferior; el inferior aumenta a 96 px desde `md`.
- Las separaciones frecuentes entre controles son de 8–12 px; entre bloques, de 24–40 px.

### Adaptación a pantallas

Se usan los breakpoints predeterminados de Tailwind: `sm` 640 px, `md` 768 px, `lg` 1024 px y `xl` 1280 px.

| Componente | Comportamiento |
| --- | --- |
| Navegación | Botón de menú en móvil; listado de secciones desde `sm` |
| Presentación | Retrato arriba y texto centrado en móvil; dos columnas y texto a la izquierda desde `md` |
| Retrato | 240 × 240 px; 256 × 256 px desde `md`; 320 × 320 px desde `lg` |
| Experiencia | Detalle debajo del elemento seleccionado en móvil; línea de tiempo y panel lateral desde `lg` |
| Proyectos | Una columna en móvil; mosaico de seis columnas, filas de 148 px y separación de 4 px desde `sm` |
| Contacto | Una columna en móvil; texto y formulario en dos columnas desde `md` |
| Footer | Elementos apilados en móvil; distribución horizontal desde `sm` |

## Formas, bordes y sombras

| Elemento | Tratamiento |
| --- | --- |
| Navegación y botones | Forma de píldora (`rounded-full`) |
| Retrato, detalle de experiencia y panel de contacto | Radio de 24 px (`rounded-3xl`) |
| Selectores de experiencia y etiquetas de tecnologías | Radio de 16 px (`rounded-2xl`) |
| Campos de formulario | Radio de 12 px (`rounded-xl`) |
| Tarjetas de proyectos | Radio de 8 px (`rounded-lg`) |
| Bordes | Generalmente 1 px, blanco translúcido |
| Navegación | Sombra `0 8px 32px rgb(0 0 0 / 0.2)` |
| Retrato | Resplandor `0 0 48px rgb(189 251 31 / 0.1)` |
| Punto activo de experiencia | Resplandor `0 0 12px rgb(189 251 31 / 0.2)` |

## Componentes e interacción

### Botones

La acción principal de la presentación usa fondo lima y texto oscuro, con altura mínima de 48 px. La secundaria usa fondo `surface`, texto blanco y borde blanco al 15 %. Al pasar el cursor o recibir foco, la secundaria incorpora texto lima, borde lima al 50 % y fondo lima al 10 %.

Los botones de contacto tienen altura mínima de 44 px. «Copiar correo» usa fondo blanco y texto oscuro; las acciones secundarias usan blanco translúcido. Los controles deshabilitados de este bloque tienen opacidad del 40 %.

### Navegación

Barra de 64 px de alto con borde sutil y controles redondeados. El primer elemento aparece resaltado en lima con fondo lima al 10 %. Los elementos incorporan subrayado animado en hover y foco.

### Experiencia

La selección se expresa con borde lima al 65 %, fondo lima al 5 % y escala de `1.015`. El detalle combina empresa, rol, fechas, descripción, responsabilidades y tecnologías. El botón «Ver recorrido completo» alterna entre la línea de tiempo y la lista de todas las experiencias.

### Proyectos

Mosaico de tarjetas con tamaños grande, pequeño, ancho y alto. Cada tarjeta contiene una imagen o una ilustración de respaldo, una capa oscura inferior, un título y una acción. El recurso visual aumenta a escala `1.05` en hover o cuando un enlace interior recibe foco.

### Contacto

Panel con degradado gris, acciones para copiar el correo y descargar el CV, y formulario con etiquetas visibles. Los campos usan fondo oscuro translúcido, borde blanco al 10 % y borde blanco al 40 % al recibir foco. Los mensajes de estado aparecen bajo las acciones y el formulario.

### Iconografía

Iconos SVG, principalmente de contorno, con extremos y uniones redondeados. Los tamaños habituales son 18–20 px y el grosor de trazo es de 1.6–1.7. GitHub y algunas marcas usan siluetas rellenas. Los iconos heredan el color mediante `currentColor`.

## Movimiento y accesibilidad

- Transiciones habituales de color y transformación: 180 ms, normalmente con `ease-out`.
- Cambios de selección en experiencia: 200 ms.
- Zoom de imágenes y previews: 500 ms.
- Los componentes incorporan variantes `motion-reduce` para reducir o eliminar movimiento.
- Los controles usan foco visible, normalmente con contorno de 2 px y separación de 2–4 px; el formulario destaca el borde del campo.
- Los controles principales tienen áreas de interacción de al menos 44 px de alto.
- Se usan secciones con títulos asociados, etiquetas de formulario, nombres accesibles para controles de icono y `role="status"` para mensajes dinámicos.
- Los elementos decorativos se ocultan de las tecnologías de asistencia con `aria-hidden` o texto alternativo vacío.

Al ampliar la interfaz, comprobar el contraste de textos translúcidos sobre su fondo real y mantener el foco visible y la navegación por teclado.

## Criterios para nuevas pantallas y componentes

1. Reutilizar los tokens semánticos de color para fondos, superficies, texto y acentos.
2. Reservar el lima para jerarquía, acciones, selección y foco; conservar los colores de apoyo en miniaturas y distintivos.
3. Mantener Geist, los radios y la escala de espaciado existentes.
4. Diseñar primero la disposición móvil y ampliar las columnas cuando el contenido disponga de espacio.
5. Acompañar los estados visuales de mensajes y atributos accesibles cuando corresponda.
6. Usar animaciones breves y respetar la preferencia de movimiento reducido.

## Referencias de implementación

- [Tokens de color](src/app/globals.css)
- [Fuentes, idioma y tema base](src/app/layout.tsx)
- [Estructura principal](src/app/page.tsx)
- [Navegación](src/components/navbar.tsx)
- [Presentación](src/components/presentation.tsx)
- [Experiencia](src/components/experience-timeline.tsx)
- [Proyectos](src/components/project-gallery.tsx)
- [Contacto](src/components/contact-cta.tsx)
- [Footer](src/components/footer.tsx)

Esta guía documenta el tema oscuro actual. Los botones de menú, cambio de tema, idioma y las acciones de la presentación tienen estilos definidos, pero sus comportamientos aún no están conectados en sus componentes.
