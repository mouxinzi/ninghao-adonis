'use strict'

class PostController {
  index({ view }){
    const pageTitle ='List of posts'
    const user ={
      name: 'zk'
    }
    const entities = [
      { id: 1, title: 'Lemon', content: 'Lemons' },
      { id: 2, title: 'Watermelon', content: 'Watermelons' },
      { id: 3, title: 'Carrot', content: 'Carrots' }
    ]
    return view.render('posts.index', { pageTitle, user, entities})
  }
}

module.exports = PostController
