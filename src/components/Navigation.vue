<template>
    <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
        <el-tab-pane label="角色UP" name="1">
            <div class="img_div">
                <img class="img_nav" src="../assets/cover-img/甘雨.jpeg" alt />
            </div>
        </el-tab-pane>
        <el-tab-pane label="武器UP" name="2">
            <div class="img_div">
                <img class="img_nav" src="../assets/arms-img/阿莫斯之弓.jpeg" alt />
            </div>
        </el-tab-pane>
        <el-tab-pane label="常驻" name="3">
            <div class="img_div">
                <img class="img_nav" src="../assets/常驻.png" alt />
            </div>
        </el-tab-pane>
        <el-tab-pane label="历史up" name="4"><History/></el-tab-pane>
    </el-tabs>
</template>

<script>
import History from './History.vue'

export default {
    name: "Navigation",
    components:{
        History
    },
    data() {
        return {
            activeName: "1",
        };
    },
    methods: {
        // 标签点击事件
        handleClick(tab) {
            this.$store.commit("change_tab", tab.name);
        },
    },
};
</script>

<style>
.el-tabs__nav-scroll {
    display: flex;
    justify-content: center;
    margin-top: 1%;
}
.img_nav {
    width: 100%;
    height: auto;
    border-radius: 10px;
}
.img_div {
    margin: 0 auto;
    display: flex;
    justify-content: center;
}
</style>