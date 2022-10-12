# CSS Lab With Vite

Visit [Vite](https://vitejs.dev/) home page.

## :balloon: Overview

Repo for learning and experimenting with CSS.

Current Projects in this repo

1. Legacy - Running workflow with webpack. Migrated project to **Vite**
2. Template -> setup a **multi-pages** dev template (copy and rename the folder, then `cd <project-name>` and run `pnpm install`). Supports Tailwind and CSS.
3. CSS-GRID
   Everything about CSS grids.

## :anger: Requirement

- CSS
- HTML

## :scroll: QuickStart

1. Clone this repo or download the latest release. Rename it to whichever project name you want.
2. `cd <project name>`
3. Run `npm install`
4. **YOU ARE READY TO GO**

## :volcano: Modes

- `npm start` - start development mode with dev-server
- `npm run smart:start` - start development with dev-server and dashboard enabled on your console.
- `npm run dev` - start development mode without dev-server
- `npm run build` - start production mode

## :orange_book: Folder Structure (Per project)

    - Each project has a similar structure

    ├── Public/                          # Distribution files
    ├── src/                             # Source files
    │   ├── assets/                      # Assets directory
    │   │   ├── images/                  # Image directory
    │   │   └── fonts/                   # Fonts directory
    │   ├── styles/                      # SCSS files
    |   |   └── dirs/                    # SCSS directories (Follows 7-1 architecture pattern)
    │   │
    │   ├── pages/                       # Multi-pages support - index.html becomes the entry file -> mainly listing links or just a homepage
    │   │   └── dirs/                    # Different pages i.e. template
    │   │         ├── styles/            # Page stylesheets (SCSS) folder i.e. template.scss
    │   │         ├── js/                # Page Javascript i.e. template.ts
    │   │         └── page.html          # Page entry i.e. template.html
    │   │
    │   ├── scrips/                      # JS/typescript files
    │   │   └── fouc-fix.ts
    │   │
    │   └──  main.js                         # Load SCSS and JS
    │
    ├── index.html                       # The default template for the website
    ├── .gitignore                       # Git ignored files
    ├── .prettierrc                      # Prettier settings
    ├── index.html                       # project vite entry file (multi-pages or not)
    ├── postcss.config.cjs               # Post CSS configuration file. (Adds autoprefixing and tailwind support)
    ├── tailwind.config.cjs              # Optional -> tailwind config file
    ├── tsconfig.ts                      # Optional -> typescript config file
    ├── README.md                        # You are reading this
    └── vite.config.js                   # Webpack entry config file

## :scroll: QuickStart

1. Clone this repo or download the latest release.
2. `cd <project-folder>`
3. `pnpm install`
4. `pnpm start:dev`
