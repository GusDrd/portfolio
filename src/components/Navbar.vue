<template>
  <header class="navbar-base" :class="{'tablet-view': isTablet, 'dark-mode': getDarkMode, 'scrolling': (scrollY > 0), 'hidden': isScrollingDown}">
    <div class="navbar-container">
      <div class="navbar">
        <div class="tablet-bar" v-if="isTablet" :class="{'is-active': isSideView}">
          <component
            :is="isHomePage ? 'a' : 'RouterLink'" 
            :href="isHomePage ? '#home' : null" 
            :to="isHomePage ? null : '/#home'" 
            class="nav-link"
            v-smooth-scroll>
            <h1>Augustin Dirand</h1>
          </component>
          <div class="menu">
            <div class="menu-links">
              <component 
                :is="isHomePage ? 'a' : 'RouterLink'" 
                :href="isHomePage ? '#work' : null" 
                :to="isHomePage ? null : '/#work'" 
                class="nav-link"
                @click="toggleSideView"
                v-smooth-scroll>
                projects
              </component>
              <component 
                :is="isHomePage ? 'a' : 'RouterLink'" 
                :href="isHomePage ? '#about' : null" 
                :to="isHomePage ? null : '/#about'" 
                class="nav-link"
                @click="toggleSideView"
                v-smooth-scroll>
                about
              </component>
              <component 
                :is="isHomePage ? 'a' : 'RouterLink'" 
                :href="isHomePage ? '#journey' : null" 
                :to="isHomePage ? null : '/#journey'" 
                class="nav-link"
                @click="toggleSideView"
                v-smooth-scroll>
                journey
              </component>
              <div class="night-mode" :class="{ 'is-active': getDarkMode }" @click="toggleDarkMode(); toggleSideView();">
                <InlineSvg :src="require('@/assets/icons/navbar/night.svg')" :class="{'night-icon': !getDarkMode, 'active-night-icon': getDarkMode}"></InlineSvg>
                <InlineSvg :src="require('@/assets/icons/navbar/day.svg')" :class="{'day-icon': getDarkMode, 'active-day-icon': !getDarkMode}"></InlineSvg>
              </div>
            </div>
          </div>
          <svg class="bars" @click="toggleSideView" xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="#131316">
            <path class="bar-1" d="M0 1.58824C0 0.711077 0.711077 0 1.58824 0H22.4118C23.2889 0 24 0.711077 24 1.58824V1.58824C24 2.46539 23.2889 3.17647 22.4118 3.17647H1.58824C0.711077 3.17647 0 2.46539 0 1.58824V1.58824Z"/>
            <path class="bar-2" d="M0 9C0 8.12284 0.711077 7.41177 1.58824 7.41177H22.4118C23.2889 7.41177 24 8.12284 24 9V9C24 9.87716 23.2889 10.5882 22.4118 10.5882H1.58824C0.711077 10.5882 0 9.87716 0 9V9Z"/>
            <path class="bar-3" d="M0 16.4118C0 15.5346 0.711077 14.8235 1.58823 14.8235H22.4118C23.2889 14.8235 24 15.5346 24 16.4118V16.4118C24 17.2889 23.2889 18 22.4118 18H1.58823C0.711076 18 0 17.2889 0 16.4118V16.4118Z"/>
          </svg>

        </div>
        <component
          v-if="!isTablet"
          :is="isHomePage ? 'a' : 'RouterLink'" 
          :href="isHomePage ? '#home' : null" 
          :to="isHomePage ? null : '/#home'" 
          class="nav-link"
          v-smooth-scroll>
          <h1>Augustin Dirand</h1>
        </component>
        <ul v-if="!isTablet">
          <li>
            <component :is="isHomePage ? 'a' : 'RouterLink'" 
              :href="isHomePage ? '#work' : null" 
              :to="isHomePage ? null : '/#work'" 
              class="nav-link"
              v-smooth-scroll>
              projects
            </component>
          </li>
          <li>
            <component :is="isHomePage ? 'a' : 'RouterLink'" 
              :href="isHomePage ? '#about' : null" 
              :to="isHomePage ? null : '/#about'"
              class="nav-link" 
              v-smooth-scroll>
              about
            </component>
          </li>
          <li>
            <component :is="isHomePage ? 'a' : 'RouterLink'" 
              :href="isHomePage ? '#journey' : null" 
              :to="isHomePage ? null : '/#journey'" 
              class="nav-link"
              v-smooth-scroll>
              journey
            </component>
          </li>
          <li><div class="night-mode" :class="{ 'is-active': getDarkMode }" @click="toggleDarkMode()">
            <InlineSvg :src="require('@/assets/icons/navbar/night.svg')" :class="{'night-icon': !getDarkMode, 'active-night-icon': getDarkMode}"></InlineSvg>
            <InlineSvg :src="require('@/assets/icons/navbar/day.svg')" :class="{'day-icon': getDarkMode, 'active-day-icon': !getDarkMode}"></InlineSvg>
          </div></li>
        </ul>
      </div>
    </div>
  </header>
</template>


<!-- ============ SCRIPTS ============ -->
<script>
import { website_stores } from '@/store/index.js'

export default {
  name: 'nav-bar',

  data() {
    return {
      isSideView: false,
      scrollY: 0,
      lastScrollY: 0,
      isScrollingDown: false
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    toggleDarkMode() {
      website_stores().setDarkMode();
    },
    toggleSideView() {
      this.isSideView = !this.isSideView;
    },
    disableScroll() {
      document.body.style.overflow = 'hidden';
    },
    enableScroll() {
      document.body.style.overflow = 'auto';
    },
    handleScroll() {
      const currentScrollY = window.scrollY;

      // Check scroll direction
      if (currentScrollY > this.lastScrollY && currentScrollY > 50) {
        this.isScrollingDown = true;
      } else {
        this.isScrollingDown = false;
      }

      // Reset when at the top
      if (currentScrollY === 0) {
        this.isScrollingDown = false;
      }

      this.lastScrollY = currentScrollY;
      this.scrollY = currentScrollY;
    }
  },

  computed: {
    getDarkMode() {
      return website_stores().getDarkMode;
    },
    isTablet() {
      return website_stores().getTabletMode;
    },
    isHomePage() {
      return this.$route.path === "/"; // Check if user is on the homepage
    }
  },

  watch: {
    isSideView(isViewOn) {
      if(isViewOn) {
        this.disableScroll();
      }else {
        this.enableScroll();
      }
    }
  }
}

</script>


<!-- ============= STYLE ============= -->
<style scoped>

.navbar-base {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;

  transition: all 0.3s ease;
}

.navbar-container {
  padding-left: 1rem;
  padding-right: 1rem;

  margin-left: auto;
  margin-right: auto;

  max-width: 64rem;
}
.navbar-base.scrolling {
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  z-index: 2;
}
.navbar-base.dark-mode.scrolling {
  background: #1b1b1e;
}
.navbar-base.hidden {
  transform: translateY(-100%);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
}

.navbar ul {
  display: flex;
  height: auto;
  gap: 50px;
  list-style-type: none;
}

.navbar li {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
}

.navbar .nav-link {
  color: #505059;
  text-align: center;
  font-size: 1.25rem;
  text-decoration: none;

  cursor: pointer;

  transition: 0.2s;
}
.navbar .nav-link:hover {
  color: #5F5CFF;
}

.navbar-base.dark-mode .nav-link {
  color: #FFFFFF;
}
.navbar-base.dark-mode .nav-link:hover {
  color: #8D8CFF;
}


/* ---------------------------------- */
/* -------- Navbar initials -------- */
.navbar h1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  margin: 30px 0;

  color: #131316;
  font-size: 1.5rem;
  font-weight: 600;

  transition: 0.5s;
}
.navbar h1:hover {
  color: #5F5CFF;
}

.navbar-base.dark-mode h1 {
  color: #FFFFFF;
}
.navbar-base.dark-mode h1:hover {
  color: #8D8CFF;
}

/* ------------------------------------- */
/* -------- Navbar tablet view -------- */

.navbar-base.tablet-view .navbar-container{
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 35rem;
}

.navbar-base.tablet-view .navbar {
  display: block;
}

.tablet-bar {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}

.tablet-bar svg {
  display: flex;
  width: 42px;
  height: 32px;
  z-index: 10;

  transition: 0.2s;
}

.night-mode svg {
  width: 1.25rem;
  height: 1.25rem;
}

.navbar-base.dark-mode .tablet-bar svg {
  fill: #FFFFFF;
}


.menu {
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  z-index: 9;

  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), background-color 0.5s;

  background: #F1F1F1;

  backface-visibility: hidden;
  will-change: transform, opacity;
}
.navbar-base.dark-mode .menu {
  background-color: #1b1b1e;
}

.menu-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}


.tablet-bar.is-active .menu {
  transform: translate(0, 0);
  z-index: 5;
}

.tablet-bar .bar-1,
.tablet-bar .bar-3 {
  transition: all 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}
.tablet-bar .bar-2 {
  transition: all 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  transition: opacity 0.8s;
}

.tablet-bar.is-active .bar-1 {
  transform: rotate(45deg) translate(1px, -1px);
  transition: all 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}
.tablet-bar.is-active .bar-2 {
  opacity: 0;
  transition: opacity 0.2s;
}
.tablet-bar.is-active .bar-3 {
  transform: rotate(-45deg) translate(-12px, -4px);
  transition: all 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

.tablet-bar svg {
  cursor: pointer;
  pointer-events: auto;
}

@media screen and (max-width: 400px) and (min-width: 100px) {
  .tablet-bar svg {
    width: 42px;
    height: 32px;
  }

  .navbar h1 {
    font-size: 1.5rem;
  }
}


/* ---------------------------------- */
/* -------- DAY/NIGHT ICONS -------- */

.night-mode {
    display: flex;
}

.night-mode svg {
  cursor: pointer;
  pointer-events: auto;
}


.day-icon {
  position: absolute;
  transform: scale(0.4);
  opacity: 0;
  z-index: 0;

  transition: 0.4s;
}

.active-day-icon {
  position: absolute;
  transform: scale(0.4);
  opacity: 0;
  z-index: 0;
}

.night-icon {
  opacity: 1;
  transform: scale(1);
  z-index: 1;

  transition: 0.4s;
}

.active-night-icon {
  opacity: 1;
  transform: scale(1);
  z-index: 1;
}


.night-mode.is-active .night-icon {
  opacity: 0;
  transform: scale(0.4);
  z-index: 0;
}

.night-mode.is-active .day-icon {
  opacity: 1;
  transform: scale(1);
  z-index: 1;
}

.night-mode.is-active .active-night-icon {
  opacity: 0;
  transform: scale(0.4);
  z-index: 0;
}

.night-mode.is-active .active-day-icon {
  opacity: 1;
  transform: scale(1);
  z-index: 1;
}

.night-mode svg path {
  transition: 0.2s;
}

.night-icon {
  fill: #505059;
}
.night-icon:hover {
  fill: #5F5CFF;
}

.day-icon {
  fill: #FFFFFF;
}
.day-icon:hover {
  fill: #8D8CFF;
}

</style>