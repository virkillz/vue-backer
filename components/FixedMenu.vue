<template>
  <fixed-header :fixed.sync="isFixed" :threshold="100">
    <div :class="{ 'is-fixed': isFixed }">
      <HeaderMenu />
    </div>
  </fixed-header>
</template>
 
<script>
import FixedHeader from 'vue-fixed-header'
import HeaderMenu from './HeaderMenu.vue'

export default {
  components: {
    FixedHeader,
    HeaderMenu
  },
  data () {
    return {
      isFixed: true
    }
  }
}
</script>