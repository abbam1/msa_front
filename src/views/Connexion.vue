<template>
  <div class="container position-sticky z-index-sticky">
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
  <main class="main-content mt-3">
    <section>
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
              <div class="card card-plain mt-8">
                <div class="card-header pb-0 text-left bg-transparent">
                  <h3 class="font-weight-bolder">
                    <img src="../assets/img/curved-images/logo-msa.png" />
                    Connexion
                  </h3>
                </div>
                <div class="card-body">
                  <form role="form">
                    <label>Email</label>
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="email-addon"
                      />
                    </div>
                    <label>Mot de passe </label>
                    <div class="mb-3">
                      <div class="form-group">
                        <div class="input-group mb-4">
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
                class="position-absolute top-0 h-100 d-md-block d-none me-n8"
                style="
                  background-image: url('./src/assets/img/curved-images/curved9.png');
                  background-size: cover;
                  width: 35%;
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
export default {
  name: "connexion",
  data() {
    return {};
  },
  methods: {
    switchVisibility() {
      const passwordField = document.querySelector("#password");

      if (passwordField.getAttribute("type") === "password")
        passwordField.setAttribute("type", "text");
      else passwordField.setAttribute("type", "password");
    },
  },
};
</script>
<style scoped>
@media (min-width: 768px) {
  .row {
    margin-left: 100px !important;
    margin-right: 100px !important;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
}

/** pour telephone */
@media (max-width: 767.98px) {
  .main-content {
    margin-top: 0px !important;
  }
}
/** pour telephone */

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
