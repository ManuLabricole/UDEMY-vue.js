<template>
    <form @submit.prevent="submitData">
        <div class="form-control">
            <label for="name">Name</label>
            <input type="text" id="name" required v-model="enteredName">
        </div>
        <div class="form-control">
            <label for="phone">Phone</label>
            <input type="text" id="phone" required v-model="enteredPhone">
        </div>
        <div class="form-control">
            <label for="email">Email</label>
            <input type="email" id="email" required v-model="enteredEmail">
        </div>
        <div class="form-actions">
            <button type="submit">Add Friend</button>
        </div>
    </form>
</template>
<script>
export default {
    data() {
        return {
            enteredName: '',
            enteredPhone: '',
            enteredEmail: ''
        }
    },
    emits: ['add-friend'],

    methods: {
        submitData() {
            const friendData = {
                AdibouName: this.enteredName,
                phone: this.enteredPhone,
                email: this.enteredEmail
            };

            this.$emit('add-friend', friendData);
            console.log(friendData);

            this.enteredName = '';
            this.enteredPhone = '';
            this.enteredEmail = '';
        }
    },
};
</script>
<style></style>