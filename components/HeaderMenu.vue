<template>
        <div class="nav-container">
            <div>
                <div class="bar bg--dark bar--sm visible-sm visible-xs">
                    <div class="container">
                        <div class="row">
                            <div class="col-3 col-md-2">
                                <a href="/"> <img class="logo logo-dark" alt="logo" src="/img/logo_backer_black.png"> <img class="logo logo-light" alt="logo" src="/img/logo_backer_white.png"> </a>
                            </div>
                            <div class="col-9 col-md-10 text-right">
                                <a href="#" class="hamburger-toggle" data-toggle-class="#menu3;hidden-xs hidden-sm"> <i class="icon icon--sm stack-interface stack-menu"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
                <nav class="bar bar--sm bg--dark" id="menu3">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 hidden-xs hidden-sm order-lg-1">
                                <div class="bar__module">
                                    <nuxt-link to="/"> <img class="logo logo-dark" alt="logo" src="/img/logo_backer_black.png"> <img class="logo logo-light" alt="logo" src="/img/logo_backer_white.png"></nuxt-link> 
                                </div>
                            </div>
                            <div class="col-lg-3 order-lg-3">
                                <div class="bar__module">
                                    <form> <input class="searchbar" type="search" placeholder="Search site" name="query"> </form>
                                </div>
                            </div>
                            <div class="col-lg-5 text-right text-left-xs order-lg-4">
                                <div class="bar__module">
                                    <ul class="menu-horizontal text-left">
                                        <li> <nuxt-link to="/other">Explore</nuxt-link> </li>
                                        <li> <nuxt-link to="/register">Sign Up</nuxt-link> </li>
                                        <li> <nuxt-link to="/login">Login</nuxt-link> </li>                                        
                                    </ul>
                                </div>
                                <div class="bar__module">
                                    <a class="btn btn--primary btn--sm type--uppercase" href="/register"> <span class="btn__text">
                                    Create Page
                                </span> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
</template>