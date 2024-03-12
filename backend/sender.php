<!--
-   website-5 "Annapurna Bhojnalaya"
-   Copyright by https://github.com/MayankDevil/
-   Developed by Mayank
-   PHP : ./backend/sender.php
-->
<?php

    if (isset($_REQUEST['submit']))
    {
        require("./connection.php"); // connection
        
        // url data fetch ----------
        
        $username = $_REQUEST['username'];
        
        $email = $_REQUEST['email'];
        
        $number = $_REQUEST['number'];
        
        $date = $_REQUEST['date'];
        
        $time = $_REQUEST['time'];
        
        $location = $_REQUEST['location'];
        
        # insert query ----------  
        
        $query = "insert into order_table values($username,$email,$number,$data,$time,$location)";
        
        $result = mysqli_query($connect,$query);
        
        if (mysqli_num_rows($result) > 0) 
        {
            header("location:../index.php");
        }
    }

?>
