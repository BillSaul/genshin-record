import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import store from './store/index.js'
import AV from './api/LeanCloud.js'
import DataServer from './api/DataServer.js'
import './css/style.css'
import sha1 from 'sha1'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(AV)

Vue.prototype.DataServer = DataServer
Vue.prototype.sha1 = sha1

new Vue({
    beforeCreate() {
        this.$prompt('请输入用户ID', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            customClass: 'msgbox',
            inputType: 'password'
        }).then(({ value }) => {
            var sha1 = require('sha1');
            this.DataServer.check_user(sha1(value));

            const loading = this.$loading({
                lock: true,
                text: '拼命加载中',
                spinner: 'el-icon-loading',
                background: 'rgba(255,255,255,.9);'
            });
            setTimeout(() => {
                if (this.$store.state.password === 'true') {
                    // 初始化数据
                    this.DataServer.query_data();
                    this.$message({
                        showClose: true,
                        message: '验证成功',
                        type: 'success',
                        duration: 1000,
                    });
                }
                else
                    this.$message({
                        showClose: true,
                        message: '验证失败',
                        type: 'error',
                        duration: 1000,
                    });
                loading.close();
            }, 500);
        }).catch(() => {
            this.$message({
                showClose: true,
                message: '验证失败',
                type: 'error',
                duration: 1000,
            });
        });
    },
    render: h => h(App),
    store,
}).$mount('#app')
