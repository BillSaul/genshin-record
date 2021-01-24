import AV from 'leancloud-storage';
import store from '../store/index.js'

let flag = 0

export default {
    // 从数据库获取数据
    query_data() {
        const query = new AV.Query('test');
        query.find().then((data) => {
            store.commit("change_roleNum", data[0].attributes.num);
            store.commit("initialized_roleThis_num", data[0].attributes.this_num);
            store.commit("change_roleinfo", data[0].attributes.info);

            store.commit("change_armsNum", data[1].attributes.num);
            store.commit("initialized_armsThis_num", data[1].attributes.this_num);
            store.commit("change_armsinfo", data[1].attributes.info);

            store.commit("change_permanentNum", data[2].attributes.num);
        });
    },

    // 更新数据库数据
    updata_role_data() {
        if (flag) {
            const updata = AV.Object.createWithoutData('test', 'ObjectID');
            updata.set('num', store.state.roleNum.toString());
            updata.set('this_num', store.state.roleThis_num.toString())
            updata.set('info', store.state.roleInfo)
            updata.save();
        }
    },
    updata_arms_data() {
        if (flag) {
            const updata = AV.Object.createWithoutData('test', 'ObjectID');
            updata.set('num', store.state.armsNum.toString());
            updata.set('this_num', store.state.armsThis_num.toString())
            updata.set('info', store.state.armsInfo)
            updata.save();
        }
    },
    updata_permanent_data() {
        if (flag) {
            const updata = AV.Object.createWithoutData('test', 'ObjectID');
            updata.set('num', store.state.permanentNum.toString());
            updata.save();
        }
    },

    // 验证用户
    check_user(string) {
        const query = new AV.Query('test1');
        query.find().then((data) => {
            if (data[0].attributes.password == string) {
                store.commit("change_password", 'true');
                flag = 1;
            }
        })
    }
}