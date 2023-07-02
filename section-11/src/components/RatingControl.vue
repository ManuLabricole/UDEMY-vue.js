<template>
  <ul>
    <li>
      <button
        :class="{ active: activeButton === 'poor' }"
        type="button"
        @click="setActiveButton('poor')"
      >
        Poor
      </button>
    </li>
    <li>
      <button
        :class="{ active: activeButton === 'average' }"
        type="button"
        @click="setActiveButton('average')"
      >
        Average
      </button>
    </li>
    <li>
      <button
        :class="{ active: activeButton === 'great' }"
        type="button"
        @click="setActiveButton('great')"
      >
        Great
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RatingControl',
  data() {
    return {
      activeButton: null,
    };
  },
  methods: {
    setActiveButton(button) {
      this.activeButton = button;
      console.log('activeButton: ', this.activeButton);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
}
li {
  margin: 0 0.5rem;
}

.active {
  border-color: blueviolet;
  color: blueviolet;
}

.active button {
  background-color: blueviolet;
  color: white;
}
</style>
