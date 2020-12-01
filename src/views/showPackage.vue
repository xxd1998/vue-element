<template>
    <div style="height: 100%;width: 100%">
<!--        <el-button @click="submit">默认按钮</el-button>-->
        <el-button @click="lyout">退出登录</el-button>
<!--        <el-button @click="updataDialog">更改套餐</el-button>-->
        <el-button @click="changeType">切换到<span v-show="this.currencyType==1">比索</span><span v-show="this.currencyType==2">人民币</span></el-button>
        <div style="width: 500px;margin:0 auto" v-loading="loading">
            <div v-for="(item1,index1) in allData" :key="index1">
                <div class="first-head" style="margin-top: 10px">
                    <div style="line-height: 40px;margin-left: 10px;">
                        <span>{{item1.mchName}}</span>
                    </div>
                    <div>
                        <el-button type="primary" @click="addPackageDialog(item1)">添加</el-button>
                        <i style="margin-left: 10px;margin-right: 10px;cursor: pointer" class="el-icon-caret-bottom" @click="showSecond(index1)"></i>
                    </div>
                </div>
                <div v-for="(item2,index2) in item1.groupList" :key="index2" v-show="item1.firstShow">
                    <div class="second-head">
                        <div style="margin-left: 10px">{{item2.packageCategory}}</div>
                        <div style="margin-right: 10px;cursor: pointer">
                            <div>
                                <i style="margin-left: 10px" class="el-icon-caret-bottom" @click="showThird(item1,index2)"></i>
                            </div>
                        </div>
                    </div>
                    <div v-for="(item3,index3) in item2.items" :key="index3" v-show="item2.secondShow">
                        <div class="third-head" @click="updataDialog(item1,item3)">
                            <span>货币类型:{{item3.currencyType}}</span>
                            <span>开启状态:{{item3.enableStatus}}</span>
                            <span>原始价格:{{item3.originPrice}}</span>
                            <span>原始Sku:{{item3.originSku}}</span>
                            <span>套餐类目:{{item3.packageCategory}}</span>
                            <span>套餐描述:{{item3.packageDesc}}</span>
                            <span>套餐名称:{{item3.packageName}}</span>
                            <span>套餐价格:{{item3.packagePrice}}</span>
                            <span>套餐uuid:{{item3.packageUuid}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--添加弹窗-->
        <el-dialog
            title="添加套餐"
            :visible.sync="dialogVisible"
            width="30%">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="140px" class="demo-ruleForm">
            <el-form-item label="套餐类型" prop="packageType">
                <el-radio-group v-model="ruleForm.packageType">
                    <el-radio label="1">话费</el-radio>
                    <el-radio label="2">套餐</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="货币类型" prop="currencyType">
                <el-radio-group v-model="ruleForm.currencyType">
                    <el-radio label="1">人民币</el-radio>
                    <el-radio label="2">比索</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="开启状态" prop="enableStatus">
                <el-radio-group v-model="ruleForm.enableStatus">
                    <el-radio label="1">开</el-radio>
                    <el-radio label="2">关</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="原始价格" prop="originPrice">
                <el-input v-model="ruleForm.originPrice"></el-input>
            </el-form-item>
            <el-form-item label="原始sku" prop="originSku">
                <el-input v-model="ruleForm.originSku"></el-input>
            </el-form-item>
            <el-form-item label="套餐类目" prop="packageCategory">
                <el-input v-model="ruleForm.packageCategory"></el-input>
            </el-form-item>
            <el-form-item label="套餐描述" prop="packageDesc">
                <el-input v-model="ruleForm.packageDesc"></el-input>
            </el-form-item>
            <el-form-item label="套餐名称" prop="packageName">
                <el-input v-model="ruleForm.packageName"></el-input>
            </el-form-item>
            <el-form-item label="套餐价格" prop="packagePrice">
                <el-input v-model="ruleForm.packagePrice"></el-input>
            </el-form-item>
<!--            <el-form-item label="套餐uuid" prop="packageUuid">-->
<!--                <el-input v-model="ruleForm.packageUuid"></el-input>-->
<!--            </el-form-item>-->
        </el-form>
        <span slot="footer" class="dialog-footer">
                <el-button @click="dialogCancel('ruleForm')">取 消</el-button>
                <el-button type="primary" :disabled="updataDisable" @click="addPackage">确 定</el-button>
            </span>
    </el-dialog>
<!--        修改弹窗-->
        <el-dialog
                title="更改套餐"
                :visible.sync="dialogUpdataVisible"
                width="30%">
            <el-form :model="ruleUpdataForm" :rules="updataRules" ref="ruleUpdataForm" label-width="140px" class="demo-ruleForm">
                <el-form-item label="套餐类型" prop="packageType">
                    <el-radio-group v-model="ruleUpdataForm.packageType">
                        <el-radio :label="1">话费</el-radio>
                        <el-radio :label="2">套餐</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="货币类型" prop="currencyType">
                    <el-radio-group v-model="ruleUpdataForm.currencyType">
                        <el-radio :label="1">人民币</el-radio>
                        <el-radio :label="2">比索</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="开启状态" prop="enableStatus">
                    <el-radio-group v-model="ruleUpdataForm.enableStatus">
                        <el-radio :label="1">开</el-radio>
                        <el-radio :label="2">关</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="原始价格" prop="originPrice">
                    <el-input v-model="ruleUpdataForm.originPrice"></el-input>
                </el-form-item>
                <el-form-item label="原始sku" prop="originSku">
                    <el-input v-model="ruleUpdataForm.originSku"></el-input>
                </el-form-item>
                <el-form-item label="套餐类目" prop="packageCategory">
                    <el-input v-model="ruleUpdataForm.packageCategory"></el-input>
                </el-form-item>
                <el-form-item label="套餐描述" prop="packageDesc">
                    <el-input v-model="ruleUpdataForm.packageDesc"></el-input>
                </el-form-item>
                <el-form-item label="套餐名称" prop="packageName">
                    <el-input v-model="ruleUpdataForm.packageName"></el-input>
                </el-form-item>
                <el-form-item label="套餐价格" prop="packagePrice">
                    <el-input v-model="ruleUpdataForm.packagePrice"></el-input>
                </el-form-item>
<!--                <el-form-item label="套餐uuid" prop="packageUuid">-->
<!--                    <el-input v-model="ruleUpdataForm.packageUuid"></el-input>-->
<!--                </el-form-item>-->
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogUpdataCancel('ruleUpdataForm')">取 消</el-button>
                <el-button type="primary" :disabled="updataDisable" @click="updataPackage">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "showPackage",
        data(){
            return{
                allData:[],
                loading:true,
                dialogVisible: false,
                dialogUpdataVisible:false,
                currencyType:1,
                mchId:'',
                ruleUpdataForm:{
                    packageType:'',
                    currencyType:'',
                    enableStatus:'',
                    originPrice:'',
                    originSku:'',
                    packageCategory:'',
                    packageDesc:'',
                    packageName:'',
                    packagePrice:'',
                },
                ruleForm:{
                    packageType:'',
                    currencyType:'',
                    enableStatus:'',
                    originPrice:'',
                    originSku:'',
                    packageCategory:'',
                    packageDesc:'',
                    packageName:'',
                    packagePrice:'',
                },
                updataRules:{
                    packageType: [
                        { required: true, message: '请选择', trigger: 'change' }
                    ],
                    currencyType: [
                        { required: true, message: '请选择', trigger: 'change' }
                    ],
                    enableStatus: [
                        { required: true, message: '请选择', trigger: 'change' }
                    ],
                    originPrice: [
                        { required: true, message: '请输入原始价格', trigger: 'blur' }
                    ],
                    originSku: [
                        { required: true, message: '请输入原始SKU', trigger: 'blur' }
                    ],
                    packageCategory: [
                        { required: true, message: '请输入', trigger: 'blur' }
                    ],
                    packageDesc: [
                        { required: true, message: '请输入', trigger: 'blur' }
                    ],
                    packageName: [
                        { required: true, message: '请输入', trigger: 'blur' }
                    ],
                    packagePrice: [
                        { required: true, message: '请输入', trigger: 'blur' }
                    ],
                    // packageUuid: [
                    //     { required: true, message: '请输入', trigger: 'change' }
                    // ],
                },
                rules:{
                    packageType: [
                        { required: true, message: '请选择', trigger: 'change' }
                    ],
                    currencyType: [
                        { required: true, message: '请选择', trigger: 'change' }
                    ],
                    enableStatus: [
                        { required: true, message: '请选择', trigger: 'change' }
                    ],
                    originPrice: [
                        { required: true, message: '请输入原始价格', trigger: 'blur' }
                    ],
                    originSku: [
                        { required: true, message: '请输入原始SKU', trigger: 'blur' }
                    ],
                    packageCategory: [
                        { required: true, message: '请输入', trigger: 'blur' }
                    ],
                    packageDesc: [
                        { required: true, message: '请输入', trigger: 'blur' }
                    ],
                    packageName: [
                        { required: true, message: '请输入', trigger: 'blur' }
                    ],
                    packagePrice: [
                        { required: true, message: '请输入', trigger: 'blur' }
                    ],
                    // packageUuid: [
                    //     { required: true, message: '请输入', trigger: 'change' }
                    // ],
                },
                showSecondContent:'',
                showThirdContent:'',
                showThirdIndex:'',
                updataDisable:false,
            }
        },
        mounted() {
            this.submit();
        },
        methods:{
            dialogUpdataCancel(){
                this.dialogUpdataVisible = false;
            },
            updataPackage(){
                var _this = this;
                this.loading = true;
                this.updataDisable = true;
                this.$http.post("/api/v1/mch/plan"+"?"+"packageId"+"="+this.ruleUpdataForm.packageId,this.ruleUpdataForm).then(res=>{
                    _this.loading = false;
                    _this.$message({
                        type:'success',
                        message:'修改成功'
                    })
                    _this.submit();
                    _this.dialogUpdataVisible = false;
                    _this.updataDisable = false;
                }).catch(error=>{
                    _this.$message({
                        type:'error',
                        message:'修改失败'
                    })
                })
            },
            addPackageDialog(item){
                this.dialogVisible = true;
                this.mchId = item.mchId;
            },
            addPackage(){
                var _this = this;
                this.loading = false;
                var data = new Date(Date.now());
                let packId = this.$md5("mch_"+this.ruleForm.originSku+data);
                this.ruleForm.packageUuid = packId;
                this.ruleForm.mchId = this.mchId;
                _this.updataDisable = true;
                this.$http.put("/api/v1/mch/plan",this.ruleForm).then(res=>{
                    _this.loading = false;
                    _this.dialogVisible = false;
                    _this.$message({
                        type:'success',
                        message:'添加成功'
                    })
                    _this.ruleForm = {};
                    _this.updataDisable = false;
                    _this.submit();
                }).catch(err=>{
                    _this.$message({
                        type:'error',
                        message:'添加失败'
                    })
                })
            },
            updataDialog(item1,item3){
              this.dialogUpdataVisible = true;
              this.mchId = item1.mchId;
              this.ruleUpdataForm = this.copyDeep(item3);
            },
            submit(){
                var _this = this;
                this.loading = true;
                this.$http.get("/api/v1/mch/plan"+"?"+"currencyType"+"="+this.currencyType).then(res=>{
                    _this.allData = res.data.data;
                    _this.allData.forEach(function (a) {
                            a.firstShow = false;
                            a.groupList.forEach(function (b) {
                                b.secondShow = false;
                            })
                    })
                    _this.loading = false;
                }).catch(error=>{
                    console.log(error);
                })
            },
            lyout(){
                localStorage.removeItem("token");
                this.$router.push({path:"/"})
            },
            showSecond(index){
                this.showSecondContent = index;
                this.allData.forEach((a,b)=>{
                    if(index == b){
                        a.firstShow = !a.firstShow;
                    }else{
                        a.firstShow = false;
                    }
                })
                this.dialogVisible = true;
                this.dialogVisible = false;
            },
            showThird(item,index){
                this.showThirdContent = item;
                this.showThirdIndex = index;
                this.allData.forEach((a)=>{
                    if(a.mchId == item.mchId){
                        a.groupList.forEach((c,d)=>{
                            if(index == d){
                                c.secondShow = !c.secondShow;
                            }else{
                                c.secondShow = false;
                            }
                        })
                    }
                })
                this.dialogVisible = true;
                this.dialogVisible = false;
            },
            dialogCancel(formName){
                this.dialogVisible = false;
                this.$refs[formName].resetFields();
            },
            dialogSubmit(){
                this.dialogVisible = false;
                this.ruleForm = {};
            },
            //深度复制文本
            copyDeep(templateData) {
                // templateData 是要复制的数组或对象，这样的数组或者对象就是指向新的地址的
                return JSON.parse(JSON.stringify(templateData));
            },
            changeType(){
                this.loading = true;
                if(this.currencyType == 1){
                    this.currencyType = 2
                }else{
                    this.currencyType = 1;
                }
                this.submit();
            }
        }
    }
</script>

<style scoped>
    .first-head{
        margin: 0 auto;
        width:500px;
        height: 40px;
        border: 1px solid black;
        display: flex;
        justify-content: space-between;
    }
    .second-head{
        width:450px;
        height: 40px;
        border: 1px solid;
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        line-height: 40px;
    }
    .third-head{
        width: 420px;
        margin-top: 10px;
        border: 1px solid black;
        display: flex;
        flex-wrap: wrap;
    }
    .third-head span{
        margin-left: 10px;
        margin-top: 10px;
        line-height: 20px;
    }
</style>