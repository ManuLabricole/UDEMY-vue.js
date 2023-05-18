const app = Vue.createApp({
  // Data is a function that returns an object.
  // The object contains the data that will be used in the template.
  data() {
    return {
      counter: 0,
      name: ''
    };
  },

  computed: {
    fullName() {
      console.log('Running again...');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Santos';
    }
  },
  // Methods are functions that are executed when an event is triggered.
  // The event is passed as an argument to the method.
  // The event object is a native JavaScript object.
  // The event object has a target property that contains the element that triggered the event.
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
