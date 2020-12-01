<template>
    <div style="height: 100%;width: 100%">
        222
        <mavon-editor :toolbarsFlag="false" defaultOpen="preview" :shortCut="false" :subfield=false v-model="value" @change="change"/>
        <div style="height: 100px;width: 100px" @click="selectDown()">111</div>

    </div>
</template>

<script>
    export default {
        name: "markDown",
        data(){
            return{
                value: ' # <span style="color:red;">sadasdsa</span>\n' +
                    '```json\n' +
                    '{\n' +
                    '\t"code": 200,\n' +
                    '\t"data": {\n' +
                    '\t\t"appId": "cli_xxxxxxxx",\n' +
                    '\t\t"expireTimestamp": 1587626768,\n' +
                    '\t\t"loginIP": "121.207.135.21",\n' +
                    '\t\t"timestamp": 1587619568,\n' +
                    '\t\t"token": "23b02b4d8702916fabfe72edbd8bc5e8",\n' +
                    '\t\t"userId": 10\n' +
                    '\t},\n' +
                    '\t"msg": "Succeed"\n' +
                    '}\n' +
                    '```\n' +
                    '![啊实打实的](https://cn.vuejs.org/images/logo.png)\n' +
                    '\n' +
                    'biao1|biao2|\n' +
                    '--|:--:\n' +
                    'asda|sadassadasdasd',
                markdownText:'',
            }
        },
        methods:{
            selectDown(){
                console.log(this.value);
            },
            change(value,render){
                this.markdownText = render;
                console.log(this.markdownText);
            }
        }
    }
</script>

<style scoped>

</style>