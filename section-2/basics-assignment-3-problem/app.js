const app = Vue.createApp({
    data() {
        return {
            number: 0,
        };
    },

    watch: {
        resultDisplayed() {
            console.log('watcher');
            const that = this;
            setTimeout(function () {
                that.number = 0;
            }, 5000);
        }
    },

    computed: {
        resultDisplayed() {
            if (this.number < 37) {
                return 'Not there yet';
            } else if (this.number > 37) {
                return 'Too much!';
            } else {
                return this.number;
            }
        }
    },

    methods: {
        addFive() {
            console.log('addFive');
            this.number = this.number + 5;
            console.log(this.number);
            
        },
        addOne() {
            console.log('addOne');
            this.number = this.number + 1;
            console.log(this.number);
            
        },
    }
});

app.mount('#assignment');
