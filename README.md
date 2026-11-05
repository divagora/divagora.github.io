# Sitio web personal de Dina Gómez Rave

Sitio estático (HTML + CSS + JavaScript). No necesita Node, Python, Hugo ni base de datos. Las fuentes van incluidas, así que funciona incluso sin internet.

## 1. Abrirlo en Visual Studio Code

1. Descomprime `dina-website.zip`.
2. En VS Code: **File → Open Folder…** y elige la carpeta `dina-website`.
3. Instala la extensión **Live Server** (de Ritwick Dey) en el panel de Extensiones (Ctrl+Shift+X).
4. Clic derecho sobre `index.html` → **Open with Live Server**. Se abre en el navegador y se actualiza solo cada vez que guardas (Ctrl+S).

Sin Live Server también funciona: doble clic en `index.html` desde el explorador de archivos.

## 2. Qué archivo editar

Casi todo se cambia en **`content.js`**:

| Sección en `content.js` | Qué controla |
|---|---|
| `profile` | Nombre, cargo, biografía, intereses, foto, enlaces (Scholar, ORCID, LinkedIn…), email público, CV |
| `education` | Lista de estudios junto a la biografía |
| `research` | Texto introductorio, los 4 temas y el proyecto actual |
| `publications` | Publicaciones con su imagen (añade las nuevas arriba) |
| `collaborations` | Papers en coautoría, en una lista compacta bajo tus publicaciones |
| `wanderings` | El mapa final: puntos y lo que guardas en cada uno (fotos, textos, audios) |
| `personal` | Bloque pequeño "Away from the desk": aves y libros |

Reglas básicas: deja las comillas `"..."`, pon una coma entre elementos, y si dejas un campo como `""` simplemente no aparece.

## 3. Tu foto

1. Copia tu retrato a la carpeta `photos` (por ejemplo `photos/portrait.jpg`). Mejor vertical, JPG, menos de 1 MB.
2. En `content.js` cambia `photo: "assets/portrait-placeholder.svg"` por `photo: "photos/portrait.jpg"`.

## 4. Imágenes de los papers

Cada publicación tiene `image` e `imageAlt`. Las de `assets/pubs/` son ilustraciones originales hechas para tu sitio. Si prefieres usar una figura tuya o el graphical abstract, ponla en `photos/` y cambia la ruta, por ejemplo `image: "photos/santona-mapa.jpg"`. Proporción ideal: 4:3.

## 5. Wanderings: el mapa

La sección final está plegada: al principio solo se ve el título. Al abrirla aparece un mapa del mundo con puntos; cada punto abre una ventana con lo que guardaste ahí.

Todo se edita en `wanderings` dentro de `content.js`:

- Cada `stop` es un punto: `label` (nombre), `lat` y `lon` (coordenadas; en Google Maps, clic derecho sobre el sitio y clic en los números para copiarlas), y `country` (código de 3 letras para colorear el país, por ejemplo `"COL"`).
- Dentro de cada punto, `notes` guarda lo que publicas: `date` (`"AAAA-MM-DD"`), `title`, `photo`, `photoAlt`, `audio` y `text`.
- Para añadir algo nuevo: copia una nota dentro de `notes` y cambia los datos. Para un lugar nuevo, copia un `stop` entero.
- Las fotos van en `photos/` y los audios en una carpeta `audio/` (MP3).
- Un punto sin notas se ve como un círculo vacío hasta que le añadas una.

El dibujo del mapa está en `map-data.js` (no hace falta tocarlo). `place.html` ya no se usa y se puede borrar.

Aves y libros siguen en `personal`, dentro de la misma sección.

## 6. Colores y tipografía

En `style.css`, al inicio (`:root`) está toda la paleta: fondo, tinta y los pasteles (powder, lavender, sage, peach, butter). Cambias un valor y se actualiza en todo el sitio.

Tipografías: Newsreader (títulos y textos largos) y Hanken Grotesk (texto general), ambas con licencia libre OFL, guardadas en `assets/fonts`.

## 7. Publicarlo gratis con GitHub Pages

1. Crea un repositorio público en GitHub (por ejemplo `dina-website`, o `TU-USUARIO.github.io` si quieres la dirección corta).
2. **Add file → Upload files** y arrastra **el contenido** de la carpeta (no la carpeta en sí). `index.html` debe quedar en la raíz. Commit.
3. **Settings → Pages → Deploy from a branch →** rama `main`, carpeta `/ (root)` → Save.
4. En un par de minutos estará en `https://TU-USUARIO.github.io/dina-website/`.

Guía oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Antes de publicar

- Todo lo que subas a un repositorio público lo puede ver cualquiera.
- **No subas tu CV completo** tal cual: tiene dirección, teléfono y fecha de nacimiento. Haz una versión pública sin esos datos y ponla en `files/`.
- Usa un email de trabajo o uno público en `publicEmail`.
- Todo lo que esté escrito en `content.js` es público aunque no se vea en la página. Si algo no lo quieres online, bórralo del archivo, no solo lo ocultes.

## Archivos

```
dina-website/
├── index.html        Página principal
├── content.js        ← EDITA AQUÍ tus textos, publicaciones, fotos y el mapa
├── map-data.js       Dibujo del mapa del mundo (no se toca)
├── style.css         ← colores y diseño
├── site.js           Lógica (normalmente no se toca)
├── assets/           Fuentes, icono, ilustraciones de los papers (pubs/)
├── photos/           Tus fotos
├── files/            Tu CV público (opcional)
└── .nojekyll         Para que GitHub Pages publique tal cual
```
