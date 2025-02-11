<template>
  <!-- ============== -->
  <!-- ===== POPUP ===== -->
  <Popup />

  <div class="main-page" :class="{'dark-mode': getDarkMode}">
    <!-- ======================== -->
    <!-- ========= NAVBAR ========= -->
    <Navbar />

    
  </div>
</template>


<!-- ============ SCRIPTS ============ -->
<script>
import Popup from '@/components/Popup.vue'
import Navbar from '@/components/Navbar.vue'

import { website_stores } from '@/store/index.js'

export default {
  name: 'App',

  components: {
    Popup,
    Navbar
  },

  computed: {
    getDarkMode() {
      return website_stores().getDarkMode;
    },
    isTablet() {
      return website_stores().getTabletMode;
    }
  }
}
</script>


<!-- ============= STYLE ============= -->
<style scoped>

.main-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  background: linear-gradient(168deg, rgba(125, 232, 255, 0.07) 0%, rgba(127, 125, 255, 0.07) 25%, rgba(237, 125, 255, 0.07) 50%, rgba(127, 125, 255, 0.07) 75%, rgba(125, 232, 255, 0.07) 100%), #FFFDFA;

  transition: 0.5s;
}

.main-page.dark-mode {
  background: #131316;
}

</style>