<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resource')">Stored Resource</base-button>
    <base-button @click="setSelectedTab('add-resource')">Add Resource</base-button>
  </base-card>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      selectedTab: 'stored-resources',
    };
  },
  methods: {
    setSelectTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
