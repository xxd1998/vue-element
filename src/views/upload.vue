<template>
    <div style="width: 100%;height: 100%">
        <div>
            <input type="file" @change="uploadFile($event)"/>
        </div>
        <div class="hello1"></div>
    </div>
</template>

<script>
    export default {
        name: "upload",
        data() {
            return {}
        },
        methods: {
            uploadFile(obj) {
                console.log(obj)
                console.log(obj.target.files);
                // var file = obj.files[0];//获取文件流
                // var val = obj.value;
                // var suffix = val.substr(val.indexOf("."));
                // var storeAs = "studio_course/" + this.timestamp() + suffix;
                // console.log(file.name + ' => ' + storeAs);
                // client.multipartUpload(storeAs, file).then(function (result) {
                //
                //    }).catch(function (err) {
                //        console.log(err);
                //     });
            },
            // timestamp() {
            //     var time = new Date();
            //     var y = time.getFullYear();
            //     var m = time.getMonth() + 1;
            //     var d = time.getDate();
            //     var h = time.getHours();
            //     var mm = time.getMinutes();
            //     var s = time.getSeconds();
            //     console.log(y);
            //     return "" + y + this.add0(m) + this.add0(d) + this.add0(h) + this.add0(mm) + this.add0(s);
            // },
            // add0(m) {
            //     return m < 10 ? '0' + m : m;
            // }
        }
    }
</script>

<style scoped>
    .hello1{
        width: 100px;
        height: 100px;
        border: 1px solid black;
        background-color: #9a6e3a;
        animation:a 2s;
        animation-iteration-count: infinite;
    }

    @keyframes a {
        25%  {
            background:red;
            transform: translateX(300px);
        }
        50%  {
            background:blanchedalmond;
            transform: translateX(300px);
            transform: translateY(300px);
        }
        75%  {
            background: #55a532;
            transform: translateY(300px);
        }
        100% {
            background: #795da3;
        }
    }
</style>
