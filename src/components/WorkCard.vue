<template>
  <a :href="url" target="_blank" class="card" :class="{'tablet-view': isTablet, 'dark-mode': getDarkMode}">
    <img :src="resolvedSvgPath" alt="Icon"/>
    <div class="content">
      <h2 :key="name">{{name}}</h2>
      <p>{{desc}}</p>
      <a :href="url" target="_blank">{{url_name}}</a>
    </div>
  </a>
</template>


<!-- ============ SCRIPTS ============ -->
<script>
import { website_stores } from '@/store/index.js'

export default {
  name: 'work-card',
  props: {
    name: String,
    desc: String,
    svg_path: String,
    url_name: String,
    url: String
  },
  computed: {
    getDarkMode() {
      return website_stores().getDarkMode;
    },
    isTablet() {
      return website_stores().getTabletMode;
    },
    resolvedSvgPath() {
      return require(`@/assets/icons/${this.svg_path}`);
    }
  }
}
</script>


<!-- ============= STYLE ============= -->
<style scoped>

.card {
  position: relative;
  display: flex;
  width: 24.27rem;
  height: 15rem;

  text-decoration: none;

  box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
  border-radius: 30px;

  background-color: rgba(255, 255, 255, .5);

  transition: all .3s cubic-bezier(0,0,.5,1);
}
.card.dark-mode {
  background-color: #2b2b2b;
}

.card:hover {
  box-shadow: 2px 4px 16px rgba(0, 0, 0, .15);
  transform: scale3d(1.01, 1.01, 1.01);
}

.card img {
  width: 64px;
  height: 64px;

  margin: 2rem;

  transition: 200ms;
}

.content {
  display: flex;
  flex-direction: column;

  margin-right: 2rem;
  margin-bottom: 2rem;
}

.content h2 {
  font-size: 2rem;
  line-height: .9;
  color: #131316;

  margin-top: 2rem;
  margin-bottom: 0;
}
.card.dark-mode .content h3 {
  color: #FFFFFF;
}

.content p {
  font-size: 1rem;
  color: #505059;

  margin-top: .5rem;
  margin-bottom: 1rem;
}
.card.dark-mode .content p {
  color: #F1F1F1;
}

.content a {
  display: flex;
  width: auto;

  justify-content: center;
  align-items: center;
  align-self: flex-start;

  margin-top: auto;
  padding: .5rem 1rem;

  color: #FFFFFF;
  text-decoration: none;

  border-radius: 30px;
  background-color: #5F5CFF;

  transition: background-color 0.2s ease;
}
.card.dark-mode .content a {
  background-color: #8D8CFF;
}

.content a:hover {
  background-color: #524fef;
}
.card.dark-mode .content a:hover {
  background-color: #7674f1;
}


@media screen and (max-width: 500px) and (min-width: 100px) {
  .card {
    width: 100%;
    height: 50%;
  }

  .card img {
    width: 48px;
    height: 48px;

    margin: 1.5rem;
  }

  .content {
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .content h2 {
    margin-top: 1.5rem;
    margin-bottom: 0;
  }
}

</style>
