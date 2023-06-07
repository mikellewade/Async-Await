const axios = require('axios');

// https://sydney-task-list-api.onrender.com

// let taskId; 

// axios.post('https://sydney-task-list-api.onrender.com/tasks', {
//   title: "JS Review Task 2",
//   description: "Testing Some Thangs... again :)"
// }).then(resp => {
//   taskId = resp.data.task.id
// }).catch(error => {
//   console.log(error.response)
// })

// axios.patch(`https://sydney-task-list-api.onrender.com/tasks/${taskId}/mark_complete`).then( resp => {
//       console.log(resp.data.task)
//     })

// Async/Await

const getRandomDogImage = async () => {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random')
    return response.data.message 

  } catch (error) {
    console.log(error.response.data)
  }
}

const logRandomUrl = async () => {
  const randomUrl = await getRandomDogImage()
  console.log(randomUrl)
}

logRandomUrl()

console.log("I should go last!!!")