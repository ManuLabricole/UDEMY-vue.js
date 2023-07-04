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
    { path: '/', redirect: '/teams' },
    {
      path: '/teams',
      component: TeamsList,
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
        // { path: '/teams/:teamId/:memberId', component: UserList },
        // { path: '/teams/:teamId/:memberId/:userId', component: UserDetail },
      ],
    },
    { path: '/users', component: UsersList },
    // What if we want to pass dynamic data to the route?
    // We can advoid to always use $route to get the data
    // but there is a better way to do it : props
    { path: '/:notFound(.*)', redirect: '/teams' },
  ],
  linkActiveClass: 'active',
});

const app = createApp(App);

app.use(router);
app.mount('#app');
