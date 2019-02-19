<template>
    <div>
        <div ref="editor"
            style="text-align:left"></div>
        <button v-on:click="getContent">查看内容</button>

        <div ref="textarea"
            v-html="editorContent"></div>
    </div>
</template>

<script>
// 官方文档(https://www.kancloud.cn/wangfupeng/wangeditor3/332599)
import E from 'wangeditor'

export default {
    name: 'editor',
    data() {
        return {
            editorContent: ''
        }
    },
    methods: {
        getContent: function () {
            alert(this.editorContent)
        }
    },
    mounted() {
        var editor = new E(this.$refs.editor)
        // 下面两个配置，使用其中一个即可显示“上传图片”的tab。但是两者不要同时使用！！！
        // editor.customConfig.uploadImgShowBase64 = true   // 使用 base64 保存图片
        editor.customConfig.uploadImgServer = '/api/upload'  // 上传图片到服务器
        // 将图片大小限制为 3M
        editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024
        // 限制一次最多上传 5 张图片
        editor.customConfig.uploadImgMaxLength = 5
        // 将 timeout 时间改为 3s
        editor.customConfig.uploadImgTimeout = 3000
        // 跨域上传中如果需要传递 cookie 需设置 withCredentials
        editor.customConfig.withCredentials = true

        editor.customConfig.onchange = (html) => {
            this.editorContent = html
        }
        editor.create()
        // 其中/upload是上传图片的服务器端接口，接口返回的数据格式如下
        // {
        //     // errno 即错误代码，0 表示没有错误。
        //     //       如果有错误，errno != 0，可通过下文中的监听函数 fail 拿到该错误码进行自定义处理
        //     "errno": 0,

        //         // data 是一个数组，返回若干图片的线上地址
        //         "data": [
        //             "图片1地址",
        //             "图片2地址",
        //             "……"
        //         ]
        // }
    }
}
</script>

<style scoped>
</style>
