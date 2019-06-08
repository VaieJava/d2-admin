<template>
    <d2-container>
        <demo-page-header
                slot="header"
                @submit="handleSubmit"
                ref="header"/>
        <demo-page-main
                :table-data="table"
                :loading="loading"/>
        <demo-page-footer
                slot="footer"
                :current="page.current"
                :size="page.size"
                :total="page.total"
                @change="handlePaginationChange"/>
    </d2-container>
</template>

<script>
    import { MenuList} from '@api/sys.menu.js'

    export default {
        // name 值和本页的 $route.name 一致才可以缓存页面
        name: 'demo-business-table-1',
        components: {
            'DemoPageHeader': () => import('./componnets/PageHeader'),
            'DemoPageMain': () => import('./componnets/PageMain'),
            'DemoPageFooter': () => import('./componnets/PageFooter')
        },
        data() {
            return {
                table: [],
                loading: false,
                page: {
                    current: 1,
                    size: 10,
                    total: 0,
                    sort: "menuId"
                }
            }
        },
        created () {
            this.handleSubmit()
        },
        methods: {

            handlePaginationChange(val) {
                this.page = val
                this.handleSubmit()
                // nextTick 只是为了优化示例中 notify 的显示
                // this.$nextTick(() => {
                //     this.$refs.header.handleFormSubmit()
                // })
            },
            handleSubmit(form) {
                this.loading = true
                MenuList({
                    ...form,
                    ...this.page
                })
                    .then(res => {
                        this.loading = false
                        this.table = res.content
                        this.page.total = res.totalElements
                    })
                    .catch(err => {
                        this.loading = false
                    })
            }
        }
    }
</script>

<style>

</style>