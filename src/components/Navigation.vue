<template>
    <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
        <el-tab-pane label="角色UP" name="role_tab">
            <div class="img_div">
                <img class="img_nav" src="../assets/cover-img/刻晴.png" alt />
            </div>
        </el-tab-pane>
        <el-tab-pane label="武器UP" name="arms_tab">
            <div class="img_div">
                <img class="img_nav" src="../assets/arms-img/护摩之杖.png" alt />
            </div>
        </el-tab-pane>
        <el-tab-pane label="常驻" name="permanent_tab">
            <div class="img_div">
                <img class="img_nav" src="../assets/常驻.png" alt />
            </div>
        </el-tab-pane>
        <el-tab-pane label="历史up" name="history_tab">
            <History />
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import History from "./History.vue";

export default {
    name: "Navigation",
    components: {
        History,
    },
    data() {
        return {
            activeName: "role_tab",
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