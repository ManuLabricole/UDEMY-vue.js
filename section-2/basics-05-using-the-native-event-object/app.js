const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetName() {
      this.name = '';
    },
    outputFullName() {
      console.log('Running again...');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Santos';
    }
  }
});

app.mount('#events');
