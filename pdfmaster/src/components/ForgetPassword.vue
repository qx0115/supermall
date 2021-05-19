<template>
  <div class="forget_container">
  <div class="forget_container">
    <div class="forget-title">Forget password?</div>

    <div class="forget_form">
      <el-form
        size="medium"
        :model="registerForm"
        :rules="registerFormrules"
        ref="registerFormRef"
        aria-placeholder="Please input your email"
      >
      <span class="code_tip">Click verify to get the email verification code</span>
        <span class="forget_email">Email:</span><br />

        <el-form-item prop="email">
          <el-input
       
            class="inputemail inputemil-top"
            v-model="registerForm.email"
       clearable
          
          ></el-input>
          
        </el-form-item>
        <span class="forget_email">E-mail verification:</span>
          <el-row >
        <el-form-item>
      
          <el-col :span="15">
        <el-form-item prop="code">
          <el-input  class="inputver_code inputemail input-center" type="tel" v-model="registerForm.code" placeholder="Enter the email verification code">
          </el-input>
        </el-form-item>
          </el-col>
          <el-col :span="8" :offset="1" >
            <el-form-item>
        <el-button
          @click="getCode()"
          class="buttoncoded"
          :style="buttoncode"
          :class="{ 'disabled-selfstyle': 'getCodeBtnDisable '}"
          :disabled="getCodeBtnDisable"
          >{{ codeBtnWord }}</el-button
        >
            </el-form-item>
          </el-col>
          
</el-form-item>
</el-row>
        <!-- 创建密码 -->
        <span class="forget_email">New Password:</span><br/>
        <el-form-item class=" inputemail inputemail-bottom" prop="enterPassword">
          <el-input
            show-password
            type="password"
            v-model="registerForm.enterPassword"
            placeholder="Please create password"
          ></el-input>
        </el-form-item>
   
        <!-- 确认密码 -->

        <!-- 提交注册 -->
        <el-button :style="selfsubmitbutton" class="selfsubmitbutton" @click="submit">
          Reset Password
        </el-button>
        
      </el-form>
    </div>
     <div class="back_to_login">
          <router-link to="/home">Back to home</router-link>
        </div>
    </div>
   
    <div class="forget_end">
      <div class="forget_copyright">Copyright © 2021 All rights reserved.</div>
    </div>
  </div>
</template>
<script>
 import qs from 'qs'
export default {
  data() {
    return {
      message:this.$store.state.email,
 
       buttoncode:{
          background:'#FA4E4E',
          color:'#FFF'
        },
 selfsubmitbutton:{
        
         background: '#FA4E4E',
         color: '#FFFFFF'


},

      
      dialogRegisterVisible: false,
      registerForm: {
        email: "",
        code: "",
      
        enterPassword: ""
      },
      codeBtnWord: "Send Code",
      
      registerFormrules: {
        email: [
          {
            required: true,
            message: "Please input your email",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Please enter an email containing @",
            trigger: ["blur", "change"]
          }
        ],
        code: [
          {
            required: true,
            message: "Enter the email verification code",
            trigger: "blur"
          },
          
        ],
       
        enterPassword: [
          {
            required: true,
            message: "Please create your password",
            trigger: "blur"
          },
           {pattern:new RegExp('^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{6,16}$'),message:'The password is 6-16 digits and must contain three types: uppercase letters, lowercase letters, numbers or special characters', trigger:  ["blur", "change"]}
     
          // {validator: (rule, value, callback) => {
          //     if (value === "") {
          //       callback(new Error("密码不能为空"));
          //     } 
              // else if (value != this.registerForm.creatPassword) {
              //   callback(new Error("两次输入不一致"));
              // } 
          //     else {
          //       callback("恭喜你");
          //     }
          //   },
          //   trigger: "blur"
          // }
        ]
      },
      waitTime: 60
    };
  },
  computed: {
    getCodeBtnDisable: {
      get() {
        if (this.waitTime == 60) {
          if (this.registerForm.email) {
            return false;
          }
          return true;
        }
        return true;
      },
      set() {}
    }
  },

  methods: {
   async getCode() {
      if (this.registerFormrules) {
       let params='';
        params= this.registerForm.email;
        var data ={email:params}
        const datas=qs.stringify(data)

        // 调用获取短信验证码接口
 const res =await this.axios({
  method:'post',

  headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url:"v1/user/sendEmailCode",
    data:datas
 })

     if(res.status !==200){


     }else{
     alert('send success')

     }

        // 因为下面用到了定时器，需要保存this指向
        let that = this;
        that.waitTime--;
        that.buttoncode.background = `#D5D5D5`;
        that.getCodeBtnDisable = true;
        that.codeBtnWord = this.waitTime;
        let timer = setInterval(function() {
          if (that.waitTime > 1) {
            // console.log(timer);     
                  that.waitTime--;
            that.codeBtnWord = that.waitTime+'s';
            //  that.buttoncode.background=`#D5D5D5`
          } else {
            clearInterval(timer);
            that.codeBtnWord = "Send Code";
            that.getCodeBtnDisable = false;
            that.buttoncode.background = `#FA4E4E`;
            that.waitTime = 60;
          }
        }, 1000);
      }
     },
    submit() {

      this.$refs.registerFormRef.validate(async (valid) => {

        if (!valid) return false
        
       var data ={email:this.registerForm.email,code:this.registerForm.code,password:this.registerForm.enterPassword}

       const datas=qs.stringify(data)

      //  const datas=qs.stringify(data)


       const res =await this.axios({
         method:"post",
         headers: { 'content-type': 'application/x-www-form-urlencoded' },
   
         url:"v1/user/resetPassword",
         data:datas
       })
       if(res.data.msg!=="Reset password successfully!"){
 
         alert('chance failure')
       }
       else{
         this.$router.push('/successful')
  
         

       }
        //    if(!valid) return false
        //    const { data:res} = await this.$http.post('register',this.registerForm)
        //    if(res.meta.status !==200) return this.$message.error('注册失败')
        //    this.$message.success('注册成功')
        //    window.sessionStorage.setItem('token',res.data.token)
      });
    }
  }
};
</script>
<style lang="less" scope>
@import "../assets/fonts/font.css";
 
.forget_container {
width: 1920px;
height: 900px;
  // height: 1080px;
  // position: relative;
}
.forget-title {
  position: absolute;
  left: 764px;
  top: 168px;
  height: 54px;
  width: 900px;
  font-size: 46px;
  font-family: Raleway-SemiBold, Raleway;
  font-weight: 600;
  color: #a40000;
  line-height: 54px;
}
.forget_form {
  position: absolute;
  top: 205px;
  left: 735px;
  width: 450px;
  height: 50px;
}
.forget_form > .el-form {
  position: absolute;
  top: 83px;
  left: 0;
}
.forget_container .el-input--medium .el-input__inner {
  height: 50px !important;
}
.forget_container .forget_containerspan {
  margin-bottom: 10px;
  margin-top: 35px;
  height: 28px;
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #000000;
  line-height: 28px;
}
.el-button.disabled-selfstyle {
  background: #d5d5d5;
}
.back_to_login {

  text-align: center;
  position: absolute;
  top: 726px;
  left: 910px;
 
}
.back_to_login > a {
  line-height: 22px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #fa4e4e;
 
}
.forget_end {
  position: absolute;
  top: 1000px;
width: 1920px;
  height: 80px;
  background-color: #333;
}
.forget_copyright {
  height: 12px;
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 400;
 
  line-height: 12px;
  position: absolute;
  top: 32px;
  left: 856px;
}
.selfsubmitbutton{

        width: 450px;
        height: 50px;
       
     
        font-size: 20px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
       position: absolute;
       margin-top: 29px;
        line-height: 28px
      
}

   .buttoncoded {
        width: 144px;
        height: 50px;
        background: #FA4E4E;
        color: #FFF;
      
      }
      .inputemail{
        width: 450px !important;
      }
      .inputver_code{
        width: 286px !important;
      }
      .forget_email{
        font-size: 20px;
font-family: PingFangSC-Medium, PingFang SC;
font-weight: 500;
color: #000000;
line-height: 28px;
margin-bottom: 10px;
// margin-top: 10px;
display: inline-block;
      }
  .forget_container{
    width: 1920px;
    height: 900px;
  }
html, body, #app{
    height: 0;
  }
.el-form-item__error{
  display: none;
}
.code_tip{
  position: absolute;
  top: 200px;
  color: #FA4E4E;
  font-size: 12px;
  left: 157px;
}
</style>
