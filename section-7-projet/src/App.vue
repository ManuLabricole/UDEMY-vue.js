<template>

  <div id="app">
    <active-user 
      v-for = "user in users"
      :username="user.name"
      :userage="user.age"
    ></active-user>
    <user-data
      @save-data="saveData"
    ></user-data>
  </div>

</template>

<script>
export default {
  data() {
    return {
      users: [
        { name: 'Max', age: "27" },
        { name: 'Anna', age: 'unknown' },
        { name: 'Chris', age: 'unknown' },
      ],
    }
  },
  methods: {
    saveData(userData) {
      this.users.push(userData);
      console.log(this.users);
    },
  },
};

</script>

<style>
html {
  font-family: sans-serif;
  text-align: center;
}
section {
  border: 1px solid rgb(206, 25, 25);
  border-radius: 10px;
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  text-align: center;
}
</style>
