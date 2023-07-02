import { createApp } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({

  history: createWebHistory(),
  routes: [
    { path: '/teams', component: TeamsList },
    { path: '/users', component: UsersList },
    // What if we want to pass dynamic data to the route?
    { path: '/teams/:teamId', component: TeamMembers, props: true },
  ],
  linkActiveClass: 'active',
});

const app = createApp(App);

app.use(router);
app.mount('#app');
