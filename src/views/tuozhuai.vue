<template>
    <div class="el-card">
        <draggable v-model="list" @change="datadragEnd">
            <div v-for="element in list" :key="element.id">{{element.name}}</div>
        </draggable>

        <div>
            sysAppId：<span>{{sysAppIds}}</span>
            <el-button class="ml10" type="text" size="medium"
                       v-clipboard:copy="sysAppIds"
                       v-clipboard:success="onCopy"
                       v-clipboard:error="onError">点击复制</el-button>
        </div>

        <del @click="clickItem">3333333333333333</del>
        <div id="Arrow"></div>
        <div @click="change">
            <img src="../assets/right.png" style="width: 50px;height: 50px" :class="status?'active1':'active2'" alt="">
        </div>
        <el-button @click="$store.commit('add')">vuex中加</el-button>
        <el-button @click="$store.commit('reduce')">vuex中减</el-button>
        {{$store.state.count}}
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    export default {
        components: { draggable },
        name: "tuozhuai",
        data(){
            return{
                status:false,
                sysAppIds:'111111111111111',
                list:[
                    {
                        id:1,
                        name:'11'
                    },
                    {
                        id:2,
                        name:'22'
                    },
                    {
                        id:3,
                        name:'33'
                    },
                    {
                        id:4,
                        name:'44'
                    },
                    {
                        id:5,
                        name:'55'
                    }
                ]
            }
        },
       methods:{
           change(){
               this.status = !this.status;
               this.main(this.h);
               this.main(this.o)
               this.clickItem("a",function () {
                   alert("匿名函数实现回调!");
               });
           },
           main(callBack){
               callBack();
           },
           h(){
            console.log('hhh');
           },
           o(){
             console.log('o');
           },
           clickItem(msg,callback){
               alert(msg);
               if(typeof callback == "function"){
                   callback();
               }
           },
           datadragEnd (evt) {
               console.log(this.list);
           },
           onCopy(){
             console.log("复制成功");
           },
           onError(){
               console.log("复制失败");
           }
       }
    }
</script>

<style scoped>
    .el-card{
        padding: 20px;
    }

    #Arrow {
        margin: 200px;
        width: 0px;
        height: 0px;
        border-left: 30px solid transparent;
        border-right: 30px solid transparent;
        border-top: 30px solid orangered;
        border-bottom: 30px solid orangered;
        /* 一定时间平滑过渡 */
        transition: 0.5s;
        -o-transition: 0.5s;
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
    }

    #Arrow:hover {
        transform: rotateZ(180deg);
        -o-transform: rotateZ(180deg);
        -moz-transform: rotateZ(180deg);
        -webkit-transform: rotateZ(180deg);
    }

    .active2{
        transform: rotateZ(0deg);
        -o-transform: rotateZ(0deg);
        -moz-transform: rotateZ(0deg);
        -webkit-transform: rotateZ(0deg);
        transition: 0.5s;
        -o-transition: 0.5s;
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
        cursor: pointer;
    }
    .active1{
        transform: rotateZ(90deg);
        -o-transform: rotateZ(90deg);
        -moz-transform: rotateZ(90deg);
        -webkit-transform: rotateZ(90deg);
        transition: 0.5s;
        -o-transition: 0.5s;
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
        cursor: pointer;
    }
</style>
