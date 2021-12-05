<template>
    <div class="Count_main">
        <span>抽奖次数：</span>
        <el-input-number
            v-model="num"
            @change="handleChange"
            :min="0"
            :max="this.$store.state.tab === 'arms_tab' ? 80 : 90"
            label="抽奖次数"
            size="small"
        ></el-input-number>
        <el-popconfirm
            title="是否为本期up五星？"
            confirm-button-text="是"
            cancel-button-text="否"
            cancel-button-type="Primary"
            @confirm="confirmReset"
            @cancel="cancelReset"
            v-if="this.$store.state.tab !== 'permanent_tab'"
        >
            <el-button slot="reference" type="primary" size="small">重置次数</el-button>
        </el-popconfirm>
        <el-popconfirm
            title="确定重置次数吗？"
            confirm-button-text="是"
            cancel-button-text="否"
            cancel-button-type="Primary"
            @confirm="confirmReset"
            v-if="this.$store.state.tab === 'permanent_tab'"
        >
            <el-button slot="reference" type="primary" size="small">重置次数</el-button>
        </el-popconfirm>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num: this.$store.state.roleNum,
            centerDialogVisible: false,
        };
    },
    methods: {
        infoChange(string) {
            if (this.$store.state.tab === "role_tab") {
                this.$store.commit("change_roleNum", "0");
                this.$store.commit("change_roleinfo", string);
                this.DataServer.updata_role_data();
            }
            if (this.$store.state.tab === "arms_tab") {
                this.$store.commit("change_armsNum", "0");
                this.$store.commit("change_armsinfo", string);
                this.DataServer.updata_arms_data();
            }
            if (this.$store.state.tab === "permanent_tab") {
                this.$store.commit("change_permanentNum", "0");

                this.DataServer.updata_permanent_data();
            }
        },

        // 绑定值改变事件
        handleChange(value) {
            // 角色up池
            if (this.$store.state.tab === "role_tab") {
                this.$store.commit("change_roleThis_num", value);
                this.$store.commit("change_roleNum", value);
                this.DataServer.updata_role_data();
            }
            // 武器up池
            if (this.$store.state.tab === "arms_tab") {
                this.$store.commit("change_armsThis_num", value);
                this.$store.commit("change_armsNum", value);
                this.DataServer.updata_arms_data();
            }
            // 常驻池
            if (this.$store.state.tab === "permanent_tab") {
                this.$store.commit("change_permanentNum", value);
                this.DataServer.updata_permanent_data();
            }
        },

        // 重置事件
        confirmReset() {
            this.infoChange("小");
        },
        cancelReset() {
            this.infoChange("大");
        },

        change() {
            if (this.$store.state.tab === "role_tab") {
                this.num = this.$store.state.roleNum;
            }
            if (this.$store.state.tab === "arms_tab") {
                this.num = this.$store.state.armsNum;
            }
            if (this.$store.state.tab === "permanent_tab") {
                this.num = this.$store.state.permanentNum;
            }
        },
    },
    watch: {
        // 监听tab切换，实现实时刷新数据
        "$store.state.tab"() {
            this.change();
        },
        // 监听数据改变
        "$store.state.roleNum"() {
            this.change();
        },
        "$store.state.armsNum"() {
            this.change();
        },
        "$store.state.permanentNum"() {
            this.change();
        },
    },
};
</script>

<style>
.Count_main {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
</style>