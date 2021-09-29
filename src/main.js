import {createApp} from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faChartBar, faChartPie, faCog, faInfo, faUpload, faUser} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

library.add(faChartBar);
library.add(faChartPie);
library.add(faUser);
library.add(faCog);
library.add(faInfo);
library.add(faUpload);
library.add(faGithub);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
