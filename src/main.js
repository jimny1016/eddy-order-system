import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

/*FortAwesome*/
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
//**FortAwesome

/*Vue Router*/
//import router from './router'

//FortAwesome**
/* add icons to the library */
library.add(faGlobe)
library.add(faCartShopping)
library.add(faCircleArrowLeft)
//**FortAwesome


const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
//app.component(router)
app.mount('#app')
