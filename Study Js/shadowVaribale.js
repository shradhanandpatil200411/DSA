// Shadowing the variable using this concept we can change the value of the function in different scope we have Global scope , function scope and Block scope
// What is Hosting in js ? :- when we create any variable or function in js file they are hosted in different scope when memory creation phase var are function scope and let and const are block scope


function fun() {
    let a = 10; // in case of var they declare Global scope  

    console.log(a)
    
    if (true) {
       let a = 20; // when its change the value to 20 so its change goa
        console.log(a);
    }
    
    console.log(a);

}

fun();