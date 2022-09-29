//MVC - model, view, controller
//API

var model = (function(){

})();

var view = (function() {

    var DOMstrings = {
        name: '.name',
        value: '.value',
        btn:'.bought_btn',
    }

    return {
        getInfo: function(){
            return{
                name: document.querySelector(DOMstrings.name).value,
                value: document.querySelector(DOMstrings.value).value,
            };
        },

        getDOMstrings: function(){
            return DOMstrings;
        },
    };
})();

var controller = (function (m, v) {

    var setupEventListerner = function() {

        var DOMstrings = view.getDOMstrings();
    
        document.querySelector(DOMstrings.btn).addEventListener('click', addItem);
    
        document.addEventListener('keypress', function(event){
    
            if(event.keycode === 13 || event.which ===13){
                
                addItem();
            }
        });
    };

    var addItem = function() {
    
        var input = view.getInfo();
        console.log(input);
    };

    return {

        init:function(){

            console.log('APP started');
            setupEventListerner();
        }
    }
    
})(model, view);


controller.init();