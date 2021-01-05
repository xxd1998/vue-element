<template>
    <div style="height: 100%;width: 100%">
        <div style="width: 400px;margin: 0 auto">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号" prop="userName">
                    <el-input type="text" v-model="ruleForm.userName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="passwd">
                    <el-input type="password" v-model="ruleForm.passwd" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <div ref="vaptcha" style="width:300px;height:36px">
                        <div class="vaptcha-init-main">
                            <div class="vaptcha-init-loading">
                                <a><img src="https://cdn.vaptcha.com/vaptcha-loading.gif"/></a>
                                <span class="vaptcha-text">VAPTCHA启动中...</span>
                            </div>
                        </div>
                    </div>
<!--                    <Vaptcha ref="captcha" v-model="token"></Vaptcha>-->
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    const extend = function(to, _from) {
        for (const key in _from) {
            to[key] = _from[key]
        }
        return to
    }
    export default {
        name: "login",
        props: {
            type: {
                type: String,
                default: 'click'
            },
            scene: {
                type: [String,Number],
                default: 0
            },
            vpStyle: {
                type: String,
                default: 'dark'
            },
            color: {
                type: String,
                color: '#3C8AFF'
            },
            lang: {
                type: String,
                default:'auto'
            },
        },
        data(){
            return{
                captcha: null,
                token:'',
                ruleForm: {
                    userName: '',
                    passwd: '',
                },
                rules: {
                    userName: [
                        { required: true, message: '请填写账号', trigger: 'blur' }
                    ],
                    passwd: [
                        { required: true, message: '请填写密码', trigger: 'blur' }
                    ],
                }
            }
        },
        mounted() {
            var config = extend({
                vid: '5fd0b1595bb14063462b1169',
                container: this.$refs.vaptcha,
                style: this.vpStyle
            }, this.$props)
            console.log(config)
            this.loadV2Script().then(() => {
                window.vaptcha(config).then(obj => {
                    this.$emit('input', obj)
                    obj.render()
                    obj.listen("pass", function () {
                        // 验证成功进行后续操作
                        console.log(obj.vaptcha.token);
                    });
                    console.log(obj)
                })
            })
        },
        methods:{
            loadV2Script() {
                if (typeof window.vaptcha === 'function') { //如果已经加载就直接放回
                    return Promise.resolve()
                } else {
                    return new Promise(resolve => {
                        var script = document.createElement('script')
                        script.src = 'https://v.vaptcha.com/v3.js'
                        script.async = true
                        script.onload = script.onreadystatechange = function() {
                            if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
                                resolve()
                                script.onload = script.onreadystatechange = null
                            }
                        }
                        document.getElementsByTagName("head")[0].appendChild(script)
                    })
                }
            },


            submitForm(){
                let _this =this;
                this.$http.get(`/api/v1/auth/login-uuid?uuid=admin`).then((res)=>{
                        localStorage.setItem("token",res.data.data.token);
                        _this.$router.push({name:'showPackage'});
                }).catch(error =>{
                    console.log('登录失败')
                })
                // var _this = this;
                // this.$http.post("/api/v1/auth/login",this.ruleForm).then(function (res) {
                //     _this.$message({
                //         type:'success',
                //         message:'登录成功'
                //     })
                //     console.log(res.data);
                //     localStorage.setItem("token",res.data.data.token);
                //     _this.$router.push({name:'showPackage'});
                // }).catch(function (err) {
                //     _this.ruleForm.userName = '';
                //     _this.ruleForm.passwd = '';
                //     _this.$message({
                //         type:'error',
                //         message:'账号密码错误'
                //     })
                // })
            },
            resetForm(formName){
                this.$refs[formName].resetFields();
            },
        }
    }
</script>

<style scoped>

</style>
<style>
    .vaptcha-init-main {
        display: table;
        width: 100%;
        height: 100%;
        background-color: #eeeeee;
    }
    ​
    .vaptcha-init-loading {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }
    ​
    .vaptcha-init-loading > a {
        display: inline-block;
        width: 18px;
        height: 18px;
        border: none;
    }
    ​
    .vaptcha-init-loading > a img {
        vertical-align: middle;
    }
    ​
    .vaptcha-init-loading .vaptcha-text {
        font-family: sans-serif;
        font-size: 12px;
        color: #cccccc;
        vertical-align: middle;
    }
</style>
