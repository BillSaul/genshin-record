<template>
    <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
        <el-tab-pane label="角色UP" name="role_tab">
            <div class="img_div">
                <img class="img_nav" src="../assets/cover-img/胡桃.png" alt />
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
.el-tabs--border-card > .el-tabs__header {
    background-color: #e0dad3;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAB5QTFRF4NrTsZaLtJqQvqidz8K63dTN39nSspeMvqqg183Gg9dhfAAAAEJJREFUeJxjYKA7EIQAARBD2TUBXUiwYhqGkGArknaoUAmmkDCmkBCmkCA9hTA8T5wQDJAmxCiIziBSiAFDbjAKAQB4rA0eaHQg/wAAAABJRU5ErkJggg==),
        url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAB5QTFRF4NrTsZaLtJqQvqidspeMz8K6vqqg3dTN183G39nS0MueAwAAAEFJREFUeJxjYEAGjIIM6GCQCcFZpAoxMAjCAMlCAhgOIloIi1n0EBLCFBLGFHJF8jBUKB1DyK0TXUg5fAKGV+kBADZJDNS45HY4AAAAAElFTkSuQmCC),
        url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAB5QTFRF4NrT39nS3dTNz8K6vqidtJqQsZaL183GvqqgspeMh59ksgAAAEJJREFUeJxjYBgIwKjsmpaWxsCWBgEgIfHONHQhjTQMIUuYEMIsN0yhMEyhNLoLQQHpQmkwQLJQAjqDVCEsZg0iIQCZkT79/GMRnAAAAABJRU5ErkJggg==),
        url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAB5QTFRF4NrTsZaLtJqQvqidz8K6speM3dTNvqqg39nS183GdaW8XAAAAD9JREFUeJxjYGBgEBRgQAeDXgghR6QQDCCZRZQQFDCSLAQ1iI5CiphChphCrphC6TAhhOc7SzGEOFKM0IXoCwBxMgzEtk/F3wAAAABJRU5ErkJggg==),
        url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAPAQMAAAAbJOeHAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAAsZaLPIpa3AAAAAJ0Uk5TAP9bkSK1AAAAEElEQVR4nGNgQAIPwBAJAAAnfgKhL5axpQAAAABJRU5ErkJggg==),
        url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAPAQMAAAAbJOeHAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAAsZaLPIpa3AAAAAJ0Uk5TAP9bkSK1AAAAEElEQVR4nGNgQAIPwBAJAAAnfgKhL5axpQAAAABJRU5ErkJggg==),
        url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAADAQMAAAB22sdyAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAAsZaLPIpa3AAAAAJ0Uk5TAP9bkSK1AAAADUlEQVR4nGNgbmAAIwAGNgGKB43KUwAAAABJRU5ErkJggg==),
        url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAADAQMAAAB22sdyAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAAsZaLPIpa3AAAAAJ0Uk5TAP9bkSK1AAAADUlEQVR4nGNgbmAAIwAGNgGKB43KUwAAAABJRU5ErkJggg==),
        url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAABOCAYAAACjWA+nAAAJN0lEQVRoQ+2af3BU1RXHv+e+zQ8CCTaBIPhjarFDfznOtAgOWKaZliohmyVYtk6lthEw2QQZkmxIAEfWOoJkNxCBZDcpVtEyo6FANgELUypWfpRiO5HC1GmHTrEKSEAp+b2/3um8sJu8hA379r0wZDp9/+29597zuefee+495y5Bw+etc7YLFsvMxWVvK+J73M7M5EDStewVK3wamusWIS0th8I11VbPkkz8D3OB/YqW9npldMF561w/kynwhzzb6nN6FWtppxPOWQpBpy2F9t9pUaJXRjccEWXk2uxr9SrW0k43HECPW4rss7Uo0SujG44IL4WSTZPz8kv+o1d5rHa64QB62STEovmFpd5YSvTWG4ID0GApsi/XqzxWO4Nw/FHamAkzs/Lze2Mp0lNvCI7AbRJzzvziVR/qUR6rjSE4gP0AFVuK7DtiKdJTbxQugYg2TxGpFdMLCgJ6AG7WxjAcgKPw+39kWbn20qiAa/E482UZGwFMJKBbgObkFNn/MirgIhCHtm3L6JF8C5mZc4vs228PnNvZDpDNYrPvjAZw2OEwZTkcwdsDV+cMAXSeiE8DopVlOpqW8qX3bpV/iwxS64bgoVYh4CqI9glgpx/c+tdLXVccDoc8ktbTDaeC6AFwUkA0SwnBxuxlFZ+OFKAmuGaP63lmpAvGJCZMYeYHAYwfAuEn4JQkaO38EbqEaoIbagnvqxtTRQ99F5K0QJbleSBMBiCF5VgS5AgkSVuMXqd0wUVgGxsbpbGXzz0QEmIRM/IBViCVz0dEjZwYqrQsqbigd5oNwUWU1tfXJ9wjd88IcLABwDfC5UGAfj9xwr15s6xWZV3G/WmCa2xcJKVc+XaaCI7tvlmsus/t/JYM+nV4TV6HIXglDubnFK2+Gi+dJrg929ZnSCLxBaVzBh8fQzj0qK28LZqy/Z5N04MceguMqeH6XgZtuNrWWZXvcMR179ME5/1lzSQEA7vBmA1CB5jOEkmbc20lb0YD3Nfg/EEwhLeJkR6u/1xKkPJylpUeicd62uECgd0ABkVbyqKHiSvNS+3niKjfUTdu2jQmKUV2QmYbABEGOpXchdmPlpd3aQU0BMeALIgOM4eKLUUVf1crba6rflgG76GBHQwiPGcutK9XD+RmoJrglMSNBNoF5jlROpMJONLb1vVDq8Phj9Qrl4H2zJStABUOtKFzIFposZW1arGeJjilI8Wnje/8ZIrPz2YwljLzAwBMESWCqKon4941Vqs1FCk74NnyoE/2/Vklx0RoINFVai5wdMcC1Ayn7mive8OXBZs2AHhCVX5BkJxntlWcjJQxM7W4q99n8CORMgK+IJKWmm2le28JnNLpge3b033+q4pV7rvuYiATkesukfqcOp5odrt+ysxvqEEIuAwyPZFrK3nX8JobrgOv21UGZpeqvlWQZDbbSs9Hylo8r3xVlgMnAb5jUD9EFxnIv1ukvjtccKRrWiNK9ta5viPAxwAkhcsCEpE5x2Y/GJHZX1t1Z5CoCcDMGwZJ+FQA2wOAe2EUp24Mrr5qqpDFMTBP6t8Ygj3mwlWKf+v7Dr7hHNvbiToAT0WdAYJy1TrDjM0JwaRd6uPREFz4WFtJ1H8SKIvvUm6R/RfqTbGvzpXDgh6LtQGEoDOMcTvMBQV9O9kQXCxlRuv/D6fXgv+7llPOXBNoHTMm9u9W8CfmovIy9YbY73H9OMS0MIbDlZnEUSHG/mpENsQ79VVT/SE6TkBmv2KiVyw2+8rI78O1tePaRY8HzE8OA9crCB8IktanTGs/lJU1kDkwNK3NDa6HOMRHwUgMK/YnkGletupYOlC/ebJPDjaDMX3QEUbEzPinEOTuocCr1oLKa0PhjcHVu9ZwiF+KdEpEJxOFtOCxgpKLkTJvXc00IPABgNRBcKCPIWFx6sXOE8PlWXTD7X+t9s5gT7eS9poSVhoSgjaMm9b5gnpqvG7nMjCUqEw183QeMvJyi+0K9LBf3HDKNWhfQ/U0DnEVA+YBq+HfkswWdX6YHQ7RkjnuBIMfUhG0SURPqc/f4eg0wSlATa/XjJf8ga+ARQ7L/BMA96uifIDE876ME+ut1l39l80W98YZMkvHAe7LBoSvVVvTkjsrs/JjR2Ka4AZFXzcOM0SMg+bLXWZSZZmUQHuy3NHAzD9XTejZBAFLdqH9b1ocs3a4KNEXgCCBfhsiaUWerWTQ86bX45oDmXdB5WZIEiW5BWU1WsAUGe1wkbh1UM/kGZOU9OLcJc9epL5Zu/4p1yRfF9Uw89OR0JCI/tjbI75vLS3VnJrQDnfdcrMAKA9xZ1jmlxcsX/VOFCtQi8eZI8tQUrQR9/EZmSg395mb705dfu7A9k3pPr9cSWCZGMeSTaH350ZxmkrnXk/NHHBgJxh3h5V1kxDretM7tlitA6GjlqnVZDnFJexMx7i7vkD3zRLTLe5NM2SEdoDxNZWLeZMT04stS5Z0aAEa7KjjbRFF/vBrjuQef9qcYCjk4YFoLCCBmi5IqU8W6Hzd0WS54fj73EWwYyYELQLkxUpqNiyrLPrXfcHAOuuKNZf1jl8X3O76zZMTWZ7LsmxhotlgVq5M4YQNBUBcikR5h2VJRdxTGfe0trirtzLkdIAmKalVVk6HgZtIpL8eAv6UwLRqXowzU6slNVnOW+e84R1CpeAaER0hULMU8DVlG5hGXa4kGhyB/gVCk5DpN6AxH+UUFcWdVo1lQU2Wa+p7XsJZAk4Q0MpCOpr2WfuHt+K9K+41p/yXCYRnLLbyt6KNVslkxnMsxbJYv4/UIjj0j1ZKm0aHIzH1njvuC/iCjwNou31PmkP+otZUV1VMoOq+BA5Rp6DgI+bCylNaBhqPjKY1N9Ry3jpnqfKnF4ATiPCeKSnJmv30Ct3OdjhgQ3BEMIG5OvXrXavVcUM81rmZrCE4BitvXIXDvWAbhTQEB+JLHJSyFzxbetooSLT2xuCAM/dPuPfhb1qt/Sn+kYQ0BEeCa3MLy0tGEkiXE1b/2zWyW4WgBebCsmhX9RHh1W85wotpGSmTsqzFnSNCEqUTI3C5Flv5924VmNKvbjhBSDPbyh2jEg4st1qKKw6PPjiPc7EpSEfmL7d/POrg9tc7Z/oCgbMLl6/5fNTB7dm2LSOYmdlhvUXONzLg/wLr43uLW/fSoAAAAABJRU5ErkJggg==),
        url(data:image/png;base64,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);
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, repeat-x,
        repeat-x, repeat-y, repeat-y, no-repeat, no-repeat;
    background-size: 12px 12px, 12px 12px, 12px 12px, 12px 12px, 1px 5px,
        1px 5px, 5px 1px, 5px 1px, 12px 26px, 12px 26px;
    background-position: right top, right bottom, left top, left bottom, top,
        bottom, left, right, left center, right center;
}
.el-tabs {
    border-radius: 5px;
    background-color: rgb(245, 245, 245);
    border: #e0dad3 1px solid;
}
.is-top {
    border-radius: 5px;
}
.el-tabs__content {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAtUlEQVRIS2NkoDFgpLH5DKMWEAzhgQuijdO6/2N3HuMnRsb/5/4zMs1l/fVzp1de1RsGBgYcahlwRzJuCyDWMjIy/v/PwLCLkYm5yi+98DwuS3AGESELoL77x8DIuJv1969Yr7yq19h8TKkFEJ8wMsb5ZxQvoYkFkOBiOOCXWepIMwsYGBg/+WeV8NPQAgYG/6xSrMFNcRzAXD1qAcEyZ/AFEUEnE6lg4EpTIh1IUNmoDwgGEQBPr0gZwGKZqQAAAABJRU5ErkJggg==),
        url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAp0lEQVRIS2NkoDFgpLH5DKMWEAzhgQuijdO6/xN0HpIC/6xSrI7F6YNRC2ChNxpE0JBg/OSfVcKPLdVRJYgYGRkO+GWWOtLEAkZGxv//GRnj/DOKl9DCgn8MjIy7WX//ivXKq3pNVQvALmdg2MXIxFzll154noGBAWvOJyMOGD8xMv4/95+RaS7rr587vfKq3uAyHOSjgSvsSCno8Kkd9QHBkKR5EAEARUpIGeF+FqkAAAAASUVORK5CYII=),
        url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAsklEQVRIS2NkoDFgpLH5DKMWEAzhAQ8ixm2T2kR+s7G7M/7/l/z/P6MRA8N/PmzO9s8qxepYfD5g3DSz3/D/v79tjAwMbv///8frW5It2DapTfQ3K9tihv//XRkYGJgIBTbJFmyc0RvD+P//IkIuh1lMsgWbpnfv//+fwYGQy8m2YOO0no+4IpQqkbxxWvd/Yl0PUkdyEI1aAAtenJln6AcRKSkIn9oBL00p9sioDwgGIQB7RkcZpnlsTQAAAABJRU5ErkJggg==),
        url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAsklEQVRIS2NkoDFgpLH5DKMWEAzhgQuijdO6/xN0HpIC/6xSrI7F6YNRC2ChN6yDqOcjA8N/PmJTEsmpaNP07v3//zM40MyCjTN6Yxj//1/0//9/ojIjyT7YNqlN9Dcr22KG//9dGRgYmAj5hGQLGBgYGDfN7Df8/+9vGyMDgxshn5BjAcjRjNsmtYn8ZmN3Z/z/L/n/f0YjXBFPrgWEQoagPFERSNAUPApGLSAYejQPIgDqaEcZIxESmwAAAABJRU5ErkJggg==);
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-size: 8px 8px, 8px 8px, 8px 8px, 8px 8px;
    background-position: right top, right bottom, left top, left bottom;
}
.el-tabs__nav {
    bottom: 4px;
    background-color: #e0dad3;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAAPCAYAAABKrvnUAAACjklEQVRYR82YX2vTUBjGnzeNbWmLCoXNK/0U3vgBnExxqFD/XEw2qTAmxdV2Xoisg3mzrNUVpKtDBwrT9a4W/974BfY1BKco1q3r1iXnlRNbSbPUDWab5Cp5z8l5n/PLefKehADguaaFj0SQlufVDWjD6XStLc6Yktf/+RAgWoGqTgzFb6+VFx/0K4b/mRA4A0Cx5RKKgvfC1xgdit9bKy8+6oeuPwTzZYe+B5dJmHbkYOFDJrQQ0kRIyYzMmKtuQpPnrTgD4YOrcRzBAFFJFSJ5dnzyiwlPD2TFHyBq8w5dIVoR6vYdCe3N49ljuqLkwBwD4OuGLgJqThysfKhc0DLESLXgmDcR5mQna7wbAptjCgI++phHJLwPBa2vAcoJ5quyXSF66QcnB8bSXyU0g2iJgdNdWWmWSXbi0Ip7AZyU62hbs6FX9rStjD3BuWxVq9xdtpWNvbKnVci+rOpicXByf5ttZYde2vOvoP0Uhy6+u/459OtC9hyzeAqgz15BW9XWjHeongzs+IjeRaPHr5yKxeq9ngf1OmEr32qxeOizsX4N4CyAqE2HaVsz5lQ9CQ0CLasB/+TgaOKbG3NwDZycbKmU8Qd/RC4x4wWY7VsL0QRi39OBoCzr4UDi4vVb392AZu443EpszVtZyA4LIeYBHN1DzzYIr85HT9ygWMxwU7snwL3N5wO6unUTUGYYfLgDkC0i5YkRVKYujEz8dBOaZ1acFPJpKRNcr0fiIMwz864HSoS8uhO4P5hI/HIbmqfAtWBUFrJJIXga4EgztgmiwtBYyvwk9MrhCau2ve+KmZAwIkkAdwlMRMjVRW02Np7Z8Ao0T644KapSLIaYaiflV76vaqwONP/WeAncb01rX0v82CIbAAAAAElFTkSuQmCC)
        no-repeat;
    background-size: 26px auto;
    background-color: #e0dad3;
    background-position: center bottom 4px;
}
.el-tabs__item {
    transition: none !important;
    border: 0 !important;
}
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

@media screen and (max-width: 800px) {
    .el-tabs--border-card > .el-tabs__header .el-tabs__item {
        margin-top: 1px;
    }
}
</style>