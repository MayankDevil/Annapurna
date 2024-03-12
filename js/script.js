/*
-   website-5 "Annapurna Bhojnalaya"
-   Copyright by https://github.com/MayankDevil/
-   Developed by Mayank
-   JavaScript : ./js/script.js
*/
try
{
    let menu_btn = document.getElementById('menu_btn');

    let nav = document.getElementById('nav');

    var count = 1, isActive = false;

    function nav_open()
    {
        nav.style.display = 'grid';
        isActive = false;
    }
    
    function nav_close()
    {
        nav.style.display = 'none';
        isActive = true;
    }

    menu_btn.onclick = () => {
        
        if(isActive) { nav_open() } else { nav_close() }
    }

    window.onresize = () => this.location.reload();

    let searchBar = document.getElementById("search_fld")

    list = document.getElementsByClassName("item")

    searchBar.onkeyup = () => {
    
        for (let i = 0; i < list.length; i++)
                     
            (list[i].lastElementChild.firstElementChild.innerText .toUpperCase().includes(searchBar.value.toUpperCase()))? list[i].style.display = 'unset': list[i].style.display = 'none';
               
    }
}
catch(error)
{
    console.error(`${error}`)
}
