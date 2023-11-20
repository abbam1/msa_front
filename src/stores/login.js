import { defineStore } from "pinia";

export const useloginStore = defineStore("login", {
  state: () => ({
    // login: {},
    // isloggedIn: false,
    isActive: false,
  }),

  actions: {
    // setLogin(payload) {
    //   this.login = payload;
    //   this.isloggedIn = true;
    //   localStorage.setItem("loginInfo", JSON.stringify(this.login));
    // },

    // logOut() {
    //   this.login = {};
    //   this.isloggedIn = false;
    //   localStorage.removeItem("loginInfo");
    // },

    toggleSidebar() {
      this.isActive = !this.isActive;
    },
  },
});
