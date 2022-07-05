/**
 * @param {string} s
 * @return {boolean}
 */
 const isValid = function isValid(s) {
    var bracketStack = [];
    
    for (let i = 0; i < s.length; i++) {
        const topStackElement = bracketStack[bracketStack.length - 1];
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            bracketStack.push(s[i]);
        } else {
            if (s[i] === ')' && topStackElement === '(' && bracketStack.length !== 0){   
                bracketStack.pop();  
            }
            if (s[i] === '}' && topStackElement === '{' && bracketStack.length !== 0){   
                bracketStack.pop();  
                }
            if (s[i] === ']' && topStackElement === '[' && bracketStack.length !== 0){   
                bracketStack.pop();  
            }
        }
        
    }
    if (bracketStack.length > 0)
        return false;
    
    else return true;
    
};

module.exports = isValid;