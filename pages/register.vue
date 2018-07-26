<template>
<no-ssr>
  <div>
  <RegisterMenu />
  <div class="main-container">
    <Register />
  </div>
</div>
</no-ssr>  
</template>

<script>
import Register from '~/components/register/Register.vue'
import RegisterMenu from '~/components/register/RegisterMenu.vue'



export default {
  components: {
    Register,
    RegisterMenu
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
