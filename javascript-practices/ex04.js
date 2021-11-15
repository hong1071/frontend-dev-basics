/**
 * 
 *  4. efault parameter
 * 
 */

const print = function(strs, end='\n'){
    console.log(strs.join(end));
}

print(['always', 'with', 'me']);
print(['always', 'with', 'me'], ' ');

const power = function(x){
    return x * x;
}

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(n){
    process.stdout.write('${n}:${power(n)}');
})