<template>
  <div class="about-page" :class="{'dark-mode': getDarkMode, 'tablet-view': isTablet}" id="about">
    <div class="about-container">
      <div class="about-text">
        <h1>About me</h1>
        <p>I thrive on working with cutting-edge AI technologies to solve complex challenges. Whether optimizing models, developing generative AI, or refining NLP systems, I aim to make AI more accessible, efficient, and impactful.</p>
        <div class="about-boxes" v-animate>
          <div class="about-box">
            <span>🧠</span>
            <h2>AI Expertise</h2>
            <p>Crafting intelligent systems with text, images, sound &amp; data</p>
          </div>
          <div class="about-box">
            <span>🎨</span>
            <h2>Creative Tech</h2>
            <p>Transforming art, gaming &amp; design with AI-driven innovation</p>
          </div>
          <div class="about-box">
            <span>🚀</span>
            <h2>Continuous Learning</h2>
            <p>Driven by curiosity, always exploring new tech and ideas</p>
          </div>
        </div>
      </div>

      <div class="skills-section">

        <div class="skills-buttons">
          <button 
          v-for="(category, index) in categories"
          :key="index"
          :class="{ active: selectedCategory === category.name }"
          @click="selectedCategory = category.name">
            <p>{{ category.name }}</p>
          </button>
        </div>

        <div v-for="category in categoryIcons" :key="category.name">
          <transition-group name="fade" tag="div" v-show="selectedCategory === category.name" mode="out-in" class="skills-icons">
            <div v-for="(icon, index) in category.icons" :key="icon" class="skill" ref="skill" @touchstart.passive="handleTouchStart" @touchend.passive="handleTouchEnd">
                <InlineSvg
                  :src="icon"
                  :uniqueIds="true"
                  class="skill-icon"
                  aria-label="Skill Icon"
                ></InlineSvg>
                <p class="skill-name">{{category.iconNames[index]}}</p>
            </div>
          </transition-group>
        </div>

      </div>

    </div>

  </div>
</template>

<!-- ============ SCRIPTS ============ -->
<script>
import { website_stores } from '@/store/index.js'
import InlineSvg from 'vue-inline-svg';

export default {
  name: 'about-page',
  components: {
    InlineSvg
  },

  data() {
    return {
      selectedCategory: "Languages",
      categories: [
        {
          name: "Languages",
          iconNames: ["Python", "Java", "C Sharp", "C", "Typescript"]
        },
        {
          name: "Frameworks",
          iconNames: ["Pytorch", "Flask", "Vue", "LangChain"]
        },
        {
          name: "Libraries",
          iconNames: ["Pandas", "NumPy", "OpenCV", "Matplotlib", "Scikit"]
        },
        {
          name: "Tools",
          iconNames: ["Docker", "Git", "Insomnia", "Linux"]
        },
        {
          name: "Softwares",
          iconNames: ["Unity", "Unreal", "Figma", "Photoshop", "Ableton"]
        },
        {
          name: "Interests",
          iconNames: ["Design", "Music", "Astronomy", "Games", "Freefall"]
        }
      ]
    }
  },
    
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    },
    handleTouchStart(event) {
      event.currentTarget.classList.add('active');
    },
    handleTouchEnd(event) {
      event.currentTarget.classList.remove('active');
    }
  },

  computed: {
    getDarkMode() {
      return website_stores().getDarkMode;
    },
    isTablet() {
      return website_stores().getTabletMode;
    },
    categoryIcons() {
      const icons = require.context('@/assets/icons/skills', false, /\.svg$/);
      return this.categories.map(category => ({
        name: category.name,
        icons: category.iconNames.map(iconName => icons(`./${iconName}.svg`)),
        iconNames: category.iconNames
      }));
    }
  }
}
</script>


<!-- ============= STYLE ============= -->
<style scoped>

.about-page {
  background: rgb(255, 255, 255);

  transition: 0.2s;
}
.about-page.dark-mode {
  background: #1b1b1e;
}

.about-container {
  display: flex;
  padding-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;

  margin-left: auto;
  margin-right: auto;

  max-width: 64rem;
  flex-direction: column;
}
.about-page.tablet-view {
  flex-direction: column;
  justify-content: flex-start;
}

.about-text {
  display: flex;
  flex-direction: column;
}

.about-text h1 {
  height: auto;
  flex-shrink: 0;
  margin: 2rem 0 0;

  color: #131316;
  font-size: 3rem;
  line-height: 1;
}
.about-page.dark-mode .about-text h1 {
  color: #FFFFFF;
}

.about-text p {
  display: flex;
  justify-content: center;

  max-width: 60rem;

  margin: 2rem 0 2rem 0;

  color: #505059;
  font-size: 1.5rem;
}
.about-page.dark-mode .about-text p {
  color: #F1F1F1;
}

@media screen and (max-width: 600px) and (min-width: 100px) {
  .about-text p {
    font-size: 1.25rem;
  }
}

/* ------------------------------------- */
/* ------------ About Boxes ------------ */
.about-boxes {
  display: flex;
  justify-content: space-evenly;
  row-gap: 2rem;
  column-gap: 2rem;
}
.about-page.tablet-view .about-boxes {
  flex-direction: column;
  align-items: center;
}

.about-box {
  height: 10rem;
  width: 18rem;

  padding: 1rem;

  box-shadow: 0 4px 12px rgba(0, 0, 0, .1);
  border-radius: 30px;

  transition: box-shadow 0.2s ease;
}
.about-box:hover {
  box-shadow: 0 4px 24px rgba(0, 0, 0, .1);
}
.about-page.tablet-view .about-box {
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  width: 100%;
  height: auto;
}
.about-page.dark-mode .about-box {
  background-color: #2b2b2b;
}

.about-box span {
  font-size: 2rem;
  margin: 0 auto;
}

.about-box h2 {
  font-size: 1.5rem;
  line-height: 1.75rem;
  margin: .5rem 0;
  color: #131316;
}
.about-page.dark-mode .about-box h2 {
  color: #FFFFFF;
}

.about-box p {
  font-size: 1.125rem;
  margin: 0;
  color: #505059;
  justify-content: flex-start;
}


/* ---------------------------------------- */
/* ------------ Skills Section ------------ */
.skills-section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin: 4rem 0 0 0;

  height: 20rem;
}

/* ------------ Skills Buttons ------------ */
.skills-buttons {
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  justify-content: center;

  row-gap: 0;
  column-gap: 2rem;

  margin: 0 0 2rem 0;
}

.skills-buttons button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .5rem 1rem;

  background: none;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  pointer-events: auto;

  transition: all 0.2s ease;
}

.skills-buttons button p {
  color: #131316;
  font-size: 1.25rem;
  margin: 0;

  transition: all 0.2s ease;
}
.about-page.dark-mode .skills-buttons button p {
  color: #FFFFFF;
}


.skills-buttons button:hover p {
  color: #505059;
}
.about-page.dark-mode .skills-buttons button:hover p {
  color: #dfdfdf;
}


.skills-buttons button.active {
  border-radius: 30px;
  background: #F1F1F1;
}
.about-page.dark-mode .skills-buttons button.active {
  background: #2b2b2b;;
}

.skills-buttons button.active p {
  color: #131316;
}
.about-page.dark-mode .skills-buttons button.active p {
  color: #F1F1F1;
}

/* -------------- Skills Icons -------------- */
.skills-icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 2rem;
}

.skill {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.skill-icon {
  width: 4rem;
  height: 4rem;
  align-self: center;

  fill: #131316;

  transition: fill .2s ease;
}
.about-page.tablet-view .skill-icon {
  width: 3rem;
  height: 3rem;
}

.about-page.dark-mode .skill-icon {
  fill: #FFFFFF;
}
.skill:hover .skill-icon,
.skill:active .skill-icon {
  fill: #5F5CFF;
}
.about-page.dark-mode .skill:hover .skill-icon,
.skill:active .about-page.dark-mode .skill-icon {
  fill: #8D8CFF;
}

.skill-name {
  margin: .5rem 0 0 0;
  text-align: center;

  color: #5F5CFF;
  opacity: 0;

  transform: translateY(-10px);
  transition: all .2s ease;
}
.about-page.dark-mode .skill-name {
  color: #8D8CFF;
}
.skill:hover .skill-name,
.skill:active .skill-name {
  opacity: 1;
  transform: translateY(-5px);
}

</style>