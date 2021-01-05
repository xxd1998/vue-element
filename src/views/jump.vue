<template>
    <div>
        <div class="comment">
            <ul>
                <li v-for="(item,index) in list" :key="index" @click="jump(item)">点击{{item}}</li>
            </ul>
        </div>
        <ul>
            <li id="item1">1</li>
            <li id="item2">2</li>
            <li id="item3">3</li>
            <li id="item4">4</li>
            <li id="item5">5</li>
            <li id="item6">6</li>
            <li id="item7">7</li>
            <li id="item8">8</li>
            <li>9</li>
            <li>9</li>
            <li>9</li>
            <li>9</li>
            <li>9</li>
            <li>9</li>
            <li>9</li>
            <li>9</li>
            <li>9</li>
            <li>9</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "jump",
        data(){
            return{
                list:[1,2,3,4,5,6,7,8],
            }
        },
        methods:{
            jump(selector) {
                let item = null;
                item = '#item'+selector
                console.log(item)
                this.$el.querySelector(item).scrollIntoView({
                    behavior: "smooth", // 平滑过渡
                    block: "start" // 上边框与视窗顶部平齐
                });
            }
        }
    }
</script>

<style scoped>
    .comment ul{
        display: flex;
        flex-direction: row;
    }
    .comment ul li{
        width: 50px;
        list-style: none;
        cursor: pointer;
    }
 ul li{
     height: 200px;
 }
</style>
