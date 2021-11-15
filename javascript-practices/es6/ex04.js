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