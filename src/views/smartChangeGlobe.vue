<template>
    <div style="height: 100%;width: 80%;margin: 0 auto">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="话费充值" name="first"><huafei/></el-tab-pane>
            <el-tab-pane label="流量充值" name="second"><liuliang/></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import huafei from "./huafei";
    import liuliang from "./liuliang";
    export default {
        components:{
            huafei,
            liuliang
        },
        name: "smartChangeGlobe",
        data(){
            return{
                activeName:'first',
            }
        },
        methods:{
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style scoped>

</style>