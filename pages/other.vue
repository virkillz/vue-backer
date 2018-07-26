<template>
<no-ssr>
  <div class="main-container">
    <HeaderMenu />
    <CoverTwo />   
    <Footer />
  </div>
</no-ssr>  
</template>

<script>
import HeaderMenu from '~/components/HeaderMenu.vue'
import Footer from '~/components/Footer.vue'
import CoverOne from '~/components/CoverOne.vue'
import CoverTwo from '~/components/CoverTwo.vue'
import ListProfileCard from '~/components/ListProfileCard.vue'

export default {
  components: {
    HeaderMenu,
    Footer,
    CoverOne,
    CoverTwo,
    ListProfileCard
  },
    transition: {
      name: 'fadeOpacity'
    },
    head: {
    bodyAttrs: {
      class: 'home-page'
    }
  }
}
</script>

<style>

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

</style>

