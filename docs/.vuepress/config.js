module.exports = {
  base: '/front-end-tutorial/',
  title: 'Web前端基础学习路线',
  description: '按阶段学习并提升前端技能',
  markdown: {
    toc: {
      includeLevel: [2, 3, 4, 5, 6]
    }
  },
  themeConfig: {
    repo: 'wuzhengyan2015/front-end-tutorial',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    sidebarDepth: 2,
    nav: [
      {
        text: '学习材料',
        link: '/curated-tutorial/',
      },
      {
        text: '分享会',
        link: '/share/'
      },
      {
        text: '翻译',
        link: '/translation/'
      },
      {
        text: '读书笔记',
        link: '/reading-notes/'
      }
      // {
      //   text: '关于',
      //   link: '/about/'
      // }
    ],
    sidebar: {
      '/curated-tutorial/': [
        {
          title: '学习材料(持续更新...)',
          children: [
            '',
            'front-end-roadmap',
            'basic-css',
            'basic-html',
            'basic-javascript',
            'advanced-css',
            'advanced-javascript',
            'expanded-javascript'
          ]
        }
      ],
      '/share/': [
        {
          title: '分享会',
          children: [
            'es6-practical-skills',
          ]
        }
      ],
      '/translation/': [
        {
          title: '翻译',
          children: [
            'brief-javascript-roadmap.md',
            'commonly-used-ES6-features'
          ]
        }
      ],
      '/reading-notes/': [
        {
          title: '读书笔记',
          children: [
            ''
          ]
        }
      ]
    }
  }
}
