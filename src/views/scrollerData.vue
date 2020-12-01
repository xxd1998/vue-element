<template>
    <div style="width: 100%;height: 100%;display: flex;flex-direction: row">
        <div style="width: 300px;position:fixed;height: 100%;border: 1px solid black;overflow: auto">
            <div class="contain-left">
                <ul>
                    <li class="contain-left-item" :class="item.id == listID?'active':''" v-for="(item,index) in listData" :key="item.id" @click="scrollerData(index)">
                        {{item.title}}
                    </li>
                </ul>
            </div>
        </div>
        <div style="margin-left: 300px">
            <div>
                <div class="contain-right" v-for="item in listData" :key="item.title" :id='item.title'>{{item.context}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "scrollerData",
        data(){
            return{
                listID:1,
                listData:[
                    {
                        title:'haha1',
                        id:1,
                        context:'34444444444444444444444444'
                    },
                    {
                        title:'haha2',
                        id:2,
                        context:'34343434'
                    },
                    {
                        title:'haha3',
                        id:3,
                        context:'34444asdasdfsdf4444'
                    },
                    {
                        title:'haha4',
                        id:4,
                        context:'afcasfafafa',
                    },
                    {
                        title:'haha5',
                        id:5,
                        context:'34444456463465365365'
                    },
                    {
                        title:'haha6',
                        id:6,
                        context:'344443453364644'
                    },
                    {
                        title:'haha7',
                        id:7,
                        context:'3444444adfada44444444'
                    },
                    {
                        title:'haha8',
                        id:8,
                        context:'344444444444443434444444444444'
                    },
                ]
            }
        },
        methods: {
            scrollerData(index){
                document.getElementsByClassName("contain-right")[index].scrollIntoView();
            }
            // onScroll(e) {
            //     let scrollItems = document.querySelectorAll('.contain-right')
            //     for (let i = scrollItems.length - 1; i >= 0; i--) {
            //         // 判断滚动条滚动距离是否大于当前滚动项可滚动距离
            //         let judge = e.target.scrollTop >= scrollItems[i].offsetTop - scrollItems[0].offsetTop
            //         if (judge) {
            //             this.listID = i
            //             break
            //         }
            //     }
            // },
            // jump(index) {
            //     let target = document.querySelector('.contain-left')
            //     let scrollItems = document.querySelectorAll('.contain-left-item')
            //     // 判断滚动条是否滚动到底部
            //     if (target.scrollHeight <= target.scrollTop + target.clientHeight) {
            //         this.activeStep = index
            //     }
            //     let total = scrollItems[index].offsetTop - scrollItems[0].offsetTop // 锚点元素距离其offsetParent(这里是body)顶部的距离(待滚动的距离)
            //     let distance = document.querySelector('.scroll-content').scrollTop // 滚动条距离滚动区域顶部的距离
            //     // let distance = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset // 滚动条距离滚动区域顶部的距离(滚动区域为窗口)
            //     // 滚动动画实现, 使用setTimeout的递归实现平滑滚动，将距离细分为50小段，10ms滚动一次
            //     // 计算每一小段的距离
            //     let step = total / 50
            //     if (total > distance) {
            //         smoothDown(document.querySelector('.contain-left'))
            //     } else {
            //         let newTotal = distance - total
            //         step = newTotal / 50
            //         smoothUp(document.querySelector('.contain-left'))
            //     }
            //
            //     // 参数element为滚动区域
            //     function smoothDown(element) {
            //         if (distance < total) {
            //             distance += step
            //             element.scrollTop = distance
            //             setTimeout(smoothDown.bind(this, element), 10)
            //         } else {
            //             element.scrollTop = total
            //         }
            //     }
            //
            //     // 参数element为滚动区域
            //     function smoothUp(element) {
            //         if (distance > total) {
            //             distance -= step
            //             element.scrollTop = distance
            //             setTimeout(smoothUp.bind(this, element), 10)
            //         } else {
            //             element.scrollTop = total
            //         }
            //     }
            // }
        }
    }
</script>

<style scoped>
    ul li{
        list-style: none;
        padding-left: 10px;
        height: 30px;
        padding-top: 5px;
        cursor: pointer;
    }
    .active{
        color: #42b983;
    }
    .contain-right{
        height: 300px;
    }
</style>