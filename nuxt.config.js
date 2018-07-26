module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [   
      { rel: 'icon', type: '/image/x-icon', href: '/favicon.ico' },
       { rel: 'stylesheet', href: '/css/stack-interface.css' },      
       { rel: 'stylesheet', href: '/css/socicon.css' },
       { rel: 'stylesheet', href: '/css/bootstrap.css' },
       { rel: 'stylesheet', href: '/css/theme.css' }, 
       { rel: 'stylesheet', href: '/css/custom.css' },                         
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }       
    ],
    script: [ 
      // { src: 'js/jquery-3.1.1.min.js' },
      // { src: 'https://unpkg.com/vue-typer/dist/vue-typer.min.js' },
      // { src: 'js/isotope.min.js'},
      // { src: 'js/typed.min.js'},         
      // { src: 'js/scripts.js'} 
    ]  
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  
  
  // modules: [
  //   'vue-typer',

  //   // Or if you have custom bootstrap CSS...
  //   // ['bootstrap-vue/nuxt', { css: false }],
  // ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

