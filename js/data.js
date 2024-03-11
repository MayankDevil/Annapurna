/*
	Website 5 Annapurna Bhojnalaya
    All right reserved by Mayank
    JavaScript: js/script.css
*/
try
{
    /*
        API data
    */
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
        },
        /* drinks */
        {
            image : 'drink/icecream.jpeg',
            name : 'icecream',
            price : 15,
            star : 3,
            type : 'healthy',
            nature : 'liquid',
            taste : 'dray'
        },
        {
            image : 'drink/strawberry_shake.jpeg',
            name : 'straberry shake',
            price : 50,
            star : 3,
            type : 'healthy',
            nature : 'liquid',
            taste : 'dray'
        },
        {
            image : 'drink/poodina_jucie.jpeg',
            name : 'poodina jucie',
            price : 20,
            star : 1,
            type : 'healthy',
            nature : 'liquid',
            taste : 'dray'
        },
        {
            image : 'drink/pomegranate_jucie.jpeg',
            name : 'pomepranate jucie',
            price : 40,
            star : 3,
            type : 'healthy',
            nature : 'liquid',
            taste : 'dray'
        },
        {
            image : 'drink/pinapple_jucie.jpeg',
            name : 'pinapple_jucie',
            price : 40,
            star : 3,
            type : 'healthy',
            nature : 'liquid',
            taste : 'dray'
        },
        {
            image : 'drink/pappy_shake.jpeg',
            name : 'pappy shake',
            price : 35,
            star : 3,
            type : 'healthy',
            nature : 'liquid',
            taste : 'dray'
        },
        {
            image : 'drink/orange_jucie.jpeg',
            name : 'orange jucie',
            price : 20,
            star : 1,
            type : 'healthy',
            nature : 'liquid',
            taste : 'dray'
        },
        {
            image : 'drink/mango_shake.jpeg',
            name : 'mango shake',
            price : 30,
            star : 3,
            type : 'healthy',
            nature : 'liquid',
            taste : 'dray'
        },
        {
            image : 'drink/lemon_jucie.jpeg',
            name : 'lemon jucie',
            price : 30,
            star : 3,
            type : 'healthy',
            nature : 'liquid',
            taste : 'dray'
        },
        {
            image : 'drink/lemon_tea.jpeg',
            name : 'lemon tea',
            price : 30,
            star : 3,
            type : 'healthy',
            nature : 'liquid',
            taste : 'dray'
        },
        {
            image : 'drink/cold_coffie.jpeg',
            name : 'cold coffie',
            price : 30,
            star : 3,
            type : 'healthy',
            nature : 'liquid',
            taste : 'dray'
        },
        {
            image : 'drink/cream_coffie.jpeg',
            name : 'cream coffie',
            price : 40,
            star : 2,
            type : 'healthy',
            nature : 'liquid',
            taste : 'dray'
        },
        {
            image : 'drink/hot_coffee.jpeg',
            name : 'hot coffee',
            price : 20,
            star : 2,
            type : 'unhealth',
            nature : 'liquid',
            taste : 'dray'
        }
    ];
    /*
        start rating function
    */
    function set_star(s)
    {
        var star = '';
        for (let i = 0; i < 3; i++)
            star += (i < s)? '&starf;' : '&star;';
        return star;
    }
    /*
        data assamble to return function
    */
    function display(f)
    {
        return (
            "<!-- item -->"+
            "<div class='item'>"+
                "<!-- item picture -->"+
                "<img src='data/"+f.image+"' alt='sabji' class='pic'>"+
                "<!-- item detail -->"+
                "<ol class='detail'>"+
                    "<li class='name'> "+f.name+" </li>"+
                    "<li class='price'> &#8360; "+f.price+" </li>"+
                    "<li class='rating'> "+set_star(f.star)+" </li>"+
                "</ol>"+
            "</div>"
        );
    }
    /*
        display to select function
    */ 
    for (let i = 0; i < food_data.length; i++)
    {
        document.write(display(food_data[i]));
    
        document.getElementsByClassName('item')[i].onclick = function()
        {
            var selected = confirm(
                "\n item name : "+food_data[i].name+
                "\n item price : "+food_data[i].price+
                "\n item rating : "+food_data[i].star+
                "\n item type : "+food_data[i].type+
                "\n item nature : "+food_data[i].nature+
                "\n item taste : "+food_data[i].taste+
                "\n\n PRESS [OK] for Select :)"
            );
            if(selected) this.style.opacity = '0.5'; else this.style.opacity = '1.0';
        }
    }
}
catch (error)
{
    alert(error);    
}