<template>
  <div class="journey-page" :class="{'dark-mode': getDarkMode, 'tablet-view': isTablet}" id="journey">
    <div class="journey-content">
      <h1>My Journey</h1>
      <div ref="timeline" class="timeline">
        <div ref="line" class="line"></div>
        <TimelineEvent
          :year="'2024'"
          :title="'AI Engineer'"
          :location="'GEODE, Lyon'"
          :desc="'Creation of a prompt-based level generator for a mobile game app.'"
          :size="'normal'"
        ></TimelineEvent>
        <TimelineEvent
          :year="'2024'"
          :title="'Data Scientist'"
          :location="'DataAnnotation, NYC'"
          :desc="'Fine-tuning of multiple NLP multi-agent systems for data analysis tasks.'"
          :size="'normal'"
        ></TimelineEvent>
        <TimelineEvent
          :year="'2023'"
          :title="'AI Master\'s'"
          :location="'QMUL, London'"
          :desc="'MSc degree in Artificial Intelligence obtained with Distinction. (GPA: 4)'"
          :size="'medium'"
        ></TimelineEvent>
        <TimelineEvent
          :year="'2022'"
          :title="'Robotics Bachelor\'s'"
          :location="'QMUL, London'"
          :desc="'BEng degree in Robotics obtained with First-Class Honours. (GPA: 4)'"
          :size="'medium'"
        ></TimelineEvent>
      </div>
    </div>
  </div>
</template>


<!-- ============ SCRIPTS ============ -->
<script>
import { website_stores } from '@/store/index.js'
import TimelineEvent from '@/components/TimelineEvent.vue'

export default {
  name: 'journey-page',
  components: {
    TimelineEvent
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
      this.adjustLineHeight();
    }, 200);
    window.addEventListener('resize', this.adjustLineHeight);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.adjustLineHeight);
  },
  methods: {
    adjustLineHeight() {
      const line = this.$refs.line;
      const timeline = this.$refs.timeline;

      if (line && timeline) {
        const timelineTop = timeline.offsetTop;
        const documentHeight = document.body.scrollHeight;

        // Get computed styles for the margin
        const computedStyle = window.getComputedStyle(line);
        const marginTop = parseFloat(computedStyle.marginTop) || 0; // Convert to number

        // Calculate height from the timeline top to the bottom of the page, adjusting for margin
        const newHeight = documentHeight - timelineTop - marginTop;
        line.style.height = `${newHeight}px`;
      }
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

  transition: 0.2s;
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

  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-top: 0;
  border-right: 0;
  border-bottom: 0;
  border-image-source: linear-gradient(180deg, rgba(95,92,255,1) 0%, rgba(255,92,201,1) 50%, rgba(255,187,92,1) 100%);
}
.journey-page.dark-mode .line {
  border-image-source: linear-gradient(180deg, rgba(141,140,255,1) 0%, rgba(255,140,201,1) 50%, rgba(255,207,140,1) 100%);;
}

</style>