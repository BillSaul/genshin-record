<template>
    <div class="main">
        <div class="Navigation_div">
            <Navigation />
        </div>
        <div class="Count_div" v-if="flag">
            <Count />
        </div>
        <div class="Data_div" v-if="flag">
            <Data />
        </div>
    </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Count from "./components/Count.vue";
import Data from "./components/Data.vue";

export default {
    data() {
        return {
            flag: 1,
        };
    },
    components: {
        Navigation,
        Count,
        Data,
    },
    // 监听tab切换
    watch: {
        "$store.state.tab"() {
            if (this.$store.state.tab === "4") this.flag = 0;
            else this.flag = 1;
        },
    },
};
</script>

<style>
.main {
    width: 700px;
    margin: 0 auto;
}
.Count_div {
    padding: 15px;
    margin: 8px 0px 8px 0px;
    background: #fff;
    border: 1px solid #dcdfe6;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%), 0 0 6px 0 rgb(0 0 0 / 4%);
}
.Data_div {
    padding: 15px;
    background: #fff;
    border: 1px solid #dcdfe6;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%), 0 0 6px 0 rgb(0 0 0 / 4%);
}

@media screen and (max-width: 800px) {
    .main {
        width: 100%;
    }
}
</style>
