// Vue js component to toggle class and style

const app = Vue.createApp({
    data() {
        return {
            style: "",
            toggled:false
        }
    },

    computed: {
        paraClasses() {
            return {
                user1: this.style === "user1",
                user2: this.style === "user2",
                visible: this.toggled,
                hidden: !this.toggled
            }
        }
    },

    methods: {
        onKeyDown(e) {
            this.style = e.target.value
            console.log("KeyDown")

        },
        toggleParagraph() {
            console.log("Toggle")
            this.toggled = !this.toggled
        }
    },
});

app.mount("#assignment");