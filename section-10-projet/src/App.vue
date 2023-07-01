<template>
  <the-header :title=title></the-header>
  <the-resource></the-resource>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheResource from './components/learning-resources/TheResource.vue';

export default {
  name: 'App',

  components: {
    TheHeader,
    TheResource,
  },

  data() {
    return {
      title: 'Remember Vue.js',
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
