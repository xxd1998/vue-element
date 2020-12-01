<template>
    <div style="width: 100%;height: 100%">
        <div style="display: flex;flex-direction: row;flex-wrap: wrap;width: 350px;text-align: center;margin: 0 auto">
            <div :class="['singleStyle',Num == 1?'active':'']">一等奖</div>
            <div :class="['singleStyle',Num == 2?'active':'']">谢谢惠顾</div>
            <div :class="['singleStyle',Num == 3?'active':'']">二等奖</div>
            <div :class="['singleStyle',Num == 8?'active':'']">谢谢惠顾</div>
            <div class="singleStyle" style="border: none;background: #ffffff"></div>
            <div :class="['singleStyle',Num == 4?'active':'']"><div>猜猜这个里面有什么东西呢</div></div>
            <div :class="['singleStyle',Num == 7?'active':'']">谢谢惠顾</div>
            <div :class="['singleStyle',Num == 6?'active':'']">谢谢惠顾</div>
            <div :class="['singleStyle',Num == 5?'active':'']">三等奖</div>
        </div>
        <div>
            <el-button :disabled="cheackDisabled" @click="start">确定抽奖</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "redpacket",
        data(){
            return{
                Num:1,
                time:0,
                cheackDisabled:false,
                interVal: null,
            }
        },
        methods:{
            start(){
                this.Num = 1;
                this.cheackDisabled = true;
                this.time = Date.now();
                this.get();
            },
            get(){
                this.interVal = setTimeout(()=>{
                    if(this.Num > 7 || this.Num < 1){
                        this.Num = 1;
                    }else{
                        this.Num =parseInt(this.Num) + 1;
                    }
                    console.log((Date.now() - this.time)/1000);
                    if((Date.now() - this.time)/1000 > 6){
                        clearTimeout(this.interVal);
                        this.cheackDisabled = false;
                    }else{
                        this.get();
                    }
                },500)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .singleStyle{
        width: 100px;
        height: 100px;
        margin-left: 10px;
        margin-top: 10px;
        text-align: center;
        background-color: #FBA52C;
        color: #ffffff;
        border-radius: 5px;
        cursor: pointer;
    }
    .active{
        background-color: #110b02;
        opacity: 0.9;
    }
</style>