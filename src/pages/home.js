import React from 'react';

class Home extends React.Component{
    render(){
        return(
        <div>
            <body>
    <header>
        <a href="#" class="logo"><i class="fas fa-shopping-cart"></i>Delicacy</a>

       
        <nav class="navbar">
            <li><a href="#home" class="home-active">Home</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#customers">Customers</a></li>
        </nav>
    
        <div class="icons">
           <i class="fas fa-bars" id="menu-bars"></i> 
         
          
        </div>

        <div class="profile">
            <img src="assets/img/2.jpg" alt=" "/>
            <span>SheTrish</span>
            <i class='bx bx-caret-down' ></i>
        </div>


    </header>

    <section class="home swiper" id="home">  
    <div class="swiper-wrapper">
      <div class="swiper-slide container">
        <div class="home-text">
            <span>We are delicacy</span>
            <h1>Choose delicacy <br/> the best healthy <br/> chicken salad</h1>
            <a href="#" class="btn">Shop Now<i class='bx bx-right-arrow-alt'></i></a>
        </div>
        <img src="assets/img/home1.jpg" alt=""/>

      </div>

      <div class="swiper-slide container">
        <div class="home-text">
            <span>We are delicacy</span>
            <h1>Choose delicacy <br/> the best healthy <br/>chicken salad</h1>
            <a href="#" class="btn">Shop Now<i class='bx bx-right-arrow-alt'></i></a>
        </div>
        <img src="assets/img/home2.jpg" alt=""/>

      </div>
      <div class="swiper-slide container">
        <div class="home-text">
            <span>We are delicacy</span>
            <h1>Choose delicacy <br/> the best healthy <br/> chicken salad</h1>
            <a href="#" class="btn">Shop Now<i class='bx bx-right-arrow-alt'></i></a>
        </div>
        <img src="assets/img/home22.jpg" alt=""/>

      </div>
      
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>


    </section>
   
    <section class="categories" id="categories">
        <div class="heading">
            <h1>Browse our Hottest <br/><span/>Categories</h1>
                <a href="#" class="btn">See All<i class='bx bx-right-arrow-alt'></i></a>
        </div>

       
        <div class="categories-container">
            <div class="box box1">
                <img src="assets/img/f.png" alt=""/>
                <h2>Fruits</h2>
                <span>22 Items</span>
                <i class='bx bx-right-arrow-alt'></i>
            </div>
           
            <div class="box box2">
                <img src="assets/img/vegetables.png" alt=""/>
                <h2>Vegetables</h2>
                <span>22 Items</span>
                <i class='bx bx-right-arrow-alt'></i>
            </div>
          
            <div class="box box3">
                <img src="assets/img/drinks.png" alt=""/>
                <h2>Drinks</h2>
                <span>22 Items</span>
                <i class='bx bx-right-arrow-alt'></i>
            </div>
        </div>
    </section>
 
    <section class="menu" id="menu">
        <div class="heading">
            <h1>Popular Products <br/><span/>Products</h1>
                <a href="#" class="btn">Shop Now<i class='bx bx-right-arrow-alt'></i></a>
        </div>
        
        <div class="products-container">
            
            <div class="box">
                <img src="assets/img/fp.png" alt=""/>
                <span>Fresh Items</span>
                <h2>Farm Fresh Organic <br/>Fruits 20g</h2>
                <h3 class="price">200 <span> /kg</span></h3>
                <i class='bx bx-cart-alt'></i>
                <i class='bx bx-heart' ></i>
                <span class="discount">-10%</span>
            </div>
            
            <div class="box">
                <img src="assets/img/p2.png" alt=""/>
                <span>Fresh Items</span>
                <h2>Farm Fresh Organic <br/>Vegetables 20g</h2>
                <h3 class="price">100 <span> /kg</span></h3>
                <i class='bx bx-cart-alt'></i>
                <i class='bx bx-heart' ></i>
                <span class="discount">-10%</span>
            </div>
           
            <div class="box">
                <img src="assets/img/po.png" alt=""/>
                <span>Fresh Items</span>
                <h2>Farm Fresh Organic <br/>/Drinks 20g</h2>
                <h3 class="price">150<span> /kg</span></h3>
                <i class='bx bx-cart-alt'></i>
                <i class='bx bx-heart' ></i>
                <span class="discount">-10%</span>
            </div>
        </div>
    </section>
    <section class="about" id="about">
        <img src="assets/img/2.jpg" alt=""/>
        <div class="about-text">
            <span>About Us</span>
            <p> Sherish products are all organic and aims to pursue people to continue on living healthy lifestyle.</p>
            <p>Through this site we are able to reach thousand of people that we could inspire on living such a healthy lifestyle.</p>
            <a href="#" class="btn">Learn More<i class='bx bx-right-arrow-alt'></i></a>
        </div>
    </section>
   
    <section class="customers" id="customers">
        <h2>Why Customer's love us?</h2>
        
        <div class="customers-container">
           
            <div class="box">
                <i class='bx bxs-quote-alt-left' ></i>
                <div class="stars">
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star-half' ></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cupiditate laudantium omnis, perspiciatis sint totam ipsam neque at dicta quae voluptatem sapiente maiores consequatur iste adipisci officiis error autem reprehenderit.</p>
                <div class="review-profile">
                   
                    <img src="assets/img/sher.png" alt=""/>
                    <h3>Sherly Atillo</h3>
                </div>
            </div>
          
            <div class="box">
                <i class='bx bxs-quote-alt-left' ></i>
                <div class="stars">
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star-half' ></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cupiditate laudantium omnis, perspiciatis sint totam ipsam neque at dicta quae voluptatem sapiente maiores consequatur iste adipisci officiis error autem reprehenderit.</p>
                <div class="review-profile">
                  
                    <img src="assets/img/tr.jpg" alt=""/>
                    <h3>Trisha Boneo</h3>
                </div>
            </div>
           
            <div class="box">
                <i class='bx bxs-quote-alt-left' ></i>
                <div class="stars">
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star-half' ></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cupiditate laudantium omnis, perspiciatis sint totam ipsam neque at dicta quae voluptatem sapiente maiores consequatur iste adipisci officiis error autem reprehenderit.</p>
                <div class="review-profile">
                   
                    <img src="assets/img/ana.jpg" alt=""/>
                    <h3>Ana Marie</h3>
                </div>
            </div>
           
            <div class="box">
                <i class='bx bxs-quote-alt-left' ></i>
                <div class="stars">
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star-half' ></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cupiditate laudantium omnis, perspiciatis sint totam ipsam neque at dicta quae voluptatem sapiente maiores consequatur iste adipisci officiis error autem reprehenderit.</p>
                <div class="review-profile">
                    
                    <img src="assets/img/tr.jpg" alt=""/>
                    <h3>Henry</h3>
                </div>
            </div>
        </div>
    </section>
    <section class="footer" id="footer">
        <div class="footer-box">
            <a href="#" class="btn">logo<i class='bx bxs-basket'></i></a>
            <p>Cagayan, Barangay 25 <br/>Bldg 2</p>
            <div class="social">
                <a href="https://www.facebook.com/"><i class='bx bxl-facebook' ></i></a>
                <a href="#"><i class='bx bxl-twitter' ></i></a>
                <a href="#"><i class='bx bxl-instagram' ></i></a>
                <a href="https://www.youtube.com/watch?v=r23vdX4R4GU"><i class='bx bxl-youtube' ></i></a>
            </div>
        </div>
        <div class="footer-box">
            <h2>Categories</h2>
            <a href="#">Fruits & Vegetables</a>
            <a href="#">Dairy Products</a>
            <a href="#">Package Food</a>
            <a href="#">Beverages</a>
        </div>
        <div class="footer-box">
            <h2>Useful Links</h2>
            <a href="#">Payment & Tax</a>
            <a href="#">Terms Of Use</a>
            <a href="#">My Blog</a>
            <a href="#">Return Policy</a>
        </div>
        <div class="footer-box">
            <h2>News Letter</h2>
            <p>Get 10% Discount with <br/>Email NewsLetter</p>
            <form action="">
                <i class='bx bxs-envelope-open' ></i>
                <input type="email" name="" id="" placeholder="Enter your Email"/>
                <i class='bx bx-arrow-back bx-rotate-180' ></i>
            </form>
        </div>
    </section>
  
    <div class="copyright">
        <p> SheTrish All Right Reserve</p>
    </div>

    </body>
  
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <script src="java.js"></script>

</div>
        );
    }
}    
export default Home;