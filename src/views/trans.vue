<template>
    <div style="width: 100%;height: 100%">
        <span style="cursor: pointer" @click="changeStatus">{{$t("language.name")}}</span>
        <br/>
        <div style="margin-top: 50px">
            <p>{{$t("login.welcome")}}</p>
            <p>{{$t("login.hello")}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "trans",
        data(){
            return{

            }
        },
        methods:{
            changeStatus(){
                if (this.lang === "zh") {
                    this.lang = "en";
                    this.$i18n.locale = this.lang; //关键语句
                } else {
                    this.lang = "zh";
                    this.$i18n.locale = this.lang; //关键语句
                }
            }
        }
    }
</script>

<style scoped>

</style>