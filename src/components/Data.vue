<template>
    <div>
        <p>
            <span v-if="flag">本期卡池已抽{{num1}}次，</span>
            <span v-if="flag">{{info}}</span>保底还有{{90-num2}}次
        </p>
        <el-progress :percentage="num3"></el-progress>
        <div>
            <p>五星出货记录：</p>
            <div v-if="this.$store.state.password === 'true' && this.list[0] !== 'null'">
                <div v-for="name in list" :key="name" style="display: inline">
                    <img :src="require('../assets/icon-img/'+ name + '.png')" alt class="img_data" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Data",
    data() {
        return {
            num1: "0", // 当前卡池抽的次数
            num2: "0", // 距离上次保底后抽的次数
            num3: 0, // 百分比
            flag: 1,
            info: "小", // 保底信息
            list: "",
        };
    },
    methods: {
        change() {
            if (this.$store.state.tab === "role_tab") {
                this.num1 = this.$store.state.roleThis_num;
                this.num2 = this.$store.state.roleNum;
                this.num3 = Math.round((this.$store.state.roleNum / 90) * 100);
                this.flag = 1;
                this.info = this.$store.state.roleInfo;
                this.list = this.$store.state.roleGet;
            }
            if (this.$store.state.tab === "arms_tab") {
                this.num1 = this.$store.state.armsThis_num;
                this.num2 = this.$store.state.armsNum;
                this.num3 = Math.round((this.$store.state.armsNum / 90) * 100);
                this.flag = 1;
                this.info = this.$store.state.armsInfo;
                this.list = this.$store.state.armsGet;
            }
            if (this.$store.state.tab === "permanent_tab") {
                this.num2 = this.$store.state.permanentNum;
                this.num3 = Math.round(
                    (this.$store.state.permanentNum / 90) * 100
                );
                this.flag = 0;
                this.list = this.$store.state.permanentGet;
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
        "$store.state.roleGet"() {
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
.img_data {
    width: 90px;
    height: auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    margin: 0px 5px 0px 0px;
}
</style>