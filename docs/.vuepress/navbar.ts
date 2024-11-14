import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', icon: 'icon-park-outline:home' , link: '/'  },
  { text: '博客', icon: 'icon-park-outline:thinking-problem' , link: '/blog/' },
  { text: '投喂', icon: 'icon-park-outline:cup' , link: '/docs/donate/' },
  {
    text: '文档',
    icon: 'icon-park-outline:document-folder',
    items: [
      { text: '开始', link: '/docs/get-start/' },
      { text: '社区', link: '/docs/community/' },
    ]
  },
  {
    text: '更多',
    icon: 'icon-park-outline:more-two',
    items: [
      { text: '皮肤站', link: 'https://skin.ineko.cc' },
      { text: '论坛', link: 'https://bbs.mc.ineko.cc' },
      { text: '联合封禁系统', link: 'https://uni-ban.mc.ineko.cc' }
      { text: '服务器状态', link: 'https://stat.mc.ineko.cc' }
    ]
  },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', icon: 'icon-park-outline:home' , link: '/en/' },
  {
    text: 'More',
    icon: 'icon-park-outline:more-two',
    items: [
      { text: 'BBS', link: 'https://bbs.mc.ineko.cc' },
      { text: 'Union Ban System', link: 'https://uni-ban.mc.ineko.cc' }
      { text: 'Server Stats', link: 'https://stat.mc.ineko.cc' }
    ]
  },
])

