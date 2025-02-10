import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import VueSmoothScroll from 'v-smooth-scroll'


const app = createApp(App)

app.use(VueSmoothScroll, {
    duration: 900
})

app.use(createPinia())

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

app.mount('#app')
