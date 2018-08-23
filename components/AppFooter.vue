<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__block">
        <div class="footer__item">
          <p class="footer__text">Rapport de stage</p>
          <p class="footer__text">2017/2018</p>
        </div>
        <div class="footer__item">
          <p class="footer__text footer__text--center">
            <nuxt-link class="footer__link" to="https://licence-websensoriel.unilim.fr/">
              Licence professionnelle de webdesign sensorielle et stratégie de création en ligne
            </nuxt-link>
          </p>
        </div>
        <div class="footer__item footer__item--right">
          <p class="footer__text">Gaétan NICOLAS</p>
          <p class="footer__text">
            <nuxt-link class="footer__link" to="index">Home</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  background-color: #eee;
  padding: 20px 30px 30px;
}

.footer__container {
  max-width: 800px;
  margin: 0 auto;
}

.footer__link {
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  color: #262e50;
  position: relative;
  margin-top: 20px;
}

.footer__link:hover {
  text-decoration: none;
}

/* .footer__link:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #262e50;
  opacity: 1;
  transition: 0.2s ease;
}
.footer__link:hover:after {
  opacity: 0;
} */

.footer__block {
  display: flex;
  justify-content: space-between;
}

.footer__text {
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  color: #262e50;
  margin-top: 20px;
}

.footer__text--center {
  text-align: center;
}

.footer__item {
  flex: 0 0 33%;
}

.footer__item--right {
  text-align: right;
}
</style>
