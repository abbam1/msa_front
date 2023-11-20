<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <!-- Navbar -->
        <Navbar />
        <!-- End Navbar -->
      </div>
    </div>
  </div>
  <main class="mt-0 main-content main-content-bg">
    <section>
      <div class="page-header min-vh-75" style="padding-top: 5rem">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-6 d-flex flex-column">
              <div class="mt-7 card card-plain">
                <h1 style="color: #ecc071">Bienvenue chez la MSA</h1>
                <h2 class="mb-4">Verset du jour</h2>
                <div id="dailyVersesWrapper"></div>
                <div class="buttons">
                  <button
                    type="button"
                    class="btn mt-4"
                    style="background-color: #ecc071; color: white"
                    @click="$router.push('/connexion')"
                  >
                    Connexion
                  </button>
                  <button
                    type="button"
                    class="btn shadow-none mt-4"
                    style="color: #ecc071"
                    @click="$router.push('/inscription')"
                  >
                    Inscription
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="top-0 oblique position-absolute h-100 d-md-block d-none me-n8"
              >
                <div
                  class="bg-cover oblique-image position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                  style="background-image: url('./src/assets/img/curved6.jpg')"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="mx-auto mt-1 text-center col-8" style="padding-top: 3rem">
          <p class="mb-0 text-secondary">
            Copyright © {{ new Date().getFullYear() }} MSA concu par MSA IT.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted } from "vue";
import Navbar from "../components/navbar.vue";
// //script d'appel pour le verset du jour

onMounted(() => {
  let verseOfTheDay = document.createElement("script");
  verseOfTheDay.setAttribute(
    "src",
    "https://dailyverses.net/get/verse.js?language=sg21"
  );
  document.head.appendChild(verseOfTheDay);
});
</script>
