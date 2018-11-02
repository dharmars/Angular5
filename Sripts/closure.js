(function(){

    function add(){
        var counter = 0;

        return function(){
            return ++counter;
        }
    }

    var mycounter = add();
    var mycounter2 = add();
    console.log(mycounter());
    console.log(mycounter());
    console.log(mycounter());
    console.log(mycounter2());
    console.log(mycounter2());
})();