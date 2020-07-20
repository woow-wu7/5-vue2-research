import {getTableDate} from '../../http/el-ui'
// import { createLogger } from 'vuex'

const ElUi = {
    namespaced: true,
    state() {
        return {
            tableData: [],
            tableColConfig: [
                {
                    type: "selection",
                    id: 1,
                },
                {
                    prop: 'date',
                    label: '日期',
                    id: 2,
                },
                {
                    prop: 'name',
                    label: '姓名',
                    id: 3,
                },
                {
                    prop: 'address',
                    label: '地址',
                    id: 4,
                },
                {
                    label: '操作',
                    slot: 'ope',
                    id: 5,
                }
            ]
        }
    },
    mutations: {
        setTableData(state: {tableData: []}, payload: []) {
            state.tableData = payload
        }
    },
    actions: {
        async getTableDate({commit}: {commit: Function}) {
            const res = await getTableDate()
            const {tableData} = res.data
            if (tableData) {
                commit('setTableData', tableData)
            }
        }
    }
}

export default ElUi