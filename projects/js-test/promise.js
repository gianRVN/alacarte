// function process (cb) {
//   setTimeout(() => {
//     cb('hello')
//   }, 400);
// }


// process(function(result){
//   console.log("***", result);
// });


function process () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello')
    }, 400);
  });
  
}

process()
  .then(result => {
    console.log(result)
  })
  .catch(() => {})