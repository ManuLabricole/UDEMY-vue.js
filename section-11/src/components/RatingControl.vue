<template>
  <ul>
    <li>
      <button
        :class="{ active: modelValue === 'poor' }"
        type="button"
        @click="setActiveButton('poor')"
      >
        Poor
      </button>
    </li>
    <li>
      <button
        :class="{ active: modelValue === 'average' }"
        type="button"
        @click="setActiveButton('average')"
      >
        Average
      </button>
    </li>
    <li>
      <button
        :class="{ active: modelValue === 'great' }"
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
  props: ['modelValue'], // [modelValue] is the default prop name for v-model
  emits: ['update:modelValue'],
  methods: {
    setActiveButton(button) {
      this.activeButton = button;
      this.$emit('update:modelValue', button);
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
