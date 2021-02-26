<template>
    <div class="main">
        <div class="Navigation_div">
            <Navigation />
        </div>
        <div class="Count_div" v-show="flag">
            <Count />
        </div>
        <div class="Data_div" v-show="flag">
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
            this.$store.state.tab === "history_tab"
                ? (this.flag = 0)
                : (this.flag = 1);
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
    border: 1px solid #dcdfe6;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%), 0 0 6px 0 rgb(0 0 0 / 4%);
    background-color: rgb(245, 245, 245);
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAtUlEQVRIS2NkoDFgpLH5DKMWEAzhgQuijdO6/2N3HuMnRsb/5/4zMs1l/fVzp1de1RsGBgYcahlwRzJuCyDWMjIy/v/PwLCLkYm5yi+98DwuS3AGESELoL77x8DIuJv1969Yr7yq19h8TKkFEJ8wMsb5ZxQvoYkFkOBiOOCXWepIMwsYGBg/+WeV8NPQAgYG/6xSrMFNcRzAXD1qAcEyZ/AFEUEnE6lg4EpTIh1IUNmoDwgGEQBPr0gZwGKZqQAAAABJRU5ErkJggg==),
        url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAp0lEQVRIS2NkoDFgpLH5DKMWEAzhgQuijdO6/xN0HpIC/6xSrI7F6YNRC2ChNxpE0JBg/OSfVcKPLdVRJYgYGRkO+GWWOtLEAkZGxv//GRnj/DOKl9DCgn8MjIy7WX//ivXKq3pNVQvALmdg2MXIxFzll154noGBAWvOJyMOGD8xMv4/95+RaS7rr587vfKq3uAyHOSjgSvsSCno8Kkd9QHBkKR5EAEARUpIGeF+FqkAAAAASUVORK5CYII=),
        url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAsklEQVRIS2NkoDFgpLH5DKMWEAzhAQ8ixm2T2kR+s7G7M/7/l/z/P6MRA8N/PmzO9s8qxepYfD5g3DSz3/D/v79tjAwMbv///8frW5It2DapTfQ3K9tihv//XRkYGJgIBTbJFmyc0RvD+P//IkIuh1lMsgWbpnfv//+fwYGQy8m2YOO0no+4IpQqkbxxWvd/Yl0PUkdyEI1aAAtenJln6AcRKSkIn9oBL00p9sioDwgGIQB7RkcZpnlsTQAAAABJRU5ErkJggg==),
        url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAsklEQVRIS2NkoDFgpLH5DKMWEAzhgQuijdO6/xN0HpIC/6xSrI7F6YNRC2ChN6yDqOcjA8N/PmJTEsmpaNP07v3//zM40MyCjTN6Yxj//1/0//9/ojIjyT7YNqlN9Dcr22KG//9dGRgYmAj5hGQLGBgYGDfN7Df8/+9vGyMDgxshn5BjAcjRjNsmtYn8ZmN3Z/z/L/n/f0YjXBFPrgWEQoagPFERSNAUPApGLSAYejQPIgDqaEcZIxESmwAAAABJRU5ErkJggg==);
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-size: 8px 8px, 8px 8px, 8px 8px, 8px 8px;
    background-position: right top, right bottom, left top, left bottom;
    border-radius: 5px;
    border: #e0dad3 1px solid;
}
.Data_div {
    padding: 15px;
    border: 1px solid #dcdfe6;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%), 0 0 6px 0 rgb(0 0 0 / 4%);
    background-color: rgb(245, 245, 245);
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAtUlEQVRIS2NkoDFgpLH5DKMWEAzhgQuijdO6/2N3HuMnRsb/5/4zMs1l/fVzp1de1RsGBgYcahlwRzJuCyDWMjIy/v/PwLCLkYm5yi+98DwuS3AGESELoL77x8DIuJv1969Yr7yq19h8TKkFEJ8wMsb5ZxQvoYkFkOBiOOCXWepIMwsYGBg/+WeV8NPQAgYG/6xSrMFNcRzAXD1qAcEyZ/AFEUEnE6lg4EpTIh1IUNmoDwgGEQBPr0gZwGKZqQAAAABJRU5ErkJggg==),
        url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAp0lEQVRIS2NkoDFgpLH5DKMWEAzhgQuijdO6/xN0HpIC/6xSrI7F6YNRC2ChNxpE0JBg/OSfVcKPLdVRJYgYGRkO+GWWOtLEAkZGxv//GRnj/DOKl9DCgn8MjIy7WX//ivXKq3pNVQvALmdg2MXIxFzll154noGBAWvOJyMOGD8xMv4/95+RaS7rr587vfKq3uAyHOSjgSvsSCno8Kkd9QHBkKR5EAEARUpIGeF+FqkAAAAASUVORK5CYII=),
        url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAsklEQVRIS2NkoDFgpLH5DKMWEAzhAQ8ixm2T2kR+s7G7M/7/l/z/P6MRA8N/PmzO9s8qxepYfD5g3DSz3/D/v79tjAwMbv///8frW5It2DapTfQ3K9tihv//XRkYGJgIBTbJFmyc0RvD+P//IkIuh1lMsgWbpnfv//+fwYGQy8m2YOO0no+4IpQqkbxxWvd/Yl0PUkdyEI1aAAtenJln6AcRKSkIn9oBL00p9sioDwgGIQB7RkcZpnlsTQAAAABJRU5ErkJggg==),
        url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAsklEQVRIS2NkoDFgpLH5DKMWEAzhgQuijdO6/xN0HpIC/6xSrI7F6YNRC2ChN6yDqOcjA8N/PmJTEsmpaNP07v3//zM40MyCjTN6Yxj//1/0//9/ojIjyT7YNqlN9Dcr22KG//9dGRgYmAj5hGQLGBgYGDfN7Df8/+9vGyMDgxshn5BjAcjRjNsmtYn8ZmN3Z/z/L/n/f0YjXBFPrgWEQoagPFERSNAUPApGLSAYejQPIgDqaEcZIxESmwAAAABJRU5ErkJggg==);
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-size: 8px 8px, 8px 8px, 8px 8px, 8px 8px;
    background-position: right top, right bottom, left top, left bottom;
    border-radius: 5px;
    border: #e0dad3 1px solid;
}

@media screen and (max-width: 800px) {
    .main {
        width: 100%;
    }
}
</style>
