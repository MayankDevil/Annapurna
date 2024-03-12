/*
-   website-5 "Annapurna Bhojnalaya"
-   Copyright by https://github.com/MayankDevil/
-   Developed by Mayank
-   JavaScript : ./js/search.js
*/
try
{
    /*
        -------------------------------------------------------------
        | setStar function return number as number pass in argument |
        -------------------------------------------------------------
    */
    
    let searchBar = document.getElementById("search_fld")

    list = document.getElementsByClassName("item")

    searchBar.onkeyup = () => {
    
        for (let i = 0; i < list.length; i++)
                     
            (list[i].lastElementChild.firstElementChild.innerText.toUpperCase().includes(searchBar.value.toUpperCase()))? list[i].style.display = 'unset': list[i].style.display = 'none';
               
    }
}
catch(error)
{
    console.error(`${error}`)
}
