<template>
    <div>
        <el-table
                :data="tableData"
                stripe
                id="export-table1"
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="猜猜看"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="绿"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="红">
            </el-table-column>
        </el-table>
        <el-button @click="exportExcel">导出</el-button>
    </div>
</template>

<script>
    import FileSaver from 'file-saver'
    import XLSX from 'xlsx'
    export default {
        name: "daochuExcle",
        data(){
            return{
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods:{
            // 生成len位随机码
            randomString (len) {
                len = len || 32
                // 屏蔽了容易让人混淆的字符，比如数字1和字母l,，数字0和字母o……
                var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
                var maxPos = chars.length
                var str = ''
                for (let i = 0; i < len; i++) {
                    str += chars.charAt(Math.floor(Math.random() * maxPos))
                }
                return str
            },
            exportExcel () {
                // 导出的内容只做解析，不进行格式转换
                let xlsxParam = { raw: true }
                let wb = null
                let tableName = ''
                let randomString = this.randomString(6)
                wb = XLSX.utils.table_to_book(
                    document.querySelector('#export-table1'),
                    xlsxParam
                )
                // 这里的randomString非必须，只是生成一串随机码
                // 便于下载多个文件而不重名
                tableName = `用户表-${randomString}.xlsx`
                    /* get binary string as output */
                let wbout = XLSX.write(wb, {
                    bookType: 'xlsx',
                    bookSST: true,
                    type: 'array'
                })
                try {
                    // eslint-disable-next-line no-undef
                    FileSaver.saveAs(new Blob([wbout], {
                        type: 'application/octet-stream'
                    }), tableName)
                } catch (e) {
                    if (typeof console !== 'undefined') {
                        console.log(e, wbout)
                    }
                }
                this.$message.success('导出成功')
                return wbout
            }
        }
    }
</script>

<style scoped>

</style>
