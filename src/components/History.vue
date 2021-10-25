<template>
    <div>
        <el-collapse v-model="activeName" accordion>
            <li v-for="item in items" :key="item.date" class="history_li">
                <el-collapse-item :title="'时间：'+item.date" :name="item.date">
                    <div class="li_div">
                        <img :src="item.path1" v-if="item.path1!=null" alt class="history_img1" />
                        <img :src="item.path2" v-if="item.path2!=null" alt class="history_img2" />
                    </div>
                </el-collapse-item>
            </li>
        </el-collapse>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                // {
                //     path1: require("../assets/cover-img/达达利亚2.jpg"),
                //     path2: require("../assets/arms-img/冬极白星.jpg"),
                //     date: "2021/10/13 ~ 2021/11/02",
                // },
                {
                    path1: require("../assets/cover-img/珊瑚宫心海.jpg"),
                    path2: require("../assets/arms-img/不灭月华.jpg"),
                    date: "2021/09/21 ~ 2021/10/12",
                },
                {
                    path1: require("../assets/cover-img/雷电将军.jpg"),
                    path2: require("../assets/arms-img/薙草之稻光.jpg"),
                    date: "2021/09/01 ~ 2021/09/21",
                },
                {
                    path1: require("../assets/cover-img/宵宫.jpg"),
                    path2: require("../assets/arms-img/飞雷之弦振.jpg"),
                    date: "2021/08/10 ~ 2021/08/31",
                },
                {
                    path1: require("../assets/cover-img/神里绫华.jpg"),
                    path2: require("../assets/arms-img/雾切之回光.jpg"),
                    date: "2021/07/21 ~ 2021/08/10",
                },
                {
                    path1: require("../assets/cover-img/枫原万叶.png"),
                    path2: require("../assets/arms-img/苍古自由之誓.png"),
                    date: "2021/06/29 ~ 2021/07/20",
                },
                {
                    path1: require("../assets/cover-img/可莉1.png"),
                    path2: require("../assets/arms-img/四风原典1.png"),
                    date: "2021/06/09 ~ 2021/06/29",
                },
                {
                    path1: require("../assets/cover-img/优菈.jpg"),
                    path2: require("../assets/arms-img/松籁响起之时.jpg"),
                    date: "2021/05/18 ~ 2021/06/08",
                },
                {
                    path1: require("../assets/cover-img/烟绯.jpg"),
                    path2: require("../assets/arms-img/尘世之锁.jpg"),
                    date: "2021/04/28 ~ 2021/05/18",
                },
                {
                    path1: require("../assets/cover-img/达达利鸭.jpg"),
                    path2: require("../assets/arms-img/天空之翼-二期.jpg"),
                    date: "2021/04/06 ~ 2021/04/27",
                },
                {
                    path1: require("../assets/cover-img/温迪.jpg"),
                    path2: require("../assets/arms-img/终末嗟叹之诗.jpg"),
                    date: "2021/03/17 ~ 2021/04/06",
                },
                {
                    path1: require("../assets/cover-img/胡桃.png"),
                    path2: require("../assets/arms-img/护摩之杖.png"),
                    date: "2021/03/02 ~ 2021/03/16",
                },
                {
                    path1: require("../assets/cover-img/刻晴.png"),
                    path2: null,
                    date: "2021/02/17 ~ 2021/03/02",
                },
                {
                    path1: null,
                    path2: require("../assets/arms-img/和璞鸢.png"),
                    date: "2021/02/03 ~ 2021/02/23",
                },
                {
                    path1: require("../assets/cover-img/魈.png"),
                    path2: null,
                    date: "2021/02/03 ~ 2021/02/17",
                },
                {
                    path1: require("../assets/cover-img/甘雨.jpeg"),
                    path2: require("../assets/arms-img/阿莫斯之弓.jpeg"),
                    date: "2021/01/12 ~ 2021/02/02",
                },
                {
                    path1: require("../assets/cover-img/阿贝多.jpeg"),
                    path2: require("../assets/arms-img/斫峰之刃.jpg"),
                    date: "2020/12/23 ~ 2021/01/12",
                },
                {
                    path1: require("../assets/cover-img/钟离.jpg"),
                    path2: require("../assets/arms-img/贯虹之槊.jpg"),
                    date: "2020/12/01 ~ 2020/12/22",
                },
                {
                    path1: require("../assets/cover-img/达达利亚.jpg"),
                    path2: require("../assets/arms-img/天空之翼.jpg"),
                    date: "2020/11/11 ~ 2020/12/01",
                },
                {
                    path1: require("../assets/cover-img/可莉.jpeg"),
                    path2: require("../assets/arms-img/四风原典.jpeg"),
                    date: "2020/10/20 ~ 2020/11/10",
                },
                {
                    path1: require("../assets/cover-img/温迪.png"),
                    path2: require("../assets/arms-img/风鹰剑.jpeg"),
                    date: "2020/09/28 ~ 2020/10/18",
                },
            ],
            activeName: "2021/09/21 ~ 2021/10/12",
        };
    },
};
</script>

<style>
.history_img1 {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.history_img2 {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-top: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.history_li {
    list-style: none;
}
.li_div {
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
}
.el-collapse-item__header {
    background-color: rgb(245, 245, 245);
}
.el-collapse-item__wrap {
    background-color: rgb(245, 245, 245);
}
</style>