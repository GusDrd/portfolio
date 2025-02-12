import { defineStore } from 'pinia'

export const website_stores = defineStore('website_stores', {
  state: () => ({ 
    isDarkMode: localStorage.getItem('isDarkMode') === 'true',
    isTablet: false
  }),
  getters: {
    getDarkMode(state) {
      return state.isDarkMode;
    },
    getTabletMode(state) {
      return state.isTablet;
    },
  },
  actions: {
    setDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem('isDarkMode', this.isDarkMode);
    },
    setTabletMode(mode) {
      this.isTablet = mode;
    },
  },
})
