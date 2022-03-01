<template>

<div class="ma-0 pa-0 container-fluid">
 
    <div style="" class="mb-10 main_header container-fluid">
        <div id="navbar" class="naviga_bar container-fluid">
            <nav :class="{ 'onScroll': !view.topOfPage}" class="navbar fixed-top navbar-expand-lg">
                <div style="" class="container-fluid">
                    <a style="font-size: 25px; font-weight: 600; color: white;
  text-shadow: 2px 2px 4px #000000;"  class="navbar-brand" href="#">Belmaz Credit</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ma-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#faq">Faq</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#services">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#blog">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div class="container">
            <div style="margin-top: 10%">
                <div class="row">
                    <div class="big_txt col-lg-6">
                        <h2 class="mb-3 mt-3 ">Belmaz Credit </h2>
                       
                        <ul>
                            <li class="mb-2">Easy withdrawal system</li>
                            <li class="mb-2">Affordable loan interest rate</li>
                            <li class="mb-2">Bonus on all referral</li>
                            <li class="mb-2">Contribution system</li>
                            <li class="mb-2">Awesome return on investment (ROI)</li>
                        </ul>
                        <div style="margin-bottom: 20%">
                            <a href="/login"><button class="button1">Login</button></a>
                            <a href="/signup"><button class="button2">Sign Up</button></a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div>
                            <img class="image_one" src="../../assets/firstsvg.svg" alt="" srcset="" style="margin-left:-150px;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-16 container">
        <div class="row">
            <div class="feat_txt col-lg-6">
                <h2 id="about">About Us</h2>
                <p style="text-align:justfy">  Belmaz Credit is a system created by Belmaz Multi-purpose cooperative society Ltd. Solely for her members to enable them raise finance to build their businesses irrespective of where they are in Nigeria. It was birthed by individuals who saw the need to improve the standard of living in the society through cooperate responsibility, as everyone within the cooperative has an intension for the success of all. </p>
                <div class="pt-8 mb-12">
                    <div class="row">
                        <div class="col-lg-6">
                            <v-hover v-slot="{ hover }" open-delay="200">
                                <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" style="text-align: center" class="py-6 px-4 mx-auto elevation-4 firstCard" max-width="100%" height="90%">
                                    <h2 class="py-3">Our Vision</h2>
                                    <p>To create a platform where every member can be financially encouraged through their involvement in the financial activities of the society.</p>

                                </v-card>
                            </v-hover>
                        </div>
                        <div class="col-lg-6">
                            <v-hover v-slot="{ hover }" open-delay="200">
                                <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" style="text-align: center" class="py-6 px-4 mx-auto elevation-4 firstCard" max-width="100%" height="90%">
                                    <h2 class="py-3">Our Mission</h2>
                                    <p>To become a financial voice to our members through the empowerment of the individual businesses of everyone within the society by making sources available for the circulation of financial resources within the society.</p>
                                </v-card>
                            </v-hover>
                        </div>
                       
                    </div>
                     <!-- <a href="https://chatwith.io/s/5f33ce0c4aede" style="display: table; font-family: sans-serif; text-decoration: none; margin: 1em auto; color: #fff; font-size: 0.9em; padding: 1em 2em 1em 3.5em; border-radius: 2em; font-weight: bold; background: #25d366 url('https://tochat.be/click-to-chat-directory/css/whatsapp.svg') no-repeat 1.5em center; background-size: 1.6em;">Contacto con WhatsApp</a> -->
                </div>
            </div>
            <div class="col-lg-6">
                <div style="padding-left: 20%">
                    <img src="../../assets/second.svg" alt="" srcset="" >
                </div>
            </div>
        </div>
    </div>
    <div style="background: #F8F9FA; margin-top:-90px;" class="container-fluid">
        <div class="pt-10 container">
            <div class="services">
                <h2 id="services">Our Services</h2>
                <p>Check out our fantastic services.</p>
            </div>
            <div class="pt-8 pb-10 ml-0 pl-0 container">
                <div class="row">
                    <div class="col-lg-3">
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" width="400">
                                <v-img height="200px" width="100%" src="../../assets/service6.svg"></v-img>
                                <v-divider></v-divider>
                                <v-card-text class="card-text">
                                    <h4 class="font-weight-bold mb-2">
                                        Referral 
                                    </h4>
                                    <p class="pt-5">Get amazing bonus<br> on every referral </p>
                                </v-card-text>
                                <v-divider></v-divider>
                                
                            </v-card>
                        </v-hover>
                    </div>
                    <div class="col-lg-3">
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" width="400">
                                <v-img height="200px" width="100%" src="../../assets/serviceTwo.svg"></v-img>
                                <v-divider></v-divider>
                                <v-card-text class="card-text">
                                    <h4 class="font-weight-bold mb-2">
                                        Loan
                                    </h4>
                                    <p class="pt-5">Get every loan on <br>affordable rate (20%)</p>
                                </v-card-text>
                                <v-divider></v-divider>
                                
                            </v-card>
                        </v-hover>
                    </div>
                    <div class="col-lg-3" >
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" width="400">
                                <v-img height="200px" width="100%" src="../../assets/service3.svg"></v-img>
                                <v-divider></v-divider>
                                <v-card-text class="card-text">
                                    <h4 class="font-weight-bold mb-2" >
                                        Investment
                                    </h4>
                                    <p class="pt-5">Get fantastic interest rate <br> on every amount invested.</p>
                                </v-card-text>
                                <v-divider></v-divider>
                               
                            </v-card>
                        </v-hover>
                    </div>
                    <div class="col-lg-3">
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" width="400">
                                <v-img height="200px" width="100%" src="../../assets/service4.svg"></v-img>
                                <v-divider></v-divider>
                                <v-card-text class="card-text">
                                    <h4 class="font-weight-bold mb-2">
                                        Contribution
                                    </h4>
                                    <p class="pt-5">Get wonderful kick back on<br> your contribution</p>
                                </v-card-text>
                                <v-divider></v-divider>
                                
                            </v-card>
                        </v-hover>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    

    <!-- PLAN -->
    <!--  
        <div class="pt-10 container">
            <div class="services">
                <h2>Our Plan</h2>
                <p>We offer interesting plan from stage 1 - 4.</p>
            </div>
            <div class="mt-10 row">
                <div class="col-lg-3">
                    <v-hover v-slot="{ hover }" open-delay="200">
                        <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" style="border-radius: 10px">
                            <div>
                                <div style="" class="plan_header2 mb-10 py-8">
                                    <h2>PHASE 1</h2>
                                   
                                </div>
                                <div style="text-align: center" class="plan_txt">
                                    <p><span><sup>NGN</sup>10,000</span></p>
                                    <div class="offer-list">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item p-1" style="border: none">Get 100,000</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a href="/register"><button class="plan_btn">Create Account</button></a>
                                    </div>
                                </div>
                            </div>
                        </v-card>
                    </v-hover>
                </div>
                <div class="col-lg-3">
                    <v-hover v-slot="{ hover }" open-delay="200">
                        <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" style="border-radius: 10px">
                            <div>
                                <div style="" class="plan_header2 mb-10 py-8">
                                    <h2>PHASE 2</h2>
                                   
                                </div>
                                <div style="text-align: center" class="plan_txt">
                                    <p><span><sup>NGN</sup>50,000</span></p>
                                    <div class="offer-list">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item p-1" style="border: none">Get 500,000</li>
                                            
                                        </ul>
                                    </div>
                                    <div>
                                        <a href="/register"><button class="plan_btn">Create Account</button></a>
                                    </div>
                                </div>
                            </div>
                        </v-card>
                    </v-hover>
                </div>
                <div class="col-lg-3">
                    <v-hover v-slot="{ hover }" open-delay="200">
                        <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" style="border-radius: 10px">
                            <div>
                                <div style="" class="plan_header2 mb-10 py-8">
                                    <h2>PHASE 3</h2>
                                   
                                </div>
                                <div style="text-align: center" class="plan_txt">
                                    <p><span><sup>NGN</sup>300,000</span></p>
                                    <div class="offer-list">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item p-1" style="border: none">Get 3,000,000</li>
                                            
                                        </ul>
                                    </div>
                                    <div>
                                        <a href="/register"><button class="plan_btn">Create Account</button></a>
                                    </div>
                                </div>
                            </div>
                        </v-card>
                    </v-hover>
                </div>
                <div class="col-lg-3">
                    <v-hover v-slot="{ hover }" open-delay="200">
                        <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" style="border-radius: 10px">
                            <div>
                                <div style="" class="plan_header2 mb-10 py-8">
                                    <h2>PHASE 4</h2>
                                 
                                </div>
                                <div style="text-align: center" class="plan_txt">
                                    <p><span><sup>NGN</sup>1,500,000</span></p>
                                    <div class="offer-list">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item p-1" style="border: none">Get 15,000,000</li>
                                            
                                        </ul>
                                    </div>
                                    <div>
                                        <a href="/register"><button class="plan_btn">Create Account</button></a>
                                    </div>
                                </div>
                            </div>
                        </v-card>
                    </v-hover>
                </div>
            </div>
        </div>
    </div> -->

    <!-- NEWS BLOG -->
    <div style="background: #F8F9FA" class="mt-10 pb-10 container-fluid">
        <div class="pt-10 container">
            <div class="services">
                <h2 id="blog">Recent News From Blog</h2>
               
            </div>
            <!--  -->
            <div class="mt-10 row">
                <div class="col-lg-6">
                    <v-hover v-slot="{ hover }" open-delay="200">
                        <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" style="border-radius: 10px">
                            <div class="blog_news" style="display: flex">
                                <div>
                                    <img src="../../assets/news1.svg" alt="" srcset="">
                                </div>
                                <div>
                                    <h4>How you can get a loan</h4>
                                    <h5>ALEX Mike</h5>
                                    <p>Credit Score and History. An applicant's credit score is one of the most important factors a lender considers when evaluating a loan application.</p>
                                    <button class="team_btn">Read More</button>
                                </div>
                            </div>
                        </v-card>
                    </v-hover>
                </div>
                <div class="col-lg-6">
                    <v-hover v-slot="{ hover }" open-delay="200">
                        <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" style="border-radius: 10px">
                            <div class="blog_news" style="display: flex">
                                <div>
                                    <img src="../../assets/news2.svg" alt="" srcset="">
                                </div>
                                <div>
                                    <h4>Better ways to invest</h4>
                                    <h5>CHIKA C</h5>
                                    <p>Investing is the act of buying financial assets with the aim of growing your wealth as a result of those assets appreciating in value, along with paying interest or dividends in some cases</p>
                                    <button class="team_btn">Read More</button>
                                </div>
                            </div>
                        </v-card>
                    </v-hover>
                </div>
            </div>
        </div>
    </div>

    <!-- FAQS -->
    <div class="mt-10 pb-10 container-fluid">
        <div class="pt-10 container">
            <div class="services">
                <h2 id="faq">Faqs</h2>
            </div>
            <!--  -->
            <div class="mt-10 row">
                <div class="col-lg-6">
                    <div class="accordion" id="accordionExample">
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
                                <div class="mb-8 accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            I.	What is Belmaz Credit?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                           It is a financial system designed by Belmaz MCS Ltd. To enable her members access business resources.
                                        </div>
                                    </div>
                                </div>
                            </v-card>
                        </v-hover>
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
                                <div class="mb-8 accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                           II.	Is Belmaz MCS Ltd. Registered? 
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                           Yes we are registered under the cooperative society laws in Nigeria.
                                        </div>
                                    </div>
                                </div>
                            </v-card>
                        </v-hover>
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
                                <div class="mb-8 accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            III.	Who can participate? 
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Only duly registered members of the cooperative society.
                                        </div>
                                    </div>
                                </div>
                            </v-card>
                        </v-hover>
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
                                <div class="mb-8 accordion-item">
                                    <h2 class="accordion-header" id="headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                            IV.	Who can be a member? 
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Anyone of age 18 and above, while for those in higher institutions 16years and above are also permitted.
                                        </div>
                                    </div>
                                </div>
                            </v-card>
                        </v-hover>
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
                                <div class="mb-8 accordion-item">
                                    <h2 class="accordion-header" id="headingFive">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                                            V.	How can I Register? 
                                        </button>
                                    </h2>
                                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            To register, go to the sign up page and follow the instruction on registration.
                                        </div>
                                    </div>
                                </div>
                            </v-card>
                        </v-hover>
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
                                <div class="mb-8 accordion-item">
                                    <h2 class="accordion-header" id="headingSix">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                                            VI.	Is there any financial involvement during registration? 
                                        </button>
                                    </h2>
                                    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                           Yes you are expected to pay a registration sum of ten thousand naira only (N10,000).
                                        </div>
                                    </div>
                                </div>
                            </v-card>
                        </v-hover>
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
                                <div class="mb-8 accordion-item">
                                    <h2 class="accordion-header" id="heading7">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapseThree">
                                           VII.	Outside the registration sum am I expected to make any other financial commitment?
                                        </button>
                                    </h2>
                                    <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                          Yes, Every registered member will make a contribution of the sum of ten thousand naira only.
                                        </div>
                                    </div>
                                </div>
                            </v-card>
                        </v-hover>
                        
                    </div>
                </div>
                <div style="text-align: right" class="col-lg-6">
                    <div>
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
                                <div class="mb-8 accordion-item">
                                    <h2 class="accordion-header" id="heading8">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapseThree">
                                          VIII.	What do I gain as a member? 
                                        </button>
                                    </h2>
                                    <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                         There are several opportunities within our organization which includes:<br/>
a.	Access to loan facilities with a simple system of repayment through what the cooperative generates for you, so you need not border of how to repay such facilities.<br/>
b.	Access to returns of contributions which is automated within the system to ensure that from time to time every member receives regular return form the proceeds of membership contribution.<br/>
c.	Everyone who refers anyone to the society is handsomely rewarded with up to 40% of membership registration.<br/>
d.	Access to investment with profitable ROI.<br/>
e.	Access to business platform for young businesses within our society<br/>

                                        </div>
                                    </div>
                                </div>
                            </v-card>
                        </v-hover>
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
                                <div class="mb-8 accordion-item">
                                    <h2 class="accordion-header" id="heading9">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapseThree">
                                          IX.	Are there levels of participation in the system? 
                                        </button>
                                    </h2>
                                    <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        Yes, there are about four levels of participation and these all happens from your one time membership contribution.

                                        </div>
                                    </div>
                                </div>
                            </v-card>
                        </v-hover>
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
                                <div class="mb-8 accordion-item">
                                    <h2 class="accordion-header" id="heading10">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapseThree">
                                         X.	What happens at the end of the participation in the four levels?
                                        </button>
                                    </h2>
                                    <div id="collapse10" class="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                       At the end of the fourth level you are expected to re-register to enable you pass through that process again.

                                        </div>
                                    </div>
                                </div>
                            </v-card>
                        </v-hover>
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
                                <div class="mb-8 accordion-item">
                                    <h2 class="accordion-header" id="heading11">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapseThree">
                                        XI.	Are there rewards for these levels?
                                        </button>
                                    </h2>
                                    <div id="collapse11" class="accordion-collapse collapse" aria-labelledby="heading11" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Yes, the rewards are as follows:<br/>
                                            a.	Level one reward is forty thousand naira only<br/>
                                            b.	Level two reward is one hundred and fifty thousand naira<br/>
                                            c.	Level three reward is one million five hundred thousand naira only.<br/>
                                            d.	Level four reward is ten million naira only.<br/>

                                        </div>
                                    </div>
                                </div>
                            </v-card>
                        </v-hover>
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
                                <div class="mb-8 accordion-item">
                                    <h2 class="accordion-header" id="heading12">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapseThree">
                                       XII.	When can I make withdrawal? 
                                        </button>
                                    </h2>
                                    <div id="collapse12" class="accordion-collapse collapse" aria-labelledby="heading12" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            There are two levels of withdrawal which includes:<br/>
                                            a.	Withdrawal from referral bonus which can be done as soon as one have up to twenty thousand naira in his/her wallet.<br/>
                                            b.	The second is usually at the end of each level.<br/>


                                        </div>
                                    </div>
                                </div>
                            </v-card>
                        </v-hover>
                         <v-hover v-slot="{ hover }" open-delay="200">
                            <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
                                <div class="mb-8 accordion-item">
                                    <h2 class="accordion-header" id="heading13">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapseThree">
                                        XIII.	How does the loan work? 
                                        </button>
                                    </h2>
                                    <div id="collapse13" class="accordion-collapse collapse" aria-labelledby="heading13" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            The loan starts from the second level and there are limited amounts one can apply for and these all depends on the level one is.
                                        </div>
                                    </div>
                                </div>
                            </v-card>
                        </v-hover>
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
                                <div class="mb-8 accordion-item">
                                    <h2 class="accordion-header" id="heading14">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapseThree">
                                       XIV.	How does the investment work? 
                                        </button>
                                    </h2>
                                    <div id="collapse14" class="accordion-collapse collapse" aria-labelledby="heading14" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            The investment are in levels and each level attracts a certain return on investment.
                                        </div>
                                    </div>
                                </div>
                            </v-card>
                        </v-hover>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- GET IN TOUCH -->
    <div style="background: #F8F9FA; margin-top:-65px !important" class="mt-10 pb-10 container-fluid">
        <div class="pt-10 container">
            <div class="services">
                <h2 id="contact">Get in Touch With Us !</h2>
               
            </div>
            <!--  -->
            <div class="mt-0 row">
                <div class="col-lg-6">
                    <div class="mail_txt">
                        <div style="display: none">
                            <h6>Your Message Sent succefully</h6>
                            <a href="#"><span style="color: #285B2A"><i class="fas fa-times"></i></span></a>
                        </div>
                    </div>
                    <div class="mt-10">
                        <div class="form_list1" style="display: flex">
                            <v-text-field style="margin-right: 20px" label=" Your Name" placeholder=" Name" prepend-inner-icon="mdi-account" rounded solo></v-text-field>
                            <v-text-field style="" label=" Email Address" placeholder=" Email" prepend-inner-icon="mdi-email" rounded solo></v-text-field>
                        </div>
                        <div>
                            <v-text-field style="" label=" Your Subject here" placeholder=" Email" prepend-inner-icon="mdi-pencil" rounded solo></v-text-field>
                        </div>
                        <div>
                            <v-textarea solo name="input-7-4" rounded prepend-inner-icon="mdi-pencil" label="Your Message here"></v-textarea>
                        </div>
                        <div>
                            <button class="msg_btn">Send Message</button>
                        </div>
                    </div>
                </div>
                <div style="text-align: right" class="col-lg-6">
                    <div>
                        <img src="../../assets/contact2.svg" alt="" srcset="">
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <!-- footer -->
    <div class="mt-10 pb-10 container-fluid" style="margin-top:-90px">
        <div class="pt-10 container">
            <div class="mt-10 row">
                <div class="col-lg-3">
                    <div class="other_pages">
                        <h4>Belmaz Credit</h4>
                        <p>Belmaz Credit is a finacial empowerment investment firm in collaboration with Multipurpose Cooporative Society Limited .</p>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="other_pages">
                        <!-- <h4 class="ml-6">Other Pages</h4>
                        <ul>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Campaign</a></li>
                            <li><a href="#">Digital Agency</a></li>
                        </ul> -->
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="other_pages2">
                        <!-- <h4 class="ml-4"></h4>
                        <ul>
                            <li>Marketing</li>
                            <li>Campaign</li>
                            <li>Digital Agency</li>
                        </ul> -->
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="other_pages">
                        <h4 class="ml-4">Contact Info</h4>
                        <ul>
                            <li><span style="margin-right: 10px; color: #FC8009"><i class="fas fa-map-marker-alt"></i></span>Enugu, Nigeria</li>
                            <li><span style="margin-right: 10px; color: #FC8009"><i class="fas fa-envelope"></i></span>info@belmazcredit.com</li>
                            <!-- <li><span style="margin-right: 10px; color: #FC8009"><i class="fas fa-phone-alt"></i></span>+ 234 806 944 9137</li> -->
                        </ul>
                        <div class="mt-8">
                            <a href="#" class="tweet_icon2 mr-6">
                                <span><i class="fab fa-facebook-f"></i></span>
                            </a>
                            <a href="#" class="tweet_icon mr-6">
                                <span><i class="fab fa-twitter"></i></span>
                            </a>
                            <a href="#" class="tweet_icon3 mr-6">
                                <span><i class="fab fa-google"></i></span>
                            </a>
                        </div>
                    </div>
                </div>
                <center>Belmaz Credit is Powered by Belmaz Multi Purpose Cooperative Society</center>
            </div>
              <!--Div where the WhatsApp will be rendered-->   
            <div id="WAButton"></div>  
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: () => ({
        view: {
            topOfPage: true
        }
    }),

    beforeMount() {
        window.addEventListener('scroll', this.handleScroll)
    },

    methods: {
        handleScroll() {
            if (window.pageYOffset > 0) {
                if (this.view.topOfPage) this.view.topOfPage = false
            } else {
                if (!this.view.topOfPage) this.view.topOfPage = true
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');

@media (max-width: 1000px) {
    img {
        display: none;
    }
}

.navbar-toggler-icon {
  background-image: url('../../assets/icon.png');
}
.tweet_icon {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-family: Nunito, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    box-sizing: border-box;
    color: #639;
    text-decoration: none;
    font-size: 30px;
    margin-left: 0 !important;
    display: inline-block;
    width: 50px;
    height: auto;
    padding: 5px;
    margin: 0 10px;
    text-align: center;
    overflow: hidden;
    border-radius: 28%;
    box-shadow: -1px 5px 15px -4px rgba(0, 0, 0, .1);
    opacity: .99;
    background: #fff;
    transition: all .35s;
    transition-timing-function: cubic-bezier(.31, -.105, .43, 1.59);

    span {
        color: #00acee;
    }

    &:hover {
        background: #00acee;

        span {
            color: #fff;
        }
    }
}

.tweet_icon2 {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-family: Nunito, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    box-sizing: border-box;
    color: #639;
    text-decoration: none;
    font-size: 30px;
    margin-left: 0 !important;
    display: inline-block;
    width: 50px;
    height: auto;
    padding: 5px;
    margin: 0 10px;
    text-align: center;
    overflow: hidden;
    border-radius: 28%;
    box-shadow: -1px 5px 15px -4px rgba(0, 0, 0, .1);
    opacity: .99;
    background: #fff;
    transition: all .35s;
    transition-timing-function: cubic-bezier(.31, -.105, .43, 1.59);

    span {
        color: #3b5998;
    }

    &:hover {
        background: #3b5998;

        span {
            color: #fff;
        }
    }
}

.tweet_icon3 {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-family: Nunito, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    box-sizing: border-box;
    color: #639;
    text-decoration: none;
    font-size: 30px;
    margin-left: 0 !important;
    display: inline-block;
    width: 50px;
    height: auto;
    padding: 5px;
    margin: 0 10px;
    text-align: center;
    overflow: hidden;
    border-radius: 28%;
    box-shadow: -1px 5px 15px -4px rgba(0, 0, 0, .1);
    opacity: .99;
    background: #fff;
    transition: all .35s;
    transition-timing-function: cubic-bezier(.31, -.105, .43, 1.59);

    span {
        color: #DB4437;
    }

    &:hover {
        background: #DB4437;

        span {
            color: #fff;
        }
    }
}

.other_pages {
    h4 {
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

        font-family: Nunito, sans-serif;
        cursor: default;
        text-align: left !important;
        box-sizing: border-box;
        margin-top: 0;
        line-height: 1.2;
        font-weight: 700 !important;
        color: #332e38;
        margin-bottom: .5rem;
        font-size: 18px;
    }

    p {
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        font-family: Nunito, sans-serif;
        font-weight: 400;
        line-height: 1.5;
        font-size: 15px;
        cursor: default;
        color: #333;
        text-align: left !important;
        box-sizing: border-box;
        margin-top: 0;
        margin-bottom: 1rem;
    }

    li {
        list-style: none;
        margin: 18px 0;
        padding: 0;
        font-family: Merriweather;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;

        a {
            text-decoration: none;
            padding: 0;
        }
    }
}

.other_pages2 {
    h4 {
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

        font-family: Nunito, sans-serif;
        cursor: default;
        text-align: left !important;
        box-sizing: border-box;
        margin-top: 0;
        line-height: 1.2;
        font-weight: 700 !important;
        color: #332e38;
        margin-bottom: .5rem;
        font-size: 18px;
    }

    li {
        list-style: none;
        margin: 18px 0;
        padding: 0;
        font-family: Merriweather;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 110%;
        color: #000;

        a {
            text-decoration: none;
            padding: 0;
        }
    }

    ul {
        list-style: none;
    }

    li::marker {
        content: "✓ ";
        font-size: 1.5rem;
        color: #FFC107;
    }
}

.mail_txt {
    div:nth-child(1) {
        background-color: #DBEFDC;
        padding: 1rem;
        border-radius: 1rem;
        display: flex;
        justify-content: space-between;

        h6 {
            -webkit-text-size-adjust: 100%;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            font-family: Nunito, sans-serif;
            text-align: left;
            line-height: 1.5;
            font-size: 15px;
            cursor: default;
            color: #285b2a;
            box-sizing: border-box;
            font-weight: bolder;
        }
    }
}

.accordion-item {
    button {
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        font-family: Nunito, sans-serif;
        font-weight: 400;
        text-align: left;
        line-height: 1.5;
        font-size: 15px;
        color: #333;
        cursor: default;
        -webkit-box-direction: normal;
        word-wrap: break-word;
        box-sizing: border-box;
        display: block;
        margin-bottom: 0;
        background-color: rgba(0, 0, 0, .03);
        border-bottom: 1px solid rgba(0, 0, 0, .125);
        padding: 1.8rem 1rem !important;
        border-color: rgba(0, 0, 0, .03);
        border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
    }
}

.feedback_txt {
    p {
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        font-family: Nunito, sans-serif;
        font-weight: 400;
        text-align: left;
        line-height: 1.5;
        font-size: 15px;
        color: #333;
        cursor: default;
        -webkit-box-direction: normal;
        word-wrap: break-word;
        box-sizing: border-box;
        margin-top: 0;
        margin-bottom: 1.5rem !important;
    }
}

.blog_news {
    padding-top: 3rem;
    padding-left: 2rem;
    padding-right: 2rem;
    // padding-bottom:1rem;

    h4 {
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        font-family: Nunito, sans-serif;
        cursor: default;
        word-wrap: break-word;
        text-align: left !important;
        -webkit-box-direction: normal;
        box-sizing: border-box;
        line-height: 1.2;
        font-size: 1.42275rem;
        color: #332e38;
        text-transform: capitalize !important;
        font-weight: 700 !important;
        margin: 0 !important;
    }

    h5 {
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        font-family: Nunito, sans-serif;
        cursor: default;
        word-wrap: break-word;
        text-align: left !important;
        -webkit-box-direction: normal;
        box-sizing: border-box;
        margin-top: 0;
        margin-bottom: .5rem;
        line-height: 1.2;
        font-size: 1.01625rem;
        text-transform: uppercase !important;
        font-weight: 300 !important;
        color: #d2d2d2;
        letter-spacing: .2em;
    }

    p {
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        font-family: Nunito, sans-serif;
        line-height: 1.5;
        font-size: 15px;
        color: #333;
        cursor: default;
        word-wrap: break-word;
        text-align: left !important;
        -webkit-box-direction: normal;
        font-weight: 300 !important;
        box-sizing: border-box;
        margin-top: 30px;
        margin-bottom: 1rem;
    }
}

.main_header {
    background-image: linear-gradient(to right, #DB1F5C, #FA7B0C);
}

.naviga_bar {
    background-image: linear-gradient(to right, #DB1F5C, #FA7B0C);
    // position: fixed;
    padding: 0;
    margin: 0;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navbar {
        width: 100%;
        height: 12% !important;
        padding-left: 15%;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        font-family: Nunito, sans-serif;
        font-weight: 400;
        text-align: left;
        line-height: 1.5;
        font-size: 15px;
        color: #333;
        cursor: default;
        box-sizing: border-box;
        background-image: linear-gradient(to right, #DB1F5C, #FA7B0C) !important;
        left: 0;
        right: 0;
        top: 0;
        // box-shadow: 0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28);
        animation: slideDown .6s forwards;
        transition: all .5s ease-in-out !important;

        &.onScroll {
            -webkit-text-size-adjust: 100%;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            font-family: Nunito, sans-serif;
            font-weight: 400;
            height: 9% !important;
            text-align: left;
            line-height: 1.5;
            font-size: 15px;
            color: #333;
            cursor: default;
            box-sizing: border-box;
            background: linear-gradient(-29deg, #ff8a00, #da1b60) !important;
            width: 100%;
            padding-left: 15%;
            z-index: 999;
            position: fixed !important;
            left: 0;
            right: 0;
            top: 0;
            box-shadow: 0 0 4px rgba(0, 0, 0, .14), 0 4px 8px rgba(0, 0, 0, .28);
            animation: slideDown .6s forwards;
            transition: all .5s ease-in-out !important;
        }

    }
}

.icon_avatar2 {
    display: flex;
    // padding: 0 20px;
    justify-content: left;
    padding-left: 10%;

    img {
        border-radius: 50%;
        width: 20%;
        margin: 0;
        padding: 0;
    }

    p {
        padding-top: 15px;
        padding-left: 15px;
        margin: 0;
    }
}

.team_avatar {
    text-align: center;
    justify-content: center;
    align-items: center;

    img {
        border-radius: 50%;
        width: 40%;
    }

    h5 {
        margin-top: 10px;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        font-family: Nunito, sans-serif;
        cursor: default;
        -webkit-box-direction: normal;
        word-wrap: break-word;
        text-align: center !important;
        box-sizing: border-box;
        line-height: 1.2;
        color: #332e38;
        // margin: 0 !important;
        font-weight: 600 !important;
        font-size: 18px;
    }

    h6 {
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        font-family: Nunito, sans-serif;
        font-weight: 400;
        line-height: 1.5;
        font-size: 15px;
        color: #333;
        cursor: default;
        -webkit-box-direction: normal;
        word-wrap: break-word;
        text-align: center !important;
        box-sizing: border-box;
        margin-bottom: 1rem;
        margin-top: 0 !important;
    }

    p {
        font-family: Nunito, sans-serif;
        padding-left: 2.5rem;
        padding-right: 2.5rem;
        font-weight: 400;
        line-height: 1.5;
        font-size: 15px;
        color: #333;
        cursor: default;
        -webkit-box-direction: normal;
        word-wrap: break-word;
        text-align: center !important;
        box-sizing: border-box;
        margin-top: 0;
        margin-bottom: 1rem;
    }
}

.plan_btn {
    margin-top: 50px;
    margin-bottom: 50px;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-family: Nunito, sans-serif;
    box-sizing: border-box;
    text-decoration: none;
    display: inline-block;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    color: #fff;
    background-image: linear-gradient(to right, #DB1F5C, #FA7B0C);
    padding: 0.51rem 5rem;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1.5rem !important;
    padding-bottom: .5rem !important;
    padding-right: 3rem !important;
    padding-left: 3rem !important;
    text-transform: lowercase !important;
    border-color: #ffc107;
    transition: all .5s ease-in 0s;
    transition-property: all;
    transition-duration: .5s;
    transition-timing-function: ease-in;
    transition-delay: 0s;
    border-radius: 3px 15px;
}

.team_btn {
    margin-top: 10px;
    margin-bottom: 50px;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-family: Nunito, sans-serif;
    box-sizing: border-box;
    text-decoration: none;
    display: inline-block;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    color: #fff;
    background-image: linear-gradient(to right, #DB1F5C, #FA7B0C);
    padding: 0.51rem 5rem;
    font-size: 0.71rem;
    line-height: 1.5;
    margin-bottom: 1.5rem !important;
    padding-top: 0.61rem !important;
    padding-bottom: 0.61rem !important;
    padding-right: 1rem !important;
    padding-left: 1rem !important;
    text-transform: uppercase !important;
    border-color: #ffc107;
    transition: all .5s ease-in 0s;
    transition-property: all;
    transition-duration: .5s;
    transition-timing-function: ease-in;
    transition-delay: 0s;
    border-radius: 3px 15px;
}

.msg_btn {
    margin-top: 10px;
    margin-bottom: 50px;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-family: Nunito, sans-serif;
    box-sizing: border-box;
    text-decoration: none;
    display: inline-block;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    color: #fff;
    background-image: linear-gradient(to right, #DB1F5C, #FA7B0C);
    padding: 0.51rem 5rem;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1.5rem !important;
    padding-top: 0.81rem !important;
    padding-bottom: 0.81rem !important;
    padding-right: 1rem !important;
    padding-left: 1rem !important;
    width: 100%;
    text-transform: capitalize !important;
    border-color: #ffc107;
    transition: all .5s ease-in 0s;
    transition-property: all;
    transition-duration: .5s;
    transition-timing-function: ease-in;
    transition-delay: 0s;
    border-radius: 3px 15px;
}

.icon_avatar {
    display: flex;
    text-align: center;
    padding: 10px 3.8rem;
    justify-content: space-evenly;
    align-items: center;
}

.plan_header {
    text-align: center;
    background-color: #F8F9FA;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    h2 {
        font-family: Nunito, sans-serif;
        cursor: default;
        -webkit-box-direction: normal;
        word-wrap: break-word;
        text-align: center !important;
        box-sizing: border-box;
        margin-top: 0;
        line-height: 1.2;
        margin-bottom: .5rem !important;
        text-transform: uppercase !important;
        font-weight: 700 !important;
        color: #332e38;
        font-size: 18px;
    }

    p {
        font-family: Nunito, sans-serif;
        font-weight: 400;
        line-height: 1.5;
        font-size: 15px;
        color: #333;
        cursor: default;
        -webkit-box-direction: normal;
        word-wrap: break-word;
        text-align: center !important;
        box-sizing: border-box;
        margin-top: 0;
        text-transform: uppercase !important;
        margin-bottom: 0 !important;
    }
}

.plan_header2 {
    background-image: linear-gradient(to right, #DB1F5C, #FA7B0C);
    text-align: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    h2 {
        font-family: Nunito, sans-serif;
        cursor: default;
        -webkit-box-direction: normal;
        word-wrap: break-word;
        text-align: center !important;
        box-sizing: border-box;
        margin-top: 0;
        line-height: 1.2;
        margin-bottom: .5rem !important;
        text-transform: uppercase !important;
        font-weight: 700 !important;
        color: #fff;
        font-size: 18px;
    }

    p {
        font-family: Nunito, sans-serif;
        font-weight: 400;
        line-height: 1.5;
        font-size: 15px;
        color: #fff;
        cursor: default;
        -webkit-box-direction: normal;
        word-wrap: break-word;
        text-align: center !important;
        box-sizing: border-box;
        margin-top: 0;
        text-transform: uppercase !important;
        margin-bottom: 0 !important;
    }
}

.plan_txt {
    p span:nth-child(1) {
        font-family: Nunito, sans-serif;
        line-height: 1.5;
        color: #333;
        cursor: default;
        word-wrap: break-word;
        text-align: center !important;
        box-sizing: border-box;
        font-weight: 700 !important;
        font-size: 25px;
    }

    p span:nth-child(2) {
        font-family: Nunito, sans-serif;
        font-weight: 400;
        line-height: 1.5;
        font-size: 15px;
        color: #333;
        cursor: default;
        word-wrap: break-word;
        text-align: center !important;
        box-sizing: border-box;
    }
}

.card-label {
    width: 100%;
    border-radius: 9px;
    border: transparent;
    height: auto;
    background: #fff;
    margin-top: 8%;
    display: flex;

    svg {
        fill: #27ae60;
    }

    h2 {
        font-family: Nunito, sans-serif;
        font-size: 1.30rem;
        font-weight: 600;

    }
}

.buttonright {
    margin-top: 10px;
    margin-bottom: 50px;

    font-family: Nunito, sans-serif;
    text-decoration: none;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: transparent;
    color: #47404f;
    background-image: linear-gradient(to right, #DB1F5C, #FA7B0C);
    padding: 1.5rem 2rem;
    font-size: 1.01625rem;
    text-transform: uppercase !important;
    transition: all .5s ease-in 0s;
    transition-property: all;
    transition-duration: .5s;
    transition-timing-function: ease-in;
    transition-delay: 0s;
    border-radius: 3px 15px;
}

.card-text {
    p {
        width: 280px;
        font-family: Nunito, sans-serif;
        text-align: left;
        margin-bottom: .5rem;
        line-height: 1.2;
        font-size: 16px;
        color: #332e38;
        padding: 0 10px;
        margin-top: -.4rem;
    }
}

.services {
    h2 {
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        font-family: Nunito, sans-serif;
        text-align: left;
        cursor: default;
        box-sizing: border-box;
        margin-bottom: .5rem;
        line-height: 1.2;
        font-size: 1.626rem;
        color: #332e38;
        font-weight: 700 !important;
        margin-top: -.4rem;
    }

    p {
        width: 50%;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        font-family: Nunito, sans-serif;
        font-weight: 400;
        text-align: left;
        line-height: 1.5;
        font-size: 15px;
        color: #333;
        cursor: default;
        box-sizing: border-box;
        margin-top: 0;
        margin-bottom: 0 !important;
        max-width: 600px;
    }
}

.firstCard {
    height: auto;
    border-radius: 5px;

    h2 {
        font-family: Proxima Nova;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 110%;
        // margin-top: 20%;
        color: #000;
    }
}

.v-card.on-hover.theme--dark {
    background-color: rgba(#FFF, 0.8)
}

.v-card__text {
    color: #000
}

.firstCard:hover {
    -moz-box-shadow: 0 0 10px #ccc;
    -webkit-box-shadow: 0 0 10px #ccc;
    box-shadow: 0 0 10px rgb(36, 33, 33);
}

.navbar-nav {
    a {
        text-decoration: none;
        color: #fff;
        font-size: 18px;
    }
}

.big_txt {
    h2 {
        width: 100%;
        height: 106px;
        font-family: Proxima Nova;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 110%;
        color: #FFFFFF;
    }

    p {
        width: 100%;
        font-family: Merriweather;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 110%;
        color: #FFFFFF;
    }

    ul {
        list-style: none;
    }

    li {
        font-family: Merriweather;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 110%;
        color: #FFFFFF;
    }

    li::marker {
        content: "✓ ";
        font-size: 1.5rem;
        color: #FFC107;
    }

    .button1 {
        margin-top: 50px;
        margin-bottom: 50px;

        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        --blue: #263db5;
        --indigo: #6610f2;
        --gray-dark: #52495a;
        --purple: #639;
        --pink: #e83e8c;
        --red: #d22346;
        --orange: #e97d23;
        --yellow: #ffc107;
        --green: #4caf50;
        --teal: #20c997;
        --cyan: #9c27b0;
        --white: #fff;
        --gray: #70657b;
        --primary: #639;
        --secondary: #52495a;
        --success: #4caf50;
        --info: #263db5;
        --warning: #ffc107;
        --danger: #d22346;
        --light: #bbb;
        --dark: #47404f;
        --gray-100: #f8f9fa;
        --gray-200: #eee;
        --gray-300: #dee2e6;
        --gray-400: #ced4da;
        --gray-500: #bbb;
        --gray-600: #70657b;
        --gray-700: #665c70;
        --gray-800: #52495a;
        --gray-900: #47404f;
        --breakpoint-xs: 0;
        --breakpoint-sm: 576px;
        --breakpoint-md: 768px;
        --breakpoint-lg: 992px;
        --breakpoint-xl: 1200px;
        --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-family: Nunito, sans-serif;
        box-sizing: border-box;
        text-decoration: none;
        display: inline-block;
        font-weight: 400;
        text-align: center;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        padding: 1rem 5rem;
        font-size: 1.01625rem;
        line-height: 1.5;
        margin-right: .5rem !important;
        margin-bottom: 1.5rem !important;
        padding-bottom: .5rem !important;
        padding-right: 3rem !important;
        padding-left: 3rem !important;
        text-transform: uppercase !important;
        transition: all .5s ease-in 0s;
        transition-property: all;
        transition-duration: .5s;
        transition-timing-function: ease-in;
        transition-delay: 0s;
        border-radius: 3px 15px;
        color: #fff;
        background-color: transparent;
        background-image: none;
        border-color: #fff;

        &:hover {
            background-color: #fff;
            color: #000;
        }
    }

    .button2 {
        margin-top: 50px;
        margin-bottom: 50px;

        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        --blue: #263db5;
        --indigo: #6610f2;
        --gray-dark: #52495a;
        --purple: #639;
        --pink: #e83e8c;
        --red: #d22346;
        --orange: #e97d23;
        --yellow: #ffc107;
        --green: #4caf50;
        --teal: #20c997;
        --cyan: #9c27b0;
        --white: #fff;
        --gray: #70657b;
        --primary: #639;
        --secondary: #52495a;
        --success: #4caf50;
        --info: #263db5;
        --warning: #ffc107;
        --danger: #d22346;
        --light: #bbb;
        --dark: #47404f;
        --gray-100: #f8f9fa;
        --gray-200: #eee;
        --gray-300: #dee2e6;
        --gray-400: #ced4da;
        --gray-500: #bbb;
        --gray-600: #70657b;
        --gray-700: #665c70;
        --gray-800: #52495a;
        --gray-900: #47404f;
        --breakpoint-xs: 0;
        --breakpoint-sm: 576px;
        --breakpoint-md: 768px;
        --breakpoint-lg: 992px;
        --breakpoint-xl: 1200px;
        --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-family: Nunito, sans-serif;
        box-sizing: border-box;
        text-decoration: none;
        display: inline-block;
        font-weight: 400;
        text-align: center;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        color: #47404f;
        background-color: #ffc107;
        padding: 1rem 5rem;
        font-size: 1.01625rem;
        line-height: 1.5;
        margin-bottom: 1.5rem !important;
        padding-bottom: .5rem !important;
        padding-right: 3rem !important;
        padding-left: 3rem !important;
        text-transform: uppercase !important;
        border-color: #ffc107;
        transition: all .5s ease-in 0s;
        transition-property: all;
        transition-duration: .5s;
        transition-timing-function: ease-in;
        transition-delay: 0s;
        border-radius: 3px 15px;
    }

    .image_one {
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        --blue: #263db5;
        --indigo: #6610f2;
        --gray-dark: #52495a;
        --purple: #639;
        --pink: #e83e8c;
        --red: #d22346;
        --orange: #e97d23;
        --yellow: #ffc107;
        --green: #4caf50;
        --teal: #20c997;
        --cyan: #9c27b0;
        --white: #fff;
        --gray: #70657b;
        --primary: #639;
        --secondary: #52495a;
        --success: #4caf50;
        --info: #263db5;
        --warning: #ffc107;
        --danger: #d22346;
        --light: #bbb;
        --dark: #47404f;
        --gray-100: #f8f9fa;
        --gray-200: #eee;
        --gray-300: #dee2e6;
        --gray-400: #ced4da;
        --gray-500: #bbb;
        --gray-600: #70657b;
        --gray-700: #665c70;
        --gray-800: #52495a;
        --gray-900: #47404f;
        --breakpoint-xs: 0;
        --breakpoint-sm: 576px;
        --breakpoint-md: 768px;
        --breakpoint-lg: 992px;
        --breakpoint-xl: 1200px;
        --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-family: Nunito, sans-serif;
        font-weight: 400;
        line-height: 1.5;
        font-size: 15px;
        cursor: default;
        text-align: left !important;
        color: #fff !important;
        box-sizing: border-box;
        border-style: none;
        vertical-align: middle;
        max-width: 100%;
    }

    .feat_txt {
        h2 {
            -webkit-text-size-adjust: 100%;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            --blue: #263db5;
            --indigo: #6610f2;
            --gray-dark: #52495a;
            --purple: #639;
            --pink: #e83e8c;
            --red: #d22346;
            --orange: #e97d23;
            --yellow: #ffc107;
            --green: #4caf50;
            --teal: #20c997;
            --cyan: #9c27b0;
            --white: #fff;
            --gray: #70657b;
            --primary: #639;
            --secondary: #52495a;
            --success: #4caf50;
            --info: #263db5;
            --warning: #ffc107;
            --danger: #d22346;
            --light: #bbb;
            --dark: #47404f;
            --gray-100: #f8f9fa;
            --gray-200: #eee;
            --gray-300: #dee2e6;
            --gray-400: #ced4da;
            --gray-500: #bbb;
            --gray-600: #70657b;
            --gray-700: #665c70;
            --gray-800: #52495a;
            --gray-900: #47404f;
            --breakpoint-xs: 0;
            --breakpoint-sm: 576px;
            --breakpoint-md: 768px;
            --breakpoint-lg: 992px;
            --breakpoint-xl: 1200px;
            --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
            font-family: Nunito, sans-serif;
            text-align: left;
            cursor: default;
            box-sizing: border-box;
            margin-bottom: .5rem;
            line-height: 1.2;
            font-size: 1.626rem;
            color: #332e38;
            font-weight: 700 !important;
            margin-top: -.4rem;
        }

        p {
            -webkit-text-size-adjust: 100%;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            --blue: #263db5;
            --indigo: #6610f2;
            --gray-dark: #52495a;
            --purple: #639;
            --pink: #e83e8c;
            --red: #d22346;
            --orange: #e97d23;
            --yellow: #ffc107;
            --green: #4caf50;
            --teal: #20c997;
            --cyan: #9c27b0;
            --white: #fff;
            --gray: #70657b;
            --primary: #639;
            --secondary: #52495a;
            --success: #4caf50;
            --info: #263db5;
            --warning: #ffc107;
            --danger: #d22346;
            --light: #bbb;
            --dark: #47404f;
            --gray-100: #f8f9fa;
            --gray-200: #eee;
            --gray-300: #dee2e6;
            --gray-400: #ced4da;
            --gray-500: #bbb;
            --gray-600: #70657b;
            --gray-700: #665c70;
            --gray-800: #52495a;
            --gray-900: #47404f;
            --breakpoint-xs: 0;
            --breakpoint-sm: 576px;
            --breakpoint-md: 768px;
            --breakpoint-lg: 992px;
            --breakpoint-xl: 1200px;
            --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
            font-family: Nunito, sans-serif;
            font-weight: 400;
            text-align: left;
            line-height: 1.5;
            font-size: 15px;
            color: #333;
            cursor: default;
            box-sizing: border-box;
            margin-top: 0;
            max-width: 600px;
            margin-bottom: 0 !important;
        }
    }
}
</style>
