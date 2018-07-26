 <template>
    <section class="cover height-80 imagebg text-center" data-overlay="5">
        <div class="background-image-holder background--top" v-bind:style="{ backgroundImage: 'url(' + image + ')' }" id="cover1"> </div>
        <div class="container pos-vertical-center">
            <div class="row">
                <div class="col-md-8"> <img alt="Image" class="unmarg--bottom" src="/img/headline-1.png">
                    <h3> Be a Backer for something you believe in. </h3>
                    <a class="btn btn--success type--uppercase" href="#"> 
                        <span class="btn__text">
				            What is Backer?
			             </span> 
                    </a> 

                    <a class="btn btn--primary type--uppercase" href="#"> 
                        <span class="btn__text">
                            Start fundraising
                         </span> 
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
    #cover1{
        /*background: url('/img/landing-1.jpg');*/
        background-position: initial;
        opacity: 1;
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
