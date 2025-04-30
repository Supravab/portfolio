since i will be creating a blog page in the project,
writing what i learned, what i did and what i coded today
will be helpful to create a blogging habit along with creating a pre-recorded blog material that i can test with in the page,
so temporarily, this will be the blog site, where i type what i learned where and why i learned that, how it is helping me in my learning and growing journey and how i can improve....

This is a minified form of direct and to-point journaling

---

Day One, Javascript...
I learned about closures, how i can encapsulate functions inside a function scope and use those functions without disturbing the state of the closure that is maintained by the inner function.
i learned how i can create a functiona and return an object with various methods, these methods can be used with the object specifications to do the job of the inner function with the state management that is private within the closure

//experimenting with javascript, learning about closures,
//closures are basically used for encapsulation, creating encapsulated functions so that they cannot be accessed out of their function

// function closureContainer() {
// let score = 0;
// function addPoints(points){
// score+=points;
// return console.log(`points +${points}`);
// }
// function diffPoints(points){
// score+=points;
// return console.log(`points +${points}`);
// }
// function getScore(){
// return score;
// }
// return {addPoints, diffPoints, getScore};
// }
// const game = closureContainer();
// closureContainer.addPoints(5);
// closureContainer.diffPoints(4);
// closureContainer.getScore();

//what this above code does is that, it will encapsulate the whole functions.
// it will make a score counter of 0 and we can add and subtract from that counter
// then we can show the score, but we cannot do that outside of the closure, so it is private
// then to access something inside the function, we need to call that function
// we call that function that returns an object into a const object
// then from the object of the closure we find the few methods in that objects, methods are functions inside the object
// this methogs are used with reference to the object to basically call the inner object.
//each time the methods are called, the state change is recorded and the final score can be checked for that...

another major thing to know is that, in a function, when the function is called it is in the call memory, and the variables used in that function either go in the heap memory or the temporary function memory,,

if the function is pure non-closure independent function within which the variables are, when the function is called, the variables are within the temporary memory which is wiped when the function is wiped,,,,

when the function is non-pure closure and dependent to its enviroment, the variables of the closure with which the function inside depends are in heap memory and can be there for a very while, even after the function is already called and already returns the object,,,
so thats why in a counter function, each time a function is called, the counter can be upgraded, because the closure remembers the depending variable in the heap memory and it can be used for a while, even after the function is used, and this variable is later managed and cleared by the garbage management of the engine....

## extra note to understand::: the score above is declared in the outer closure function and the function is returning objects, even after the function is called and it is assigned to an variable. the score is stored in heap memory, so after the function, the methods can be called and the variable of score keeps updating

-------------------------------------------------------------
