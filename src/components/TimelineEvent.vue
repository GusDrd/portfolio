<template>
  <div 
    class="time" 
    :class="{
      'dark-mode': getDarkMode, 
      'tablet-view': isTablet,
      'medium': size === 'medium', 
      'long': size === 'long',
      'xtreme': size === 'xtreme'
    }"
    v-animate
  >
    <h2 class="date">{{year}}</h2>
    <span class="circle"></span>
    <div class="time-content">
      <h2>{{title}}</h2>
      <h3>{{location}}</h3>
      <p>{{desc}}</p>
    </div>
  </div>
</template>


<!-- ============ SCRIPTS ============ -->
<script>
import { website_stores } from '@/store/index.js'

export default {
  name: 'timeline-event',
  props: {
    year: String,
    title: String,
    location: String,
    desc: String,
    size: {
      type: String,
      default: 'normal',
      validator: value => ['normal', 'medium', 'long', 'xtreme'].includes(value) // Ensure valid values
    }
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

.time {
  display: flex;
  margin-top: 4rem;
  align-items: center;
  position: relative;

  gap: 2.5rem;
  width: auto;
}
.time.medium {
  margin-top: 6rem;
}
.time.long {
  margin-top: 8rem;
}
.time.xtreme {
  margin-top: 16rem;
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

.time.dark-mode .line {
  border-image-source: linear-gradient(180deg, rgba(141,140,255,1) 0%, rgba(255,140,201,1) 50%, rgba(255,207,140,1) 100%);;
}
.time.dark-mode .time-content h2 {
  color: #FFFFFF;
}
.time.dark-mode .time-content h3 {
  color: #FFFFFF;
}
.time.dark-mode .time-content p {
  color: #F1F1F1;
}
.time.dark-mode .date {
  color: #F1F1F1;
}
.time.dark-mode .circle {
  background-color: #F1F1F1;
}
</style>
