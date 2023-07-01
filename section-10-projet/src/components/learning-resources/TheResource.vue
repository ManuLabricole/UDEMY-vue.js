<template>
  <base-card>
    <base-button
      :mode="storedResourcesButtonMode"
      @click="setSelectedTab('stored-resources')">
      Stored Resource
    </base-button>
    <base-button
    :mode="storedResourcesButtonMode"
    @click="setSelectedTab('add-resource')">
    Add Resource
    </base-button>
    <component :is="selectedTab"></component>
  </base-card>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  name: 'TheHeader',
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'add-resource',
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
    };
  },
  provide() {
    return {
      resources: this.storedResources,
    };
  },
  computed: {
    storedResourcesButtonMode() {
      return this.selectedTab === 'stored-resources' ? 'flat' : 'raised';
    },
    addResourceButtonMode() {
      return this.selectedTab === 'add-resource' ? 'flat' : 'raised';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
