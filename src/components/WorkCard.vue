<template>
  <div class="card" :class="{'tablet-view': isTablet}" ref="card" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
    <div class="content" :class="{'dark-mode': getDarkMode}">
      <div class="front">
        <h3 :key="name">{{name}}</h3>
        <div class="card-tags">
          <p v-for="tag in tags" :key="tag">{{tag}}</p>
        </div>
      </div>
      <div class="back">
        <h3 :key="name">{{name}}</h3>
        <p :key="desc">{{desc}}</p>
        <a :href="url" target="_blank">see more <span>&#8600;</span></a>
      </div>
    </div>
  </div>
</template>


<!-- ============ SCRIPTS ============ -->
<script>
import { website_stores } from '@/store/index.js'

export default {
  name: 'work-card',
  props: {
    name: String,
    tags: Array,
    desc: String,
    url: String
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
    handleTouchStart() {
      this.$refs.card.classList.add('active');
    },
    handleTouchEnd() {
      this.$refs.card.classList.remove('active');
    }
  }
}
</script>


<!-- ============= STYLE ============= -->
<style scoped>

.card {
  position: relative;
  display: flex;
  width: 400px;
  height: 400px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
}

.content {
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 15px rgba(51, 51, 51, 0.08);

  transition: transform 1s;
  transform-style: preserve-3d;
}

.content.dark-mode {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
}

.card:hover .content, .card:active .content{
  transform: rotateY(180deg);
  transition: transform 0.5s;
}

.front, 
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  border-radius: 10px;
  background: #FFFDFA;
}

.content.dark-mode .front,
.content.dark-mode .back{
  background: #66618d;
}

.content.dark-mode .back {
  background: #4c486b;
}

.back {
  background: #EEF;
  transform: rotateY(180deg);
}

.front h3 {
  display: flex;

  color: #333;
  text-align: left;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.05;

  margin: 40px 0 0 40px;
}

.content.dark-mode .front h3 {
  color: #FFFDFA;
}

.back h3 {
  display: flex;

  color: #333;
  text-align: left;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.05;

  margin: 40px 0 0 40px;
}

.back p {
  position: absolute;
  display: flex;
  width: auto;

  color: #333;
  text-align: left;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin: 40px 40px 0 40px;
}

.back a {
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 0;
  margin: 0 0 40px;

  color: #333;
  text-decoration: none;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  transition: 0.2s;
  -webkit-transition: 0.2s;
}

.content.dark-mode .back h3,
.content.dark-mode .back p {
  color: #FFFDFA;
}
.content.dark-mode .back a {
  color: #FFFDFA;

  transition: 0.2s;
  -webkit-transition: 0.2s;
}

.back a:hover,
.content.dark-mode .back a:hover {
  color: #7F7DFF;
}

.back span {
  font-family: Calibri;
}

.card-tags {
  position: absolute;
  display: flex;
  width: auto;
  align-items: flex-end;
  align-content: flex-start;
  gap: 10px;
  flex-wrap: wrap;

  bottom: 0;
  margin: 0 40px 40px 40px;
}

.card-tags p {
  display: flex;
  width: auto;
  height: 25px;
  flex-direction: column;
  justify-content: center;

  margin: 0;
  padding: 0 20px;

  color: #FFFDFA;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  border-radius: 5px;
  background: #7F7DFF;
}

.content.dark-mode .card-tags p {
  color: #333;
  background: #EEF;
}

@media screen and (max-width: 775px) and (min-width: 100px) {
  .card.tablet-view {
    width: 300px;
    height: 300px;
  }

  .card.tablet-view .front h3 {
    margin: 20px 0 0 20px;
    font-size: 40px;
  }
  .card.tablet-view .back h3 {
    margin: 20px 0 0 20px;
    font-size: 40px;
  }
  .card.tablet-view .back p {
    margin: 20px 40px 0 20px;
  }
  .card.tablet-view .back a {
    font-size: 28px;
  }

  .card.tablet-view .card-tags {
    margin: 0 20px 20px 20px;
  }
  .card.tablet-view .card-tags p {
    font-size: 14px;
  }
}

</style>
