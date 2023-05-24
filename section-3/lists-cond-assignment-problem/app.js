const app = Vue.createApp({
    data() {
        return {
            enteredTask : '',
            tasks: [],
            display: false
        };
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTask);
            this.enteredTask = '';
        },
        removeTask(idx) {
            this.tasks.splice(idx, 1);
        },
        toggleDisplay() {
            this.display = !this.display;
        }
    },
    computed: {
        buttonCaption() {
            return this.display ? 'Hide List' : 'Show List';
        }

    }
});

app.mount('#assignment');