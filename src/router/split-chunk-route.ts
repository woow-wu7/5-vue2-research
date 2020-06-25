const splitChunkRoute = [
  {
    path: '/split-chunk',
    name: 'SplitChunk',
    component: () => import(/* webpackChunkName: "SplitChunk" */ '../views/SplitChunk.vue'),
    selectName: '(路由|组件)按需加载'
  },
]

export default splitChunkRoute