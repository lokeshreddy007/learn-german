module.exports = {
    title: 'Learn German',
    description: 'A Quick Refernce while learning German',
    themeConfig : {
      nav:[
        {text:'Home',link:'/'},
        {text:'Resource',link:'/resource/'},
        {text:'Contact',link:'/contact'}
      ],
      sidebar: {
        '/': getMainSidebar(),
      }
    }
  }

  function getMainSidebar() {
    return [
      {
        text: 'Introduction',
        children:[
          {text: 'Home Page',link:'/'},
          {text: 'Basic',link:'/basic/'},
          {text: 'Verbs',link:'/verbs/'},
        ]
      },
      {
        text: 'German A1',
        children:[
          {text: 'Essential 1',link:'/a1/essential1/'},
          {text: 'Essential 2',link:'/a1/essential2/'},
        ]
      }
    ]
  }