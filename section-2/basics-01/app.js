// On commence par créer une instance de Vue
// On lui passe un objet de configuration
// On lui passe un sélecteur CSS pour lui dire où il doit être rendu

const app = Vue.createApp({
    // data() is a function that returns an object
    // data() is a special function name
    data() {
        // We can return any key-value pairs we want
        // We can return any data we want
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Master Vue and build amazing apps!',
            courseGoalC: '<p> tada h2</p>',
            vueLink: 'https://vuejs.org/'
        };
    },
    // methods is an object
    // methods is a special property name
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                // Here this is the Vue instance
                // We can access any data we defined in data()

                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
}
);
app.mount('#user-goal');