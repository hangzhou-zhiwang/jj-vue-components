<template>
    <div>
        <div>
            <code-box :link="$_c+'/Modal/ModalDefault'">
                <button @click="showModalDefault">modal-default</button>
                <modal-default ref="modalDefault"
                    title="默认模态窗">
                    这是slot内容
                </modal-default>
            </code-box>
        </div>
        <div>
            <code-box :link="$_c+'/Modal/ModalConfirm'">
                <button @click="showModalConfirm">modal-confirm</button>
                <modal-default ref="modalDefault"
                    title="默认模态窗">
                    这是slot内容
                </modal-default>
            </code-box>
        </div>
    </div>
</template>
<script>
import ModalDefault from '_c/Modal/ModalDefault'
import ModalConfirm from '_c/Modal/ModalConfirm'
export default {
    components: {
        ModalDefault,
        ModalConfirm
    },
    methods: {
        showModalDefault() {
            this.$refs.modalDefault.show()
        },
        showModalConfirm() {
            this.$refs.modalDefault.show({})
        },
    }
}
</script>
