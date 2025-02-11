<template>
  <div class="work-page" :class="{'dark-mode': getDarkMode, 'tablet-view': isTablet}" id="work">
    <h1>Projects</h1>
    <div class="work-cards" v-animate>

      <WorkCard 
        :name="'Muse'"
        :desc="'AI research project exploring music recommendation systems which only use CBF and multiple musical and audio features.'"
        :svg_path="'muse.svg'"
        :url_name="'Discover'"
        :url="'https://muse.augustindirand.com/'"
      ></WorkCard>

      <WorkCard 
        :name="'Portfolio'"
        :desc="'An occasion to learn about Vue, to explore web design, and to showcase some of my previous work and experiences.'"
        :svg_path="'portfolio.svg'"
        :url_name="'Explore'"
        :url="'https://github.com/GusDrd/portfolio'"
      ></WorkCard>

    </div>
  </div>
</template>


<!-- ============ SCRIPTS ============ -->
<script>
import { website_stores } from '@/store/index.js'
import WorkCard from '@/components/WorkCard.vue'

export default {
  name: 'journey-page',
  components: {
    WorkCard
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

.work-page {
  display: flex;
  padding-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;

  margin-left: auto;
  margin-right: auto;

  max-width: 64rem;
  justify-content: space-between;
  flex-direction: column;
}
.work-page.tablet-view {
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 35rem;
}

.work-page h1 {
  flex-shrink: 0;
  margin: 0;

  color: #131316;
  text-align: center;
  font-size: 3rem;
  line-height: 1;

  transition: .2s;
}

.work-page.dark-mode h1 {
  color: #FFFFFF;
}

.work-cards {
  display: flex;
  justify-content: center;

  gap: 4rem;
  flex-shrink: 0;
  flex-wrap: wrap;

  margin: 4rem 0 8rem 0;

  transition: .1s;
}

.work-page.tablet-view .work-cards {
  gap: 2rem;

  margin: 4rem 0 4rem 0;
}

</style>