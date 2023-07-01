<template>
  <the-header :title=title></the-header>
  <stored-resources :stored-resources="storedResources"></stored-resources>
</template>

<script>
import StoredResources from './components/learning-resources/StoredResources.vue';
import TheHeader from './components/layout/TheHeader.vue';

export default {
  name: 'App',

  components: {
    StoredResources,
    TheHeader,
  },

  data() {
    return {
      storedResources: [
        {
          id: 1,
          title: 'Officiel Doc',
          description: 'Vue.js - The Progressive JavaScript Framework',
          link: 'https://vuejs.org/',
          icon: 'school',
        },
        {
          id: 2,
          title: 'Google',
          description: 'Google',
          link: 'https://www.google.com/',
          icon: 'book',
        },
      ],
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
