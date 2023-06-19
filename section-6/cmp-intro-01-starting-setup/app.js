const app = Vue.createApp({
    data() {
        return {
            detailsAreVisible: false,
            friends: [{
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '01234 5678 991',
                email: 'manuel_la_tlouelle@gmail.com'
            }, {
                id: 'julie',
                name: 'Julie Jones',
                phone: '09876 543 221',
                email: 'julie_gaillet@gmail.com'
            }
            ]
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});



app.mount('#app');