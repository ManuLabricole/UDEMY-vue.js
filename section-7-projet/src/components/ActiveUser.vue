<template>
    <section>
        <h2>{{ username }}</h2>
        <h3>{{ userage }}</h3>
    </section>
</template>

<script>

export default {
    props : {
        username: {
            type: String,
            required: true,
        },
        userage: {
            type: String,
            required: true,
        },
    },
    data() {
        return {};
    },
    methods: {},
};

</script>

<style>

</style>