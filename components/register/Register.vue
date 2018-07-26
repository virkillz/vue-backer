 <template>
            <section class="imageblock switchable feature-large height-100">
                <div class="imageblock__content col-lg-6 col-md-4 pos-right">
                    <div class="background-image-holder">
                    </div>
                </div>
                <div class="container pos-vertical-center">
                    <div class="row">
                        <div class="col-lg-5 col-md-7">
                            <h2>Create Backer account</h2>
                            <p class="lead">Be a backer, be fundraiser, start it here.</p>
                            <a class="btn block btn--icon bg--facebook type--uppercase" href="#">
                                <span class="btn__text">
                                    <i class="socicon-facebook"></i>
                                    Sign up with Facebook
                                </span>
                            </a>
                            <hr data-title="OR">
                            <form>
                                <div class="row">
                                    <div class="col-12">
                                        <input type="email" name="Email Address" placeholder="Email Address" />
                                    </div>
                                    <div class="col-12">
                                        <input type="password" name="Password" placeholder="Password" />
                                    </div>
                                    <div class="col-12">
                                        <button type="submit" class="btn btn--primary type--uppercase">Create Account</button>
                                    </div>
                                    <div class="col-12">
                                        <span class="type--fine-print">By signing up, you agree to the
                                            <a href="#">Terms of Service</a>
                                        </span>
                                    </div>
                                </div>
                                <!--end row-->
                            </form>
                        </div>
                    </div>
                    <!--end of row-->
                </div>
                <!--end of container-->
            </section>
</template>

<style scoped>
    .background-image-holder{
        background: url('/img/hero-3.jpg');
        background-position: initial;
        opacity: 1;
    }
</style>