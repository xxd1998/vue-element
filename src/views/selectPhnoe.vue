<template>
    <div style="height: 100%;width: 100%;">
       <div class="com-head">
            <div class="com-head-left">
                <img src="../assets/head.png" alt="">
                <div class="com-head-left-font">
                    <p>丝路充</p>
                    <p>Recharge</p>
                </div>
            </div>
           <div class="com-head-right">
               运营商识别
           </div>
       </div>
        <div style="cursor: pointer">
            <i class="iconfont">&#xe606;</i>
            <i class="iconfont">&#xe607;</i>
            <i class="iconfont">&#xe604;</i>
            <div></div>
        </div>
        <div class="com-head-contain">
            <div class="com-head-contain-left">
                <div class="com-head-contain-left-box">
                    <div class="com-head-contain-left-font">电话号码：</div>
                    <div class="com-contain-input">
                        <el-input
                                type="textarea"
                                placeholder="请输入内容"
                                v-model="textareaValue">
                        </el-input>
                        <div style="text-align: left;margin-top: 10px">无效号码为{{unlistLength}}个</div>
                        <el-button @click="submit(textareaValue)">提交</el-button>
                    </div>
                </div>
            </div>
            <div class="com-head-contain-right">
                <div class="com-head-contain-right-top">
                    <div class="com-head-right-title">Smart：</div>
                    <div class="com-head-right-text">
                            <div class="copy" v-for="(item,index) in smartList" :key="index" :data-clipboard-text="sList">
                                <div class="head-right-text-font" @click="selectSmart(item,index)">
                                {{item}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="com-head-contain-right-top" style="margin-top: 30px">
                    <div class="com-head-right-title">Globe：</div>
                        <div class="com-head-right-text">
                            <div class="copy" v-for="(item,index) in globeList" :key="index" :data-clipboard-text="gList">
                                <div class="head-right-text-font" @click="selectGlobe(item,index)">
                                    {{item}}
                                </div>
                       </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Clipboard from "clipboard";
    export default {
        name: "selectPhnoe",
        data(){
            return{
                textareaValue:'',
                input:'',
                smartList:[],
                globeList:[],
                unList:[],
                gList:'',
                sList:'',
                unlistLength:0,
            }
        },
        methods:{
            submit(item){
                this.smartList = [];
                this.globeList = [];
                this.unList = [];
                var newData = [];
                this.unlistLength = 0;
                var smartRule = /^0(900|908|909|910|911|912|913|914|918|919|920|921|928|929|930|938|939|940|946|947|948|949|950|961|989|998|999|970|975)+[0-9]{7}?$/;
                var globeRule = /^0(817|905|906|915|916|917|926|927|935|936|937|945|955|956|965|966|967|975|977|978|979|995|996|997)+[0-9]{7}?$/;
                var oldData = item.split(/[\r\n\s]/g);
                for (var j = 0;j<oldData.length;j++){
                    if(oldData[j].length == 10){
                        oldData[j] = "0"+oldData[j];
                    }
                    newData.push(oldData[j]);
                }
                for(var i = 0 ;i<newData.length;i++){
                    if(smartRule.test(newData[i])){
                        this.smartList.push(newData[i]);
                    }else if(globeRule.test(newData[i])){
                        this.globeList.push(newData[i]);
                    }else{
                        if(newData[i]!= ""){
                            this.unList.push(newData[i]);
                        }
                    }
                }
                this.gList = this.globeList.join(" ");
                this.sList = this.smartList.join(" ");
                this.unlistLength = this.unList.length;
            },
            selectSmart(item,index){
                var clipboard = new Clipboard(".copy"); //单页面引用
                clipboard.on("success", e => {
                    console.log(e);
                    this.$message({
                        message: "已复制到剪切板",
                        type: "warning"
                    });
                    // 释放内存
                    clipboard.destroy();
                });
                clipboard.on("error",e  => {
                    console.log(e);
                    // 不支持复制
                    this.$message({
                        message: "该浏览器不支持自动复制",
                        type: "warning"
                    });
                    // 释放内存
                    clipboard.destroy();
                });
            },
            selectGlobe(item,index){
                var clipboard = new Clipboard(".copy"); //单页面引用
                clipboard.on("success", e => {
                    console.log(e);
                    this.$message({
                        message: "已复制到剪切板",
                        type: "warning"
                    });
                    // 释放内存
                    clipboard.destroy();
                });
                clipboard.on("error",e  => {
                    console.log(e);
                    // 不支持复制
                    this.$message({
                        message: "该浏览器不支持自动复制",
                        type: "warning"
                    });
                    // 释放内存
                    clipboard.destroy();
                });
            }
        },
        filters:{

        }
    }
</script>

<style>
   *{
       margin: 0;
       padding: 0;
   }
    .com-head{
        height: 80px;
        width: 100%;
        background-color: #2885cb;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .com-head .com-head-left{
        display: flex;
        flex-direction: row;
        color: #ffffff;
    }
    .com-head-left-font{
        font-size: 18px;
        font-weight: 500;
        margin-top: 20px;
        margin-left: 10px;
    }
    .com-head .com-head-left img{
        width: 50px;
        height: 50px;
        margin-left: 30px;
        margin-top: 15px;
    }
    .com-head-right{
        color: #ffffff;
        font-size: 18px;
        font-weight: 500;
        margin-right: 30px;
        line-height: 80px;
    }
    .com-head-contain{
        height: calc(100% - 100px);
        width: 80%;
        display: flex;
        margin: 0 auto;
        flex-direction: row;
    }
    .com-head-contain .com-head-contain-left{
        width: 50%;
        height: calc(100% - 100px);
        padding-top:50px;
        overflow: auto;
    }

    .com-head-contain-left .com-head-contain-left-box{
        width: calc(100% - 100px);
        height: calc(100%);
        margin: 0 auto;
   }
   .com-head-contain-left-font{
       text-align:left;
       color:#939393;
       font-size: 18px;
       font-weight: 500;
   }

   .com-head-contain-left-box .com-contain-input .el-textarea__inner{
       width: calc(100%);
       height: 60vh;
       background-color: #f1f1f1;
       color: #939393;
   }
   .com-head-contain-left .el-button{
       margin-top:30px;
       float: left;
       background-color:#2885cb;
       color: #ffffff;
       width: 100px;
       height: 40px;
   }
   body{
       margin: 0;
   }
    .com-head-contain-right{
        width: 50%;
        padding-top:50px;
        height: 100%;
    }
    .com-head-contain-right-top{
        width: 80%;
        margin: 0 auto;
        overflow: auto;
        color:#939393;
    }
    .com-head-right-title{
        text-align: left;
        font-size: 18px;
    }
    .com-head-right-text{
        width: calc(100% - 20px);
        background-color:#f1f1f1;
        height: 40vh;
        overflow: auto;
        text-align: left;
    }
    .head-right-text-font{
        line-height: 20px;
        height: 20px;
        padding: 2px 8px 2px 8px;
        cursor: pointer;
    }
   .el-upload-list{
       display: none;
   }
</style>

