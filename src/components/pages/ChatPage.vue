<template>

  <div class="main-page" :class="{'dark-mode': getDarkMode, 'tablet-view': isTablet}">
    <!-- ======================== -->
    <!-- ========= NAVBAR ========= -->
    <Navbar />

    <div class="container">
      <div class="content" :style="{ 'justify-content': questionAnswered ? 'space-between' : 'center' }">
        <div class="display" ref="display">
          <!-- User Display -->
          <div v-if="sentMessages.length > 0" class="user-display-area">
            <div v-for="(msg, index) in sentMessages" :key="index" class="user-display">
              <p v-html="msg"></p>
            </div>
          </div>
        </div>
        <div class="chatbox-content" :style="{ 'margin-bottom': questionAnswered ? '2rem' : '8rem' }">
          <h1 v-if="!questionAnswered">How can I help you ?</h1>
          <form class="chatbox" @submit.prevent="sendMessage">
            <div class="chat">
              <textarea 
                placeholder="Message guz..." 
                rows=1 
                v-model="message" 
                @input="autoResize" 
                @keydown.enter="handleEnterPress" 
                ref="textarea">
              </textarea>
            </div>
            <button 
              class="send" 
              @click="sendMessage" 
              :disabled="!message.trim()" 
              :class="{'disabled': !message.trim()}"
            >
              <InlineSvg :src="require('@/assets/icons/send.svg')" class="send-icon"></InlineSvg>
            </button>
          </form>
        </div>
      </div>
    </div>
    
  </div>

</template>


<!-- ============ SCRIPTS ============ -->
<script>
import Navbar from '@/components/Navbar.vue'

import { website_stores } from '@/store/index.js'

export default {
  name: 'App',

  components: {
    Navbar
  },

  data() {
    return {
      message: "",
      questionAnswered: false,
      sentMessages: []  // Array to store messages sent
    };
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
    autoResize() {
      const textarea = this.$refs.textarea;
      textarea.style.height = `auto`;
      textarea.style.height = `${textarea.scrollHeight}px`;
    },
    handleEnterPress(event) {
      if (!event.shiftKey && !this.isTablet) {
        event.preventDefault();  // Prevent newline creation
        this.sendMessage();  // Send the message
      }
    },
    sendMessage() {
      if (!this.message.trim()) return;
      this.questionAnswered = true;

      const formattedMessage = this.message.replace(/\n/g, '<br>');
      this.sentMessages.push(formattedMessage);

      // Clear textarea
      this.message = "";

      // Resize chatbox
      const textarea = this.$refs.textarea;
      textarea.style.height = 'auto';

      // Resize chatbox
      this.$nextTick(() => {
        const displayArea = this.$refs.display;
        displayArea.scrollTop = displayArea.scrollHeight;
      });
    }
  }
}
</script>


<!-- ============= STYLE ============= -->
<style scoped>

.main-page {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  z-index: 0;

  background: linear-gradient(168deg, rgba(125, 232, 255, 0.07) 0%, rgba(127, 125, 255, 0.07) 25%, rgba(237, 125, 255, 0.07) 50%, rgba(127, 125, 255, 0.07) 75%, rgba(125, 232, 255, 0.07) 100%), #FFFDFA;

  transition: 0.5s;
}

.main-page.dark-mode {
  background: #131316;
}


.container {
  display: flex;
  width: 100%;
  height: calc(100dvh - 4rem);
  
  padding-top: 4rem;
}

.content {
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;

  margin-left: auto;
  margin-right: auto;

  max-width: 64rem;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.main-page.tablet-view .content {
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 35rem;
}


/* -------------------------------------- */
/* ------------ Display Area ------------ */
.display {
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-gutter: stable;

  padding-right: .5rem;
}
.display::-webkit-scrollbar {
    width: 4px;
}
.display::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
}


.user-display-area {
  display: flex;
  width: 100%;

  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}

.user-display {
  max-width: 32rem;
  margin: 1rem 0;
  padding: 1rem 1.25rem;

  border-radius: 30px;
  background-color: #FFFFFF;
}
.main-page.dark-mode .user-display {
  background-color: #1b1b1e;
}

.user-display p {
  margin: 0;
  word-wrap: break-word;
}
.main-page.dark-mode .display p {
  color: #FFFFFF;
}


/* -------------------------------------- */
/* ------------ Main Chatbox ------------ */
.chatbox-content {
  display: flex;
  width: 100%;

  flex-direction: column;
}

.chatbox-content h1 {
  margin: 0 0 1rem 0;
  text-align: center;

  font-size: 3rem;
  font-weight: 500;

  color: #131316;
}
.main-page.dark-mode .chatbox-content h1 {
  color: #FFFFFF;
}
.main-page.tablet-view .chatbox-content h1 {
  font-size: 2rem;
}


.chatbox {
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 2px 6px rgba(0, 0, 0, .15);
  border-radius: 30px;

  transition: 0.2s ease;
}
.main-page.dark-mode .chatbox {
  background-color: #1b1b1e;
}


.chat {
  width: 100%;
  padding: .5rem .5rem;
  margin: 0 .5rem 0 1rem;
}

.chat textarea {
  width: 100%;
  height: auto;
  min-height: 2rem;

  font-family: "Red Hat Display", Helvetica, Arial, sans-serif;
  font-size: 1.25rem;

  max-height: 16rem;
  overflow-y: auto;

  background-color: transparent;
  box-sizing: border-box;
  resize: none;

  padding: 10px;
  border-radius: 5px;
  border: none;
}
.chat textarea:focus {
  outline: none;
}
.main-page.dark-mode .chat textarea {
  color: #FFFFFF;
}
.main-page.tablet-view .chat textarea {
  font-size: 1rem;
}


/* ------------------------------------- */
/* ------------ Send Button ------------ */
.send {
  display: flex;
  height: 2.5rem;
  width: 2.5rem;
  margin: .825rem 1rem auto 0;

  border: none;
  padding-block: 0;
  padding-inline: 0;
  align-self: flex-start;

  border-radius: 50%;
  box-sizing: border-box;
  background-color: #131316;

  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  cursor: pointer;
  transition: 0.2s ease;
}
.main-page.dark-mode .send {
  background-color: #FFFFFF;
}
.main-page.tablet-view .send {
  height: 2rem;
  width: 2rem;
  margin: 1rem 1rem 0 0;
}

.send:hover {
  opacity: 0.75;
}
.main-page.dark-mode .send:hover {
  opacity: 0.75;
}

.send:disabled {
  opacity: 0.75;
}

.send-icon {
  height: 50%;
  width: 50%;

  margin-top: 15%;
  object-fit: contain;

  fill: #FFFFFF;
  transform: rotate(-45deg);
  transition: 0.2s ease;
}
.main-page.dark-mode .send-icon {
  fill: #131316;
}

</style>