import { createApp } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UserFooter from './components/users/UserFooter.vue';
import TeamFooter from './components/teams/TeamFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      path: '/teams',
      components: { default: TeamsList, footer: TeamFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UserFooter },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log('To: ', to);
        console.log('From: ', from);
        next();
      },
    },
    // What if we want to pass dynamic data to the route?
    // We can advoid to always use $route to get the data
    // but there is a better way to do it : props = true
    { path: '/:notFound(.*)', redirect: '/teams' },
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  }
});

const app = createApp(App);

app.use(router);
app.mount('#app');
