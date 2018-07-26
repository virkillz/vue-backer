<template>
        <div class="nav-container ">
            <div class="bar bar--sm visible-xs">
                <div class="container">
                    <div class="row">
                        <div class="col-3 col-md-2">
                            <a href="index.html">
                                <img class="logo logo-dark" alt="logo" src="img/logo-dark.png" />
                                <img class="logo logo-light" alt="logo" src="img/logo-light.png" />
                            </a>
                        </div>
                        <div class="col-9 col-md-10 text-right">
                            <a href="#" class="hamburger-toggle" data-toggle-class="#menu1;hidden-xs">
                                <i class="icon icon--sm stack-interface stack-menu"></i>
                            </a>
                        </div>
                    </div>
                    <!--end of row-->
                </div>
                <!--end of container-->
            </div>
            <!--end bar-->
            <nav id="menu1" class="bar bar--sm bar-1 hidden-xs bar--absolute bar--transparent">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-1 col-md-2 hidden-xs">
                            <div class="bar__module">
                                <a href="index.html">
                                    <img class="logo logo-dark" alt="logo" src="img/logo-dark.png" />
                                    <img class="logo logo-light" alt="logo" src="img/logo-light.png" />
                                </a>
                            </div>
                            <!--end module-->
                        </div>
                        <div class="col-lg-11 col-md-12 text-right text-left-xs text-left-sm">
                            <div class="bar__module">
                                <ul class="menu-horizontal text-left">
                                    <li class="dropdown">
                                        <span class="dropdown__trigger">Home</span>
                                        <div class="dropdown__container">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-md-12 dropdown__content dropdown__content--lg">
                                                        <div class="pos-absolute col-lg-5 imagebg hidden-sm hidden-xs" data-overlay="4">
                                                            <div class="background-image-holder">
                                                                <img alt="background" src="img/dropdown-1.jpg" />
                                                            </div>
                                                            <div class="container pos-vertical-center pl-5">
                                                                <div class="row">
                                                                    <div class="col-lg-8">
                                                                        <img alt="Logo" src="img/logo-light.png" class="image--xxs" />
                                                                        <span class="h2 color--white">Beautiful, modular sites in moments.</span>
                                                                        <a href="#" class="btn btn--primary type--uppercase">
                                                                            <span class="label">$18 USD.</span>
                                                                            <span class="btn__text">
                                                                                Purchase Stack Now
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <!--end of row-->
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!--end dropdown content-->
                                                </div>
                                            </div>
                                        </div>
                                        <!--end dropdown container-->
                                    </li>

                                </ul>
                            </div>
                            <!--end module-->
                            <div class="bar__module">
                                <a class="btn btn--sm type--uppercase" href="#">
                                    <span class="btn__text">
                                        Try Builder
                                    </span>
                                </a>
                                <a class="btn btn--sm btn--primary type--uppercase" href="#">
                                    <span class="btn__text">
                                        Buy Now
                                    </span>
                                </a>
                            </div>
                            <!--end module-->
                        </div>
                    </div>
                    <!--end of row-->
                </div>
                <!--end of container-->
            </nav>
            <!--end bar-->
        </div>
</template>