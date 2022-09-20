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

    var DOMstrings = view.getDOMstrings();

    var addItem = function() {

        var input = view.getInfo();
        console.log(input);
    };

    document.querySelector(DOMstrings.btn).addEventListener('click', addItem);
    
})(model, view);