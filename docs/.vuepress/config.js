module.exports = {
   title: "WikiToLearn Docs",
   description: "Static-generated documentation website for development of WikiToLearn",

   themeConfig: {
      nav: [
        { text: 'Documentation', link: '/' },
        { text: 'Coding School', link: '/coding-school/' }
      ],
      sidebar: {
         "/coding-school/": [
            {
               title: "WikiToLearn Coding School",
               collapsable: false,
               children: []
            }
         ],
         "/": [
            {
               title: "Documentation",
               collapsable: false,
               children: [
                  "development" 
               ]
            }
         ]         
      },
      sidebarDepth: 1,
      displayAllHeaders: true
   },
   
   plugins: [
      [
         "vuepress-plugin-clean-urls",
         {
            normalSuffix: '',
            indexSuffix: '/',
         }
      ]
   ]
}