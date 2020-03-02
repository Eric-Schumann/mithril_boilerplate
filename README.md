A boilerplate for Mithril.js Single Page Applications.

This project template assumes you are using the parcel-bundler package installed globally from NPM.  

```
.
|---src
|   |---models
|   |---pages
|   |   |---about
|   |   |   |---About.js
|   |   |
|   |   |---home
|   |       |---Home.js
|   |
|   |---shared
|   |   |---Navigation.js
|   |   |---Layout.js
|   |
|   |---index.js
|
|---index.html
|---package.json
```

Starting in the src folder you will find index.js.  It is the root of the application.  Here you will define your routes to each page and
mount your application to the div#app element in the index.html file.  

In src/models you will store your data models.  Keeping your data separate from your pages/views will allow you to reuse your data more
easily between pages/views.

In src/pages there will be a new folder for each page in the application.  Each page folder has a root JavaScript file named after the
page.  Example, src/pages/home contains Home.js.  In src/pages/home you will also keep all Home related components.  

In src/shared you will keep all components that are shared between pages.  Example, src/shared contains Layout.js and Navigation.js.  
These two components will be rendered on each page.  In fact, Layout.js in the parent component of each page.  Layout.js is also
responsible for rendering Navigation.js.

To begin, clone this repo into your project folder.  Then from your project folder directory, run 'npm install'.  To run the development server, use 'npm run start'.
