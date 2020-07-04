
const learnRoutes = [
    {
        path: '/learn',
        name: 'Learn',
        component: () => import(/* webpackChunkName: "Learn" */ '../views/Learn.vue'),
        selectName: '学习',
        children: [
            {
                path: '/learn/source-code',
                name: 'LearnSourceCode',
                component: () => import(/* webpackChunkName: "LearnSourceCode" */ '../components/learn-source-code/index.vue'),
                MenuName: '源码学习',
                children: [
                    {
                        path: '/learn/source-code/vue',
                        name: 'LearnSourceCodeVue',
                        component: () => import(/* webpackChunkName: "LearnSourceCodeVue" */ '../components/learn-source-code/vue-source/index.vue'),
                        MenuName: 'vue源码',
                        children: [
                            {
                                path: '/learn/source-code/vue/nextTick',
                                name: 'LearnSourceCodeVueNextTick',
                                component: () => import(/* webpackChunkName: "LearnSourceCodeVue" */ '../components/learn-source-code/vue-source/nextTick/index.vue'),
                                MenuName: 'nextTick',
                            }
                        ]
                    },
                    {
                        path: '/learn/source-code/axios',
                        name: 'LearnSourceCodeAxios',
                        component: () => import(/* webpackChunkName: "LearnSourceCodeAxios" */ '../components/learn-source-code/axios-source/index.vue'),
                        MenuName: 'axios源码',
                    }
                ]
            }
        ]
    },
]

export default learnRoutes