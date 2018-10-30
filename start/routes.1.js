// 'use strict'

// /*
// |--------------------------------------------------------------------------
// | Routes
// |--------------------------------------------------------------------------
// |
// | Http routes are entry points to your web application. You can create
// | routes for different URL's and bind Controller actions to them.
// |
// | A complete guide on routing is available here.
// | http://adonisjs.com/docs/4.1/routing
// |
// */

// /** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
// const Route = use('Route')

// Route.on('/').render('welcome')

// //Route.get('/posts', ()=>'lists of posts.')
// Route.get('/posts', 'PostController.index')

// //Route.post('/posts',()=>'Posts has been created.')
// Route.post('/posts', 'PostController.store')

// Route.get('/posts/create', 'PostController.create')

// // Route.get('/posts/:id', ({request,params})=>{
// //   return `You are watching posts ${params.id}.${request.input('id')}`
// // })
// Route.get('/posts/:id', 'PostController.show')

// // Route.put('/posts/:id', ({ params }) => {
// //   return `Posts ${params.id} has been updated.`
// // })
// // Route.patch('/posts/:id', ({ params }) => {
// //   return `Posts ${params.id} has been updated.`
// // })
// Route.put('/posts/:id','PostController.update')
// Route.patch('/posts/:id', 'PostController.update')
// // Route.delete('/posts/:id',({params})=>{
// //   return `Post ${params.id} has been removed.`
// // })
// Route.delete('/posts/:id', 'PostController.destory')

// Route.get('/posts/:id/edit', 'PostController.edit')
