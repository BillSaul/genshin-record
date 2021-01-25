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
        roleInfo: '小',
        armsInfo: '小',
        roleGet: '',
        armsGet: '',
        permanentGet: '',
        tab: 'role_tab',
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
        change_password(state, string) {
            state.password = string
        },
        change_roleGet(state, string) {
            state.roleGet = string
        },
        change_armsGet(state, string) {
            state.armsGet = string
        },
        change_permanentGet(state, string) {
            state.permanentGet = string
        },
    },
})

export default store