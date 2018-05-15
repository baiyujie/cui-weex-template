<template>
    <div class="flex-column">
        <cui-header title="填写表单" :leftItem="leftItem" @leftClick="back"></cui-header>
        <div class="form-box">
            <scroller class="form-body">
                <div class="form-title"><text class="form-header-text">行驶证信息</text></div>
                <cui-cell title="品牌种类"
                          @cellClick="open1()">
                    <div slot="action" class="form-content">
                        <text class="text-grayer">{{car}}</text>
                        <cui-icon color="#cdcdcd"  name="ion-ios-arrow-right"></cui-icon>
                    </div>
                </cui-cell>
                <cui-cell>
                    <div slot="title" class="form-content">
                        <text class="text-normal">车牌号码</text>
                        <text class="text-gray ml30">广州</text>
                        <cui-icon color="#cdcdcd"  name="ion-ios-arrow-right"></cui-icon>
                        <text class="text-gray">粤A****9</text>
                    </div>
                </cui-cell>
                <cui-cell title="区域查询">
                    <div slot="action" class="form-content">
                        <text class="text-grayer">广州</text>
                        <cui-icon color="#cdcdcd"  name="ion-ios-arrow-right"></cui-icon>
                    </div>
                </cui-cell>
                <cui-cell>
                    <div slot="title" class="form-content">
                        <text class="text-normal">车身架号</text>
                        <input class="form-input-text ml30" type="number" placeholder="532434" />
                    </div>
                    <div slot="action" class="form-content">
                        <cui-icon color="#1daafc"  name="ion-ios-information-outline"></cui-icon>
                    </div>
                </cui-cell>
                <div class="form-title"><text class="form-header-text">订阅提醒</text></div>
                <cui-cell>
                    <div slot="title"><cui-switch title="违章提醒"></cui-switch></div>
                </cui-cell>
                <cui-cell>
                    <div slot="title"><cui-switch title="交通限行提醒"></cui-switch></div>
                </cui-cell>
            </scroller>
            <div class="form-footer">
                <cui-button value="取消" class="form-btn"></cui-button>
                <cui-button value="确定" type="primary" class="form-btn form-btn-blue" @click="jumpTo(next)"></cui-button>
            </div>
        </div>

        <cui-popup v-model="showPopup1" height="400">
            <scroller style="padding: 20px;">
                <div class="flex-row">
                    <div class="span9"><text class="form-header-text">请选择下列选项</text></div>
                </div>
                <cui-radio-list v-model="selectedValue" @change="changeValue" :items="items"></cui-radio-list>
            </scroller>
        </cui-popup>
    </div>
</template>

<!--引入cui-weex样式文件-->
<style lang="sass" src="cui-weex/src/css/cuiweex.scss"></style>
<style lang="sass" src="css/common.scss"></style>

<script>
    var globalEvent = weex.requireModule('globalEvent');
    module.exports = {
        data () {
            return {
                leftItem: {
                    icon: 'ion-chevron-left'
                },
                showPopup1: false,
                car: '小型汽车',
                items:[
                    {value:"0",title:'小型汽车'},
                    {value:"1",title:'六座商务'},
                    {value:"2",title:'面包车'},
                    {value:"3",title:'小轿车'}
                ],
                next: 'formstyle2.weex.js'
            }
        },
        mounted()
        {
            globalEvent.addEventListener("androidback", e => {
                this.$pop();
            });
        },
        methods:{
            back () {
                this.$pop();
            },
            open1(){
                this.showPopup1 = true;
            },
            changeValue(e){
                this.car = this.items[e-0].title;
                this.showPopup1 = false;
            },
            jumpTo (file) {
                this.$toast('提交');
//                if (file) {
//                    var url = this.$getContextPath() + "/" + file;
//                    this.$push(url);
//                }
            },
        }
    }
</script>