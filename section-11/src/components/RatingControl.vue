<template>
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</template>

<script>
export default {
  name: 'RatingControl',
  data() {
    return {
      rating: 0,
    };
  },
  methods: {
    setRating(rating) {
      this.rating = rating;
    },
  },
};
</script>

<style scoped></style>
