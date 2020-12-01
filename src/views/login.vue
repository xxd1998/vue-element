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
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
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
        methods:{
            submitForm(){
                var _this = this;
                this.$http.post("/api/v1/auth/login",this.ruleForm).then(function (res) {
                    _this.$message({
                        type:'success',
                        message:'登录成功'
                    })
                    console.log(res.data);
                    localStorage.setItem("token",res.data.data.token);
                    _this.$router.push({name:'showPackage'});
                }).catch(function (err) {
                    _this.ruleForm.userName = '';
                    _this.ruleForm.passwd = '';
                    _this.$message({
                        type:'error',
                        message:'账号密码错误'
                    })
                })
            },
            resetForm(formName){
                this.$refs[formName].resetFields();
            },
        }
    }
</script>

<style scoped>

</style>