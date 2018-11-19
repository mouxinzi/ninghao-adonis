'use strict'

class HelloController {
  render({request , view}){
    const name = request.input('name')
    // return `ello ~ ${request.input('name')}`
    return view.render('hello',{ name })
  }
}

module.exports = HelloController
