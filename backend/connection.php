<!--
-   website-5 "Annapurna Bhojnalaya"
-   Copyright by https://github.com/MayankDevil/
-   Developed by Mayank
-   PHP : ./backend/connection.php
-->
<?php

    # configration server ----

    $host = "localhost";
    
    $username = "root";
    
    $password = "91indian";
    
    $database = "test";
    
    # connection establised -----

    $connect = mysqli_connect($host,$username,$password,$database);
    
    # die if un connect -----
    
    if (!$connect)
    {
        die(" Connection Unestablished! ");
    }

?>
