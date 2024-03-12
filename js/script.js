/*
	Website 5 Annapurna Bhojnalaya
    All right reserved by Mayank
    JavaScript: js/script.css
*/
try
{
    let menu_btn = document.getElementById('menu_btn');

    let nav = document.getElementById('nav');

    // let counter = document.getElementsByClassName("counter");

    var count = 1, n = 0;

    function nav_open()
    {
        nav.style.display = 'grid';
        n = 0;
    }
    function nav_close()
    {
        nav.style.display = 'none';
        n = 1;
    }


    menu_btn.onclick = () => {
        
        if(n)
            nav_open();
        else
            nav_close();
    }

    window.onresize = () => this.location.reload();

    let search_bar = document.getElementById("search_fld")

    let list = document.getElementsByClassName("item")

    search_bar.onkeyup = function()
    {
        
        
        for (let i = 0; i < list.length; i++)
        {
        
            data = list[i].lastChild.firstChild.innerText.toUpperCase()
        
            console.log(data)
                                
            if (data.includes(search_bar.value.toUpperCase()))
            {
                list[i].style.display = 'none'
            }
        }
    }
}
catch(error)
{
    alert(error);
}
