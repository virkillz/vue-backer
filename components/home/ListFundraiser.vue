<template>
    <section class="feature-large bg--secondary">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-6" v-for="prek in fundraisers" :key="prek.id">
                    <a href="#" class="feature">
                        <img alt="Pic" class="minibackground" v-bind:src="prek.bg" />
                        <img alt="Avatar" class="avatarcard" v-bind:src="prek.avatar" />
                        <a href="#" class="pull-right text-green">257 Backers</a>                        
                        <h5 class="mb--0 title-card">{{ prek.title }}</h5>
                        <div>$75 &#9702; 4 hour experience</div>
                    </a>
                </div>                             
            </div>
        </div>
    </section>
</template>

<style scoped>
    .minibackground {
        border-radius: 6px 6px 0px 0px;
        width: 100%;
        height: 80%;
    }
    
    .pull-right {
        float: right;
    }

    .title-card {
        margin-top: -20px;
    }

    .avatarcard{
        border-radius: 50%;
        height: 27%;
        width:27%;
        margin-top: -50px;
        border: 5px solid white;
        margin-left: 20px;
    }
</style>

<script>
    export default {

        data () {
            return {
                fundraisers: [
                    {
                        id: 1,
                       bg: '/img/tourism-1.jpg',
                       avatar: '/img/users/user-1.jpg',
                       title: 'Title',
                       desc: 'desc',
                       backer: 237
                    },
                    {
                        id: 2,
                       bg: '/img/tourism-2.jpg',
                       avatar: '/img/users/user-2.jpg',
                       title: 'Title 2',
                       desc: 'desc',
                       backer: 2345
                    },
                    {
                        id: 3,
                       bg: '/img/tourism-7.jpg',
                       avatar: '/img/users/user-3.jpg',
                       title: 'Title 3',
                       desc: 'desc',
                       backer: 2345
                    },                                       
                    {
                        id: 4,
                       bg: '/img/tourism-4.jpg',
                       avatar: '/img/users/user-4.jpg',
                       title: 'Title 4',
                       desc: 'desc',
                       backer: 2345
                    },
                    {
                        id: 5,
                       bg: '/img/tourism-5.jpg',
                       avatar: '/img/users/user-5.jpg',
                       title: 'Title 5',
                       desc: 'desc',
                       backer: 2355
                    },
                    {
                        id: 7,
                       bg: '/img/tourism-7.jpg',
                       avatar: '/img/users/user-7.jpg',
                       title: 'Title 7',
                       desc: 'desc',
                       backer: 237
                    },
                    {
                        id: 6,
                       bg: '/img/tourism-6.jpg',
                       avatar: '/img/users/user-6.jpg',
                       title: 'Title 6',
                       desc: 'desc',
                       backer: 2365
                    }, 
                    {
                        id: 8,
                       bg: '/img/tourism-8.jpg',
                       avatar: '/img/users/user-8.jpg',
                       title: 'Title 8',
                       desc: 'desc',
                       backer: 2385
                    },
                    {
                        id: 9,
                       bg: '/img/tourism-9.jpg',
                       avatar: '/img/users/user-9.jpg',
                       title: 'Title 9',
                       desc: 'desc',
                       backer: 2395
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