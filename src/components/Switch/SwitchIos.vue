<template>
    <div>
        <label>
            <input type="checkbox"
                :checked="checked"
                class="chk-ios">
            <span></span>
        </label>
    </div>
</template>

<script>
// 三宝
export default {
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: Boolean, //接收外部传来的值
    },
    methods: {
        onChange() {
            this.$emit('change', event.target.checked)
        },
    }
}
</script>

<style lang="scss">
label{
    cursor: pointer;
}
.chk-ios {
    display: none;
}
.chk-ios + span {
    background-color: #fafbfa;
    padding: 9px;
    border-radius: 50px;
    display: inline-block;
    position: relative;
    margin-right: 30px;
    -webkit-transition: all 0.1s ease-in;
    transition: all 0.1s ease-in;
    width: 40px;
    height: 15px;
}
.chk-ios + span:before {
    content: " ";
    position: absolute;
    background: white;
    top: 1px;
    left: 1px;
    z-index: 999999;
    width: 31px;
    -webkit-transition: all 0.1s ease-in;
    transition: all 0.1s ease-in;
    height: 31px;
    border-radius: 100px;
    box-shadow: 0 3px 1px rgba(0, 0, 0, 0.05), 0 0px 1px rgba(0, 0, 0, 0.3);
}
.chk-ios + span:after {
    content: " ";
    position: absolute;
    top: 0;
    -webkit-transition: box-shadow 0.1s ease-in;
    transition: box-shadow 0.1s ease-in;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100px;
    box-shadow: inset 0 0 0 0 #eee, 0 0 1px rgba(0, 0, 0, 0.4);
}
.chk-ios:checked + span:after {
    content: " ";
    font-size: 1.5em;
    position: absolute;
    background: #4cda60;
    box-shadow: 0 0 1px #4cda60;
}
.chk-ios:checked + span:before {
    content: " ";
    position: absolute;
    left: 26px;
    border-radius: 100px;
}
</style>

