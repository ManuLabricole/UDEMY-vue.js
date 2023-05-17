const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    updateValue(e, string) {
      if (e.target.value === '') {
        this.name = '';
      } else {
        this.name = e.target.value + ' ' + string;
      }
    }
  },
});

app.mount('#events');
