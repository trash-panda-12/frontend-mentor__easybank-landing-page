

# Tailwind GulpJS Template

  This is a template made to allow people to use a majority of the features of TailwindCSS like the customization & plugin features without having to mess about with the precompilers it needs to function properly like PostCSS, Webpack and the sort and use them in creating web pages or designs.

  It pretty much acts the same or similar to the [TailwindCSS playground](https://play.tailwindcss.com/), but I've made the template in a way that the GULP file compiles your SCSS & Tailwind config into CSS, cleans it up and renames it into 'styles.css'. It also features browsersync and watches for changes in the HTML, SCSS, and Tailwind.config and will recompile the styling when they are detected

  ## TLDR to run it
  -  Runs on [GULP JS](https://gulpjs.com/) so make sure you have that installed
  -  Install packages with NPM or yarn
  -  Run `gulp` on your console


  ##  Quick Rundown of the features
  1. Uses [GULP + Browsersync](https://browsersync.io/docs/gulp) to create a local server that refreshes whenever a change is detected

  2. Grabs your **master.scss & a.tailwind.scss** files and concatenates them into a single **styles.css** file on your root directory

  3. Uses [GULP JS](https://gulpjs.com/) to watches for changes in HTML, SCSS and tailwind.config and when detected, recompiles your styles or HTML accordingly

  ## Making it Work
  1. Make sure you have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/get-npm)/[yarn](https://yarnpkg.com/getting-started/install) installed. I have used yarn but if you use NPM, delete the yarn.lock file and run `npm install`. This may take a while on your first time.

  2. Install the [GULP CLI](https://gulpjs.com/docs/en/getting-started/quick-start) so you can run gulp on your console

  3. Once that's all set up, double check that you have a *tailwind.config* file, *master.scss* file, *a.tailwind.csss* file, and the *index.html* file. There are required for it to actually work

  4. Type `gulp` in your console to create a local server on `localhost:3000` and have GULP watch for file changes.

  5. You sould be all set. Just don't touch the a.tailwind.scss file. Ideal way is to use SCSS partials and import them into your master scss file.

  ## Bonus bits
  - To manually do a style recompile, type `gulp styles` in the console.
  - Didn't really design this to work with JS file change detection. Might do in the future
  - Uses the MIT license so feel free to fork it or do pull requests with improvements.
  - Can this be optimized? Yes. It definitely can. If you have the time, feel free to help out!

  ##### Reason for making this?
  This came from me not wanting to make a full-blown app for some [FrontendMentor](https://www.frontendmentor.io/solutions) challenges just to use TailwindCSS with my plugins & personal customizations. Liked how it turned out so I figured it could be a template for others who want to give TailwindCSS a try