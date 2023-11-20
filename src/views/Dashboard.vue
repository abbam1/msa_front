<template>
  <div
    class="g-sidenav-show bg-gray-100"
    :class="{ 'g-sidenav-pinned': store_toggle }"
  >
    <!-- sidebar -->

    <aside
      class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3"
      :class="{ 'bg-white': store_toggle }"
      id="sidenav-main"
    >
      <div class="sidenav-header p-3">
        <i
          class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
        ></i>
        <img
          src="../assets/img/logo1.png"
          class="navbar-brand-img h-100"
          alt="main_logo"
        />
        <span class="ms-1 font-weight-bold">Tableau de bord</span>
      </div>
      <hr class="horizontal dark mt-0" />
      <div class="navbar-collapse h-auto w-auto">
        <ul class="navbar-nav">
          <li class="nav-item mt-3">
            <h6
              class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6"
            >
              Les 7 colonnes
            </h6>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <i class="fa fa-th" aria-hidden="true"></i>
              <span class="nav-link-text ms-1">Schalom</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <i class="fa fa-calendar-check-o" aria-hidden="true"></i>

              <span class="nav-link-text ms-1">Eli</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active">
              <i class="fa fa-file-o" aria-hidden="true"></i>

              <span class="nav-link-text ms-1">Achija</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <i class="fa fa-fire" aria-hidden="true"></i>

              <span class="nav-link-text ms-1">Ezer</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <i class="fa fa-microchip" aria-hidden="true"></i>

              <span class="nav-link-text ms-1">Art</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link">
              <i class="fa fa-balance-scale" aria-hidden="true"></i>

              <span class="nav-link-text ms-1">Adec</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <i class="fa fa-compass" aria-hidden="true"></i>

              <span class="nav-link-text ms-1">Shofar</span>
            </a>
          </li>
          <hr class="horizontal dark mt-0" />

          <li class="nav-item" style="margin-top: 5px">
            <a class="nav-link">
              <i
                class="fa fa-cog"
                style="font-size: 1.2rem"
                aria-hidden="true"
              ></i>

              <span class="nav-link-text ms-1">settings</span>
            </a>
          </li>
          <!-- <li class="nav-item" style="margin-top: 5px">
            <a class="nav-link">
              <i class="fa fa-door-open"></i>

              <span class="nav-link-text ms-1">Logout</span>
            </a>
          </li> -->
        </ul>
      </div>
    </aside>
    <!-- End sidebar -->

    <main
      class="main-content position-relative max-height-vh-100 h-100 border-radius-lg"
    >
      <!-- Navbar -->
      <nav
        class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
        id="navbarBlur"
        navbar-scroll="true"
      >
        <div class="container-fluid py-1 px-3">
          <nav aria-label="breadcrumb">
            <a :href="'/'" class="font-weight-bolder mb-0"> MSA </a>
          </nav>
          <div
            class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
            id="navbar"
          >
            <div class="ms-md-auto pe-md-3 d-flex align-items-center">
              <div class="input-group">
                <span class="input-group-text text-body"
                  ><i class="fas fa-search" aria-hidden="true"></i
                ></span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Rechercher..."
                />
              </div>
            </div>
            <ul class="navbar-nav justify-content-end">
              <li class="nav-item d-flex align-items-center"></li>
              <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
                <div
                  class="nav-link text-body p-0"
                  id="iconNavbarSidenav"
                  @click="toggle"
                >
                  <div class="sidenav-toggler-inner">
                    <i class="sidenav-toggler-line"></i>
                    <i class="sidenav-toggler-line"></i>
                    <i class="sidenav-toggler-line"></i>
                  </div>
                </div>
              </li>
              <li class="nav-item px-3 d-flex align-items-center">
                <a class="nav-link">
                  <i class="fa fa-door-open"></i>

                  <span class="nav-link-text ms-1">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- End Navbar -->
      <div class="container-fluid py-4">
        <div class="row">
          <div class="col-md-9 mt-4">
            <div class="card mt-0 mb-3">
              <div class="card-header pb-0 p-3">
                <div class="row">
                  <div class="col-6 d-flex align-items-center">
                    <h4 class="mb-0">Shalom chers membre</h4>
                  </div>
                </div>
              </div>
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-md-12 mb-md-0 mb-4">
                    <div
                      class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row"
                    >
                      <p>
                        Welcome back, Bella! Your progress is really good. Keep
                        it up
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header pb-0 px-3 d-flex">
                <h6 class="mb-0" style="width: 70%">
                  Les membres de la colonne sélectionnée
                </h6>
                <input
                  style="width: 30%"
                  type="text"
                  class="form-control"
                  placeholder="Rechercher..."
                />
              </div>

              <div class="card-body pt-4 p-3">
                <ul class="list-group">
                  <li
                    class="list-group-item row border-0 d-flex p-4 mb-2 border-radius-lg"
                    style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px"
                  >
                    <div class="col-lg-3 mb-1">
                      <div class="p-2">
                        <img
                          class="border-radius-md"
                          style="width: 10em; height: 10em"
                          src="../assets/img/user1.png"
                        />
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <h6 class="mb-3 text-sm">Wilfried Fohonke</h6>
                      <div class="row">
                        <div class="d-flex flex-column col-lg-6">
                          <span class="mb-2 text-xs"
                            >Situation matrimoniale:
                            <span class="text-dark font-weight-bold ms-sm-2"
                              >Célibataire ceinture noir</span
                            ></span
                          >
                          <span class="mb-2 text-xs"
                            >Domaine d'activité:
                            <span class="text-dark ms-sm-2 font-weight-bold"
                              >Entrepreneur
                            </span></span
                          >
                          <span class="text-xs"
                            >Quartier:
                            <span class="text-dark ms-sm-2 font-weight-bold"
                              >Koumassi</span
                            ></span
                          >
                        </div>
                        <div class="d-flex flex-column col-lg-6">
                          <span class="mb-2 text-xs"
                            >Colonne:
                            <span class="text-dark font-weight-bold ms-sm-2"
                              >Shalom , département Acceuil</span
                            ></span
                          >
                          <span class="mb-2 text-xs"
                            >Email:
                            <span class="text-dark ms-sm-2 font-weight-bold"
                              >oliver@burrito.com</span
                            ></span
                          >
                          <span class="text-xs"
                            >Contact:
                            <span class="text-dark ms-sm-2 font-weight-bold"
                              >+225 0709174551</span
                            ></span
                          >
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="list-group-item row border-0 d-flex p-4 mb-2 border-radius-lg"
                    style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px"
                  >
                    <div class="col-lg-3 mb-1">
                      <div class="p-2">
                        <img
                          class="border-radius-md"
                          style="width: 10em; height: 10em"
                          src="../assets/img/user1.png"
                        />
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <h6 class="mb-3 text-sm">Wilfried Fohonke</h6>
                      <div class="row">
                        <div class="d-flex flex-column col-lg-6">
                          <span class="mb-2 text-xs"
                            >Situation matrimoniale:
                            <span class="text-dark font-weight-bold ms-sm-2"
                              >Célibataire ceinture noir</span
                            ></span
                          >
                          <span class="mb-2 text-xs"
                            >Domaine d'activité:
                            <span class="text-dark ms-sm-2 font-weight-bold"
                              >Entrepreneur
                            </span></span
                          >
                          <span class="text-xs"
                            >Quartier:
                            <span class="text-dark ms-sm-2 font-weight-bold"
                              >Koumassi</span
                            ></span
                          >
                        </div>
                        <div class="d-flex flex-column col-lg-6">
                          <span class="mb-2 text-xs"
                            >Colonne:
                            <span class="text-dark font-weight-bold ms-sm-2"
                              >Shalom , département Acceuil</span
                            ></span
                          >
                          <span class="mb-2 text-xs"
                            >Email:
                            <span class="text-dark ms-sm-2 font-weight-bold"
                              >oliver@burrito.com</span
                            ></span
                          >
                          <span class="text-xs"
                            >Contact:
                            <span class="text-dark ms-sm-2 font-weight-bold"
                              >+225 0709174551</span
                            ></span
                          >
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                  <li class="page-item disabled">
                    <a class="page-link" href="javascript:;" tabindex="-1">
                      <i class="fa fa-angle-left"></i>
                      <span class="sr-only">Previous</span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="javascript:;">1</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="javascript:;">2</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="javascript:;">3</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="javascript:;">
                      <i class="fa fa-angle-right"></i>
                      <span class="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="col-md-3 mt-4">
            <div class="card h-100 mb-4" style="background-color: #f0f3fc">
              <div class="card-body pt-4 p-3">
                <a href="javascript:;">
                  <div class="p-3">
                    <img
                      class="w-100 border-radius-md"
                      src="../assets/img/user.png"
                    />
                  </div>
                </a>
                <div
                  class="card-body blur justify-content-center text-center mb-4 border-radius-md"
                  style="background-color: #f0f3fc !important"
                >
                  <h4 class="mb-0">Bruce Mars</h4>
                  <p>
                    Voir mon profil
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </p>

                  <div class="row justify-content-center text-center">
                    <hr
                      class="horizontal dark mt-0"
                      style="
                        background-image: linear-gradient(
                          to right,
                          #000,
                          rgba(0, 0, 0, 0.4),
                          #000
                        ) !important;
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="footer">
          <div class="container">
            <div class="row">
              <div
                class="mx-auto mt-1 text-center col-8"
                style="padding-top: 3rem"
              >
                <p class="mb-0 text-secondary">
                  Copyright © {{ new Date().getFullYear() }} MSA concu par MSA
                  IT.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  </div>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
import { useloginStore } from "../stores/login";

export default {
  computed: {
    store_toggle() {
      return useloginStore().isActive;
    },
    toggle() {
      return useloginStore().toggleSidebar;
    },
  },
};
</script>
