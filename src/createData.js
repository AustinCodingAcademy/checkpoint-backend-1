exports.task = function(task){
    return fetch("/tasks", {
        body: JSON.stringify(task),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
      })
      .then(response => response.json()) 
}
exports.order = function(order){
    return fetch("/orders", {
        body: JSON.stringify(order),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
      })
      .then(response => response.json()) 
}
exports.message = function(message){
  return fetch("/messages", {
      body: JSON.stringify(message),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST'
    })
    .then(response => response.json()) 
}