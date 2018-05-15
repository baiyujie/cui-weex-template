<template>
    <div class="flex-column">
        <cui-header title="表单" :leftItem="leftItem" @leftClick="back"></cui-header>
        <cui-cell :cellStyle="small" v-if="show">
            <div slot="title" class="flex-row column-center-top">
                <cui-icon color="#ffffff" name="ion-ios-information"></cui-icon>
                <text class="form-text-white ml30">请认真填写档案编号, 以免输入错误</text>
            </div>
        </cui-cell>
        <cui-tabbar :tabItems="tabItems"
                    showSelectedLine=true
                    titleSize="30px"
                    :containerStyle="containerStyle"
                    :background="background"
                    :selectedBackground="selectedBackground"
                    @change="onItemChange"
                    v-model="currentTab"></cui-tabbar>
        <slider class="flex-row span1" @change="onSliderChange" :index="currentTab">

            <div class="form-box">
                <scroller class="form-body width750">
                    <cui-cell class="mt25">
                        <div slot="title" class="form-content">
                            <text class="text-normal">姓名</text>
                            <input class="form-input-text ml30" type="text" maxlength="16" placeholder="请输入姓名" />
                        </div>
                    </cui-cell>
                    <cui-cell>
                        <div slot="title" class="form-content">
                            <text class="text-normal">联系电话</text>
                            <input class="form-input-text ml30" type="number" maxlength="16" placeholder="请输入联系电话" />
                        </div>
                    </cui-cell>
                    <cui-cell class="mt25">
                        <div slot="title" class="form-content">
                            <text class="text-normal">驾驶人档案编号</text>
                            <input class="form-input-text ml30" type="number" maxlength="16" placeholder="请输入" />
                        </div>
                        <div slot="action" class="form-content">
                            <cui-icon color="#1daafc"  name="ion-ios-information-outline"></cui-icon>
                        </div>
                    </cui-cell>
                </scroller>
                <div class="form-footer width750">
                    <cui-button value="下一步" type="primary" class="form-btn form-btn-blue"></cui-button>
                </div>
            </div>

            <div class="form-box">
                <scroller class="form-body width750">
                    <div class="form-title mt25"><text class="form-header-text">优惠劵兑换信息</text></div>
                    <cui-cell>
                        <div slot="title" class="form-content">
                            <text class="text-grayer">优惠劵名称</text>
                        </div>
                        <div slot="action" class="form-content">
                            <text class="text-normal">肥羊100元代金劵</text>
                        </div>
                    </cui-cell>
                    <cui-cell>
                        <div slot="title" class="form-content">
                            <text class="text-grayer">金额</text>
                        </div>
                        <div slot="action" class="form-content">
                            <text class="text-red">$100</text>
                        </div>
                    </cui-cell>
                    <cui-cell>
                        <div slot="title" class="form-content">
                            <text class="text-grayer">兑换数量</text>
                        </div>
                        <div slot="action" class="form-content">
                            <cui-number-input v-model="value" step=1 min="0" max=15 @change="numberChange"></cui-number-input>
                        </div>
                    </cui-cell>
                    <div class="form-title"><text class="form-header-text">支付信息</text></div>
                    <cui-cell>
                        <div slot="title" class="form-content">
                            <text class="text-grayer">本次扣除碳币</text>
                        </div>
                        <div slot="action" class="form-content">
                            <text class="text-normal">450</text>
                        </div>
                    </cui-cell>
                    <cui-cell>
                        <div slot="title" class="form-content">
                            <text class="text-grayer">本次扣除金额</text>
                        </div>
                        <div slot="action" class="form-content">
                            <text class="text-normal">$100</text>
                        </div>
                    </cui-cell>
                    <div class="form-title"><text class="form-header-text">支付方式</text></div>
                    <cui-cell :cellStyle="larger">
                        <div slot="title" class="form-content">
                            <cui-icon color="#1daafc" size="100px" name="ion-social-yen"></cui-icon>
                            <div class="ml30 flex-column column-center-left span1">
                                <text class="text-normal">微信支付</text>
                                <text class="text-gray-small mt10">微信安全支付</text>
                            </div>
                        </div>
                        <div slot="action" class="form-content">
                            <cui-icon color="#00cc66" name="ion-ios-checkmark-empty"></cui-icon>
                        </div>
                    </cui-cell>
                    <cui-cell :cellStyle="larger">
                        <div slot="title" class="form-content">
                            <cui-icon color="#1daafc" size="100px" name="ion-social-yen"></cui-icon>
                            <div class="ml30 flex-column column-center-left span1">
                                <text class="text-normal">支付宝支付</text>
                                <text class="text-gray-small mt10">支付宝安全支付</text>
                            </div>
                        </div>
                        <div slot="action" class="form-content">
                            <cui-icon color="#00cc66" name="ion-ios-checkmark-empty"></cui-icon>
                        </div>
                    </cui-cell>
                </scroller>
                <div class="form-footer width750">
                    <cui-button value="下一步" type="primary" class="form-btn form-btn-blue"></cui-button>
                </div>
            </div>

            <div class="form-box">
                <scroller class="form-body width750">
                    <cui-cell class="mt25">
                        <div slot="title" class="form-content">
                            <text class="text-normal">姓名</text>
                            <input class="form-input-text ml30" type="text" maxlength="16" placeholder="请输入姓名" />
                        </div>
                    </cui-cell>
                    <cui-cell>
                        <div slot="title" class="form-content">
                            <text class="text-normal">联系电话</text>
                            <input class="form-input-text ml30" type="number" maxlength="16" placeholder="请输入联系电话" />
                        </div>
                    </cui-cell>
                    <cui-cell class="mt25">
                        <div slot="title" class="form-content">
                            <text class="text-normal">驾驶人档案编号</text>
                            <input class="form-input-text ml30" type="number" maxlength="16" placeholder="请输入" />
                        </div>
                        <div slot="action" class="form-content">
                            <cui-icon color="#1daafc"  name="ion-ios-information-outline"></cui-icon>
                        </div>
                    </cui-cell>
                    <cui-cell class="mt25">
                        <div slot="title"><cui-switch title="记住我"></cui-switch></div>
                    </cui-cell>
                    <div class="form-title"><text class="form-header-text">验证手机</text></div>
                    <cui-cell>
                        <div slot="title" class="form-content">
                            <text class="text-normal">手机号码</text>
                            <input class="form-input-text ml30" type="number" maxlength="16" placeholder="请输入手机号码" />
                        </div>
                    </cui-cell>
                    <cui-cell>
                        <div slot="title" class="form-content">
                            <text class="text-normal">验证码</text>
                            <input class="form-input-text ml30" type="number" maxlength="16" placeholder="请输入验证码" />
                        </div>
                        <div slot="action" class="form-content">
                            <cui-button class="form-btn-little"
                                        value="发"
                                        :textStyle="textStyle"></cui-button>
                        </div>
                    </cui-cell>
                    <div class="pd25"><text class="form-header-text">查询结果是您车辆的当前信息。如信息不符, 可到车管所等相关部门更改。</text></div>
                </scroller>
                <div class="form-footer width750">
                    <cui-button value="下一步" type="primary" @click="show = true" class="form-btn form-btn-blue"></cui-button>
                </div>
            </div>
        </slider>



    </div>
</template>

<!--引入cui-weex样式文件-->
<style lang="sass" src="cui-weex/src/css/cuiweex.scss"></style>
<style lang="sass" src="css/common.scss"></style>

<script>
    const picker = weex.requireModule('picker');
    module.exports = {
        data () {
            return {
                leftItem: {
                    icon: 'ion-chevron-left'
                },
                currentTab:0,
                tabItems: [
                    {
                        'title': '选项一'
                    },
                    {
                        'title': '选项二'
                    },
                    {
                        'title': '选项三'
                    },
                ],
                containerStyle: {
                        'background-color': '#ffffff'
                },
                background: '#ffffff',
                selectedBackground: '#ffffff',
                textStyle: {
                    'color': '#1daafc',
                    'font-size': '30px'
                },
                small:{
                    'height': '80px',
                    'background-color': '#ff4e24'
                },
                show: false,
                larger:{
                    height: '150px'
                },
            }
        },
        methods:{
            back () {
                this.$pop();
            },
            onItemChange(index){

            },
            onSliderChange(e){
                var index = e.index;
                this.currentTab=index;
            },
            numberChange(value){
                this.$toast(value);
            }
        }
    }
</script>