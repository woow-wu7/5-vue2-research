import request from '../../http'
import axios from 'axios'
import vue from 'vue'
import { Message } from 'element-ui';
import router from '../../router'

interface PLogin {
    name: string;
    password: number;
}


const LoginModule = {
    namespaced: true,
    state() {
        return {
            name: 'admin01',
            password: 'admin',
            token: ''
        }
    },
    mutations: {
        getToken(state: { token: string }, paylod: string) {
            state.token = paylod
        }
    },
    actions: {
        async getPrice(context: { commit: Function }, { name, password }: PLogin) {
            const res: any = await request({
                method: 'post',
                url: '/api/login',
                data: {
                    name,
                    password,
                }
            })
            console.log(res, 'res')
            if (res.data) {
                console.log(this, 'this')
                context.commit('getToken', res.data.token)
                router.replace('/home')
                // console.log(router)
                // Message({
                //     message: '登录成功',
                //     type: 'success'
                // });
                // window.history.length = 1 只能读不能写
            }
        },
    }
}


export default LoginModule