'use strict'
const Task = use('App/Models/Task')

class TaskController {
  /*
    Index tasks
  */
  async index({view}){
    const  tasks = await Task.all()

    return view.render('tasks.index',{
      tasks: tasks.toJSON()
    })
  }

  /*
    Update task
  */
  async add({view}){
    return view.render('tasks.add')
  }

  async store({request, response, view}){
    const task = new Task()
    task.title = request.input('title')
    task.description = request.input('description')
    await task.save()

    return response.redirect('/tasks')
  }

  /*
    Details task
  */
  async details({params,view}){
    const task = await Task.find(params.id)

    return view.render('tasks.details',{
      task
    })
  }

  /*
    Edit task
  */
  async edit({params, view}){
    const task = await Task.find(params.id)
    return view.render('tasks.edit',{
      task
    })
  }

  async update({params, request, response}){
    const task = await Task.find(params.id)
    task.title = request.input('title')
    task.description = request.input('description')

    await task.save()

    return response.redirect('/tasks')
  }

  /*
    Destroy task
  */

  async destroy({params, response}){
    const task = await Task.find(params.id)
    await task.delete()

    return response.redirect('/tasks')
  }
}

module.exports = TaskController
