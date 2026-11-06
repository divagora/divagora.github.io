# Sitio web de Dina Vanessa Gómez Rave

Sitio estático (HTML + CSS + JavaScript), publicado con GitHub Pages en https://divagora.github.io

## Qué archivo editar

Casi todo se cambia en **`content.js`**: perfil, formación, investigación, publicaciones, colaboraciones, nota personal y los textos del menú (`labels`).

## Dos idiomas (EN / ES)

- Arriba a la derecha hay un selector **EN | ES**. La página se traduce al momento y el navegador recuerda la elección.
- En `content.js`, un texto se escribe una sola vez (`venue: "Coastal Engineering"`) o en los dos idiomas: `role: { en: "Research Associate", es: "Investigadora asociada" }`. Si falta el español, se muestra el inglés.
- Los títulos de los papers se dejan en su idioma original.
- Idioma por defecto: el del navegador del visitante.
- Enlace directo a un idioma: `https://divagora.github.io/?lang=es` o `?lang=en`.

## Archivos

```
├── index.html    Estructura de la página (normalmente no se toca)
├── content.js    ← EDITA AQUÍ los textos, en inglés y español
├── style.css     Colores y diseño
├── site.js       Lógica (normalmente no se toca)
├── assets/       Fuentes, icono e ilustraciones de los papers
├── photos/       Tus fotos
├── files/        CV público (opcional)
└── .nojekyll     Para que GitHub Pages publique tal cual
```
