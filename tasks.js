
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */

function onDataReceived(text) {

  if (text === 'list\n'){
    list()

  }else if (text === 'quit\n') {
    quit();

  }else if(text === 'exit\n'){
    quit();

  } 
  else if(text.startsWith('remove')){
    remove(text)

  }else if(text.startsWith('edit')){
    edit(text)
  }
  else {
    add(text)
  }


}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * This function for adding a task
 * 
 * 
 */
const tasks = [];
function add (text) {

  if(text.length > 1){
  tasks.push(text.substring(4, text.length-1))
  }else{
    console.log('cannot add empty task')
  }
  return tasks;
  }


/**
 * This function for listing all stored tasks
 * 
 * 
 */

function list () {

  tasks.forEach((task, index) => {
    console.log((index+1) + ' - [ ] ' + task)
  });
  
}

/**
 * This function for remove task from stored tasks
 * 
 * 
 */
function remove(index){
  const res = index.slice(7)
  if(res == -1){
    tasks.pop()
    if(tasks.length <=0){
      console.log('no tasks left, you removed all the tasks')
      }
  }else{
    tasks.splice(res -1,1)

  if(tasks.length <=0){
    console.log('no tasks left, you removed all the tasks')
    }

  }
  
  return tasks
}



/**
 * This function for editing a task from stored tasks
 * 
 * 
 */
function edit(index){

  const item = index.slice(5)
  const result = index.slice(7)
  tasks.splice(item -1,1)
  tasks.unshift(result)

return tasks
}



/**
 * Says hello
 * This function for printing any string with "!", and if there any an empty string it will return a default value "hello!"
 * @param  {string}
 * @returns {void}
 */
function hello(text){

  if(text.length > 1){
    console.log(text.trim()+'!')
  }
  else{
    console.log("hello!")
    help()  
  }
}



/**
 * This function is for listing the valid command for user to use it if enter invalid one
 * 
 * @returns {void}
 */

function help(){
  console.log('--enter "quit" or "exit" to stop the program\n');
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Mohammad Harkous")



