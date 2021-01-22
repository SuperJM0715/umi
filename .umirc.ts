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
      component: 'index',
    },
    {
      path: '/test',
      name: '一级菜单一',
      routes: [
        {
          name: '二级菜单一',
          path: '/test/menu',
          component: './test/menu',
        },
        {
          name: '二级菜单四',
          path: '/test/infoo/edit2',
          component: './test/infoo/edit',
        },
      ],
    },
    {
      path: '/test2',
      name: '一级菜单二',
      routes: [
        {
          name: '二级菜单二',
          path: 'test/infoo/edit1',
          component: './test/infoo/edit',
          exact: true,
        },
      ],
    },
    {
      path: '/test1',
      name: '一级菜单三',
      routes: [
        {
          name: '二级菜单三',
          path: 'test/infoo/edit',
          component: './test/menu',
        },
      ],
    },
  ],
  fastRefresh: {},
});
