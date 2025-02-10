<template>

  <transition name="popup">
    <div v-if="showPopup" class="popup">
      <div class="popup-content">
        <span>🦋</span>
        <div class="popup-text">
          <p>The website is evolving so things might change. Don't worry, it'll soon reach its final form !</p>
          <button @click="closePopup">Understood !</button> 
        </div>
        <button @click="closePopup" class="popup-x">X</button>
      </div>
    </div>
  </transition>

  <div class="main-page" :class="{'dark-mode': getDarkMode}">
    <!-- ========================== -->
    <!-- ========= HERO PAGE ========= -->
    <HeroPage />

    <!-- ========================== -->
    <!-- ========= WORK PAGE ========= -->
    <div class="work-page" :class="{'dark-mode': getDarkMode, 'tablet-view': isTablet}" id="work">
      <h1>Projects</h1>
      <div class="work-cards" v-animate>
        <WorkCard 
          :name="'Muse'"
          :desc="'AI research project exploring music recommendation systems which only use CBF and multiple musical and audio features.'"
          :svg_path="'muse.svg'"
          :url_name="'Discover'"
          :url="'https://muse.augustindirand.com/'"
        ></WorkCard>

        <WorkCard 
          :name="'Portfolio'"
          :desc="'An occasion to learn about Vue, to explore web design, and to showcase some of my previous work and experiences.'"
          :svg_path="'portfolio.svg'"
          :url_name="'Explore'"
          :url="'https://github.com/GusDrd/portfolio'"
        ></WorkCard>

      </div>
    </div>

    <!-- ==================================== -->
    <!-- ========= ABOUT/JOURNEY PAGES ========= -->
    <AboutPage />
    <JourneyPage />

    <!-- ======================= -->
    <!-- ========= FOOTER ========= -->
    <div class="footer">
      <p>Website designed &amp; implemented with <span>&#10084;</span> using <a href="https://www.figma.com/ui-design-tool/" target="_blank">Figma</a> and <a href="https://vuejs.org/" target="_blank">Vue.js</a></p>
      <img width="100%" src="./assets/images/footer_wave.svg" alt="Footer Wave">
    </div>

  </div>
</template>


<!-- ============ SCRIPTS ============ -->
<script>
import HeroPage from '@/components/HeroPage.vue'
import WorkCard from '@/components/WorkCard.vue'
import AboutPage from '@/components/AboutPage.vue'
import JourneyPage from '@/components/JourneyPage.vue'

import { website_stores } from '@/store/index.js'

export default {
  name: 'App',

  components: {
    HeroPage,
    WorkCard,
    AboutPage,
    JourneyPage
  },

  data() {
    return {
      showPopup: false
    };
  },

  computed: {
    getDarkMode() {
      return website_stores().getDarkMode;
    },
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
    },
    closePopup() {
      this.showPopup = false;
    }
  },

  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    setTimeout(() => {
      this.showPopup = true;
    }, 3000);
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
}

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

/* ---------------------------------------------- */
/* ----------------- WORK PAGE ----------------- */

.work-page {
  display: flex;
  padding-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;

  margin-left: auto;
  margin-right: auto;

  max-width: 64rem;
  flex-direction: column;
}
.work-page.tablet-view {
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 35rem;
}

.work-page h1 {
  flex-shrink: 0;
  margin: 0;

  color: #131316;
  text-align: center;
  font-size: 3rem;
  line-height: 1;

  transition: .2s;
}

.work-page.dark-mode h1 {
  color: #FFFFFF;
}

.work-cards {
  display: flex;
  justify-content: center;

  gap: 4rem;
  flex-shrink: 0;
  flex-wrap: wrap;

  margin: 4rem 0 8rem 0;

  transition: .1s;
}

.work-page.tablet-view .work-cards {
  gap: 2rem;

  margin: 4rem 0 4rem 0;
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


/* -------------------------------------- */
/* --------------- POP-UP --------------- */
.popup {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  padding: 1rem;
  
  max-width: 24rem;

  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
  background-color: white;

  z-index: 5;
}

.popup-content {
  display: flex;
  flex-direction: row;
}

.popup span {
  font-size: 1.5rem;
  line-height: 2rem;

  margin-right: 1rem;
}

.popup-text p {
  display: flex;
  margin: 0;

  font-size: 1rem;
  line-height: 1.25rem;
}

.popup-content button {
  border: none;
  background: none;
  cursor: pointer;

  padding: 0;
}
.popup-text button {
  margin: .75rem 0 0 0;

  color: #5F5CFF;
}
.popup-text button:hover {
  color: #524fef;
}

.popup-x {
  font-size: 1rem;
  align-self: flex-start;

  color: #131316;

  margin-left: .5rem;
}

/* Transition animation */
.popup-enter-active {
  animation: scaleUp 0.3s ease-in-out;
}
.popup-leave-active {
  animation: scaleDown 0.1s ease-in;
}

@keyframes scaleUp {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  80% {
    opacity: 1;
    transform: scale(1.1); /* Slightly overshoot */
  }
  100% {
    transform: scale(1);
  }
}

@keyframes scaleDown {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: translate(0, 25%) scale(0.5);
  }
}

</style>
