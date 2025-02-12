<template>

  <div class="main-page" :class="{'dark-mode': getDarkMode, 'tablet-view': isTablet}">
    <!-- ======================== -->
    <!-- ========= NAVBAR ========= -->
    <Navbar />

    <div class="container">
      <div class="content">
        <div class="oops">
          <InlineSvg :src="require('@/assets/icons/404Flow.svg')" class="error"></InlineSvg>
          <p>Looks like you got lost somewhere in the flow of things 🚀</p>
          <RouterLink :to="'/'" class="home-link">Return Home <InlineSvg :src="require('@/assets/icons/home.svg')" class="home-icon"></InlineSvg></RouterLink>
        </div>
      </div>
      <div class="hero-deco" :class="{'slide-in': revealMask}">
        <img src="@/assets/images/back_wave.svg" alt="Decoration Wave" />
      </div>
    </div>

  </div>
  
</template>


<!-- ============ SCRIPTS ============ -->
<script>
import Navbar from '@/components/Navbar.vue'

import { website_stores } from '@/store/index.js'

export default {
  name: 'App',

  data() {
    return {
      revealMask: false
    }
  },

  components: {
    Navbar
  },

  computed: {
    getDarkMode() {
      return website_stores().getDarkMode;
    },
    isTablet() {
      return website_stores().getTabletMode;
    }
  },

  mounted() {
    setTimeout(() => {
      this.revealMask = true;
    }, 500);
  }
}
</script>


<!-- ============= STYLE ============= -->
<style scoped>

.main-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  background: linear-gradient(168deg, rgba(125, 232, 255, 0.07) 0%, rgba(127, 125, 255, 0.07) 25%, rgba(237, 125, 255, 0.07) 50%, rgba(127, 125, 255, 0.07) 75%, rgba(125, 232, 255, 0.07) 100%), #FFFDFA;

  transition: 0.5s;
}

.main-page.dark-mode {
  background: #131316;
}


.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 4rem);
  
  padding-top: 4rem;
}

.content {
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;

  margin-left: auto;
  margin-right: auto;

  max-width: 64rem;

  justify-content: center;
  flex-direction: column;
}
.main-page.tablet-view .content {
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 35rem;
}

.oops {
  display: flex;
  width: 100%;
  margin-top: 8rem;
  margin-bottom: 2rem;

  align-self: flex-end;

  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.oops p {
  font-size: 1rem;
  font-weight: 500;
  color:#131316;

  margin: 2rem 0 0 0;
  text-align: center;
}
.main-page.tablet-view .oops p {
  margin: 1rem 0 0 0;
}
.main-page.dark-mode .oops p {
  color: #F1F1F1;
}

.error {
  fill: #131316;
  width: 100%;
}
.main-page.dark-mode .error {
  fill: #FFFFFF;
}


.home-link {
  display: flex;
  width: 10rem;
  height: 2.5rem;

  padding: .25rem .5rem;
  margin-top: 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 30px;
  background-color: #5F5CFF;

  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;

  transition: 0.2s;
}
.home-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, .2);
}

.home-icon {
  width: 1rem;
  height: 1rem;

  fill: #FFFFFF;

  transition: all 0.4s ease;
}


/* -------------------------- */
/* ------- Hero Deco ------- */

.hero-deco {
  display: flex;
  object-fit: cover;

  margin-bottom: 6rem;
}

.hero-deco img {
  display: block;
  width: 100%;
  height: 100%;

  mask: linear-gradient(#000 0 0), linear-gradient(-135deg,#000 50%,#0000 0) content-box 100% 100%/300% 300% no-repeat;
  mask-composite: exclude;

  transition: 1.2s cubic-bezier(0.77,0.2,0.05,1.0);
}

.hero-deco.slide-in img {
  mask-position: 0% 0%;
}

@media screen and (max-width: 800px) and (min-width: 100px) {
  .hero-deco img {
    height: 200px;
    object-fit: cover;
  }
}

</style>