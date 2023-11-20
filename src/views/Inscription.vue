<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <!-- Navbar -->
        <nav
          class="navbar navbar-expand-lg blur blur-rounded top-5 z-index-3 shadow pos my-1 py-1 start-0 end-0 mx-2"
        >
          <div class="container-fluid pe-0">
            <a
              :href="'/'"
              class="navbar-brand font-weight-bolder ms-lg-0 ms-3"
              style="cursor: pointer"
            >
              MSA
            </a>
            <div class="collapse navbar-collapse" id="navigation">
              <ul class="navbar-nav mx-auto ms-xl-auto me-xl-14">
                <li class="nav-item">
                  <a :href="'/'">
                    <button class="btn btn-sm btn-round mb-0 me-1">
                      <i class="fa fa-user opacity-6 text-dark me-1"></i>
                      Accueil
                    </button>
                  </a>
                </li>
              </ul>
              <li class="nav-item d-flex align-items-center"></li>
              <ul class="navbar-nav d-lg-block d-none">
                <li class="nav-item">
                  <a
                    target="_blank"
                    href="https://collectifdesfreresenchrist.ci/Webradio"
                    class="btn btn-sm btn-round mb-0 me-1 bg-gradient-dark"
                    >Web radio</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <!-- End Navbar-->
      </div>
    </div>
  </div>
  <main class="main-content mt-5">
    <section>
      <div class="page-header min-vh-60">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-auto">
              <div class="mt-4" style="width: max-content">
                <div class="card-header pb-0 bg-transparent">
                  <h3 class="font-weight-bolder">
                    <img src="../assets/img/logo-msa.png" />
                    Inscription
                  </h3>
                  <div style="width: 50%">
                    <div class="progress px-1 mt-3" style="height: 3px">
                      <div
                        class="progress-bar"
                        :class="[isComplete ? 'etape_2' : 'etape_1']"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div class="step-container d-flex justify-content-between">
                      <div class="step-circle">1</div>
                      <div class="step-circle">2</div>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <form ref="formulaire" @submit.prevent="voir">
                    <!-- début de étape 1-->
                    <step1 v-show="step === 1">
                      <div class="part_1">
                        <div class="label1">
                          <label>Nom</label>
                          <div class="mb-3" style="margin-right: 5px">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Sawadogo"
                              name="nom"
                              v-model="formData.nom"
                            />
                          </div>
                        </div>
                        <div class="label2">
                          <label>Prénom</label>
                          <div class="mb-3" style="margin-right: 5px">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Mariam"
                              v-model="formData.prenoms"
                              name="prenoms"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="part_1">
                        <div class="label3">
                          <label>Date de naissance</label>
                          <div class="mb-3" style="margin-right: 5px">
                            <input
                              type="date"
                              v-model="formData.date_de_naissance"
                              name="date_de_naissance"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="label4">
                          <label>Téléphone</label>
                          <div class="mb-3">
                            <input
                              id="phone"
                              type="text"
                              class="form-control"
                              name="telephone?"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="part_1">
                        <div class="label5">
                          <label for="pays">Pays</label>
                          <div class="mb-3" style="margin-right: 5px">
                            <select
                              class="form-control form-select"
                              v-model="formData.paysId"
                              name="paysId"
                              id="pays"
                            >
                              <option
                                :value="country"
                                v-for="country in countries"
                                :key="country"
                              >
                                {{ country }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="label6">
                          <label>Ville</label>
                          <div class="mb-3" style="margin-right: 5px">
                            <input
                              type="text"
                              class="form-control"
                              name="ville"
                              placeholder="Abidjan"
                              v-model="formData.ville"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="part_1">
                        <div class="label7">
                          <label>Quartier</label>
                          <div class="mb-3" style="margin-right: 5px">
                            <input
                              type="email"
                              class="form-control"
                              placeholder="Email"
                              aria-label="Email"
                              aria-describedby="email-addon"
                            />
                          </div>
                        </div>
                        <div class="label8">
                          <label>Nombre d'enfant à charge</label>
                          <div class="mb-3" style="margin-right: 5px">
                            <input
                              type="email"
                              class="form-control"
                              placeholder="Email"
                              aria-label="Email"
                              aria-describedby="email-addon"
                            />
                          </div>
                        </div>
                      </div>
                    </step1>
                    <!-- fin de étape 1-->
                    <!-- début de étape 2-->
                    <step2 v-show="step === 2">
                      <div class="part_1">
                        <div class="label1">
                          <label>Année de bâptème</label>
                          <div class="mb-1" style="margin-right: 5px">
                            <input
                              type="email"
                              class="form-control"
                              placeholder="Email"
                              aria-label="Email"
                              aria-describedby="email-addon"
                            />
                          </div>
                        </div>
                        <div class="label2">
                          <label>Statut professionnel</label>
                          <div class="mb-1" style="margin-right: 5px">
                            <input
                              type="email"
                              class="form-control"
                              placeholder="Email"
                              aria-label="Email"
                              aria-describedby="email-addon"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="part1">
                        <div class="label3">
                          <label>Domaine d’activité</label>
                          <div class="input-group">
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div class="part_1">
                        <div class="label5">
                          <label>Choisir sa colonne </label>
                          <div class="mb-1" style="margin-right: 2px">
                            <input
                              type="email"
                              class="form-control"
                              placeholder="Email"
                              aria-label="Email"
                              aria-describedby="email-addon"
                            />
                          </div>
                        </div>
                        <div class="label6">
                          <label>Choisir son département</label>
                          <div class="mb-1" style="margin-right: 5px">
                            <input
                              type="email"
                              class="form-control"
                              placeholder="Email"
                              aria-label="Email"
                              aria-describedby="email-addon"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="part">
                        <label>Mot de passe</label>

                        <div class="input-group">
                          <input
                            class="form-control"
                            id="password"
                            placeholder="Mot de passe"
                            type="password"
                          />
                          <button
                            class="input-group-text eye"
                            type="button"
                            @click="switchVisibility"
                          >
                            <i class="fa fa-eye" aria-hidden="true"></i>
                          </button>
                        </div>
                        <label>Confirmer son mot de passe</label>

                        <div class="input-group mb-2">
                          <input
                            class="form-control"
                            id="confirm_password"
                            placeholder="Mot de passe"
                            type="password"
                          />
                          <button
                            class="input-group-text eye"
                            type="button"
                            @click="switchVisibility_confirm_password"
                          >
                            <i class="fa fa-eye" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>
                    </step2>
                    <!-- fin de étape 2-->
                    <div class="text-center d-flex">
                      <button
                        type="button"
                        class="btn w-100 mt-1 mb-2"
                        style="
                          background-color: #8392ab;
                          color: white;
                          margin-right: 10px;
                        "
                        v-if="step == 2"
                        @click="previous"
                      >
                        Précédant
                      </button>
                      <button
                        type="button"
                        class="btn w-100 mt-1 mb-2"
                        style="background-color: blue; color: white"
                        v-if="step == 1"
                        @click="next"
                      >
                        Suivant
                      </button>
                      <button
                        type="submit"
                        class="btn w-100 mt-1 mb-2"
                        style="background-color: blue; color: white"
                        v-if="step == 2"
                      >
                        Envoyer
                      </button>
                    </div>
                  </form>
                </div>
                <div class="card-footer text-center pt-0 px-lg-2 px-1">
                  <p class="mb-4 text-sm mx-auto" style="text-align: left">
                    Déjà membre?
                    <span
                      class="font-weight-bold"
                      style="cursor: pointer"
                      @click="$router.push('/connexion')"
                      ><u>Se connecter</u></span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <img
                class="position-absolute top-0 h-100 d-md-block d-none me-n8 imagedroite"
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
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap");
@media (min-width: 768px) {
  .image {
    width: 17% !important;
  }

  .form-control {
    width: 13em !important;
  }
}

@media (min-width: 1100px) {
  .row {
    margin-left: 100px !important;
    margin-right: 100px !important;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }

  .form-control {
    width: 13em !important;
  }
  .pos {
    position: absolute;
  }
}
@media (min-width: 1900px) {
  .imagedroite {
    width: 23% !important;
  }
}

@media (min-width: 3000px) {
  .imagedroite {
    width: 12% !important;
  }
}

/** pour telephone */
@media (max-width: 767.98px) {
  .main-content {
    margin-top: 0px !important;
  }
  .form-control {
    width: 24vh !important;
  }
  .btn {
    width: 40% !important;
  }
  .input-group {
    width: 85% !important;
  }
}
/** pour telephone */

.eye {
  position: relative;
}
.page-header {
  overflow: visible !important;
}
.etape {
  width: 50%;
}

.input-group .form-control + .input-group-text {
  position: relative !important;
}
.part_1 {
  display: flex;
  flex-wrap: wrap;
}

#password {
  border-bottom-left-radius: 0.5rem 0.5rem !important;
  border-top-left-radius: 0.5rem 0.5rem !important;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}

#confirm_password {
  border-bottom-left-radius: 0.5rem 0.5rem !important;
  border-top-left-radius: 0.5rem 0.5rem !important;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}

body {
  background-color: #eee;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
}

.step-container {
  position: relative;
  text-align: center;
  transform: translateY(-43%);
}

.step-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff !important;
  border: 2px solid #007bff;
  line-height: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  cursor: pointer; /* Added cursor pointer */
}

.imagedroite {
  width: 35%;
}
.step-line {
  position: absolute;
  top: 16px;
  left: 50px;
  width: calc(100% - 100px);
  height: 2px;
  background-color: #abacae;
  z-index: -1;
}

.progress {
  --bs-progress-bg: #e6e6e6 !important;
}

.progress-bar {
  background-color: blue;
}

.etape_1 {
  width: 50%;
}

.etape_2 {
  width: 100%;
}
</style>

<script>
import countries from "@/data/countries.js";

export default {
  name: "inscription",
  data() {
    return {
      step: 1,
      isComplete: false,
      input_tel: "",
      formData: {},
      countries: countries,
    };
  },
  methods: {
    switchVisibility() {
      const passwordField = document.querySelector("#password");

      if (passwordField.getAttribute("type") === "password")
        passwordField.setAttribute("type", "text");
      else passwordField.setAttribute("type", "password");
    },
    switchVisibility_confirm_password() {
      const passwordField = document.querySelector("#confirm_password");

      if (passwordField.getAttribute("type") === "password")
        passwordField.setAttribute("type", "text");
      else passwordField.setAttribute("type", "password");
    },

    voir() {
      console.log(this.formData.date_de_naissance);
    },

    previous() {
      this.step--;
      this.isComplete = false;
    },

    next() {
      this.step++;
      this.isComplete = true;
    },
  },
  mounted() {
    let formData = new FormData(this.$refs.editContribuablesForm);

    this.input_tel = document.querySelector("#phone");

    window.intlTelInput(this.input_tel, {
      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
    });
  },
};
</script>
