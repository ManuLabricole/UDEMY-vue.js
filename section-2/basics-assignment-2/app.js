const app = Vue.createApp({
    data() {
        return {
            inputKeyDown: 'raw',
            inputEnter: 'raw',
        };
    },

    methods: {
        showAlert() {
            alert('Hello World!');
        },
        saveInput(e) {
            console.log('saveInput');
            this.inputKeyDown = e.target.value;
        },
        saveInputEnter(e) {
            console.log('saveInputEnter');
            this.inputEnter = e.target.value;
        }
    },

}).mount('#assignment');
