<template>
    <!-- 在线代码编辑器（了解更多请看下面几个网址）    
    http://luchenqun.com/vue-monaco-editor/   
    https://github.com/egoist/vue-monaco 
    https://github.com/Microsoft/monaco-editor  -->
    <monaco-editor
        class="editor"
        v-model="code"
        :options='options'
        :language="lan">
    </monaco-editor>
</template>

<script>
import MonacoEditor from 'vue-monaco'
export default {
    components: {
        MonacoEditor
    },
    data() {
        return {
            code:"const noop = () => {}",
            lan:"javascript",
            options:{
                automaticLayout: true
            }
        }  
    }
}
</script>

<style>
.editor {
    width: 500px;
    height: 500px;
    border:1px solid #eee;
    text-align: left;
}
</style>