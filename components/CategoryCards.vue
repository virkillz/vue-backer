<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-6" v-for="item in categories" :key="item.id">
                    <a href="#" class="block">
                        <div class="feature feature-7 boxed text-center imagebg" data-overlay="3">
                            <div class="background-image-holder" v-bind:style="{ backgroundImage: 'url(' + item.bg + ')' }">
                                <img alt="background" src="img/accom-5.jpg" />
                            </div>
                            <h4 class="pos-vertical-center">{{ item.name }}</h4>
                        </div>
                    </a>
                </div>
            </div>
            <!--end of row-->
        </div>
        <!--end of container-->
    </section>
</template>

<style>
    .background-image-holder{
        background-position: initial;
        opacity: 1;
    }
</style>

<script>
    export default {

        data () {
            return {
                categories: [
                    {
                        id: 1,
                       bg: 'img/accom-4.jpg',
                       name: 'Writer',
                    },
                    {
                        id: 2,
                       bg: 'img/accom-3.jpg',
                       name: 'Musician',
                    },
                    {
                        id: 3,
                       bg: 'img/accom-5.jpg',
                       name: 'Comedian',
                    },
                    {
                        id: 4,
                       bg: 'img/accom-7.jpg',
                       name: 'Organization',
                    }, 
                    {
                        id: 5,
                       bg: 'img/accom-6.jpg',
                       name: 'Religious Activity',
                    }, 
                    {
                        id: 6,
                       bg: 'img/accom-1.jpg',
                       name: 'Education',
                    }                                                                                                                                                                                                                               
                ]
            }
        },
        methods: {
                    async logout () {
                    await this.$store.dispatch('logout')
                    }
                }
    }
</script>