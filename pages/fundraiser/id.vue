<template>
<no-ssr>
  <div class="main-container">
    <FixedMenu />
    <ProfileFundraiser />
    <Footer />
  </div>
</no-ssr>  
</template>

<script>
import FixedMenu from '~/components/FixedMenu.vue'
import Footer from '~/components/Footer.vue'
import ProfileFundraiser from '~/components/ProfileFundraiser.vue'

export default {
  components: {
    FixedMenu,
    Footer,
    ProfileFundraiser
  },
    transition: {
      name: 'fadeOpacity'
    },
    head: {
  }
}
</script>

<style>
.fadeOpacity-enter-active, .fadeOpacity-leave-active {
  transition: opacity .35s ease-out;
}

.fadeOpacity-enter, .fadeOpacity-leave-active {
  opacity: 0;
}


.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}


</style>

