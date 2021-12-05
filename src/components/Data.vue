<template>
    <div>
        <p>
            <span v-if="flag">本期卡池已抽{{num1}}次，</span>
            <span v-if="flag">{{info}}</span>保底还有{{this.$store.state.tab === "arms_tab" ? 80-num2 : 90-num2}}次
        </p>
        <el-progress :percentage="num3"></el-progress>
        <div>
            <p>五星出货记录：</p>
            <div
                v-if="this.$store.state.password === 'true' && this.list[0] !== 'null'"
                class="data"
            >
                <div v-for="(name,index) in list" :key="index" class="img">
                    <img :src="require('../assets/icon-img/'+ name + '.png')" alt class="img_data" />
                    <span class="name_data">{{ name }}</span>
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
                this.num3 = Math.round((this.$store.state.armsNum / 80) * 100);
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
    margin: 3px 3px 0px 3px;
    border: #d0d0d0 1px solid;
}
.data {
    display: grid;
    grid-template-columns: repeat(auto-fit, 98px);
    justify-content: center;
    grid-gap: 5px;
}
.img {
    background: url(data:image/png;base64,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)
        no-repeat center/100% 100%;
}
.name_data {
    display: block;
    text-align: center;
    margin: 0px 0px 5px 0px;
    font-size: 0.9rem;
}

@media screen and (max-width: 800px) {
    .img_data {
        width: 77px;
        height: auto;
        margin: 3px 3px 0px 3px;
        border: #d0d0d0 1px solid;
    }
    .data {
        grid-template-columns: repeat(auto-fit, 85px);
    }
}
</style>