import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        roleNum: '0',
        roleThis_num: '0',
        armsNum: '0',
        armsThis_num: '0',
        permanentNum: '0',
        roleInfo: '小保底',
        armsInfo: '小保底',
        tab: '1',
        password: '0',
    },
    mutations: {
        change_tab(state, string) {
            state.tab = string
        },
        initialized_roleThis_num(state, string) {
            state.roleThis_num = string
        },
        change_roleThis_num(state, string) {
            state.roleThis_num = parseInt(string) - parseInt(state.roleNum) + parseInt(state.roleThis_num)
        },
        initialized_armsThis_num(state, string) {
            state.armsThis_num = string
        },
        change_armsThis_num(state, string) {
            state.armsThis_num = parseInt(string) - parseInt(state.armsNum) + parseInt(state.armsThis_num)
        },
        change_roleNum(state, string) {
            state.roleNum = string
        },
        change_armsNum(state, string) {
            state.armsNum = string
        },
        change_permanentNum(state, string) {
            state.permanentNum = string
        },
        change_roleinfo(state, string) {
            state.roleInfo = string
        },
        change_armsinfo(state, string) {
            state.armsInfo = string
        },
        change_password(state, string){
            state.password = string
        },
    },
})

export default store