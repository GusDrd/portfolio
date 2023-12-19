<template>
  <div class="contact-page" :class="{'dark-mode': getDarkMode, 'tablet-view': isTablet}" id="contact">
    <div class="contact-text">
      <h1>Contact</h1>
      <h3>If you want to get in touch, feel free to drop me an 
        <span><a @click="copyEmail">
            <svg xmlns="http://www.w3.org/2000/svg" width="63" height="50" viewBox="0 0 63 50" fill="#333">
          <path d="M56.25 0H6.25C2.8125 0 0.03125 2.8125 0.03125 6.25L0 43.75C0 47.1875 2.8125 50 6.25 50H56.25C59.6875 50 62.5 47.1875 62.5 43.75V6.25C62.5 2.8125 59.6875 0 56.25 0ZM55 13.2812L32.9062 27.0938C31.9062 27.7188 30.5938 27.7188 29.5938 27.0938L7.5 13.2812C7.18665 13.1053 6.91225 12.8677 6.6934 12.5827C6.47456 12.2976 6.31582 11.9712 6.2268 11.623C6.13778 11.2749 6.12032 10.9123 6.17549 10.5572C6.23066 10.2021 6.3573 9.86192 6.54776 9.55719C6.73821 9.25246 6.98851 8.98955 7.28352 8.78436C7.57853 8.57917 7.9121 8.43597 8.26405 8.36343C8.616 8.29089 8.97901 8.29052 9.33111 8.36234C9.68321 8.43415 10.0171 8.57667 10.3125 8.78125L31.25 21.875L52.1875 8.78125C52.4829 8.57667 52.8168 8.43415 53.1689 8.36234C53.521 8.29052 53.884 8.29089 54.236 8.36343C54.5879 8.43597 54.9215 8.57917 55.2165 8.78436C55.5115 8.98955 55.7618 9.25246 55.9522 9.55719C56.1427 9.86192 56.2693 10.2021 56.3245 10.5572C56.3797 10.9123 56.3622 11.2749 56.2732 11.623C56.1842 11.9712 56.0254 12.2976 55.8066 12.5827C55.5878 12.8677 55.3134 13.1053 55 13.2812Z"/>
          </svg></a>
        </span> or send me a message on 
        <span><a href="https://www.linkedin.com/in/augustin-dirand-a38918213" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="#333">
          <path d="M0 3.58125C0 1.60313 1.64375 0 3.67187 0H46.3281C48.3563 0 50 1.60313 50 3.58125V46.4188C50 48.3969 48.3563 50 46.3281 50H3.67187C1.64375 50 0 48.3969 0 46.4188V3.58125ZM15.4469 41.8563V19.2781H7.94375V41.8563H15.4469ZM11.6969 16.1938C14.3125 16.1938 15.9406 14.4625 15.9406 12.2937C15.8937 10.0781 14.3156 8.39375 11.7469 8.39375C9.17813 8.39375 7.5 10.0813 7.5 12.2937C7.5 14.4625 9.12813 16.1938 11.6469 16.1938H11.6969ZM27.0344 41.8563V29.2469C27.0344 28.5719 27.0844 27.8969 27.2844 27.4156C27.825 26.0687 29.0594 24.6719 31.1344 24.6719C33.85 24.6719 34.9344 26.7406 34.9344 29.7781V41.8563H42.4375V28.9062C42.4375 21.9688 38.7375 18.7437 33.8 18.7437C29.8188 18.7437 28.0344 20.9312 27.0344 22.4719V22.55H26.9844C27.001 22.5239 27.0176 22.4979 27.0344 22.4719V19.2781H19.5344C19.6281 21.3969 19.5344 41.8563 19.5344 41.8563H27.0344Z"/>
          </svg></a>
        </span> <br/>Check out some of my other work on 
        <span><a href="https://github.com/GusDrd" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="#333">
          <path d="M25 0C21.717 0 18.4661 0.662698 15.4329 1.95026C12.3998 3.23782 9.6438 5.12502 7.32233 7.50412C2.63392 12.3089 0 18.8256 0 25.6207C0 36.945 7.175 46.5528 17.1 49.9603C18.35 50.1653 18.75 49.371 18.75 48.6793V44.3494C11.825 45.8866 10.35 40.9162 10.35 40.9162C9.2 37.9442 7.575 37.15 7.575 37.15C5.3 35.5615 7.75 35.6127 7.75 35.6127C10.25 35.7921 11.575 38.2517 11.575 38.2517C13.75 42.146 17.425 40.9931 18.85 40.3782C19.075 38.7128 19.725 37.5855 20.425 36.945C14.875 36.3045 9.05 34.1011 9.05 24.3396C9.05 21.4957 10 19.2155 11.625 17.3964C11.375 16.7559 10.5 14.0914 11.875 10.6326C11.875 10.6326 13.975 9.94082 18.75 13.2459C20.725 12.6822 22.875 12.4004 25 12.4004C27.125 12.4004 29.275 12.6822 31.25 13.2459C36.025 9.94082 38.125 10.6326 38.125 10.6326C39.5 14.0914 38.625 16.7559 38.375 17.3964C40 19.2155 40.95 21.4957 40.95 24.3396C40.95 34.1267 35.1 36.2789 29.525 36.9194C30.425 37.7136 31.25 39.2765 31.25 41.6592V48.6793C31.25 49.371 31.65 50.1909 32.925 49.9603C42.85 46.5271 50 36.945 50 25.6207C50 22.2561 49.3534 18.9245 48.097 15.8161C46.8406 12.7076 44.9991 9.88322 42.6777 7.50412C40.3562 5.12502 37.6002 3.23782 34.5671 1.95026C31.5339 0.662698 28.283 0 25 0Z"/>
        </svg></a>
      </span></h3>
    </div>
  </div>
</template>


<!-- ============ SCRIPTS ============ -->
<script>
import { website_stores } from '@/store/index.js'

export default {
  name: 'contact-page',
  computed: {
    getDarkMode() {
      return website_stores().getDarkMode;
    },
    isTablet() {
      return website_stores().getTabletMode;
    }
  },
  methods: {
    copyEmail() {
      const email = 'dirandaugustin@gmail.com';
      navigator.clipboard.writeText(email)
        .then(() => {
          alert(`Email ${email} copied to clipboard!`);
        })
        .catch((error) => {
          console.error('Error copying to clipboard:', error);
        });
    }
  }
}
</script>


<!-- ============= STYLE ============= -->
<style scoped>

.contact-page {
  align-self: stretch;

  background: linear-gradient(180deg, #BABAFF -50%, rgba(255, 253, 250, 0.00) 100%);
}

.contact-page.dark-mode {
  background: linear-gradient(180deg, #575469 -50%, rgba(255, 253, 250, 0.00) 100%);
}

.contact-text {
  display: flex;
  flex-direction: column;

  margin-left: 200px;
}
.contact-page.tablet-view .contact-text {
  margin: 0 160px;
}
.contact-page.tablet-view .contact-text h3 {
  width: auto;
}

.contact-text h1 {
  color: #333;
  font-size: 96px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin: 80px 0 0;
}

.contact-text h3 {
  width: 1250px;
  height: auto;

  color: #333;
  font-size: 50px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin: 60px 0 0;
}

.contact-page.dark-mode .contact-text h1,
.contact-page.dark-mode .contact-text h3 {
  color: #FFFDFA;
}

.contact-page.dark-mode .contact-text span svg {
  fill: #FFFDFA;
}
.contact-page.dark-mode .contact-text span:hover svg {
  fill: #7F7DFF;
}

.contact-text span svg {
  cursor: pointer;
  pointer-events: auto;
  vertical-align: -10%;

  transition: 200ms;
  -webkit-transition: 200ms;
}

.contact-text span:hover svg {
  fill: #7F7DFF;
}

@media screen and (max-width: 775px) and (min-width: 100px) {
  .contact-page.tablet-view .contact-text {
    margin: 0 50px;
  }

  .contact-page.tablet-view .contact-text h1 {
    font-size: 50px;
  }

  .contact-page.tablet-view .contact-text h3 {
    font-size: 30px;
  }
  .contact-page.tablet-view .contact-text span svg {
    width: auto;
    height: 30px;
  }
}

</style>