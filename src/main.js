import './assets/main.css'
import color from "@/plugins/color.js"
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { IoLogoGithub , IoLogoLinkedin ,MdOutgoingmail,BiBriefcaseFill,RiFileCodeFill,IoPersonCircle,CoJs,ViFileTypeCss ,ViFileTypeVue ,ViFileTypeHtml,ViFileTypePug,ViFileTypeMysql,IoLogoFigma,ViFileTypeNode,ViFileTypePhp    ,ViFileTypeSass  } from "oh-vue-icons/icons";
import '@/styles.css';

addIcons(IoLogoGithub , IoLogoLinkedin ,MdOutgoingmail,BiBriefcaseFill,RiFileCodeFill,IoPersonCircle,CoJs,ViFileTypeCss ,ViFileTypeVue ,ViFileTypeHtml,ViFileTypeSass,ViFileTypePug,ViFileTypeMysql,IoLogoFigma,ViFileTypeNode,ViFileTypePhp     );
const app = createApp(App)

app.use(createPinia())
app.use(color,{color:"red"})
app.use(router)
app.component("v-icon", OhVueIcon);
app.mount('#app')
