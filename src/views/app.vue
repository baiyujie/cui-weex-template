<template>
    <div class="center">
        <cui-image src="/image/logo.png" width="244px" height="172px"></cui-image>
        <text class="h2">CUI-Weex</text>
        <text class="h4">专注为Weex前端开发者提供高质量UI组件</text>
    </div>
</template>

<!--引入bui-weex样式文件-->
<style lang="sass" src="cui-weex/src/css/buiweex.scss"></style>

<script>
    var globalEvent = weex.requireModule('globalEvent');
    module.exports = {
        data () {
            return {}
        },
        mounted()
        {
            globalEvent.addEventListener("androidback", e => {
                this.$pop();
            });
        }
    }
</script>