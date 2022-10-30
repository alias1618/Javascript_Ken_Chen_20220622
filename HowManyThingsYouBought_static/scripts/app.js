//MVC - model, view, controller
//API

var model = (function(){

    var item =function(id, name, value){
        this.id = id;
        this.name = name;
        this.value = value;
    };

    // allItems = [];
    // totals = 0;

    var data = {

        allItems: [],
        totals:0,
        
    }

    var calculateTotal = function() {

        var sum = 0;
        data.allItems.forEach(function(currentVal){

            sum += currentVal.value;

        });

        data.totals = sum;
    }

    return {

        addItem: function(name, value){

            var ID;

            if(data.allItems.length > 0){

                ID = data.allItems[data.allItems.length - 1].id + 1;
            }else{
                ID = 0;
            }

            var newItem = new item(ID, name, value);
            data.allItems.push(newItem);

            return newItem; 
        },

        calculateSum: function(){

            calculateTotal();
            return {
                sum: data.totals,
            }
        },

        test: function(){
            console.log(data);
        },
    }

})();

var view = (function() {

    var DOMstrings = {
        name: '.name',
        value: '.value',
        btn:'.bought_btn',
        list: '.bought_list',
        sumLabel: '.total_value',
        container: '.container',
    }

    return {
        getInfo: function(){
            return{
                name: document.querySelector(DOMstrings.name).value,
                value: parseFloat(document.querySelector(DOMstrings.value).value),
            };
        },

        addListItem: function(object){

            var newHTML;

            var element = DOMstrings.list;

            var html = '<div class="item clearfix" id="%id%"><div class="item_name">%name%</div><div class="right clearfix"><div class="item_value">%value%</div><div class="delete"><button class="delete_btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

            newHTML = html.replace('%id%', object.id);
            newHTML = newHTML.replace('%name%', object.name);
            newHTML = newHTML.replace('%value%', object.value);

            document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);
        },

        clearInput: function() {

            var inputs;

            inputs = document.querySelectorAll(DOMstrings.name + ',' + DOMstrings.value);

            var inputArray = Array.prototype.slice.call(inputs);

            
            //console.log(inputArray);

            inputArray.forEach(function(currentVal) {

                currentVal.value = '';  
            });

            inputArray[0].focus();

            //inputs.slice();
        },

        displaySum: function(object){

            document.querySelector(DOMstrings.sumLabel).textContent = object.sum + '元';
        },

        getDOMstrings: function(){
            return DOMstrings;
        },
    };
})();

var controller = (function(m, v) {

    var setupEventListerner = function() {

        var DOMstrings = view.getDOMstrings();
    
        document.querySelector(DOMstrings.btn).addEventListener('click', addItem);
    
        document.addEventListener('keypress', function(event){
    
            if(event.keycode === 13 || event.which === 13){
                
                addItem();
            }
        });

        document.querySelector(DOMstrings.container).addEventListener('click', deleteItem);
    };

    var deleteItem = function(event){

        var itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        console.log(itemID);
    };

    var updateTotal = function() {

        var sum = model.calculateSum();
        //console.log(sum);
        view.displaySum(sum);
    };

    var addItem = function() {
    
        var input = view.getInfo();
        //console.log(input);

        if(input.name != '' && !isNaN(input.value) && input.value > 0){

            var newItem = model.addItem(input.name, input.value);

            view.addListItem(newItem);
    
            view.clearInput();

            updateTotal();
        }


    };

    return {

        init:function(){

            console.log('APP started');
            view.displaySum({sum: 0,});
            setupEventListerner();
        }
    }
    
})(model, view);


controller.init();