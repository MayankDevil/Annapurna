/*
-   website-5 "Annapurna Bhojnalaya"
-   Copyright by https://github.com/MayankDevil/
-   Developed by Mayank
-   JavaScript : ./js/data.js
*/
try
{
    var food_data = [
        {
            image : 'food/sabji.jpeg',
            name : 'sabji',
            price : 30,
            star : 3,
            type : 'health',
            nature : 'eat',
            taste : 'sweet'
        },
        {
            image : 'food/dal.jpeg',
            name : 'dal',
            price : 20,
            star : 3,
            type : 'health',
            nature : 'eat',
            taste : 'sweet'
        },
        {
            image : 'food/roti.jpeg',
            name : 'roti',
            price : 10,
            star : 2,
            type : 'health',
            nature : 'eat',
            taste : 'sweet'
        },
        {
            image : 'food/bread_egg.jpeg',
            name : 'bread egg',
            price : 40,
            star : 2,
            type : 'health',
            nature : 'eat',
            taste : 'salty'
        },
        {
            image : 'food/paratha.jpeg',
            name : 'paratha',
            price : 40,
            star : 2,
            type : 'health',
            nature : 'eat',
            taste : 'salty'
        },
        {
            image : 'food/chole_puri.jpeg',
            name : 'chole puri',
            price : 50,
            star : 3,
            type : 'oily',
            nature : 'eat',
            taste : 'salty'
        },
        {
            image : 'food/salate.jpeg',
            name : 'salate',
            price : 20,
            star : 1,
            type : 'health',
            nature : 'eat',
            taste : 'brest'
        },
        {
            image : 'food/pakoda.jpeg',
            name : 'pakoda',
            price : 20,
            star : 3,
            type : 'oily',
            nature : 'eat',
            taste : 'salty'
        },
        {
            image : 'food/gajar_halva.jpeg',
            name : 'gajar halva',
            price : 50,
            star : 3,
            type : 'health',
            nature : 'eat',
            taste : 'sweet'
        },
        {
            image : 'food/sampurd_bhog.jpeg',
            name : 'sampud bhog',
            price : 100,
            star : 3,
            type : 'health',
            nature : 'eat',
            taste : 'all'
        },
        /* junk food */
        {
            image : 'food/burgar.jpeg',
            name : 'burgar',
            price : 30,
            star : 2,
            type : 'health',
            nature : 'eat',
            taste : 'salty'
        },
        {
            image : 'food/frenchfry.jpeg',
            name : 'frenchfry',
            price : 15,
            star : 3,
            type : 'health',
            nature : 'eat',
            taste : 'salty'
        },
        {
            image : 'food/momos.jpeg',
            name : 'momos',
            price : 10,
            star : 3,
            type : 'health',
            nature : 'eat',
            taste : 'salty'
        },
        {
            image : 'food/noodles.jpeg',
            name : 'noodles',
            price : 20,
            star : 3,
            type : 'health',
            nature : 'eat',
            taste : 'salty'
        },
        {
            image : 'food/passta.jpeg',
            name : 'passta',
            price : 30,
            star : 1,
            type : 'health',
            nature : 'eat',
            taste : 'salty'
        },
        {
            image : 'food/pastry.jpeg',
            name : 'pastry',
            price : 15,
            star : 3,
            type : 'health',
            nature : 'eat',
            taste : 'sweet'
        },
        {
            image : 'food/pie.jpeg',
            name : 'pie',
            price : 40,
            star : 2,
            type : 'health',
            nature : 'eat',
            taste : 'sweet'
        },
        {
            image : 'food/pizza.jpeg',
            name : 'pizza',
            price : 50,
            star : 3,
            type : 'junk',
            nature : 'eat',
            taste : 'salty'
        },
        {
            image : 'food/sandwitch.jpeg',
            name : 'sanfwitch',
            price : 40,
            star : 2,
            type : 'health',
            nature : 'eat',
            taste : 'salty'
        },
        {
            image : 'food/smoosa.jpeg',
            name : 'smoosa',
            price : 15,
            star : 3,
            type : 'health',
            nature : 'eat',
            taste : 'salty'
        }
    ]
    
    /*
        -------------------------------------------------------------
        | setStar function return number as number pass in argument |
        -------------------------------------------------------------
    */
    function setStar(s)
    {
        var star = '';
        for (let i = 0; i < 3; i++) star += (i < s)? '&starf;' : '&star;';
        return star
    }
    /*
        ----------------------
        | return item layout |
        ----------------------
    */
    function layout(data)
    {
        return (`
            <div class="item">
                
                <img src="data/${data.image}" alt='sabji' class='pic'>
                
                <ol class="detail">
                    <li class='name'> ${ data.name } </li>
                    <li class='price'> &#8360; ${ data.price } </li>
                    <li class='rating'> ${ setStar(data.star) } </li>
                </ol>
                
            </div>
        `)
    }
    /*
        ----------------------------------------
        | looped to set element data in layout |
        ----------------------------------------
    */
    
    //let food = document.getElementById('food')
    
    let list = document.getElementsByClassName("item")
    
    for (let i = 0; i < food_data.length; i++)
    {
    
        document.write(layout(food_data[i]))
    
        list[i].onclick = function()
        {
            var selected = confirm(
                "\n item name : "+food_data[i].name+
                "\n item price : "+food_data[i].price+
                "\n item rating : "+food_data[i].star+
                "\n item type : "+food_data[i].type+
                "\n item nature : "+food_data[i].nature+
                "\n item taste : "+food_data[i].taste+
                "\n\n PRESS [OK] for Select :)"
            )
            
            if(selected) this.style.opacity = '0.5'; else this.style.opacity = '1.0';
        }
    }
    
}
catch (error)
{
    console.log("\n_[data error]\n")  
}
