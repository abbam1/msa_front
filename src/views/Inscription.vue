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
                    href="#"
                    class="btn btn-sm btn-round mb-0 me-1 bg-gradient-dark"
                    >Calendrier</a
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
          <div class="row p-1">
            <div
              class="col-xl-5 col-lg-5 col-md-6 d-flex flex-column mx-auto padding_large padding_mobile"
            >
              <div class="mt-4">
                <div class="card-header pb-0 bg-transparent">
                  <h3 class="font-weight-bolder">
                    <img src="../assets/img/logo-msa.png" />
                    Inscription
                  </h3>
                  <div style="width: 50%">
                    <div class="progress px-1 mt-3" style="height: 3px">
                      <div
                        class="progress-bar"
                        :class="stageClass[step - 1]"
                        v-bind:class="[]"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div class="step-container d-flex justify-content-between">
                      <div class="step-circle">1</div>
                      <div class="step-circle">2</div>
                      <div class="step-circle">3</div>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <form ref="formulaire" @submit.prevent="voir">
                    <!-- début de étape 1-->
                    <div v-show="step === 1">
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="form-group">
                            <label>Nom</label>

                            <input
                              type="text"
                              class="form-control"
                              placeholder="Sawadogo"
                              name="nom"
                              v-model="formData.nom"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group">
                            <label>Prénom</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Mariam"
                              v-model="formData.prenoms"
                              name="prenoms"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="form-group">
                            <label>Date de naissance</label>

                            <input
                              type="date"
                              v-model="formData.dateNaissance"
                              name="dateNaissance"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group">
                            <label>Sexe</label>
                            <select
                              class="form-select"
                              v-model="formData.sexe"
                              name="sexe"
                              required
                            >
                              <option value="">Selectionner votre sexe</option>
                              <option value="M">Masculin</option>
                              <option value="F">Feminin</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="form-group">
                            <label>Pays</label>

                            <select
                              class="form-control form-select"
                              v-model="formData.paysId"
                              name="paysId"
                              id="pays"
                            >
                              <option value="" selected>
                                Sélectionner votre pays
                              </option>
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
                        <div class="col-lg-6">
                          <div class="form-group">
                            <label>Ville</label>
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
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="form-group">
                            <label>Quartier</label>
                            <input
                              type="text"
                              class="form-control"
                              name="quartier"
                              v-model="formData.quartier"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- fin de étape 1-->
                    <!-- début de étape 2-->
                    <div v-show="step === 2">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="form-group">
                            <label>Année de bâptème</label>

                            <input
                              type="date"
                              v-model="formData.anneeBapteme"
                              name="anneeBapteme"
                              class="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="form-group">
                            <label>Email</label>

                            <input
                              type="email"
                              v-model="formData.email"
                              name="email"
                              placeholder="abba8521@gmail.com"
                              class="form-control"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group">
                            <label>Téléphone</label>

                            <div>
                              <input
                                id="phone"
                                type="text"
                                class="form-control"
                                name="telephone"
                                v-model="formData.telephone"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-12">
                          <div class="form-group">
                            <label>Situation matrimoniale</label>

                            <select
                              class="form-select"
                              name="situationMatrimoniale"
                              v-model="formData.situationMatrimoniale"
                            >
                              <option value="">
                                Selectionner votre situation
                              </option>
                              <option value="CELIBATAIRE">Célibataire</option>
                              <option value="CELIBATAIRE_CEINTURE_NOIRE">
                                Célibataire ceinture noire
                              </option>
                              <option value="FIANCE">Fiancé(e)</option>
                              <option value="MARIE">Marié(e)</option>
                              <option value="VEUF">Veuf(e)</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="form-group">
                            <label>Nombre d'enfant à charge</label>
                            <input
                              type="number"
                              class="form-control"
                              name="nombreEnfants"
                              v-model="formData.nombreEnfants"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- fin de étape 2-->
                    <!-- début de étape 3-->
                    <div v-show="step === 3">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="form-group">
                            <label>Choisir son Département</label>

                            <select class="form-select" required>
                              <option value="">
                                Selectionner votre departement
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="form-group">
                            <label>Domaine d'activité</label>

                            <input
                              type="text"
                              v-model="formData.domaineActivite"
                              name="domaineActivite"
                              class="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="form-group">
                            <label>Statut professionnel</label>

                            <input
                              type="text"
                              v-model="formData.statutProfessionnel"
                              name=" statutProfessionnel"
                              class="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-12">
                          <label>Mot de passe </label>
                          <div class="mb-3">
                            <div class="form-group" style="position: relative">
                              <div
                                class="input-group mb-4"
                                style="position: relative"
                              >
                                <input
                                  name="password"
                                  v-model="formData.password"
                                  class="form-control"
                                  id="password"
                                  placeholder="Mot de passe"
                                  type="password"
                                  required
                                />
                                <button
                                  class="input-group-text eye"
                                  type="button"
                                  @click="switchVisibility"
                                  style="position: relative"
                                >
                                  <i class="fa fa-eye" aria-hidden="true"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- fin de étape 3-->
                    <div class="text-center row" style="width: 80%">
                      <button
                        type="button"
                        class="btn mt-1 mb-2 col"
                        style="
                          background-color: #8392ab;
                          color: white;
                          margin-right: 10px;
                        "
                        v-if="step > 1"
                        @click="previous"
                      >
                        Précédant
                      </button>
                      <button
                        type="button"
                        class="btn mt-1 mb-2 col"
                        style="background-color: blue; color: white"
                        v-if="step < 3"
                        @click="next"
                      >
                        Suivant
                      </button>
                      <button
                        type="submit"
                        class="btn mt-1 mb-2 col"
                        style="background-color: blue; color: white"
                        v-if="step == 3"
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
            <div class="col-md-6">
              <img
                class="position-absolute top-0 h-100 d-none d-md-block me-n8 imagedroite"
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
}

@media (min-width: 1100px) {
  .pos {
    position: absolute;
  }
  .form_row {
    width: 80%;
  }

  /* .padding_large {
    padding-left: 10vh;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 10px 0px;
  } */
  .form_row1 {
    width: 100%;
  }
}

/** pour ecran 15 pouces et plus */
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
/** pour ecran 15 pouces et plus */

/** pour telephone */
@media (max-width: 767.98px) {
  .padding_mobile {
    padding-left: 2rem !important;
    padding-right: 2rem !important;
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

#password {
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
  width: 0%;
}
.etape_2 {
  width: 50%;
}

.etape_3 {
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
      isHalf: false,
      input_tel: "",
      formData: {
        nom: "",
        telephone: "",
        quartier: "",
        situationMatrimoniale: "",
      },
      countries: countries,
      stageClass: ["etape_1", "etape_2", "etape_3"],
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

    previous() {
      this.step--;
    },

    next() {
      if (this.formData.nom == "") {
        console.log("ca marche pas");
      } else {
        this.step++;
      }
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
