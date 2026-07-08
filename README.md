# Catholic Veritas

Catholic Veritas is a long-term Catholic apologetics and theological knowledge
base built as a Docusaurus site for free deployment on GitHub Pages.

## Project Structure

- Root Markdown files: governance and planning documents that define the
  project's permanent standards and architecture.
- `knowledge-base/`: the public-facing content layer for future articles,
  section overviews, and canonical topic hubs.
- `src/`: Docusaurus homepage and theme customization.
- `static/`: static assets such as the favicon and social card image.

## Local Development

Install dependencies:

```bash
npm install
```

Start the site locally:

```bash
npm start
```

Build the production site:

```bash
npm run build
```

Serve the production build locally:

```bash
npm run serve
```

## GitHub Pages Notes

Before publishing, update these values in `docusaurus.config.ts`:

- `organizationName`
- `projectName`
- the GitHub repository URL in the navbar/footer

If you use a custom domain later, update `url` and `baseUrl` accordingly.
