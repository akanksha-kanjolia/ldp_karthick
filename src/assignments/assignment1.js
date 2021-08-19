var w = 2;
var e = 3;
    
function add(a, b) {
    return a = a+b;
}
function subtract(a, b) {
    return a-b;
}

function handle_data(func, x, y) {
    return func(x, y);
}

const r = handle_data(add, w, e);      
const r1 = handle_data(subtract, w, e);
console.log(r);
console.log(r1);
