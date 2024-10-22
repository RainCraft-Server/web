import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar'
import { enNotes, zhNotes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: '/images/raincraft-1x1-circle.png',
  // your git repo url
  docsRepo: '',
  docsDir: 'docs',

  appearance: true,

  social: [
    { icon: 'github', link: 'https://github.com/RainCraft-Server' },
    { icon: 'bilibili', link: 'https://space.bilibili.com/3546384733047458' },
  ],

  navbarSocialInclude: ['github', 'bilibili'],

  footer: {
    copyright: 'Made with ❤ by GiriNeko',
  },

  locales: {
    '/': {
      profile: {
        avatar: '/images/raincraft-1x1.png',
        name: 'RainCraft',
        description: 'An Minecraft Server.',
        circle: true,
        // location: '',
        // organization: '',
      },

      navbar: zhNavbar,
      notes: zhNotes,
    },
    '/en/': {
      profile: {
        avatar: '/images/raincraft-1x1.png',
        name: 'RainCraft',
        description: 'An Minecraft Server.',
        circle: true,
        // location: '',
        // organization: '',
      },

      navbar: enNavbar,
      notes: enNotes,
    },
  },
})
