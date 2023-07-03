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
    <router-link to="team-2">Go to team2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users', 'teams'],
  props: {
    teamId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      members: [],
      teamName: '',
    };
  },
  methods: {
    loadTeamMembers(teamId) {
      const selectedTeam = this.teams.find((team) => team.id === teamId);
      // eslint-disable-next-line max-len
      const members = selectedTeam.members.map((memberId) => this.users.find((user) => user.id === memberId));
      this.members = members;
      this.teamName = selectedTeam.name;
    },
  },
  created() {
    // Note that we use .teamId here because we named the parameter in the route  in main.js
    this.loadTeamMembers(this.teamId);
  },
  // We need to watch the route because we need to
  // update the members and teamName when the route changes
  // If we don't watch the route, the members and teamName
  // will not be updated when the route changes
  watch: {
    teamId(newId) {
      this.loadTeamMembers(newId);
    },
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
