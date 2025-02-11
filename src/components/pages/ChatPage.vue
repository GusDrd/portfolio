<template>
  <!-- ============== -->
  <!-- ===== POPUP ===== -->
  <Popup />

  <div class="main-page" :class="{'dark-mode': getDarkMode, 'tablet-view': isTablet}">
    <!-- ======================== -->
    <!-- ========= NAVBAR ========= -->
    <Navbar />

    <div class="container">
      <div class="content">
        <h1>Chat with me</h1>
      </div>
    </div>

    
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


.container {
  padding-top: 6rem;
  width: 100vw;
}

.content {
  display: flex;
  padding-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;

  margin-left: auto;
  margin-right: auto;

  max-width: 64rem;
  justify-content: space-between;
}
.main-page.tablet-view .content {
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 35rem;

  flex-direction: column;
}

</style>