<template>
<no-ssr>
  <div class="main-container">
    <FixedMenu />
                <section class="height-100 imagebg text-center" data-overlay="4">
                <div class="background-image-holder">
                    <img alt="background" src="img/inner-6.jpg" />
                </div>
                <div class="container pos-vertical-center">
                    <div class="row">
                        <div class="col-md-7 col-lg-5">
                            <h2>Login to continue</h2>
                            <a class="btn block btn--icon bg--facebook type--uppercase" href="#">
                                <span class="btn__text">
                                    <i class="socicon-facebook"></i>
                                    Login with Facebook
                                </span>
                            </a>
                            <hr>
                            <p>Login using your Backer account</p>
                            <form>
                                <div class="row">
                                    <div class="col-md-12">
                                        <input type="text" placeholder="Username" />
                                    </div>
                                    <div class="col-md-12">
                                        <input type="password" placeholder="Password" />
                                    </div>
                                    <div class="col-md-12">
                                        <button class="btn btn--primary type--uppercase" type="submit">Login</button>
                                    </div>
                                </div>
                                <!--end of row-->
                            </form>
                            <span class="type--fine-print block">Dont have an account yet?
                                <a href="/register">Create account</a>
                            </span>
                            <span class="type--fine-print block">Forgot your username or password?
                                <a href="/recover">Recover account</a>
                            </span>
                        </div>
                    </div>
                    <!--end of row-->
                </div>
                <!--end of container-->
            </section>
  </div>
</no-ssr>  
</template>

<script>
import FixedMenu from '~/components/FixedMenu.vue'


export default {
  components: {
    FixedMenu
  },
    transition: {
      name: 'fadeOpacity'
    },
    head: {
  }
}
</script>

<style scoped>
    .background-image-holder{
        background: url('/img/inner-6.jpg');
        background-position: initial;
        opacity: 1;
    }
</style>

