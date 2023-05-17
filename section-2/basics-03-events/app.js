const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      formName: '',
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
    },
    confirmInput() {
      console.log('confirmInput');
      this.confirmedName = this.name;
    },
    submitForm(e) {
      e.preventDefault();
      self.formName = e.target.value;
      alert('Submitted!');
    },
  },
});

app.mount('#events');
