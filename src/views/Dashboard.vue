<template>
  <div
    class="g-sidenav-show bg-gray-100"
    :class="{ 'g-sidenav-pinned': store_toggle }"
  >
    <!-- sidebar -->

    <aside
      class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-white"
      id="sidenav-main"
    >
      <div class="sidenav-header p-3">
        <i
          class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
          @click="toggle"
        ></i>
        <img
          src="../assets/img/logo1.png"
          class="navbar-brand-img h-100"
          alt="main_logo"
        />
        <a :href="'/'" class="ms-1 font-weight-bold">Tableau de bord</a>
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
          <li class="nav-item" style="margin-top: 5px">
            <a class="nav-link" :href="'/'">
              <i class="fa fa-door-open"></i>

              <span class="nav-link-text ms-1">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
    <!-- End sidebar -->

    <main
      class="main-content position-relative max-height-vh-100 h-100 border-radius-lg"
    >
      <!-- Navbar -->
      <nav
        class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl barre_haut"
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
            <!-- <div class="ms-md-auto pe-md-3 d-flex align-items-center">
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
            </div> -->
            <ul
              class="navbar-nav justify-content-end"
              style="margin-left: 95% !important"
            >
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
              <!-- <li class="nav-item px-3 d-flex align-items-center">
                <a class="nav-link">
                  <i class="fa fa-door-open"></i>

                  <span class="nav-link-text ms-1">Logout</span>
                </a>
              </li> -->
            </ul>
          </div>
        </div>
      </nav>
      <!-- End Navbar -->
      <div class="container-fluid">
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
                  Les membres de Achija
                  <select v-model="perPage">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                  </select>
                </h6>
                <div class="col">
                  <input
                    style="width: 100%"
                    type="text"
                    class="form-control row"
                    placeholder="Rechercher..."
                    v-model="input_search"
                  />
                  <span
                    v-if="input_search && getFilterUsers.length > 0"
                    class="text-dark font-weight-bold mt-1 row"
                    >{{ getFilterUsers.length }} membre<span
                      style="width: 0%; padding-left: 0px"
                      v-if="getFilterUsers.length > 1"
                      >s</span
                    >
                    trouvé<span
                      style="width: 0%; padding-left: 0px"
                      v-if="getFilterUsers.length > 1"
                      >s</span
                    ></span
                  >
                </div>
              </div>

              <div class="card-body pt-4 p-3">
                <ul class="list-group">
                  <li
                    v-for="item in printedItems"
                    class="list-group-item row border-0 d-flex p-4 mb-2 border-radius-lg"
                    style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px"
                  >
                    <div class="col-lg-3 mb-1">
                      <div class="p-2">
                        <img
                          class="border-radius-md"
                          style="width: 10em; height: 10em"
                          :src="item.img"
                        />
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <h6 class="mb-3 text-sm">{{ item.nom }}</h6>
                      <div class="row">
                        <div class="d-flex flex-column col-lg-6">
                          <span class="mb-2 text-xs"
                            >Situation matrimoniale:
                            <span class="text-dark font-weight-bold ms-sm-2">{{
                              item.situation
                            }}</span></span
                          >
                          <span class="mb-2 text-xs"
                            >Domaine d'activité:
                            <span class="text-dark ms-sm-2 font-weight-bold"
                              >{{ item.domaine }}
                            </span></span
                          >
                          <span class="text-xs"
                            >Quartier:
                            <span class="text-dark ms-sm-2 font-weight-bold">{{
                              item.Quartier
                            }}</span></span
                          >
                        </div>
                        <div class="d-flex flex-column col-lg-6">
                          <span class="mb-2 text-xs"
                            >Colonne:
                            <span class="text-dark font-weight-bold ms-sm-2">{{
                              item.colonne
                            }}</span></span
                          >
                          <span class="mb-2 text-xs"
                            >Email:
                            <span class="text-dark ms-sm-2 font-weight-bold">{{
                              item.email
                            }}</span></span
                          >
                          <span class="text-xs"
                            >statut Professionnel:
                            <span class="text-dark ms-sm-2 font-weight-bold">{{
                              item.statut
                            }}</span></span
                          >
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="card-body pt-4 p-3">
                <div
                  class="item error"
                  v-if="input_search && !getFilterUsers.length"
                >
                  <h3>Pas de resultats!</h3>
                </div>
              </div>
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                  <li
                    :class="'page-item ' + (page == 1 ? 'disabled' : '')"
                    :role="page == 1 ? '' : 'button'"
                  >
                    <a
                      class="page-link"
                      @click.prevent="previous"
                      tabindex="-1"
                    >
                      <i class="fa fa-angle-left"></i>
                      <span class="sr-only" role="button">Previous</span>
                    </a>
                  </li>
                  <template v-for="n in this.totalPage">
                    <li class="page-item" v-if="n < 4">
                      <a
                        class="page-link"
                        role="button"
                        @click.prevent="page = n"
                        >{{ n }}</a
                      >
                    </li>
                  </template>
                  <li class="page-item" v-if="totalPage == 4">
                    <a
                      class="page-link"
                      role="button"
                      @click.prevent="page = totalPage"
                      >{{ totalPage }}</a
                    >
                  </li>
                  <template v-if="totalPage > 4">
                    <li class="page-item">
                      <a class="page-link" role="button" @click.prevent=""
                        >...</a
                      >
                    </li>
                    <li class="page-item">
                      <a
                        class="page-link"
                        role="button"
                        @click.prevent="page = totalPage"
                        >{{ totalPage }}</a
                      >
                    </li>
                  </template>

                  <li
                    :class="
                      'page-item ' + (page == totalPage ? 'disabled' : '')
                    "
                    :role="page == totalPage ? '' : 'button'"
                  >
                    <a class="page-link" @click.prevent="nextElement">
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
                    <hr class="horizontal dark mt-0 style" />
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
<style>
@media (min-width: 1100px) {
  .barre_haut {
    display: none;
  }
}
.style {
  background-image: linear-gradient(
    to right,
    #000,
    rgba(0, 0, 0, 0.4),
    #000
  ) !important;
}

.navbar-vertical .navbar-nav > .nav-item .nav-link.active {
  color: #dee2e6 !important;
  background-color: #141727 !important;
}
</style>
<script>
import { RouterLink, RouterView } from "vue-router";
import { useloginStore } from "../stores/login";

export default {
  data() {
    return {
      input_search: "",
      items: [
        {
          img: "/src/assets/img/user1.png",
          nom: "Wilfried Fohonke",
          situation: "Célibataire ceinture noir",
          domaine: "Entrepreneur",
          Quartier: "Koumassi",
          colonne: "Shalom , département Acceuil",
          email: "abba@gmail.com",
          statut: "salarié",
        },
        {
          img: "/src/assets/img/user2.png",
          nom: "Abba Marc",
          situation: "Célibataire ",
          domaine: "Entrepreneur",
          Quartier: "Koumassi",
          colonne: "ddddddd , département Acceuil",
          email: "zaza@gmail.com",
          statut: "Riche",
        },
        {
          img: "/src/assets/img/user.png",
          nom: "Franck Yao",
          situation: "Fiancé ",
          domaine: "Marcheur",
          Quartier: "cocody",
          colonne: "Tjah , département T",
          email: "zssdd@gmail.com",
          statut: "Moyen",
        },
        {
          img: "/src/assets/img/user.png",
          nom: "Franck Yao",
          situation: "Fiancé ",
          domaine: "Marcheur",
          Quartier: "cocody",
          colonne: "Tjah , département T",
          email: "zssdd@gmail.com",
          statut: "Moyen",
        },
        {
          img: "/src/assets/img/user.png",
          nom: "Franck Yao",
          situation: "Fiancé ",
          domaine: "Marcheur",
          Quartier: "cocody",
          colonne: "Tjah , département T",
          email: "zssdd@gmail.com",
          statut: "Moyen",
        },
        {
          img: "/src/assets/img/user.png",
          nom: "Franck Isaac",
          situation: "Fiancé ",
          domaine: "Marcheur",
          Quartier: "cocody",
          colonne: "Tjah , département T",
          email: "zssdd@gmail.com",
          statut: "Moyen",
        },
        {
          img: "/src/assets/img/user.png",
          nom: "Franck Isaac",
          situation: "Fiancé ",
          domaine: "Marcheur",
          Quartier: "cocody",
          colonne: "Tjah , département T",
          email: "zssdd@gmail.com",
          statut: "Moyen",
        },
        {
          img: "/src/assets/img/user.png",
          nom: "Franck Isaac",
          situation: "Fiancé ",
          domaine: "Marcheur",
          Quartier: "cocody",
          colonne: "Tjah , département T",
          email: "zssdd@gmail.com",
          statut: "Moyen",
        },
        {
          img: "/src/assets/img/user.png",
          nom: "Franck Isaac",
          situation: "Fiancé ",
          domaine: "Marcheur",
          Quartier: "cocody",
          colonne: "Tjah , département T",
          email: "zssdd@gmail.com",
          statut: "Moyen",
        },
        {
          img: "/src/assets/img/user.png",
          nom: "Franck Isaac",
          situation: "Fiancé ",
          domaine: "Marcheur",
          Quartier: "cocody",
          colonne: "Tjah , département T",
          email: "zssdd@gmail.com",
          statut: "Moyen",
        },
      ],
      page: 1,
      perPage: 3,
    };
  },

  computed: {
    store_toggle() {
      return useloginStore().isActive;
    },
    toggle() {
      return useloginStore().toggleSidebar;
    },

    getFilterUsers() {
      return this.items.filter((item) =>
        item.nom.toLowerCase().includes(this.input_search.toLowerCase())
      );
    },
    totalPage() {
      return Math.ceil(this.items.length / this.perPage);
    },
    printedItems() {
      let min = 1 + (this.page * this.perPage - this.perPage);
      let max = Math.min(
        min + Number(this.perPage) - 1,
        this.getFilterUsers.length
      );
      let dt = [];

      for (let i = min - 1; i < max; i++) {
        dt.push(this.getFilterUsers[i]);
      }

      return dt;
    },
  },
  methods: {
    previous() {
      if (this.page > 1) {
        this.page--;
      }
    },
    nextElement() {
      if (this.page < this.totalPage) {
        this.page++;
      }
    },
  },
};
</script>
