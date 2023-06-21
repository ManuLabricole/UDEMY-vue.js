<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? '(Favorite)' : "" }}</h2>
        <button @click="toggleDetails">Show Details</button>
        <transition name="slide">
            <ul v-if="detailsAreVisible">
                <li><strong>Phone : </strong> {{ phoneNumber }}</li>
                <li><strong>Email : </strong>{{ emailAddress }}</li>
            </ul>
        </transition>

    </li>
</template>

<script>
export default {
    props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
    data() {
        return {
            detailsAreVisible: false,
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    },
};
</script>