<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users', 'teams'],
  data() {
    return {
      members: [],
      teamName: '',
    };
  },
  created() {
    console.log(this.members);
    // Note that we use .teamId here because we named the parameter in the route  in main.js
    const { teamId } = this.$route.params;
    const selectedTeam = this.teams.find((team) => team.id === teamId);
    // eslint-disable-next-line max-len
    const members = selectedTeam.members.map((memberId) => this.users.find((user) => user.id === memberId));
    this.members = members;
    this.teamName = selectedTeam.name;
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
