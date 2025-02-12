<template>

  <Popup />

  <RouterView />

</template>


<!-- ============ SCRIPTS ============ -->
<script>

import { website_stores } from '@/store/index.js'
import Popup from '@/components/Popup.vue'

export default {
  name: 'App',

  components: {
    Popup
  },

  computed: {
    isTablet() {
      return website_stores().getTabletMode;
    }
  },

  methods: {
    handleResize() {
      if(window.innerWidth <= 800 && !this.isTablet) {
        website_stores().setTabletMode(true);
      }else if(window.innerWidth > 800 && this.isTablet) {
        website_stores().setTabletMode(false);
      }
    }
  },

  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },

  unmounted() {
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>


<!-- ============= STYLE ============= -->
<style>
@font-face {
  font-family: "Red Hat Display";
  src: url("@/assets/fonts/RedHatDisplay-VariableFont_wght.woff2") format("woff2"),
       url("@/assets/fonts/RedHatDisplay-VariableFont_wght.woff") format("woff");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
#app {
  font-family: "Red Hat Display", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

body {
  margin: 0;
  z-index: 0;

  min-height: 100vh;
  overflow-x: hidden;
}

</style>
