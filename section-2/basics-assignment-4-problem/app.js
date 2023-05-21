// Vue js component to toggle class and style

const app = Vue.createApp({
    data() {
        return {
            style: ""
        }
    },
    methods: {
        onKeyDown() {
            this.value
            console.log("KeyDown")
        }
    },
});

app.mount("#assignment");