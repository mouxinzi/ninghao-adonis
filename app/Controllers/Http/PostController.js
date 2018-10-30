'use strict'

class PostController {
  index (){
    return `lists of posts.`
  }

  store (){
    return 'Posts has been created.'
  }

  show ({ params }){
    return `You are watching posts ${params.id}.`
  }

  update ({ params }){
   return `Posts ${params.id} has been updated.`
  }

  destory({ params }) {
    return `Posts ${params.id} has been removed.`
  }

  create (){
    return `Create post.`
  }

  edit ({ params }){
    return `Editing post ${params.id}.`
  }
}

module.exports = PostController
