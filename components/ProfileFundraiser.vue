 <template>
    <div>
    <section class="cover height-40 imagebg text-center" data-overlay="5">
        <div class="background-image-holder background--top" v-bind:style="{ backgroundImage: 'url(' + image + ')' }" id="cover1"> </div>
    </section>
            <img alt="Avatar" class="avatar" src="/img/users/user-9.jpg" />
                <section class="text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="tabs-container" data-content-align="left">
                                <ul class="tabs">
                                    <li class="active">
                                        <div class="tab__title">
                                            <span class="h5">Code Quality</span>
                                        </div>
                                        <div class="tab__content">
                                            <p class="lead">
                                                Stack follows the BEM naming convention that focusses on logical code readability that is reflected in both the HTML and CSS. Interactive elements such as accordions and tabs follow the same markup patterns making rapid development easier for developers and beginners alike.
                                            </p>
                                            <p class="lead">
                                                Add to this the thoughtfully presented documentation, featuring code highlighting, snippets, class customizer explanation and you've got yourself one powerful value package.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="tab__title">
                                            <span class="h5">Visual Design</span>
                                        </div>
                                        <div class="tab__content">
                                            <p class="lead">
                                                Stack offers a clean and contemporary look to suit a range of purposes from corporate, tech startup, marketing site to digital storefront. Elements have been designed to showcase content in a diverse yet consistent manner.
                                            </p>
                                            <p class="lead">
                                                Multiple font and colour scheme options mean that dramatically altering the look of your site is just clicks away &mdash; Customizing your site in the included Variant Page Builder makes experimenting with styles and content arrangements dead simple.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="tab__title">
                                            <span class="h5">Stack Experience</span>
                                        </div>
                                        <div class="tab__content">
                                            <p class="lead">
                                                Medium Rare is an elite author known for offering high-quality, high-value products backed by timely and personable support. Recognised and awarded by Envato on multiple occasions for producing consistently outstanding products, it's no wonder over 20,000 customers enjoy using Medium Rare templates.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <!--end of tabs container-->
                        </div>
                    </div>
                    <!--end of row-->
                </div>
                <!--end of container-->
            </section>


    </div>
</template>

<style>
    #cover1{
        background-position: initial;
        opacity: 1;
        z-index: 0;
    }
    .avatar{
        position: relative;
        border-radius: 50%;
        height: 13%;
        width: 13%;
        margin-top: -100px;
        border: 5px solid white;
        margin-left: 40px;
        z-index: 50;


    }
</style>

<script>
    export default {

        data () {
            return {
                image: "/img/landing-1.jpg"
            }
        },
        methods: {
                    async logout () {
                    await this.$store.dispatch('logout')
                    }
                }
    }
</script>
