//stores all the local storage keys in an array.
let storage_arr = Object.keys(localStorage);
//an empty array that will store all the food keys.
let item_arr = [];
//array that pre stores all food that is available.
let food_items = ["Beef Burger with Mushroom Sauce",
"Chicken &amp; Kale Stew", "Cheese-Stuffed Jalapeño Poppers",
"Pizza Margherita", "Fiery Chicken And Rice Noodles",
"Twist On Italian Braciole In Marinara Sauce"];

//checks if document is ready.
$(document).ready(function(){
    //This will fetch the edits from local storage and apply them.
    $('*').css("font-family", (localStorage.getItem('font')));
    $('body').css("background-color", (localStorage.getItem('color')));
    $('*').css("text-shadow", localStorage.getItem('Shadow'));

    //loops through the local storage and checks if a item was added to favorites.
    $.each(storage_arr, function(index, item){
       $.each(food_items, function(i, food){
        if(item == food){
            item_arr.push(localStorage.getItem(item));//pushes item in new array.
         }
       })
    })

    //checks if array is empty or not.
    if(item_arr.length > 0){
        $.each(item_arr,function(i, item){
            $('#fav-items').append(item);//appends the item stored in local storage.
        })
       }
       //tells user that they have no liked foods.
       else if(item_arr < 1){
           $('#empty').text("You Have No Liked Foods, Go Add Some").css('padding-top', '300px');
       }

       //fetches another script and adds the functions
    jQuery.getScript("js/script.js",function(){
        liked();
        Hide();
    });
})