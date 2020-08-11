//creating empty array for ingredients.
let ingredients_arr = [];
//creating empty array for preparation.
let prep_arr = [];

let storage_val = Object.values(localStorage);
let storage_key = Object.entries(localStorage);


//The function will take the parameters needed for the propper outcome of page.
function on_load(head, sub, vid, ingr, serv, prep){

    newwin = window.open('prep.html');//assigning the html page we want to a variable so we can access it.

    //a event that will listen upon load and then act.
    newwin.onload = function(){
        newwin.document.getElementById('heading').innerHTML = head;
        newwin.document.getElementById('sub-heading').innerHTML = sub;
        newwin.document.getElementById('video').src = vid;
        newwin.document.getElementById('servings').innerHTML = serv;


        //looping through the array and inserting data.
        for(i=0;i<ingredients_arr.length;i++){
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(ingredients_arr[i]));
            newwin.document.getElementById('ingredients').appendChild(li);
        }

        //looping through array and inserting data.
        for(i=0;i<prep_arr.length;i++){
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(prep_arr[i]));
            newwin.document.getElementById('preparation').appendChild(li);
        }

    }
}

//event will listen if pop up button was clicked.
document.getElementById('Popupbtn').addEventListener('click', function(e){

    let popup = document.getElementById('popupContent');
    popup.className = "Popcontent";

});
//event will listen if popup close button was clicked.
document.getElementById('closed').addEventListener('click', function(e){
    let close = document.getElementById('popupContent');
    close.className = "none";
})

//the fuctions will take different parameters and load different info depending on click.
function Burger(){
    
    ingredients_arr = []
    prep_arr = [];

    ingredients_arr.push("2 ground beef patties", "2 burger buns", "7 oz heavy cream (200 g)", "4 cups white wine (960 mL)", "1 red onion, diced", "3 cups mushroom (250 g)", "2 black figs, sliced", "salt and pepper mix, to taste")

    prep_arr.push("For the sauce: Heat olive oil in a pan over medium heat. Add red onion and sauté for 1-2 minutes. Add the sliced mushrooms and sauté for another 2-3 minutes. Season with salt.",
    "Add white wine and cream to deglaze the mushrooms. Let simmer for 5 minutes.",
    "For the burgers: Cook patties on the BBQ or stovetop until cooked through and toast the buns.",
    "Slice the figs.", "Top the patties with mushroom sauce and sliced fig and place in the buns.", "Enjoy!")

    on_load("Beef Burgers With Creamy Mushroom Sauce",
    "By Strahinja Mitrovic",
    "https://www.youtube.com/embed/skgPTUWepJw",
    ingredients_arr,
    "For 2 Servings",prep_arr);

}

function Stew(){
    
    ingredients_arr = []
    prep_arr = [];

    ingredients_arr.push("3 fresh bay leaves", "2 sprigs fresh rosemary", "4 sprigs fresh thyme", "1 large sprig fresh sage", "1 lb chicken thighs (455 g), cut into 1 1/2 in (3 cm) pieces",
     "3 ½ teaspoons kosher salt, divided", "2 tablespoons olive oil, divided", "2 tablespoons unsalted butter", "1 white onion, thinly sliced", "3 medium carrots, cut into 1/2 (1 1/4 cm) in rounds",
     "3 large cloves garlic, smashed", "¼ teaspoon red pepper flakes, optional, plus more for serving", "¼ cup all-purpose flour (30 g)")

    prep_arr.push("Make the bouquet garni: Stack the bay leaves, rosemary, "+
    "thyme, and sage on top of one another. Tie a 3-inch (7 cm) length of "+
    "butcher’s twine around the center of herbs and secure with a knot. Set aside.", "Season the chicken all over with about 1 teaspoon salt.",
    "In a large, heavy-bottomed pot, heat 2 tablespoons of olive oil over medium-high heat until shimmering. Add the chicken and cook for 1–2 minutes "+
     "on one side, until golden brown and crispy. Flip and cook for another 1–2 minutes, until golden brown. Remove the chicken from the pot and set aside.",
    "Reduce the heat to medium and add the remaining tablespoon of oil if the pot looks dry. Melt the butter until just bubbling. Add the onion and carrots"+
    " and season with ½ teaspoon salt. Cook for 2–3 minutes, stirring occasionally, until the onion is translucent and carrot is beginning to soften. Stir in"+
    " the garlic and red pepper flakes, if using. Add the flour and cook for 2–3 minutes, until the vegetables are well-coated and the flour is lightly toasted,"+
    " stirring occasionally to prevent burning.", "Deglaze the pan with the wine, scraping up any browned bits on the bottom of the pan.", "Enjoy!")

    on_load("Chicken And Kale Stew",
    "By Betsy Carter & Karlee Rotoly",
    "https://www.youtube.com/embed/h3ArndKhnjk",
    ingredients_arr,
    "For 6 Servings", prep_arr);

}

function Poppers(){
    
    ingredients_arr = []
    prep_arr = [];

    ingredients_arr.push("12 jalapeño peppers", "1 block pepper jack cheese", "4 eggs", "2 cups flour (250 g), as needed", "2 cups bread crumbs (230 g), as needed")

    prep_arr.push("Cut the top off each jalapeño and core it, scraping out all the seeds, with the back side of a spoon.",
    "Fill the jalapeños with pepper jack cheese, either melted or cubed.",
    "Place the top back on the jalapeños and secure with two toothpicks inserted diagonally.",
    "NOTE: Be sure each toothpick goes through both the top and the bottom of the jalapeño to secure it.",
    "Dredge in flour, eggs, then breadcrumbs. For a thicker breading, double bread the jalapeños by repeating the egg and breadcrumb dredging.",
    "Heat oil to 325°F (160°C).",
    "Fry each jalapeño popper until golden brown (about 2-3 minutes).",
    "Cool and allow extra oil to drip off on a plate lined with paper towels. Remove the toothpicks.",
    "Season with salt and serve immediately once cooled enough to handle.", "Enjoy!")

    on_load("Cheese-Stuffed Jalapeño Poppers",
    "By Jody Duits & Claire Nolan",
    "https://www.youtube.com/embed/n9_xa-QXp9k",
    ingredients_arr,
    "For 12 Servings",prep_arr);

}

function Pizza(){
    
    ingredients_arr = []
    prep_arr = [];

    ingredients_arr.push("1 ¼ cups water (300 mL), warm", "¼ oz active dry yeast (10 g), 1 packet", "1 ½ teaspoons sugar",
     "3 ½ cups all-purpose flour (435 g)", "2 tablespoons salt", "¼ cup extra virgin olive oil (60 mL)")

    prep_arr.push("In a small mixing bowl, whisk the warm water, yeast, and sugar together. Place in a warm place for 10 minutes, or until yeast is foamy.",
    "In a large mixing bowl, whisk together the flour and salt.",
    "Make a well in the center of the dry ingredients and add the yeast mixture and olive oil. Stir the wet ingredients into the dry ingredients until the dough comes together and becomes difficult to stir.",
    "Turn the dough out onto a lightly floured surface and knead until the dough is smooth, about 5 minutes. Add small amounts of flour as necessary to prevent sticking.",
    "Transfer the dough to a large bowl coated with olive oil. Cover with a towel and let rise in a warm place for 1-2 hours, until the dough has doubled in size.",
    "Once the dough has doubled in size, remove the towel and punch the dough down. Turn out onto a lightly floured surface and divide the dough into 6-8 pieces, and shape each into a small ball.",
    "Place the formed balls onto a baking sheet and rest, covered, for 15 minutes.",
    "To shape the individual pizzas, press out the dough balls onto a lightly floured surface. Create a slightly thicker rim around the outside of the dough and continue to stretch into a 9- to 10-inch (23-25 cm) round.", "Enjoy!")

    on_load("Pizza Margherita",
    "By Mario Batali",
    "https://www.youtube.com/embed/az5D8C6K5Dk",
    ingredients_arr,
    "For 6 Servings",prep_arr);

}

function Noodles(){
    
    ingredients_arr = []
    prep_arr = [];

    ingredients_arr.push("1 lb boneless, skinless chicken thighs (455 g)", "2 teaspoons kosher salt", "4 teaspoons McCormick® Fiery Spice Blend, divided",
     "1 tablespoon canola oil, or grapeseed oil", "¼ cup fish sauce (60 mL)", "¼ cup warm water (60 mL)", "3 limes, juiced, sliced", "1 ½ tablespoons brown sugar",
     "1 lb rice noodle (455 g), cooked according to package instructions", "1 persian cucumber, thinly sliced")

    prep_arr.push("On a cutting board, season the chicken thighs on both sides with salt and 2 teaspoons of the Fiery spice blend.",
    "Heat the oil in a large skillet over medium-high heat. Once the oil begins to shimmer, add the chicken thighs and cook for 2-3 minutes, until golden brown. Flip and cook on the other side for 2-3 minutes more, until the chicken is cooked through. Transfer to a cutting board to rest for 10 minutes, then cut into cubes.",
    "In a large bowl, add the fish sauce, warm water, lime juice, brown sugar, and the remaining 2 teaspoons of the Fiery spice blend. Whisk to combine.",
    "Toss the cooked vermicelli noodles in the sauce until fully coated.",
    "Divide the noodles between serving bowls and top with the chicken, cucumber, cilantro, mint, red onion, peanuts, and lime wedges.",
    "Enjoy!")

    on_load("Fiery Chicken And Rice Noodles",
    "By Strahinja Mitrovic",
    "https://www.youtube.com/embed/q6qyyaVneNc",
    ingredients_arr,
    "For 4 Servings",prep_arr);

}

function Braciole(){
    
    ingredients_arr = []
    prep_arr = [];

    ingredients_arr.push("2 lb flank steak (925 g)", "½ teaspoon salt", "¼ teaspoon pepper", "1 cup grated parmesan cheese (110 g)", "4 slices provolone cheese",
     "½ cup italian bread crumbs (230 g)", "½ teaspoon garlic powder", "1 teaspoon dried basil", "5 tablespoons olive oil", "4  cups marinara sauce (1 kg)")

    prep_arr.push("In a medium sized bowl, mix together the garlic powder, parmesan, breadcrumbs, and dried basil. Set the mixture aside.",
    "Lay the flank steak on a clean surface and pound flat with a meat tenderizer. Sprinkle with salt and pepper.",
    "Place provolone on the meat and then evenly distribute the breadcrumb filling among the flank steaks and roll, beginning on the short end, all the way up (like a jelly roll).",
    "Tie the roll closed with butcher’s twine to secure the braciole.",
    "Pour the olive oil into a large pot and heat over medium high heat. Sear the braciole roll for about 1 minute on each side, just to brown the meat quickly. Then, add the tomato sauce to the pot and lower the heat to low.",
    "Cover and cook the braciole for an hour, basting the rolls occasionally to ensure they do not dry out.",
    "Serve hot along with the sauce and some cooked pasta.",
    "Enjoy!")

    on_load("Twist On Italian Braciole In Marinara Sauce",
    "By Caitlin Williams",
    "https://www.youtube.com/embed/fI13DhishGs",
    ingredients_arr,
    "For 6 Servings",prep_arr);

}

//function for when a food item is liked.
function liked(){
    $(".like-bar img").click(function(e){
        //stores id of clicked image.
        var elmId = $(this).attr("id");
        $(this).toggleClass("liked");//toggles liked class, makes the heart light up.

        if(!$(this).hasClass('liked')){//if the image is not in the liked class.
            
            //it will set the local storage to unliked.
            localStorage.setItem(elmId, "Unliked")
            //Removes the div element from local storage.
            localStorage.removeItem(($(this.parentNode.parentNode).find('h4')[0].innerHTML), $(this.parentNode.parentNode)[0].outerHTML);
            //takes it out the array that was created in Favorites.js
            item_arr.slice(item_arr.indexOf(($(this.parentNode.parentNode).find('h4')[0].innerHTML)))
            location.reload();//reloads window.
        }
        else{
            localStorage.setItem(elmId, "Liked")//stores the item in local storage with liked value.
            //sets the div element in local storage.
            localStorage.setItem(($(this.parentNode.parentNode).find('h4')[0].innerHTML), $(this.parentNode.parentNode)[0].outerHTML);
            //lets the user know that it was added
            alert(($(this.parentNode.parentNode).find('h4')[0].innerHTML)+" has been added to your favorites")
        }
    });
}

//function to hide center text overlay on image.
function Hide(){
    $('.hide').click(function(e){
        $(e.target.parentNode).hide()//finds the exact element user wants hidden.

        let show = $('<input type="button" value="show" class="show"/>');//creates a new button after element is hidden.
        $(e.target.parentNode.parentNode).append(show);//appens the button

        $('.container .image').css('opacity', '1')//takes blur away from image.

        //when show button is clicked it shows what was hidden and removes button.
        $('.show').click(function(e2){
            $(e.target.parentNode).show()
            $(e2.target).remove();
        })
    })
}

//checks if the document was loaded.
$(document).ready(function(){
    //loops through the local storage and finds if items were liked.
    $.each(storage_key, function(index, entry){
        if(entry[1] == "Liked"){
        document.getElementById(entry[0]).className = "liked";
        }
    })
    //This will fetch the edits from local storage and apply them.
    $('*').css("font-family", (localStorage.getItem('font')));
    $('body').css("background-color", (localStorage.getItem('color')));
    $('*').css("text-shadow", localStorage.getItem('Shadow'));
    //function calls.
    liked();
    Hide();
})




