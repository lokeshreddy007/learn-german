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
        text: 'Advanced',
        children:[
          {text: 'Nouns',link:'/nouns/'},
        ]
      }
    ]
  }