<template>
  <div class="journey-page" :class="{'dark-mode': getDarkMode, 'tablet-view': isTablet}" id="journey">
    <div class="journey-content">
      <h1>My Journey</h1>
      <div class="timeline">
        <div class="line"></div>
        <div class="time">
          <h2 class="date">2024</h2>
          <span class="circle"></span>
          <div class="time-content">
            <h2>AI Engineer</h2>
            <h3>GEODE, Lyon</h3>
            <p>Creation of a prompt-based level generator for a mobile game app.</p>
          </div>
        </div>
        <div class="time">
          <h2 class="date">2024</h2>
          <span class="circle"></span>
          <div class="time-content">
            <h2>AI Trainer</h2>
            <h3>DataAnnotation, NYC</h3>
            <p>Fine-tuning of multiple NLP multi-agent systems for data analysis tasks.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<!-- ============ SCRIPTS ============ -->
<script>
import { website_stores } from '@/store/index.js'

export default {
  name: 'journey-page',
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

.journey-page {
  display: flex;
  padding-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;

  max-width: 72rem;
  justify-content: space-between;
}

.journey-content {
  display: flex;
  flex-direction: column;

  max-width: 30rem;
}

.journey-content h1 {
  color: #131316;
  font-size: 3rem;
  line-height: 1;
  text-align: left;

  margin: 2rem 0;

  text-align: center;
}
.journey-page.dark-mode .journey-content h1 {
  color: #FFFFFF;
}


.line {
  margin: 1rem 0 0 3.75rem;
  position: absolute;
  height: 32rem;

  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-top: 0;
  border-right: 0;
  border-bottom: 0;
  border-image-source: linear-gradient(180deg, rgba(95,92,255,1) 0%, rgba(255,92,201,1) 50%, rgba(255,187,92,1) 100%);
}

.time {
  display: flex;
  margin-top: 4rem;
  align-items: center;
  position: relative;

  gap: 2.5rem;
  width: auto;
}


.date {
  font-size: 1.25rem;
  font-weight: 500;
  align-self: center;
  color: #505059;
}

.circle {
  width: 1rem;
  height: 1rem;

  border-radius: 50%;
  background-color: #131316;

  position: absolute;
  left: calc(3.75rem + 2.5px);
  transform: translateX(-50%);

  z-index: 1;
}


.time-content {
  width: auto;
}

.time-content h2 {
  font-size: 1.75rem;
  color: #131316;
  margin: 0;
}

.time-content h3 {
  color: #131316;
  font-weight: 600;
  margin: 0;
}

.time-content p {
  color: #505059;
  margin: .5rem 0 0 0;
}

.journey-page.dark-mode .line {
  border-image-source: linear-gradient(180deg, rgba(141,140,255,1) 0%, rgba(255,140,201,1) 50%, rgba(255,207,140,1) 100%);;
}
.journey-page.dark-mode .time-content h2 {
  color: #FFFFFF;
}
.journey-page.dark-mode .time-content h3 {
  color: #FFFFFF;
}
.journey-page.dark-mode .time-content p {
  color: #F1F1F1;
}
.journey-page.dark-mode .date {
  color: #F1F1F1;
}
.journey-page.dark-mode .circle {
  background-color: #F1F1F1;
}

</style>