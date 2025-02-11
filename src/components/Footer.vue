<template>
  <footer class="footer">
    <p>Website designed &amp; implemented with <span>&#10084;</span> using <a href="https://www.figma.com/ui-design-tool/" target="_blank">Figma</a> and <a href="https://vuejs.org/" target="_blank">Vue.js</a></p>
    <img width="100%" src="@/assets/images/footer_wave.svg" alt="Footer Wave">
  </footer>
</template>


<!-- ============ SCRIPTS ============ -->
<script>
export default {
  name: 'journey-page'
}
</script>


<!-- ============= STYLE ============= -->
<style scoped>

.footer {
  display: flex;
  position: relative;
  overflow: hidden;

  margin-top: 1rem;
}

.footer img {
  display: block;
  width: 100%;
  height: auto;
}

.footer p {
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: center;
  margin-bottom: 1rem;

  color: #FFFFFF;
  font-size: 1rem;
}

.footer a {
  display: inline-block;
  text-decoration: underline;
  color:#FFFFFF;

  transition: .2s;
}

.footer a:hover {
  color: #131316;
}

.footer span {
  transition: .2s;
}

.footer p:hover span {
  color: #e74c3c;
}

@media screen and (max-width: 1000px) and (min-width: 800px) {
  .footer p {
    font-size: .75rem;
  }
}

@media screen and (max-width: 800px) and (min-width: 100px) {
  .footer p {
    font-size: 1rem;
  }

  .footer img {
    height: 250px;
    object-fit: cover;
  }
}

</style>