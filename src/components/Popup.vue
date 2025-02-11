<template>
  <transition name="popup">
    <div v-if="showPopup" class="popup">
      <div class="popup-content">
        <span>🦋</span>
        <div class="popup-text">
          <p>The website is evolving so things might change. Don't worry, it'll soon reach its final form !</p>
          <button @click="closePopup">Understood !</button> 
        </div>
        <button @click="closePopup" class="popup-x"><InlineSvg :src="require('@/assets/icons/close.svg')" /></button>
      </div>
    </div>
  </transition>
</template>


<!-- ============ SCRIPTS ============ -->
<script>
import InlineSvg from 'vue-inline-svg';

export default {
  name: 'work-card',

  components: {
    InlineSvg
  },

  data() {
    return {
      showPopup: false
    };
  },

  methods: {
    closePopup() {
      this.showPopup = false;
    }
  },
  
  mounted() {
    setTimeout(() => {
      this.showPopup = true;
    }, 300);
  }
}
</script>


<!-- ============= STYLE ============= -->
<style scoped>

.popup {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  padding: 1rem;
  
  max-width: 24rem;

  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
  background-color: white;

  z-index: 5;
}

.popup-content {
  display: flex;
  flex-direction: row;
}

.popup span {
  font-size: 1.5rem;
  line-height: 2rem;

  margin-right: 1rem;
}

.popup-text p {
  display: flex;
  margin: 0;

  font-size: 1rem;
  line-height: 1.25rem;
}

.popup-content button {
  border: none;
  background: none;
  cursor: pointer;

  padding: 0;

  transition: 0.2s;
}
.popup-text button {
  margin: .75rem 0 0 0;

  color: #5F5CFF;
}
.popup-text button:hover {
  transform: translateX(2px) scale(1.04);
  color: #524fef;
}

.popup-x {
  display: flex;
  justify-content: flex-start;
  margin-left: .5rem;

  width: 1.25rem;
  height: 1.25rem;

  transition: 0.2s;
}
.popup-x svg {
  width: 100%;
  align-self: flex-start;
  fill: #131316;
}
.popup-x:hover {
  transform: scale(1.05);
}

/* Transition animation */
.popup-enter-active {
  animation: scaleUp 0.3s ease-in-out;
}
.popup-leave-active {
  animation: scaleDown 0.1s ease-in;
}

@keyframes scaleUp {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  80% {
    opacity: 1;
    transform: scale(1.1); /* Slightly overshoot */
  }
  100% {
    transform: scale(1);
  }
}

@keyframes scaleDown {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: translate(0, 25%) scale(0.5);
  }
}
</style>
