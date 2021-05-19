<template>
  <div>
     <div class="main_title">User Information</div>
    <div class="agreement_body">
      <div class="agreement_p">
        <div class="agreement_title">
        <span class="zhanwei5"></span> <span> basic information</span> 
          <hr>
        </div>
       
        <div class="userinformation_content">
         <el-form
         :model="updateForm"
         :rules="updateFormrules"
         ref="updateFormRef"
        
         > 
             <span class="userinfo_email_t">email:</span>
             <el-form-item prop="email">
             <el-input v-model="updateForm.email" class="userinfo_email_i">
           
             </el-input>
             </el-form-item>
             <span class="userinfo_old_t">
             Old Password:
             </span>
             <el-form-item prop="oldPassword">
<el-input  class="userinfo_old_i" type="password" v-model="updateForm.oldPassword" clearable></el-input>
             </el-form-item>
             <span class="userinfo_new_t">
             New Password:
             </span>
             <el-form-item prop="newPassword">
<el-input type="password" v-model="updateForm.newPassword" class="userinfo_new_i"></el-input>
             </el-form-item>
         </el-form>
        <el-button @click="submitForm" class="userinfo_save">save</el-button>
        <el-button @click="cancel" class="userinfo_cancel">cancel</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
 import qs from 'qs'
export default {
  name: "",
  data(){
  return {
      updateForm:{
          email:'',
          oldPassword:'',
          newPassword:''
      },
      updateFormrules:{
           email:[
                       { required: true, message: 'Please input your email', trigger: 'blur' },
                       { type: 'email', message: 'Please enter your email containing @', trigger: ['blur', 'change'] }
                   ],
           oldPassword:[
                       {required:true, message:'',trigger:'blur'},
                        
                  ],
          newPassword:[
                      {required:true, message:'',trigger:'blur'},
                         {pattern:new RegExp('^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{6,16}$'),message:'The password is 6-16 digits and must contain three types: uppercase letters, lowercase letters, numbers or special characters', trigger:  ["blur", "change"]},
          ]
           
      }
  }
  },
  methods:{
      
      submitForm(){
          this.$refs.updateFormRef.validate(async valid=>{
   
              if(!valid)return false
              var data={email:this.updateForm.email,oldPassword:this.updateForm.oldPassword,password:this.updateForm.newPassword}

              const datas=qs.stringify(data)

              const res = await this.axios
              ({
         method:"post",
         headers: { 'content-type': 'application/x-www-form-urlencoded' },
   
         url:"v1/user/updatePassword",
         data:datas,
        
       })
       if(res.data.code !==200){
          alert('用户名或密码错误')
       }else {
           alert('Modified successfully')
       }
          })
      },
      cancel(){

      }
  }
};
</script>
<style lang='less' scoped>
span{
    display: inline-block;
}
.agreement-body {
  width: 1920px;
  height: 1742px;
  background: #f9f9f9;
}
.agreement_p {
    box-sizing: border-box;
    padding: 30px;
  width: 1066px;

  
  height: 554px;
  position: absolute;
  top: 0px;
  left: 332px;
  background: #ffffff;
  border-radius: 6px;

}
.agreement_title{
height: 70px;


font-size: 20px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #333333;
line-height: 70px;
}

.zhanwei5{
    display: inline-block;
    width: 42px;
}
.userinformation_content{
    position: relative;

font-size: 16px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #999999;
line-height: 22px;
}
.userinfo_email_t{
    position: absolute;
    top: 52px;
    left: 225px;
}
.userinfo_email_i{
    position: absolute;
    top: 40px;
    left: 294px;
}
.userinfo_old_t{
    position: absolute;
    top: 151px;
    left: 162px;
}
.userinfo_old_i{
    top: 120px;
    left: 294px;
    position: absolute;
}
.userinfo_new_t{
    position: absolute;
    top: 253px;
    left: 155px;
}
.userinfo_new_i{
    position: absolute;
    top: 200px;
    left: 294px;
  
}
.el-input{
    width: 545px !important;
    height: 48px !important;
}
.el-input__inner{
   
    padding-right: 97px !important;
    box-sizing: content-box !important;
}
.userinfo_save{
    position: absolute;
   top: 366px;
   left: 480px;
   width: 116px;
height: 40px;
background: #FEB900;
border-radius: 24px;
}
.userinfo_cancel{
    position: absolute;
    left: 617px;
    top: 366px;
    width: 115px;
    height: 40px;
    background: #FFFFFF;
    border-radius: 24px;
    border: 1px solid #D5D5D5;
}
.el-form-item__error{
    position: absolute !important;
    top: 89px!important;
    left: 299px!important;
    color: #000!important;
}
.main_title{
  position: absolute;
  top: -120px;
  left: 540px;
width: 800px;
height: 54px;
font-size: 46px;
font-family: Raleway-SemiBold, Raleway;
font-weight: 600;
color: #A40000;
line-height: 54px;
}
</style>
