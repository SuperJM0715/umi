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
      name: '一级菜单一',
      path: '/',
      routes: [
        {
          name: '二级菜单一',
          path: '/menu',
          component: './test/menu/index',
        },
      ],
    },
    {
      name: '一级菜单二',
      path: '/',
      routes: [
        {
          name: '二级菜单二',
          path: '/info',
          component: './test/info/index',
        },
      ],
    },
  ],
  fastRefresh: {},
});
