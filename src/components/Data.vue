<template>
    <div>
        <p>
            <span v-if="flag">此卡池已抽{{num1}}次，</span>
            保底还有{{90-num2}}次
            <span v-if="flag">，本次为{{info}}</span>
        </p>
        <el-progress :percentage="num3"></el-progress>
        <div>
            <p>五星出货记录：</p>
            <div v-if="this.$store.state.password === 'true'">
                <img class="img_data" src="../assets/icon-img/温迪.png" alt v-if="this.$store.state.tab === '1'" />
                <img class="img_data" src="../assets/icon-img/刻晴.png" alt v-if="this.$store.state.tab === '1'" />
                <img class="img_data" src="../assets/icon-img/天空之傲.png" alt v-if="this.$store.state.tab === '3'" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Data",
    data() {
        return {
            num1: this.$store.state.roleThis_num, // 当前卡池抽的次数
            num2: this.$store.state.roleNum, // 距离上次保底后抽的次数
            num3: (this.num3 = Math.round(
                // 百分比计算
                (this.$store.state.roleNum / 90) * 100
            )),
            flag: 1,
            info: this.$store.state.roleInfo, // 保底信息
        };
    },
    methods: {
        change() {
            if (this.$store.state.tab === "1") {
                this.num1 = this.$store.state.roleThis_num;
                this.num2 = this.$store.state.roleNum;
                this.num3 = Math.round((this.$store.state.roleNum / 90) * 100);
                this.flag = 1;
                this.info = this.$store.state.roleInfo;
            }
            if (this.$store.state.tab === "2") {
                this.num1 = this.$store.state.armsThis_num;
                this.num2 = this.$store.state.armsNum;
                this.num3 = Math.round((this.$store.state.armsNum / 90) * 100);
                this.flag = 1;
                this.info = this.$store.state.armsInfo;
            }
            if (this.$store.state.tab === "3") {
                this.num2 = this.$store.state.permanentNum;
                this.num3 = Math.round(
                    (this.$store.state.permanentNum / 90) * 100
                );
                this.flag = 0;
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
        "$store.state.roleThis_num"() {
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
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    margin: 0px 5px 0px 0px;
}
</style>