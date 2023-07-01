<template>
  <div>
    <ul>
      <learning-resource
        v-for="resource in storedResources"
        :key="resource.id"
        :resource="resource"
      ></learning-resource>
    </ul>
  </div>
</template>

<script>
import LearningResource from './LearningResource.vue';

export default {
  name: 'StoredResources',
  components: {
    LearningResource,
  },
  props: ['storedResources'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
