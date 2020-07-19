import {getTableDate} from '../../http/el-ui'
import { createLogger } from 'vuex'

const ElUi = {
    namespaced: true,
    state() {
        return {
            tableData: []
        }
    },
    mutations: {
        setTableData(state: any, payload: any) {
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