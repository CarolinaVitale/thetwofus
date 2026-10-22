# The Two of Us

Brand website and product catalog built with React and JavaScript. This is a visual demo: no backend, checkout, or message delivery is connected.

## Local development

```sh
npm install
npm start
```

Create a production build with `npm run build`.

## Structure

- `src/pages/`: HomePage (`/`), CatalogPage (`/catalog`), AboutPage (`/about`), ContactPage (`/contact`).
- `src/components/`: shared layout, navigation, footer, homepage sections, product cards, and product dialog.
- `src/data/products.js`: product names, descriptions, image identifiers, and badges.
- `src/hooks/usePageEffects.js`: page titles, scroll behavior, and reveal animations.
- `src/App.js`: React Router route definitions.
- `src/App.css`: responsive brand styles.
- `public/assets/`: images and original logo files used by the site.
- `src/assets/`: original brand source assets.

The home page composes reusable sections; catalog, about, and contact also have dedicated pages. Product selection belongs to ProductCollection, dialog behavior to ProductDialog, and the contact demo state to ContactSection.

Production hosting must serve `index.html` for application routes such as `/catalog` so direct links and refreshes work with BrowserRouter.
