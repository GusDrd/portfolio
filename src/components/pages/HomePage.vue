<template>
  <!-- ============== -->
  <!-- ===== POPUP ===== -->
  <Popup />

  <div class="main-page" :class="{'dark-mode': getDarkMode}">
    <!-- ========================== -->
    <!-- ========= HERO PAGE ========= -->
    <HeroPage />

    <!-- ========================== -->
    <!-- ========= WORK PAGE ========= -->
    <WorkPage />

    <!-- =========================== -->
    <!-- ========= ABOUT PAGE ========= -->
    <AboutPage />

    <!-- ============================= -->
    <!-- ========= JOURNEY PAGE ========= -->
    <JourneyPage />

    <!-- ======================= -->
    <!-- ========= FOOTER ========= -->
    <div class="footer">
      <p>Website designed &amp; implemented with <span>&#10084;</span> using <a href="https://www.figma.com/ui-design-tool/" target="_blank">Figma</a> and <a href="https://vuejs.org/" target="_blank">Vue.js</a></p>
      <img width="100%" src="@/assets/images/footer_wave.svg" alt="Footer Wave">
    </div>

  </div>
</template>


<!-- ============ SCRIPTS ============ -->
<script>
import Popup from '@/components/Popup.vue'
import HeroPage from '@/components/sections/HeroPage.vue'
import WorkPage from '@/components/sections/WorkPage.vue'
import AboutPage from '@/components/sections/AboutPage.vue'
import JourneyPage from '@/components/sections/JourneyPage.vue'

import { website_stores } from '@/store/index.js'

export default {
  name: 'App',

  components: {
    Popup,
    HeroPage,
    WorkPage,
    AboutPage,
    JourneyPage
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


/* -------------------------- */
/* ------ Footer Deco ------ */

.footer {
  display: flex;
  position: relative;
  align-self: stretch;

  margin-top: 1rem;
}

.footer img {
  width: 100%;
  height: 100%;
}

.footer p {
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: center;
  margin-bottom: 1rem;

  color: #FFFFFF;
  font-size: 1rem;
}

.footer a {
  display: inline-block;
  text-decoration: underline;
  color:#FFFFFF;

  transition: .2s;
}

.footer a:hover {
  color: #131316;
}

.footer span {
  transition: .2s;
}

.footer p:hover span {
  color: #e74c3c;
}

@media screen and (max-width: 1000px) and (min-width: 800px) {
  .footer p {
    font-size: .75rem;
  }
}

@media screen and (max-width: 800px) and (min-width: 100px) {
  .footer p {
    font-size: 1rem;
  }

  .footer img {
    height: 250px;
    object-fit: cover;
  }
}

</style>