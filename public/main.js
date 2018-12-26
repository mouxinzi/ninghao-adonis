(function(){
  'use strict'
  const deleteBtn = $('#delete')

  deleteBtn.click(()=>{
    const id = deleteBtn.data('id')
    const _csrf = deleteBtn.data('csrf')
    console.log(_csrf)  
    $.ajax({
      url: '/posts/${ id }',
      method: 'DELETE',
      data:{
        _csrf:'9jFTfU5B-41rOy2PNAhOhIy1jXwk37EmMUr8'
      },
      success: (response) => {
        console.log(response)
      }
    })
  })
}())