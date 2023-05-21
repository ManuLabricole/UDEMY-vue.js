// Vue js component to toggle class and style

const app = Vue.createApp({
    data() {
        return {
            style: "",
            toggled:false
        }
    },

    computed: {
        computedClass() {
            if (this.style==="user1") {
                return "user1"
            } else if (this.style==="user2") {
                return "user2"
            } else {
                console.log("No class")
                return ""
            }

        },

        isToggled() {
            if (this.toggled) {
                return "visible"
            }
            else {
                return "hidden"
            }
        }
    },

    methods: {
        onKeyDown(e) {
            this.style = e.target.value
            console.log("KeyDown")

        }
    },
});

app.mount("#assignment");