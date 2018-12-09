'use strict'
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('tasks.index')

/*
  Task Controller
*/
//Index route
Route.get('tasks', 'TaskController.index')

//Add route
Route.get('tasks/add', 'TaskController.add')
Route.post('tasks','TaskController.store')

//Details route
Route.get('tasks/:id','TaskController.details')

//Edit route
Route.get('tasks/edit/:id','TaskController.edit')
Route.put('tasks/:id','TaskController.update')

//Delete route
Route.delete('tasks/:id','TaskController.destroy')
