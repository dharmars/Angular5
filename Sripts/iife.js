var module = (
function(msg,msg2){
    console.log(msg+'-'+msg2);

    function first(){
        console.log('i am in first');
        return 'first';
    }
    function second(){
        console.log('i am in second');
    }

    return {
        one: first
    }
    first();
    second();
}
)('I am inside IIFE','DRS');

//fist();  error

console.log(module.one());
var result = module.one();
console.log(result);
