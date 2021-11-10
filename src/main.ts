import {createApp} from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import './assets/style.css';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faChartBar, faChartPie, faCog, faInfo, faUpload, faUser} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {Chart, registerables} from 'chart.js';
import vfmPlugin from 'vue-final-modal'

library.add(faChartBar);
library.add(faChartPie);
library.add(faUser);
library.add(faCog);
library.add(faInfo);
library.add(faUpload);
library.add(faGithub);

Chart.register(...registerables)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(vfmPlugin)
    .mount('#app');
