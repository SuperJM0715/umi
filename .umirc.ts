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
      routes: [
        {
          name: '二级菜单一',
          path: '/menu',
          component: './test/menu',
        },
        {
          name: '二级菜单二',
          path: '/info',
          component: './test/infoo/edit',
        },
      ],
    },
    {
      name: '一级菜单二',
      routes: [
        {
          name: '二级菜单二',
          path: '/info',
          component: './test/infoo/edit',
        },
      ],
    },
    {
      name: '一级菜单二',
      routes: [
        {
          name: '二级菜单二',
          path: '/info1',
          component: './test/infoo/edit',
        },
      ],
    },
  ],
  fastRefresh: {},
});
