# GenService - Diesel Generator Service Website

Modern React website for GenService - professional diesel generator service in Georgia.

## Features

- 🌍 Multilingual support (Georgian, English, Russian, Turkish)
- 🔗 Language URL routing (/ka, /en, /ru, /tr)
- 🌙 Dark/Light theme toggle
- 📱 Fully responsive design
- ⚡ Fast Vite build

## Language Routes

- `/ka` - Georgian (default)
- `/en` - English
- `/ru` - Russian
- `/tr` - Turkish

## Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

### Netlify
The `_redirects` file is included for SPA routing.

### Vercel
The `vercel.json` file is included for SPA routing.

### Apache
Add to .htaccess:
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Contact Info

- **Phone:** +995 511 720 363
- **WhatsApp:** +7 901 333 3035

## Tech Stack

- React 19
- Vite 7
- React Router 7
- i18next (translations)
- Lucide React (icons)
