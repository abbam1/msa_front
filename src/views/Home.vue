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
                  class="bg-cover oblique-image arriere_plan position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
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

<style scoped>
.arriere_plan {
  background-image: url("@/assets/img/curved6.jpg");
}
</style>

<script setup>
import { onMounted } from "vue";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar.vue";

//script d'appel pour le verset du jour
onMounted(() => {
  let verseOfTheDay = document.createElement("script");
  verseOfTheDay.setAttribute(
    "src",
    "https://dailyverses.net/get/verse.js?language=sg21"
  );
  document.head.appendChild(verseOfTheDay);

  //script pour pop up demo
  // const swalWithBootstrapButtons = Swal.mixin({
  //   customClass: {
  //     confirmButton: "btn btn-success",
  //     cancelButton: "btn btn-danger",
  //   },
  //   buttonsStyling: false,
  // });
  // swalWithBootstrapButtons
  //   .fire({
  //     title: "Demo",
  //     text: "Cette application est toujours en cours de développement, ceci est donc une demo!!!!",
  //     icon: "warning",
  //     showCancelButton: false,
  //     confirmButtonText: "suivant",
  //     reverseButtons: true,
  //     footer: "<span>Application en cours de developpement...</span>",
  //   })
  //   .then((result) => {
  //     if (result.isConfirmed) {
  //       swalWithBootstrapButtons.fire({
  //         title: "Demo!",
  //         html: `Vous pouvez commencer par voir les formulaires en appuyant sur <button
  //                   type="button"
  //                   class="btn mt-4"
  //                   style="background-color: #ecc071; color: white">Connexion</button> /<button
  //                   type="button"
  //                   class="btn shadow-none mt-4"
  //                   style="color: #ecc071"> inscription</button> ou encore <a class="btn btn-sm btn-round mb-0 me-1 bg-gradient-dark">tableau de bord</a> pour entrer dans l'app.`,
  //         icon: "warning",
  //         footer: "<span>Application en cours de developpement...</span>",

  //         confirmButtonText: "commencer",
  //       });
  //     }
  //   });
});
</script>
