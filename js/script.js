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
    /*
        MENU BUTTON
    */ 
    menu_btn.onclick = () => {
        // if 0 so close else open
        if(n)
            nav_open();
        else
            nav_close();
    }
    /*
        COUNTER FUNCTION
    */
    //    setInterval(() => {
    //        counter[0].textContent = count++;
    //        counter[1].textContent = count++;
    //        counter[2].textContent = count++;
    //     }, 0);
    /*
        RESIZE FUNCTION
    */
    window.onresize = () => this.location.reload();

    /*
    let search_bar = document.getElementById('search_bar');
            
    search_bar.onkeyup = function()
    {
        let search = search_bar.value.toUpperCase();

        let data_list = document.querySelectorAll('#search_data li');

        for(let i = 0; i < data_list.length; i++)
        {
            let a = data_list[i].getElementsByTagName('a')[0];

            let  data = a.textContent || a.innerHTML;

            if(data.toUpperCase().indexOf(search) > -1)
            {
                data_list[i].style.display = '';
            }
            else
            {
                data_list[i].style.display = 'none';
            }
        }
    }
    

    */
    let search_bar = document.getElementById("srch_fld");

    search_bar.onkeyup = function()
    {
        let search = search_bar.value.toUpperCase();

        let item = document.querySelectorAll(".item > .detail > li");

        for(let i = 0; i < data_list.length; i++)
        {
            let data = list[0].innerText;

            if(data.toUpperCase().indexOf(search) > -1)
            {
                item[i].style.display = "";
            }
            else
            {
                item[i].style.display = "none";
            }
        }
    }
}
catch(error)
{
    alert(error);
}