<template>
<no-ssr>
  <div>
  <FixedMenu />
  <div class="main-container">
    <Recover />
  </div>
</div>
</no-ssr>  
</template>

<script>
import Recover from '~/components/Recover.vue'
import FixedMenu from '~/components/FixedMenu.vue'



export default {
  components: {
    FixedMenu,
    Recover
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
.fadeOpacity-enter-active, .fadeOpacity-leave-active {
  transition: opacity .25s ease-out;
}

.fadeOpacity-enter, .fadeOpacity-leave-active {
  opacity: 0;
}
</style>
