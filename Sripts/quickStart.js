var app = {};

app.show = function(){
    console.log("Hello World");
}

app.updateContent = function(el, msg){
    return function(){
        var mjrHdg =  document.getElementById(el);
        mjrHdg.innerHTML= msg;
    }
}
app.init= function(){
    var headBtn = document.getElementById('showHeading');
    var subHeadBtn = document.getElementById('showSubHeading');
    //console.log(app.updateContent('mjrHdg',"Java Script Passed")());
    headBtn.addEventListener('click', app.updateContent('mjrHdg',"Java Script Passed"));
    subHeadBtn.addEventListener('click', app.updateContent('mnrHdg',"Sub Heading"));
}

app.show();
app.init();
