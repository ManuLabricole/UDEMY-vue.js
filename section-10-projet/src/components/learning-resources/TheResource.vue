<template>
  <base-card>
    <div class="button-container">
      <base-button
        @click="setSelectedTab('stored-resources')"
        type="button"
        :mode="storedResourcesButtonMode">
        Stored Resource
      </base-button>
      <base-button
        @click="setSelectedTab('add-resource')"
        type="button"
        :mode="addResourceButtonMode">
      Add Resource
      </base-button>
      </div>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
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
      addResource: this.addResource,
    };
  },
  computed: {
    storedResourcesButtonMode() {
      return this.selectedTab === 'stored-resources' ? 'raised' : 'flat';
    },
    addResourceButtonMode() {
      return this.selectedTab === 'add-resource' ? 'raised' : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      const id = this.storedResources.length + 1;
      this.storedResources.unshift({
        id,
        title,
        description,
        link,
        icon: 'book',
      });
      this.selectedTab = 'stored-resources';
    },
  },
};
</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
