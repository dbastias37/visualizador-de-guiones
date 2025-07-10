# Script Visualizer – Static

## Descripción
Pequeña web estática que permite:
- Subir un archivo `.txt` + metadatos obligatorios.
- Mostrar el guion con tipografía Code Pro.
- Volver al formulario sólo ingresando contraseña.

## Deploy en Render
1. Crea un nuevo *Static Site* en Render.io.
2. Apunta al repositorio en GitHub (branch `main`).
3. En Build Command deja en blanco (no hay build).
4. En Publish Directory pon `/` (raíz).
5. Sube las fuentes de la carpeta `fonts/`.
6. Guarda y publica.

## Fonts
Debes añadir en `fonts/` tus archivos:
- `CodePro-Light.woff2`
- `CodePro-Regular.woff2`
- `CodePro-Bold.woff2`

## Contraseña
Está en `js/app.js` (variable `pwd`). Cámbiala antes de producción.
