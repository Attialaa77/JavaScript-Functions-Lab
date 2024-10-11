function greet(name = 'World') {
    return `Hello, {Alaa}!`;
}

console.log(greet()); 
console.log(greet('Alaa')); 

function limitedCounter(limit) {
    let count = 0;
    return function() {
        if (count < limit) {
            count++;
            console.log(`Count: ${count}`);
        } else {
            console.log("Limit reached!");
        }
    }
}

const counter = limitedCounter(5);
counter(); 
counter(); 
counter(); 
counter(); 
counter(); 
counter(); 

