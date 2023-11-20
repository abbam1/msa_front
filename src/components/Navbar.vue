<template>
  <!-- Navbar -->

  <nav
    class="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-absolute my-1 py-1 start-0 end-0 mx-2"
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
  <!-- End Navbar -->
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
