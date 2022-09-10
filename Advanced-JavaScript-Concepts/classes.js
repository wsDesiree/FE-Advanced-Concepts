// A class is a blueprint for objects
class User{
// properties -> data
username;
// constructor -> that is executed when a instance gets created
constructor(newUsername){
    this.username = newUsername;
    console.log("instance as created!")
}
// method -> define logic to manipulate data
    printMyName(){ 
        console.log(`My name is ${this.username}`)

    }
}

let user = new User("John123");
console.log(user);
user.printMyName();

let userTwo = new User("Amy123");
console.log(userTwo);
userTwo.printMyName();


// let userExample = {
//     username: '';
// }