<template>
  <div id="dailyVersesWrapper"></div>
</template>

<script>
import axios from "axios";

export default {
  name: "Verse",
  methods: {
    getVerse() {
      axios
        // .get("https://dailyverses.net/get/verse.js?language=sg21")
        .get("https://beta.ourmanna.com/api/v1/get")
        .then((res) => {
          let scr = res;
          console.log(scr);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getVerse();
  },
};
</script>
