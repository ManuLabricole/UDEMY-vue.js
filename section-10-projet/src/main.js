import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButtonVue from './components/ui/BaseButton.vue';
import BaseDialog from './components/ui/BaseDialog.vue';

const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-button', BaseButtonVue);
app.component('base-dialog', BaseDialog);
app.mount('#app');
