<template>
    <div>
        <input type="button" class="jj-button" value="按钮">
    </div>
</template>
<style lang="scss" scoped>
.jj-button {
    display: inline-block;
    padding: .5em 1em;
    color: #444;
    border: 0;
    border-radius: .2em;
    background-color: #f0f3f9;
    box-shadow: 1px 1px #a0b3d6, 2px 2px #a0b3d6, 3px 3px #a0b3d6, 4px 4px #a0b3d6;
    text-decoration: none;
    text-shadow: 1px 1px #f0f3f9;
    font-weight: 700;
    font-size: 12px;
    cursor: pointer;
    -webkit-transition: all .1s;
    transition: all .1s;
}
.jj-button:focus {
    outline: 0 none;
    background-color: #E3E8F2;
}
.jj-button:hover {
    background-color: #E3E8F2;
    color: #333;
}
.jj-button:active {
    -webkit-transform: translate(2px, 2px);
    -ms-transform: translate(2px, 2px);
    transform: translate(2px, 2px);
    box-shadow: 1px 1px #a0b3d6, 2px 2px #a0b3d6;
}
</style>

