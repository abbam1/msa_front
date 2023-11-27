<template>
  <div class="container position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <!-- Navbar -->
        <Navbar />
        <!-- End Navbar -->
      </div>
    </div>
  </div>
  <main class="main-content mt-3">
    <section>
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row" style="padding-left: 10%;padding-right: 10%;}">
            <div class="col-lg-5 col-md-6 d-flex flex-column mx-auto">
              <div class="card card-plain mt-8">
                <div class="card-header pb-0 text-left bg-transparent">
                  <h3 class="font-weight-bolder">
                    <img src="../assets/img/logo-msa.png" />
                    Connexion
                  </h3>
                </div>
                <div class="card-body">
                  <form role="form" @submit.prevent="voir">
                    <label>Email</label>
                    <div class="mb-3">
                      <input
                        type="email"
                        name="email"
                        v-model="formData.email"
                        class="form-control"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <label>Mot de passe </label>
                    <div class="mb-3">
                      <div class="form-group">
                        <div class="input-group mb-4">
                          <input
                            class="form-control"
                            id="password"
                            name="password"
                            v-model="formData.password"
                            placeholder="Mot de passe"
                            type="password"
                            required
                          />
                          <button
                            class="input-group-text eye"
                            type="button"
                            @click="switchVisibility"
                          >
                            <i class="fa fa-eye" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div
                      class="form-check form-switch"
                      style="text-align: right"
                    >
                      <label class="form-check-label"
                        ><u>Mot de passe oublié?</u></label
                      >
                    </div>
                    <div class="text-center">
                      <button
                        type="submit"
                        class="btn w-100 mt-2 mb-0"
                        style="background-color: blue; color: white"
                      >
                        Se connecter
                      </button>
                    </div>
                  </form>
                </div>
                <div class="card-footer text-center pt-0 px-lg-2 px-1">
                  <p class="mb-4 text-sm mx-auto" style="text-align: left">
                    Pas encore membre?
                    <span
                      style="cursor: pointer"
                      @click="$router.push('/inscription')"
                      class="font-weight-bold"
                      ><u>S'inscrire</u></span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <img
                class="top-0 h-100 d-none d-md-block me-n8 imagedroite"
                style="
                  background-image: url('./src/assets/img/curved9.png');
                  background-size: cover;
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="mx-auto mt-1 text-center col-8" style="padding-top: 1rem">
        <p class="mb-0 text-secondary">
          Copyright © {{ new Date().getFullYear() }} MSA concu par MSA IT.
        </p>
      </div>
    </footer>
  </main>
</template>
<script>
import Navbar from "../components/navbar.vue";

export default {
  name: "connexion",
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    switchVisibility() {
      const passwordField = document.querySelector("#password");
      if (passwordField.getAttribute("type") === "password")
        passwordField.setAttribute("type", "text");
      else passwordField.setAttribute("type", "password");
    },

    voir() {
      console.log(this.formData);
    },
  },
  components: { Navbar },
};
</script>
<style scoped>
/** code pour aller dans le dashboard */
/** @click="$router.push('/dashboard')" */

.imagedroite {
  width: 100%;
  position: relative;
}

@media (min-width: 1100px) {
  .padding_large {
    padding-left: 10vh;
    box-shadow: 0px 25px 20px -20px rgba(0, 0, 0, 0.45),
      -25px 0 20px -20px rgba(0, 0, 0, 0.45);
  }
}

/** pour telephone */
@media (max-width: 767.98px) {
  .main-content {
    margin-top: 0px !important;
  }
}
/** pour telephone  */

.input-group .form-control + .input-group-text {
  position: relative !important;
}

.eye {
  position: relative;
}
.page-header {
  overflow: visible !important;
}
#password {
  border-bottom-left-radius: 0.5rem 0.5rem !important;
  border-top-left-radius: 0.5rem 0.5rem !important;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}
</style>
