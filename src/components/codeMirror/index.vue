<template>
    <div>
        <textarea ref="mycode" class="codesql"></textarea>
        <Button @click='format()'>格式化</Button>
    </div>
</template>

<script>
import "codemirror/theme/ambiance.css";
import "codemirror/lib/codemirror.css";
import "codemirror/addon/hint/show-hint.css";
let CodeMirror = require("codemirror/lib/codemirror");
require("codemirror/addon/edit/matchbrackets");
require("codemirror/addon/selection/active-line");
require("codemirror/mode/sql/sql");
require("codemirror/addon/hint/show-hint");
require("codemirror/addon/hint/sql-hint");

import sqlFormatter from "sql-formatter";

    export default {
        name: "codeMirror",
        data () {
            return {
                editor:'',
                cmOptions: {
                    mode: 'text/x-sql',
                    indentWithTabs:true,
                    lineNumbers: true,
                    styleActiveLine: true,
                    smartIndent:true,
                    lineWrapping:true,
                    matchBrackets: true,
                    autofocus: true,  
                    extraKeys: {"Ctrl-Space": "autocomplete"},  
                    hintOptions: {  
                        tables: {  
                            users: ["name", "score", "birthDate"],
                            countries: ["name", "population", "size"]
                        }  
                    } 
                }
            }
        },
        mounted () {
            this.init();  
        },
        methods:{
            init(){
                this.editor = CodeMirror.fromTextArea(this.$refs.mycode, this.cmOptions); 
                this.editor.on("keyup", function (cm, event) {  
                    //所有的字母和'$','{','.'在键按下之后都将触发自动完成   event.keyCode == 52 || event.keyCode == 219 || 
                    if (!cm.state.completionActive &&  
                            ((event.keyCode >= 65 && event.keyCode <= 90 ) || event.keyCode == 190)) {  
                        CodeMirror.commands.autocomplete(cm, null, {completeSingle: false});  
                    }  
                }); 
            },
            format(){
                let sqlContent="";
                sqlContent=this.editor.getValue();
                /*将sql内容进行格式后放入编辑器中*/
                this.editor.setValue(sqlFormatter.format(sqlContent));
            }
        }
    }
</script>

<style>
.CodeMirror{
    width: 300px;
    height: 500px;
    border: 1px solid #f00;
    text-align: left;
    overflow: hidden;
}   
</style>
