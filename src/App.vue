<template>

  <div class="main-page" :class="{'dark-mode': getDarkMode}">
    <!-- ========================== -->
    <!-- ========= HERO PAGE ========= -->
    <HeroPage />

    <!-- ========================== -->
    <!-- ========= WORK PAGE ========= -->
    <div class="work-page" :class="{'dark-mode': getDarkMode, 'tablet-view': isTablet}" id="work">
      <h1>My Work</h1>
      <div class="work-cards">
        <WorkCard :name="'muse'" 
        :tags="['music', 'recommendation', 'clustering', 'deep learning', 'content-based filtering']" 
        :desc="'Some work about music recommendation yo yeh'" 
        :url="'https://muse.augustindirand.com/'"/>

        <WorkCard :name="'undersea explorer'" 
        :tags="['unity', 'procedural generation', 'cellular automata', 'C#', 'agent behaviour', 'path finding']" 
        :desc="'Some work in unity yeepi yeh'" 
        :url="'https://github.com/GusDrd/Undersea-Explorer'"/>

        <WorkCard :name="'music tag prediction'" 
        :tags="['unity', 'procedural generation', 'cellular automata', 'C#', 'agent behaviour', 'path finding']" 
        :desc="'Some work in unity yeepi yeh'" 
        :url="'https://github.com/GusDrd/Undersea-Explorer'"/>

        <WorkCard :name="'vuse'" 
        :tags="['unity', 'procedural generation', 'cellular automata', 'C#', 'agent behaviour', 'path finding']" 
        :desc="'Some work in unity yeepi yeh'" 
        :url="'https://github.com/GusDrd/Undersea-Explorer'"/>
      </div>
    </div>

    <!-- =================================== -->
    <!-- ========= ABOUT/CONTACT PAGE ========= -->
    <AboutPage />
    <ContactPage />

    <!-- ======================= -->
    <!-- ========= FOOTER ========= -->
    <div class="footer">
      <p>Website designed &amp; implemented by myself with <span>&#10084;</span> using <a href="https://www.figma.com/ui-design-tool/" target="_blank">Figma</a> and <a href="https://vuejs.org/" target="_blank">Vue.js</a></p>
      <img width="100%" src="./assets/contact-deco.svg">
    </div>

  </div>
</template>


<!-- ============ SCRIPTS ============ -->

<script>
import HeroPage from '@/components/HeroPage.vue'
import WorkCard from '@/components/WorkCard.vue'
import AboutPage from '@/components/AboutPage.vue'
import ContactPage from '@/components/ContactPage.vue'

import { website_stores } from '@/store/index.js'

export default {
  name: 'App',

  components: {
    HeroPage,
    WorkCard,
    AboutPage,
    ContactPage
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
      if(window.innerWidth <= 1600 && !this.isTablet) {
        website_stores().setTabletMode(true);
      }else if(window.innerWidth > 1600 && this.isTablet) {
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
#app {
  font-family: Red Hat Display, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
}

.main-page {
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  background: linear-gradient(168deg, rgba(125, 232, 255, 0.07) 0%, rgba(127, 125, 255, 0.07) 25%, rgba(237, 125, 255, 0.07) 50%, rgba(127, 125, 255, 0.07) 75%, rgba(125, 232, 255, 0.07) 100%), #FFFDFA;

  transition: 0.5s;
  -webkit-transition: 0.5s;
}

.main-page.dark-mode {
  background: #333;
}

/* ---------------------------------------------- */
/* ----------------- WORK PAGE ----------------- */

.work-page {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.work-page h1 {
  color: #333;
  font-size: 96px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin: 80px 0 0 200px;

  transition: 0.5s;
  -webkit-transition: 0.5s;
}
.work-page.tablet-view h1 {
  margin: 80px 160px 0;
}

.work-page.dark-mode h1 {
  color: #FFFDFA;
}

.work-cards {
  display: flex;
  width: auto;
  height: auto;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: 80px;
  flex-shrink: 0;
  flex-wrap: wrap;

  margin: 80px 200px 80px;
}
.work-page.tablet-view .work-cards {
  margin: 80px 160px 80px;
}

@media screen and (max-width: 775px) and (min-width: 100px) {
  .work-page.tablet-view h1 {
    margin: 80px 0 0 50px;

    font-size: 50px;
  }
}


/* --------------------------- */
/* ------ Footer Deco ------ */

.footer {
  display: flex;
  position: relative;
  align-self: stretch;

  margin-top: 40px;
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
  margin-bottom: 20px;

  color: #FFFDFA;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.footer a {
  display: inline-block;
  text-decoration: underline;
  color:#FFFDFA;

  transition: 200ms;
  -webkit-transition: 200ms;
}

.footer a:hover {
  color: #333;
}

.footer span {
  transition: 200ms;
}

.footer p:hover span {
  color: #e31b23;
}

@media screen and (max-width: 775px) and (min-width: 100px) {
  .footer p {
    font-size: 16px;
    width: auto;
    margin: 0 20px 20px 20px;
  }

  .footer img {
    height: 250px;
    object-fit: cover;
  }
}

</style>
