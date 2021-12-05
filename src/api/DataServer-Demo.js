// demo文件，仅用于参考
// 如需使用，请将文件名中的“-Demo”删除

import AV from 'leancloud-storage';
import store from '../store/index.js'

let flag = 0
let objectId = ''
let userId = ''
let sql_data = 'data' // 储存数据的表
let sql_user = 'user' // 储存用户ID的表

export default {
    // 从数据库获取数据
    query_data() {
        const query = new AV.Query(sql_data);
        query.equalTo('id', userId);
        query.find().then((data) => {
            // console.log(data)
            store.commit("change_roleNum", data[0].attributes.roleNum);
            store.commit("initialized_roleThis_num", data[0].attributes.roleThis_num);
            store.commit("change_roleinfo", data[0].attributes.roleInfo);
            store.commit("change_armsNum", data[0].attributes.armsNum);
            store.commit("initialized_armsThis_num", data[0].attributes.armsThis_num);
            store.commit("change_armsinfo", data[0].attributes.armsInfo);
            store.commit("change_permanentNum", data[0].attributes.permanentNum);
            store.commit("change_roleGet", data[0].attributes.roleGet.split("/"));
            store.commit("change_armsGet", data[0].attributes.armsGet.split("/"));
            store.commit("change_permanentGet", data[0].attributes.permanentGet.split("/"));
            objectId = data[0].id
        });
    },

    // 更新数据库数据
    updata_role_data() {
        if (flag) {
            const updata = AV.Object.createWithoutData(sql_data, objectId);
            updata.set('roleNum', store.state.roleNum.toString());
            updata.set('roleThis_num', store.state.roleThis_num.toString())
            updata.set('roleInfo', store.state.roleInfo)
            updata.save();
        }
    },
    updata_arms_data() {
        if (flag) {
            const updata = AV.Object.createWithoutData(sql_data, objectId);
            updata.set('armsNum', store.state.armsNum.toString());
            updata.set('armsThis_num', store.state.armsThis_num.toString())
            updata.set('armsInfo', store.state.armsInfo)
            updata.save();
        }
    },
    updata_permanent_data() {
        if (flag) {
            const updata = AV.Object.createWithoutData(sql_data, objectId);
            updata.set('permanentNum', store.state.permanentNum.toString());
            updata.save();
        }
    },

    // 验证用户
    check_user(string) {
        const query = new AV.Query(sql_user);
        query.find().then((data) => {
            for (let index = 0; index < data.length; index++) {
                if (data[index].attributes.password == string) {
                    userId = data[index].attributes.id
                    store.commit("change_password", 'true');
                    flag = 1;
                }
            }
        })
    }
}