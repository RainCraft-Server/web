import { defineClientConfig } from 'vuepress/client'
import staff from './theme/components/staff.vue'
import info from './theme/components/info.vue'
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import CustomComponent from './theme/components/Custom.vue'

// import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    // app.component('RepoCard', RepoCard)
    // app.component('CustomComponent', CustomComponent)
    app.component('staff', staff)
    app.component('info', info)
  },

})
