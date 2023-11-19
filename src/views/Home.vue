<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <!-- Navbar -->
        <nav
          class="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-absolute my-1 py-1 start-0 end-0 mx-2"
        >
          <div class="container-fluid pe-0">
            <span
              class="navbar-brand font-weight-bolder ms-lg-0 ms-3"
              @click="$router.push('/')"
              style="cursor: pointer"
            >
              MSA
            </span>
            <div class="collapse navbar-collapse" id="navigation">
              <ul class="navbar-nav mx-auto ms-xl-auto me-xl-14">
                <li class="nav-item">
                  <button
                    class="btn btn-sm btn-round mb-0 me-1"
                    @click="$router.push('/')"
                  >
                    <i class="fa fa-user opacity-6 text-dark me-1"></i>
                    Accueil
                  </button>
                </li>
              </ul>
              <li class="nav-item d-flex align-items-center"></li>
              <ul class="navbar-nav d-lg-block d-none">
                <li class="nav-item">
                  <a class="btn btn-sm btn-round mb-0 me-1 bg-gradient-dark"
                    >Web radio</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
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
                  style="
                    background-image: url('./src/assets/img/curved-images/curved6.jpg');
                  "
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
// import { onMounted } from "vue";
// //script d'appel pour le verset du jour
// onMounted(() => {
//   document.getElementById("dailyVersesWrapper").innerHTML =
//     '\u003cdiv class="dailyVerses bibleText"\u003eMoi, j’ai confiance en ta bonté, j’ai de la joie dans le cœur à cause de ton salut. Je veux chanter en l’honneur de l’Eternel, car il m’a fait du bien.\u003c/div\u003e\u003cdiv class="dailyVerses bibleVerse"\u003e\u003ca href="https://dailyverses.net/fr/2023/11/14" rel="noopener" target="_blank"\u003ePsaume 13:6\u003c/a\u003e\u003c/div\u003e';
// });
</script>
