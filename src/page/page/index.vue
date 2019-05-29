<template>
    <div>
        <page  :total="total"
                :current-page='page'
                @pagechange="pagechange"></page>
    </div>
</template>

<script>
import page from "_c/page"
export default {
    components:{
        page
    },
    data() {
        return {
            total: 1000,
            page: 1,
        }
    },
    methods: {
        pagechange(page) {
            this.page = page
        },
    }
}
</script>
