<template>
  <div class="hero-page" id="home">
    <NavBar />
    <div class="hero-content" :class="{'dark-mode': getDarkMode, 'tablet-view': isTablet}">
      <div class="hero-text">
        <h1>Hi, I'm <span>Gus</span></h1>
        <p>I’m a French, artificial intelligence engineer with a passion for games, music, and art.</p>
        <a href="#about" class="hero-about" v-smooth-scroll>learn more</a>
      </div>
      <img alt="Gus" class="hero-portrait">
    </div>
    <div class="hero-deco" :class="{'slide-in': revealMask}">
      <img width="100%" src="@/assets/back-wave.svg">
    </div>
  </div>
</template>


<!-- ============ SCRIPTS ============ -->
<script>

import NavBar from '@/components/Navbar.vue'
import { website_stores } from '@/store/index.js'

export default {
  name: 'hero-page',

  data() {
    return {
      revealMask: false
    }
  },

  components: {
    NavBar
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

.hero-page {
  flex: 1 0 0;
  align-self: stretch;
}

/* ----------------------------- */
/* ------- Hero Content ------- */

.hero-content {
  display: flex;
  justify-content: center;
}

.hero-content.tablet-view {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
}
.hero-content.tablet-view .hero-portrait {
  margin: 40px auto 0;
}
.hero-content.tablet-view .hero-text {
  display: flex;
  margin: 0 auto;
}
.hero-content.tablet-view .hero-text h1 {
  text-align: left;
  margin: 0;
}
.hero-content.tablet-view .hero-text p {
  text-align: left;
}
.hero-content.tablet-view .hero-about {
  text-align: left;
  margin: 20px 0 0;
}

@media screen and (max-width: 775px) and (min-width: 100px) {
  .hero-content.tablet-view .hero-text {
    width: 300px;
  }
  .hero-content.tablet-view .hero-portrait {
    width: 300px;
    height: 300px;
    background: url("@/assets/portrait.jpg") #EEEEFF -119.33px 0px / 150.638% 100% no-repeat;
  }

  .hero-content.tablet-view .hero-text h1 {
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 0;
  }
  .hero-content.tablet-view .hero-text span {
    font-size: 50px;
    font-weight: bold;
  }
  .hero-content.tablet-view .hero-text p {
    font-size: 24px;
    margin-top: 40px;
  }
  .hero-content.tablet-view .hero-about {
    font-size: 22px;
    margin-top: 30px;
    padding: 0;
  }

  .hero-page .hero-deco img {
    height: 200px;
    object-fit: cover;
    mask: linear-gradient(#000 0 0), linear-gradient(-135deg,#000 50%,#0000 0) content-box 100% 100%/400% 400% no-repeat;
  }
}

.hero-portrait {
  width: 480px;
  height: 480px;
  flex-shrink: 0;
  margin-left: 20px;

  border-radius: 482px;
  border: 5px solid #333;
  background: url("@/assets/portrait.jpg") #EEEEFF -189.33px 0px / 150.638% 100% no-repeat;

  transition: 0.5s;
  -webkit-transition: 0.5s;
}

.hero-content.dark-mode .hero-portrait {
  border: 5px solid #FFFDFA;
}

.hero-text {
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 600px;
  flex-shrink: 0;
}

.hero-text h1 {
  width: 100%;
  height: auto;
  flex-shrink: 0;
  margin: 0 0 0 20px;

  color: #333;
  text-align: right;
  font-size: 100px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  transition: 0.5s;
  -webkit-transition: 0.5s;
}

.hero-content.dark-mode .hero-text h1 {
  color: #FFFDFA;
}

.hero-text span {
  font-size: 100px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #7F7DFF;

  background: linear-gradient(78.8deg, #7DE8FF 3.08%, #7F7DFF 50.03%, #ED7DFF 89.52%);
  background-clip: text;
  -webkit-background-clip: text;

  transition: all 0.2s;
  -webkit-transition: all 0.2s;
}

.hero-text span:hover,
.hero-text span:active {
  color: transparent;
}

.hero-text p {
  width: 100%;
  height: 154.915px;
  flex-shrink: 0;
  margin: 0 0 0;
  margin-top: 20px;

  color: #333;
  text-align: right;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  transition: 0.5s;
  -webkit-transition: 0.5s;
}

.hero-content.dark-mode .hero-text p {
  color: #FFFDFA;
}

.hero-about {
  display: flex;
  width: 210px;
  height: 60px;
  padding: 4px 15px;
  margin-right: -20px;
  margin-left: auto;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  z-index: 1;

  border-radius: 40px;
  border: 2px solid #7F7DFF;

  color: #7F7DFF;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;

  transition: 200ms;
  -webkit-transition: 200ms;
}

.hero-about:hover {
  border-radius: 40px;
  border: 2px solid #7F7DFF;
  background: #7F7DFF;

  color: #FFFDFA;
  text-align: center;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

/* -------------------------- */
/* ------- Hero Deco ------- */

.hero-deco {
  display: flex;
  position: relative;
  padding-top: -60px;
  overflow: hidden;
}

.hero-deco img {
  display: block;
  width: 100%;
  height: auto;

  mask: linear-gradient(#000 0 0), linear-gradient(-135deg,#000 50%,#0000 0) content-box 100% 100%/300% 300% no-repeat;
  mask-composite: exclude;

  transition: 1.8s cubic-bezier(0.77,0.2,0.05,1.0);
}

.hero-deco.slide-in img {
  mask-position: 0% 0%;
}


</style>