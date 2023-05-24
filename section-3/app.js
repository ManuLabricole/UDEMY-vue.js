const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enteredValue: '',
      display: true
    };
  },
  methods: {
    addGoal() {
      // We can use push to add an item to an array
      this.goals.push(this.enteredValue);
    },
    removeGoal(idx) {
      // We can use splice to remove an item from an array
      this.goals.splice(idx, 1);
    },
    toggleDisplay() {
      this.display = !this.display;
    }
  }
});

app.mount('#user-goals');
