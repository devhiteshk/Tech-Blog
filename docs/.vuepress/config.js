module.exports = {
    title: '🚀Derive-Science',
    description: 'Rock the World',
    base: "/Tech-Blog/",
    head: [
      ['link', { rel: 'stylesheet', href: "<link rel='preconnect' href='https://fonts.googleapis.com/css2?family=Gugi&display=swap'>" }],
    ],
    themeConfig: {
        lastUpdated: 'Last Updated', // string | boolean
      },
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Tech-Blog', link: '/Tech-Blog/' },
//           { text: 'Contribute', link: '/Contribute/' },
          { text: '🚀', link: 'https://Derive-science.com' }
        ],
        sidebar: [
            '/',
            '/Tech-Blog/',
            '/C++/',
            '/Python/',
            '/Data-Structures/',
            '/Algorithms/'
        ]
      }
  }
