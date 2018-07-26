<template>
<no-ssr>
  <div class="main-container">
    <FixedMenu />
    <CoverOne />
    <Typing />
    <TitleCenter title="Featured Fundraiser" section-class="text-center space--xs bg--secondary"/>     
    <ListFundraiser /> 
    <TitleCenter title="Fundraiser Category" section-class="text-center space--xs"/>  
    <CategoryCards />
    <Footer />
  </div>
</no-ssr>  
</template>

<script>
import FixedMenu from '~/components/FixedMenu.vue'
import Footer from '~/components/Footer.vue'
import CoverOne from '~/components/CoverOne.vue'
import TitleCenter from '~/components/TitleCenter.vue'
import CoverTwo from '~/components/CoverTwo.vue'
import ListProfileCard from '~/components/ListProfileCard.vue'
import Typing from '~/components/home/Typing.vue'
import ListFundraiser from '~/components/home/ListFundraiser.vue'
import CategoryCards from '~/components/CategoryCards.vue'


export default {
  components: {
    FixedMenu,
    Footer,
    CoverOne,
    TitleCenter,
    CoverTwo,
    ListProfileCard,
    ListFundraiser,
    CategoryCards,
    Typing
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

