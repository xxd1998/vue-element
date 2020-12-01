<template>
    <div class="container1" style="width: 100%;">
       <div style="width: 200px;border: 1px solid red;float: left;position:fixed">
           <ul>
               <li :class="ulIdx == index?'en-item':''" v-for="(item,index) in 10" :key="index" @click="toTarget(item,index)">{{item}}</li>
           </ul>
       </div>
        <div class="en-right">
            <div class="main-item">跳转到1</div>
            <div class="main-item">跳转到2</div>
            <div class="main-item">跳转到3</div>
            <div class="main-item">跳转到4</div>
            <div class="main-item">跳转到5</div>
            <div class="main-item">跳转到6</div>
            <div class="main-item">跳转到7</div>
            <div class="main-item">跳转到8</div>
            <div class="main-item">跳转到9</div>
            <div class="main-item">跳转到10</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "maoDian",
        data(){
            return{
                ulIdx:0,
            }
        },
        methods:{
            toTarget(item,index){
                // this.ulIdx = index;
                // const cateItem = document.querySelectorAll('.main-item');
                // document.documentElement.scrollTop = 200*(index+1);
                // var obj =[12,23,34,4,5,67]
                // var obj1 = {a:1,b:2,c:3}
                // var arrList = [
                //     {a:1,b:'@'},
                //     {a:'3',b:'7'}
                // ]
                // for(var i in obj1){
                //     console.log(i)
                // }
                // for(var j of arrList){
                //     console.log(j)
                // }
                // var set1 = new Set([1,2,3,4,5,6,5]);
                // console.log([...set1]);
                this.$confirm('确定保存?是否继续',{
                    confirmButtonText:'确实',
                    cancelButtonText:'取消',
                    type:'warning'
                }).then(()=>{
                    console.log(1111);
                }).catch(()=>{
                    console.log(2222);
                })
            }
        }
    }
</script>

<style scoped>
    .main-item{
        height: 300px;
    }
    ul li{
        cursor: pointer;
        padding-top:5px;
    }
    .en-item{
        color: #ffffff;
        background-color: #d0cfcf;
    }
    .en-right{
        overflow: hidden;
    }
    .container1:after{
        content: "";
        height: 0;
        line-height: 0;
        display: block;
        visibility: hidden;
        clear: both;
    }
</style>