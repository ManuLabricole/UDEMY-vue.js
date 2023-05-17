Vue.createApp({
    data () {
        return {
            name: 'Manu',
            age: 37,
            vueImage: 'https://vuejs.org/images/logo.png'
        }
    },
    methods: {
        agePlusFive() {
            return this.age + 5
        },
        randomNum() {
            return Math.random()
        }
    }
}).mount('#assignment')