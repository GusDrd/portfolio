import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'
import HomePage from './components/pages/HomePage.vue'
import ChatPage from './components/pages/ChatPage.vue'
import UnknownPage from './components/pages/UnknownPage.vue'

import VueSmoothScroll from 'v-smooth-scroll'
import InlineSvg from 'vue-inline-svg';


const router = createRouter({
    history: createWebHistory(), // Using HTML5 History mode
    routes: [
        { path: '/', component: HomePage },
        { path: '/chat', component: ChatPage },
        { path: '/:pathMatch(.*)*', component: UnknownPage }
    ],
    scrollBehavior(to, from) {
        if (to.path === from.path) {
            return false; // No scroll reset if staying on the same page
        }

        if (to.hash) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const element = document.querySelector(to.hash);
                    if (element) {
                        const topOffset = element.getBoundingClientRect().top + window.scrollY;
                        window.scrollTo({ top: topOffset, behavior: "smooth" });
                    }
                    resolve();
                }, 100); // Small delay to ensure the page loads first
            });
        }

        return { top: 0 };
    }
});

const app = createApp(App)

// App third-parties
app.use(VueSmoothScroll, { duration: 900 })
app.use(createPinia())
app.use(router);

// Register global components
app.component('InlineSvg', InlineSvg)

// Creates v-animate directive for elements to enter the screen smoothly
app.directive("animate", {
    mounted(el, binding) {
        const animation = binding.value || "translateY(-20px)";

        el.style.opacity = 0;
        el.style.transform = animation;
        el.style.transition = "all 0.5s ease-out";
  
        // Intersection Observer to detect when element enters viewport
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    el.style.opacity = 1;
                    el.style.transform = "translateY(0)";
  
                    // Stop observing after the animation plays once
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(el);
    },
});

// Mount app
app.mount('#app')
