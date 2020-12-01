<template>
    <div style="height: 100%;width: 100%" >
        <div style="overflow: auto;height: 1000px" @scroll="scroller">
            <div class="jieliu">2222</div>
            <div class="jieliu">24</div>
            <div class="jieliu">23423</div>
            <div class="jieliu">234234</div>
            <div class="jieliu">234234</div>
            <div class="jieliu">2423</div>
            <div class="jieliu">2432</div>
            <div class="jieliu">234</div>
            <div class="jieliu">34</div>
            <div class="jieliu">23423</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "jieliu",
        data(){
            return{

            }
        },
        methods:{
            scroller(){
                console.log(1111);
            },
            debounce(fn, wait) {
                var timeout = null;      //定义一个定时器
                return function() {
                    if(timeout !== null)
                        clearTimeout(timeout);  //清除这个定时器
                    timeout = setTimeout(fn, wait);
                }
            },
        }
    }
</script>
<style scoped>
    .jieliu{
        height: 350px;
        width: 300px;
        text-align: center;
    }
</style>