<!-- eslint-disable no-restricted-syntax -->
<!-- eslint-disable no-restricted-syntax -->
<!-- eslint-disable vue/valid-v-for -->
<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadResults">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading ...</p>
      <p v-else-if="error && !isLoading">An error occurred: {{ error }}</p>
      <p v-else-if="!isLoading && results.length === 0">No submitted experiences found.</p>
      <ul v-else-if="!isLoading && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadResults() {
      this.isLoading = true;
      fetch(
        'https://vue-http-tutorial-97705-default-rtdb.europe-west1.firebasedatabase.app/surveys.json',
      )
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((responseData) => {
          this.isLoading = false;
          console.log(responseData);
          // eslint-disable-next-line no-restricted-syntax, guard-for-in
          for (const key in responseData) {
            const result = {
              id: key,
              name: responseData[key].name,
              rating: responseData[key].rating,
            };
            this.results.push(result);
          }
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
          this.error = error.message;
        });
      // We want to make sur that the results are loaded before we try to render them
      // We want to have only different par name and rating so we need to add a key
      console.log(this.error);
    },
  },
  mounted() {
    this.loadResults();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
