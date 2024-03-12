<!DOCTYPE html>
<!--
-   website-5 "Annapurna Bhojnalaya"
-   Copyright by https://github.com/MayankDevil/
-   Developed by Mayank
-   PHP : ./index.php
-->
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!--
        ---------
        | style |
        ---------
    -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">

</head>

<body>

    <!--
        ------------------
        | main container |
        ------------------
    -->
    <main id="main">

        <!--
            ==================
            [ header section ]-------------------------------------------------
            ==================
        -->
        <header id="header">
                <!-- menu button -->
				<button id="menu_btn"> &#9776; </button>
				<!-- menu section -->
				<nav id="nav">
	
					<a href="#home"> Home </a>
					<a href="#facts"> About </a>
					<a href="#menu"> Menu </a>
					<a href="#service"> Service </a>
					<a href="#order"> Order </a>
	
				</nav>

        </header>
        <!--
            =========================
            [ introducation section ]-------------------------------------------------
            =========================
        -->
        <section id="home">
            <div class="container">
				<!-- main heading -->
				<h1> Annapurna <!-- Bhojnalaya --> </h1>
				<!-- subtitle heading -->
				<h3> Welcome To Annapurna Bhojnalaya The Indian Restorant. Eat Good Feel Good </h3>
				<!-- social media -->
				<div id="social">
					
					<a href="#" class="media">
						<span class="fa brands fa-facebook-f"></span>
					</a>
					<a href="#" class="media">
						<span class="fa brands fa-instagram"></span>
					</a>
					<a href="#"	class="media">
						<span class="fa brands fa-whatsapp"></span>
					</a>

				</div>
				<!-- contact -->
				<div id="contact">
					<!-- email id -->
					<a href="mailto:fake@gmail.com"> fake@gmail.com </a>
					<!-- contact number -->
					<a href="tel:+9211420420"> 9211-420-420</a>

				</div>
				
			</div>
        </section>
        <!--
            =================
            [ about section ]-------------------------------------------------
            =================
        -->
        <section id="about">
            <div class="container">
                <h2> About Bhojnalaya </h2>
            </div>
        </section>
        <!--
            ================
            [ menu section ]-------------------------------------------------
            ================
        -->
        <section id="menu">
            <div class="container">
            
				<!-- food heading -->
				<input type="search" id="search_fld" placeholder="Search Your Taste">
			
				<!-- food -->
				<div id="food">

					<script src="js/data.js"></script>

				</div>

			</div>
		</section>
        <!--
            ===================
            [ service section ]-------------------------------------------------
            ===================
        -->
        <section id="service">
	        <div class="container">
			    <!-- service 1 -->
			    <div class="serve">

				    <span class="fa fa-truck serve_icon"></span>
				    
				    <h4> Free Delivery On Orders Over ₹500! </h4>
				    
				    <p> At Our Delightful Bistro, we believe in making your dining experience seamless and delightful. That’s why we’re thrilled to offer free delivery for orders exceeding ₹500. </p>
				    
				    <div class="rating"> &starf; &starf; &starf; </div>
				    
				    <a href="#" class="more_btn"> Explore </a>

			    </div>
			    <!-- service 2 -->
			    <div class="serve">

				    <span class="fa fa-carrot serve_icon"></span>
				    
				    <h4> We Serve Exquisite Vegetarian Delights! </h4>
				    
				    <p> Whether you’re a devoted herbivore or simply seeking a wholesome meal, our vegetarian options promise a symphony of taste and nourishment. </p>
				    
				    <div class="rating"> &starf; &starf; &starf; </div>
				    
				    <a href="#" class="more_btn"> Explore </a>

			    </div>
			    <!-- service 3 -->
			    <div class="serve">

				    <span class="fa fa-wallet serve_icon"></span>
				    
				    <h4> Ensure The True Rate For Your Wallet </h4>
				    
				    <p> Affordable food service is a delight, offering a right Rate. Enjoy diverse flavors and generous portions, all while keeping your budget intact. </p>
				    
				    <div class="rating"> &starf; &starf; &starf; </div>
				    
				    <a href="#" class="more_btn"> Explore </a>

			    </div>

		    </div>
        </section>
        <!--
            =================
            [ order section ]-------------------------------------------------
            =================
        -->
        <section id="order">
			<div class="container">
			
			    <!-- order form -->
			    <form action="backend/sender.php" method="POST">
				    <!-- heading -->
				    <h6> Order Food Delivery Free </h6>
				    <!-- name -->
				    <div>
					    
					    <label> Enter Customer Name : </label>
					    
					    <input type="text" name="username" class="fld" placeholder="Name">

				    </div>
				    <!-- telephone -->
				    <div>
					    
					    <label> Enter Contact Number : </label>
					    
					    <input type="tel" name="number" class="fld" placeholder="Phone">

				    </div>
				    <!-- email -->
				    <div>
					    
					    <label> Enter Your Email Id : </label>
					    
					    <input type="email" name="email" class="fld" placeholder="Email">

				    </div>
				    <!-- date -->
				    <div>
					    
					    <label> Enter Today Date : </label>
					    
					    <input type="date" name="date" class="fld">

				    </div>
				    <!-- time -->
				    <div>
					    
					    <label> Enter Present Approx Time : </label>

					    <input type="time" name="time" class="fld">

				    </div>
				    <!-- address -->
				    <div>

					    <label> Enter Delivery Address : </label>

					    <input type="text" name="location" class="fld" placeholder="Location">

				    </div>
				    <!-- sumbit button -->
				    <div>
					    <input type="submit" value="Order Know" name="submit" class="odr_btn">
				    </div>

			    </form>

		    </div>
        </section>
        <!--
            ==================
            [ footer section ]-------------------------------------------------
            ==================
        -->
        <footer id="footer">
            <div class="container">
                <!-- copyright -->
                <div class="copy"> 2021 &copy; All Right Reserved | Desgined By <a href="https://github.com/MayankDevil/" target="_blank" title="MayankDevil">Mayank</a> </div>
            
            </div>
        </footer>

    </main>
    <!--
        ----------
        | script |
        ----------
    -->
    <script srr="js/search.js"></script>
    <script src="js/script.js"></script>

</body>

</html>
