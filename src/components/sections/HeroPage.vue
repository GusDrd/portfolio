<template>
  <div class="hero-page" id="home">
    <div class="hero-content" :class="{'dark-mode': getDarkMode, 'tablet-view': isTablet}">
      <div class="hero-text">
        <h1>Hi !&nbsp;&nbsp;I'm <span>Gus</span></h1>
        <p>French AI Engineer &amp; Data Scientist passionate about bridging technology, creativity, and problem-solving. I specialize in building intelligent systems, optimizing data-driven solutions, and exploring the intersection of AI, games, and art.</p>
        <div class="hero-links">
          <a href="https://github.com/GusDrd" target="_blank"  aria-label="Checkout my github profile">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="#505059" d="M12 0c-1.576 0-3.136.318-4.592.936a11.985 11.985 0 0 0-3.893 2.666C1.265 5.908 0 9.036 0 12.298c0 5.436 3.444 10.047 8.208 11.683.6.098.792-.283.792-.615v-2.078c-3.324.738-4.032-1.648-4.032-1.648-.552-1.427-1.332-1.808-1.332-1.808-1.092-.762.084-.738.084-.738 1.2.086 1.836 1.267 1.836 1.267 1.044 1.87 2.808 1.316 3.492 1.02.108-.799.42-1.34.756-1.647-2.664-.308-5.46-1.366-5.46-6.051 0-1.365.456-2.46 1.236-3.333-.12-.307-.54-1.586.12-3.246 0 0 1.008-.332 3.3 1.254a11.05 11.05 0 0 1 3-.406c1.02 0 2.052.135 3 .406 2.292-1.586 3.3-1.254 3.3-1.254.66 1.66.24 2.939.12 3.246.78.873 1.236 1.968 1.236 3.333 0 4.698-2.808 5.73-5.484 6.038.432.381.828 1.132.828 2.275v3.37c0 .332.192.726.804.615C20.568 22.333 24 17.734 24 12.298c0-1.615-.31-3.214-.913-4.706a12.324 12.324 0 0 0-2.602-3.99A11.985 11.985 0 0 0 16.592.936 11.748 11.748 0 0 0 12 0Z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/augustin-dirand-a38918213" target="_blank" aria-label="Visit my linkedin profile">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="#505059" d="M0 1.719C0 .769.789 0 1.762 0h20.476C23.21 0 24 .77 24 1.719v20.562c0 .95-.789 1.719-1.762 1.719H1.762C.79 24 0 23.23 0 22.281V1.719Zm7.415 18.372V9.253H3.813v10.838h3.602Zm-1.8-12.318c1.255 0 2.037-.831 2.037-1.872-.023-1.063-.78-1.872-2.014-1.872-1.232 0-2.038.81-2.038 1.872 0 1.041.781 1.872 1.99 1.872h.024Zm7.361 12.318v-6.053c0-.324.024-.648.12-.879.26-.646.852-1.317 1.848-1.317 1.304 0 1.824.993 1.824 2.451v5.798h3.602v-6.216c0-3.33-1.776-4.878-4.146-4.878-1.911 0-2.768 1.05-3.248 1.79v.037h-.024l.024-.037V9.252h-3.6c.046 1.018 0 10.838 0 10.838h3.6Z"/>
            </svg>
          </a>
          <button @click="copyEmail" aria-label="Copy my email">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="none" viewBox="0 0 30 24">
              <path fill="#505059" d="M30 3c0-1.65-1.35-3-3-3H3C1.35 0 0 1.35 0 3v18c0 1.65 1.35 3 3 3h24c1.65 0 3-1.35 3-3V3Zm-3 0-12 7.5L3 3h24Zm0 18H3V6l12 7.5L27 6v15Z"/>
            </svg>
          </button>
          <!-- Popup Notification -->
          <transition name="fade">
            <div v-if="showPopup" class="popup">
              Email copied to clipboard!
            </div>
          </transition>
        </div>
        <RouterLink :to="'/chat'" class="hero-about">Chat with me! <InlineSvg :src="require('@/assets/icons/send.svg')" class="send"></InlineSvg></RouterLink>
      </div>
      <img 
        srcset="
          @/assets/images/portraits/portrait-400.webp 400w, 
          @/assets/images/portraits/portrait-800.webp 800w,
          @/assets/images/portraits/portrait-1600.webp 1600w"
        sizes="(max-width: 800px) 400px, 800px"
        src="@/assets/images/portraits/portrait-800.webp" 
        alt="Augustin Dirand – AI Engineer and Data Scientist"
        class="hero-portrait"
        decoding="async"
        loading="eager"
      />
    </div>
    <div class="hero-deco" :class="{'slide-in': revealMask}">
      <img width="100%" src="@/assets/images/back_wave.svg" alt="Decoration Wave">
    </div>
  </div>
</template>


<!-- ============ SCRIPTS ============ -->
<script>

import { website_stores } from '@/store/index.js'
import { ref } from 'vue';

export default {
  name: 'hero-page',

  data() {
    return {
      revealMask: false
    }
  },
  setup() {
    const email = "dirandaugustin@gmail.com";
    const showPopup = ref(false);

    const copyEmail = async () => {
      try {
        // Try using the modern Clipboard API
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          // Fallback for iOS Safari - create a hidden input field
          const textArea = document.createElement("textarea");
          textArea.value = email;
          textArea.style.position = "absolute";
          textArea.style.left = "-9999px";
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
        }

        // Show success popup
        showPopup.value = true;
        setTimeout(() => {
          showPopup.value = false;
        }, 2000);
      } catch (err) {
        console.error("Failed to copy email:", err);
      }
    };

    return { copyEmail, showPopup };
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
  padding-top: 6rem;
  width: 100%;
}

/* ----------------------------- */
/* ------- Hero Content ------- */

.hero-content {
  display: flex;
  padding-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;

  margin-left: auto;
  margin-right: auto;

  max-width: 64rem;
  justify-content: space-between;
}

.hero-portrait {
  display: block;

  aspect-ratio: 1 / 1;
  width: 400px;
  height: 400px;

  object-fit: cover;
  object-position: center;
  align-self: center;

  border-radius: 50%;
  background-color: #EEEEFF;
  transition: 0.2s;
}

.hero-text {
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 35rem;
  flex-shrink: 1;
}

.hero-text h1 {
  width: 100%;
  height: auto;
  flex-shrink: 0;
  margin: 0 0 0 0;

  color: #131316;
  text-align: left;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
}
.hero-content.dark-mode .hero-text h1 {
  color: #FFFFFF;
}

.hero-text span {
  color: #5F5CFF;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
}
.hero-content.dark-mode .hero-text span {
  color: #8D8CFF;
}

.hero-text p {
  margin: 0;
  margin-top: 1.5rem;
  
  width: 100%;
  word-wrap: break-word;

  color: #505059;
  font-size: 1.5rem;
}
.hero-content.dark-mode .hero-text p {
  color: #F1F1F1;
}

.hero-links {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  gap: 1.5rem;

  margin-top: 1.5rem;
}

.hero-links svg path {
  align-items: center;
  display: inline-flex;

  transition: 200ms;
}
.hero-links a:hover path,
.hero-links button:hover path {
  fill: #5F5CFF;
}
.hero-content.dark-mode .hero-links a path,
.hero-content.dark-mode .hero-links button path {
  fill: #F1F1F1;
}
.hero-content.dark-mode .hero-links a:hover path,
.hero-content.dark-mode .hero-links button:hover path {
  fill: #8D8CFF;
}

.hero-links button {
  display: inline-flex;

  padding: 0;
  padding-inline: 0;
  padding-block: 0;
  border-width: 0;

  cursor: pointer;
  background: none;
}

.hero-about {
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
.hero-about:hover {
  background-color: #524fef;
}
/* - Old color in dark-mode but bad contrast score D:

.hero-content.dark-mode .hero-about {
  background-color: #8D8CFF;
}
.hero-content.dark-mode .hero-about:hover {
  background-color: #7674f1;
}
*/

.send {
  width: .75rem;
  height: .75rem;

  fill: #FFFFFF;

  transition: all 0.4s ease;
}

.hero-about:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, .2);
}

@media screen and (max-width: 600px) and (min-width: 100px) {
  .hero-text p {
    font-size: 1.25rem;
  }
}

/* -------------------------- */
/* ------- Hero Deco ------- */

.hero-deco {
  display: flex;
  position: relative;
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
  mask-position: 0% 20%;
}

@media screen and (max-width: 800px) and (min-width: 100px) {
  .hero-deco img {
    height: 200px;
    object-fit: cover;
  }
}

/* -------------------------- */
/* ------- PHONE VIEW ------- */

.hero-content.tablet-view {
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 35rem;

  flex-direction: column;
  gap: 1rem;
}

.hero-content.tablet-view .hero-text {
  width: auto;
  flex-shrink: 1;
}

.hero-content.tablet-view .hero-portrait {
  display: flex;
  align-self: center;

  width: 300px;
  height: 300px;
}

@media screen and (max-width: 500px) {

  .hero-text .hero-links {
    align-self: center;
  }
  .hero-text .hero-about {
    align-self: center;
  }
}


.popup {
  position: fixed;
  top: 1rem;
  left: 50%;
  background: #5F5CFF;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 1rem;

  z-index: 5;
}
.hero-content.tablet-view .popup {
  font-size: .75rem;
  top: .75rem;
  left: 50%;
  transform: translateX(-50%); /* Ensures proper centering */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.3s ease-in-out;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

</style>