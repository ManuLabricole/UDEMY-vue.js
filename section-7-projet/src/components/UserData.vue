<template>
    <section>
        <form @submit.prevent="submitData">
            <input type="text" placeholder="Your name" v-model="enteredName">
            <input type="text" placeholder="Your age" v-model="enteredAge">
            <button>Validate</button>
        </form>
    </section>
</template>

<script>
export default {
    emits: ['save-data'],
    data() {
        return {
            enteredName: '',
            enteredAge: '',
        };
    },
    methods: {
        submitData() {
            const userData = {
                name: this.enteredName,
                age: this.enteredAge,
            };

            if (this.enteredName === '' || this.enteredAge === '') {
                alert('Please enter a valid name and age');
                return;
            }
            else if (this.enteredAge < 1) {
                alert('Please enter a valid age (> 0)');
                return;
            }
            else {
                this.$emit('save-data', userData);
                console.log("SENDING DATA")
                console.log(userData);
            }

        },
    },
};
</script>