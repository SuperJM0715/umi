import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  locale: {
    default: 'zh-CN',
  },
  layout: {},
  routes: [
    {
      path: '/',
      component: '@/pages/index',
    },
    {
      name: '一级菜单',
      path: '/',
      component: '@/pages/test/index',
      routes: [
        {
          name: '二级菜单一',
          path: 'menu',
          component: 'index',
        },
        // {
        //   name: '二级菜单二',
        //   path: 'menu/menu1',
        //   component: '@/pages/test/menu/menu1',
        // },
      ],
    },
    {
      name: '二级菜单',
      path: '/',
      component: '@/pages/test/index',
      routes: [
        {
          name: '二级菜单一',
          path: 'info',
          component: 'index',
        },
        // {
        //   name: '二级菜单二',
        //   path: 'menu/menu1',
        //   component: '@/pages/test/menu/menu1',
        // },
      ],
    },
  ],
  fastRefresh: {},
});
