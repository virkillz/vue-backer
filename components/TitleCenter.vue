<template>
    <section v-bind:class="sectionClass">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2>{{ title }}</h2>
                </div>
            </div>
        </div>
    </section>
</template>     


<script>
        export default {
        props:['title', 'section-class'],
        data () {
            return {
                image: "/img/landing-1.jpg"
            }
        }
    }
</script>       