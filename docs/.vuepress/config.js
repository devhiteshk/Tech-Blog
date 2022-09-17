var SList = require("./SList");

module.exports = {
    title: 'Derive-Science',
    description: 'Rock the World',
    base: "/Tech-Blog/",
    head: [
      ['link', { rel: 'stylesheet', href: "<link rel='preconnect' href='https://fonts.googleapis.com/css2?family=Gugi&display=swap'>" }],
           ['link', { rel: 'icon', href: '/startup.svg' }],
    ], themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Contribute', link: '/Contribute/' },
          { text: '🚀', link: 'https://devhiteshk.github.io' }
        ],
        sidebar:[ "/",
          {
            title: 'Contribute',
            collapsable: true,
            children: SList.ContList
          },
          {
            title: 'C++',
            collapsable: true,
            children: SList.CppList
          },
          {
            title: 'Python',
            collapsable: true,
            children: SList.PyList
          },{
            title: 'Data-Structures',
            collapsable: true,
            children: SList.DSList
          },{
            title: 'Algorithms',
            collapsable: true,
            children: SList.AlgoList
          }
        ]
    }
  }
