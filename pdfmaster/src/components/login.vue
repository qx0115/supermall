<template>
<div>
 
   <div class="header"  :style="this.$route.path=='/Subscription'?'background:linear-gradient(90deg, #290B65 0%, #5C146B 19%, #EA2578 50%, #5C146B 82%, #290B65 100%)':'background:#A40000' " >
   <!-- <div class="header"> -->
   
        <span class="header_logo"><img src="../assets/css/footerlogo-02.png" alt="" /></span>
      
             
    <span class="router_banner">
        <div class="zhanwei">             
        </div>
        <span class="zhanwei2"></span>
    <router-link to="/home"  class="tab_banner ">HOME</router-link><span class="zhanwei3"></span>

   <div class="main_drop_sub" ><router-link  to="/Subscription" class="tab_banner ">SUBSCRIPTION</router-link>
 
       <ul class="dropdown_sub">
         <li><router-link to="/Subscription" class="drop_down_a">for Month</router-link></li>
         <li><router-link to="/Subscription" class="drop_down_a">for Quarterly</router-link></li>
         <li><router-link to="/Subscription" class="drop_down_a">for Year</router-link></li>
         <li><router-link to="/discount" class="drop_down_a">Limit discounts</router-link></li>
       </ul>
     
   </div>
     <span class="zhanwei3"></span>
     <div class="main_drop_sub main_drop_about" >
     <router-link to="/aboutus" class="tab_banner ">ABOUT</router-link>
      <ul class="dropdown_about">
         <li><router-link to="/aboutus" class="drop_down_a">About us </router-link></li>
         <li><router-link to="/contactus" class="drop_down_a">Contact us</router-link></li>
        
       </ul>
     </div>
     <span class="zhanwei4"></span>
     <div class="main_drop_sub" >
     <router-link to="/privacy" class="tab_banner">SUPPORT & SERVICE</router-link>
     <ul class="dropdown_serv">
         <li><router-link to="/privacy" class="drop_down_a">Privacy policy</router-link></li>
         <li><router-link to="/termsService" class="drop_down_a">Terms of service</router-link></li>
         <li><router-link to="/returnPolicy" class="drop_down_a">Return policy</router-link></li>
         <li><router-link to="/Intelictual" class="drop_down_a">Intelictual propertyights</router-link></li>
           <li><router-link to="shipinformation" class="drop_down_a">Shipping information</router-link></li>
       </ul>
     </div>
       <div class="zhanwei10"></div>
       
    <router-view></router-view>
  
   </span>
        
        
        
       
         <div class="login__user">
      
          <button v-if="!showname"  type="email" class="selflogin" @click="opendialog()">SIGN IN</button>
          <span class="user__info" v-if="showname">
              <div v-cloak v-clickoutside="outsideClose"  class="user_dropdown">
                    <div :class="['isactive'?'dropbtn':'yellow_drop']">
                    <img @click="user_show = !user_show"  src="../assets/css/header_normal.svg" alt="" class="user_small">
                </div>
                  <div class="user_dropdown_content" v-show="user_show">
                      <div to="user-info"  class="user_dropdown_list">{{this.$store.state.email}}</div>
                    
                      <router-link to="userinformation"  tag="div" class="user_dropdown_list userinformation">User Information</router-link>
                      <router-link to="purchaseHistory"  tag="div" class="user_dropdown_list purchase">Purchase History</router-link>
                      
                      <div to="退出登录" tag="div" class="user_dropdown_list signout">
                          <hr ><div class="user_dropdown_list_span" @click="signOut">Sign Out</div> </div>
                     

                  </div>
              </div>

              
          </span>
       
          </div> 
<el-dialog 
:show-close="false"
:visible.sync="dialogLoginVisible"
 >
 <img class="dialoglogo"  src="../assets/css/dialoglogo.png" alt="">
 <el-row :gutter="100" style="margin:0px">
 
  <el-col :offset="11" style="padding-left:0px;padding-right:0px">
    <div class="login_sign"><span>SIGN IN</span>  <img class="close_btn" src="../assets/css/closedialog.png" alt="" @click="closebtn()"></div>
  </el-col>
   
     <!-- <img class="close_btn" src="../assets/css/closedialog.png" alt="" @click="closebtn()"> -->
   
</el-row>
<el-row :gutter="100" style="margin:0px"></el-row>
 
  <el-col :span="13" :offset="11"><div>  <el-form 
     :model="loginForm"
     size="medium"
      :rules="loginFormrules" ref="loginFormRef" class="loginhome" >
     
      <span class="login__email">Email:</span>
 <el-form-item  prop="email" >
   <div class="sjkdn">  <el-input ref="loginformemailref" @input="focusfns" @change="blurfns" class="loginformemail" v-model="loginForm.email"  placeholder="Please input your email"  > </el-input><img  v-show="isCloseform" @click="closeform()" class="closeform" src="../assets/css/closeform.png" alt=""></div>
  </el-form-item>
   <span class="login__email">Passwords:</span>
  <el-form-item  prop="password">
    <el-input show-password type="password"  v-model="loginForm.password" placeholder="Please enter password"  ></el-input>

  </el-form-item>
  <!-- 记住密码区 -->
  <el-form-item class="foot_log">
      <!-- 设置忘记密码和记住密码为行内样式 -->
       <el-row type="flex" justify="space-between">
           <el-col :span='10'>
               <el-checkbox v-model="checked">Remember login</el-checkbox>
           </el-col>
           <el-col :span="10"  >
         <span @click="isForget()">  <router-link class="forpass" to="forgetpassword">Forget password?</router-link></span>
           </el-col>
           </el-row>
       
  </el-form-item>
  <!-- button按钮登陆区 -->
  
  </el-form>
  </div>
  </el-col>

 
 
   <span slot="footer" class="dialog-footer">
     <span class=" userexit">
       {{tip}}
     </span>
     <el-button  type="danger"  @click="login"  >Sign in</el-button>
         <div class="agreement">
             <!-- <el-link type="danger" @click="dialogRegisterVisible = true" >Register an account</el-link> -->
        <span> Click “Sigh in” to agree to the <br><span @click="isPricy()"><router-link to="/privacy" class="login_pri_agree" >privacy statement</router-link> </span> and <span @click="isAgreement()"><router-link to="/termsService" class="login_pri_agree" >user agreement </router-link></span></span>
          </div>
   </span>
     
</el-dialog >


<!-- 注册按钮注册按钮注册按钮注册按钮 -->
        <!-- <el-button :style="[selfregister]" @click="dialogRegisterVisible = true">register</el-button>
        <el-dialog 
           title="REGISTER" 
           width="900px" 
          :visible.sync="dialogRegisterVisible"
          >
          <span :style="left"><img src="../assets/css/dialoglogo.png" alt=""></span>
          <el-form 
          :model='registerForm'
          :rules='registerFormrules'
          ref="registerFormRef"
          :style="right" label-width="45px"
          >
           <span :style="loginEmail">Email:</span>
           <el-form-item  prop="email">
              <el-input    v-model="registerForm.email" placeholder="Please input your email" clearable></el-input>
           </el-form-item> -->
           <!-- 原来发送验证码注册位置原来发送验证码注册位置原来发送验证码注册位置原来发送验证码注册位置原来发送验证码注册位置原来发送验证码注册位置 -->
           <!-- <span :style="loginEmail">E-mail verification:</span>
           
                  <el-form-item prop="code">
                     <el-input  type="tel" v-model="registerForm.code" placeholder="Enter the email verification code"> <img src="../assets/css/accept.svg" alt=""></el-input>
                 </el-form-item> -->
         
             <!-- <el-button @click="getCode()" :class="{'disabled-style':getCodeBtnDisable}" :disabled="getCodeBtnDisable">{{codeBtnWord}}</el-button> -->
        
        <!-- 创建密码 -->
           <!-- <span :style="loginEmail">Create password:</span>
           <el-form-item  prop="creatPassword">
              <el-input show-password type="password" v-model="registerForm.creatPassword" placeholder="Please create a password"></el-input>
           </el-form-item> -->
<!-- 原来确认密码区域 -->

           <!-- <el-form-item  prop="enterPassword">
              <el-input show-password type="password" v-model="registerForm.enterPassword" placeholder="Please confirm your password"></el-input>
           </el-form-item> -->

           <!-- 提交注册 -->
           <!-- </el-form>
            <span slot="footer" class="dialog-footer">
          <el-button  type="danger"  @click='submitForm'>Register</el-button>
         <div class="register-agree">
             Click "register" to agree to the <br> 
             <a href="">privacy statement</a>
             and
              <a href="">user agreement</a>
        </div>
            </span>
        </el-dialog>   -->
    </div>
</div>
</template>
<script>
import Clickoutside from 'element-ui/src/utils/clickoutside'
import AES from '../utils/AES'
 import qs from 'qs'
 let Base64 = require('js-base64').Base64
import DES from '../utils/DES'
// import { mapMutations } from 'vuex';
import Home from './Home.vue'
import Subscription from './Subscription.vue'

export default{
  components: { Home, Subscription },
  
name:'',
data(){
  return {
     tip:'',
    
     activeIndex: '1',
        activeIndex2: '1',
            isCloseform:false,
               user_show:false,
                // 判断是否登陆
                showname:false,
                activeName: 'second',
              
                
                checked:true,
                // 控制登陆弹框的显示与隐藏
                dialogLoginVisible:false,
                // 添加邮箱登陆表单数据
                loginForm:{
                 email:'',
                  password:"",
                },
                // 控制注册框的显示与隐藏
                dialogRegisterVisible:false,
                // 邮箱注册验证表单
                // registerForm:{
                //   email:'123@huashenggroups.com',
                //   code:'111111',
                //   creatPassword:'111111',
                //   enterPassword:"111111"
                //   email:'',
                //   code:'',
                //   creatPassword:'',
                //   enterPassword:""
                // },
                codeBtnWord:'Send Code',
               
            //    dialog样式
             left:{
               margin:0,
              padding:0,
              color:'#FA4E4E',
              heigh:"100%",
              heigh:"1920px",
              background:"#FA4E4E",
              display:"block",
              float:'left',
              position: 'absolute',
              top:'182px',
              left:'118px'
             },
             right:{
             position:'absolute',
             top:'115px',
             left:'360px',
          },
           loginEmail:{
          margin:'45px',
          lineHeight:'40px',  
          
          },

         
                // 邮箱登陆页面验证规则对象
                loginFormrules:{
                   email:[
                       { required: true, message: 'Please input your email', trigger: 'blur' },
                       { type: 'email', message: 'Please enter an email containing @', trigger: ['blur', 'change'] }
                   ],
                   password:[
                       {required:true, message:'The password is 6-16 digits and must contain three types: uppercase letters, lowercase letters, numbers or special characters',trigger:'blur'},
                       {pattern:new RegExp('^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{6,16}$'),message:'The password is 6-16 digits and must contain three types: uppercase letters, lowercase letters, numbers or special characters', trigger: 'blur'}
                       
                   ]
                },
                // 邮箱注册页面验证规则对象
                // registerFormrules:{
                //     email:[
                //        { required:true,message:'Please input your email',trigger:'blur'},
                //        {type:'email',message:'Please enter an email containing @',trigger: ['blur', 'change']}
                //     ],
                //     code:[
                //         { required:true, message:'Enter the email verification code', trigger:'blur'},
                //         { min:6,max:6,message:'The verification code is incorrect, please re-enter',trigger: ['blur', 'change']}
                //     ],
                //     creatPassword:[
                //         {required:true,message:'Please create a password',trigger:'blur'},
                //          {min:6,max:16,trigger:'blur'}
                //     ],
                //     enterPassword:[
                //         {required:true,message:'Please confirm your password',trigger:'blur'},
                //         {validator:(rule,value,callback)=>{
                //             if(value===''){
                               
                //                 callback(new Error('确认密码不能为空'))
                               
                //               }else if(value!=this.registerForm.creatPassword){
                //                   callback(new Error('两次输入不一致'))
                //               }else{
                //                   callback("恭喜你")
                //               }
                //         },trigger:'blur'}
                //     ]
                // },
                waitTime:61,

                // 修改elementUI样式
                selflogin:{
                    width: '75px',
                    height: '36px',
                    background: '#FFB900',
                    border: 'none',
                    borderRadius: '6px',
                    position: 'absolute',
                    left: '1585px',
                    top: '14px',
                    fontSize: '16px',
                    fontFamily: 'PingFang SC',
                    fontWeight: 400,
                    color: '#FFFFFF',
                },
                // 注册按钮样式 注册按钮样式注册按钮样式注册按钮样式注册按钮样式注册按钮样式注册按钮样式
            // selfregister:{
            //       position: 'absolute',
            //       width: '100px',
            //       height: '42px',
            //       backgroundColor: '#A40000',
            //       border: '1px solid #FFB900',
            //       borderRadius: '6px',
            //       top: '27px',
            //       left: '1560px',
            //       fontSize: '16px',
            //       fontFamily: 'PingFang SC',
            //       fontWeight: 400,
            //      color: '#FFFFFF',
            //   },
              stepMap:0
                
              
            }
        },
      
        directives: {
      clickoutside: {
        bind(el, binding, vnode) {
          function documentHandler(e) {
            if (el.contains(e.target)) {
              return false
            }
            if (binding.expression) {
              binding.value(e)
            }
          }

          function KeyUp(e) {
            if (e.keyCode == 27) {
              if (binding.expression) {
                binding.value(e)
              }
            }
          }
          el.__vueClickOutSize__ = documentHandler
          el.__vueKeyup__ = KeyUp
          
          document.addEventListener('keyup', KeyUp)
          document.addEventListener('click', documentHandler)
        },
        unbind(el, binding) {
          document.removeEventListener('click', el.__vueClickOutSize__)
          delete  el.__vueClickOutSize__

          document.removeEventListener('keyup', el.__vueKeyup__)
          delete  el.__vueKeyup__
        }
      }
    }, 
    created(){
   if(this.$store.state.token =="undefined"||this.$store.state.token ==null){
       
                 this.user_show=true;
                 this.showname=false
     }else{
       this.user_show=false;
       this.showname=true
     }
  
    },

  
    updated(){
   if(this.$store.state.token =="undefined"||this.$store.state.token ==null){
       
                 this.user_show=true;
                 this.showname=false
     }else{
       this.user_show=false;
       this.showname=true
     }
     
    },
    
        computed:{
           getCodeBtnDisable:{
             get(){
             if(this.waitTime == 61){
                if(this.registerForm.email){
                    return false
                }
                return true
            }
            return true
        },
        
    }
        },
        
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
           
        },
      
        
        updated(){
             if(this.$store.state.token =="undefined"||this.$store.state.token =="null"){
       
                 this.user_show=true;
                 this.showname=false
            
     }  
        },
        destroyed() {
            document.removeEventListener('scroll', this.handleScroll)
            document.body.scrollTop = document.documentElement.scrollTop = 0
        },
        methods: {
           

            //    ...mapMutations(['changeLogin']),
            showActive(index) {
                this.active = index
            },
            showChange(index){
                this.change = index
            },
             handleClick(tab, event) {
        // console.log(tab, event);
      },
       handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      closeform(){
console.log(1111111);
    this.$refs.loginFormRef.resetFields();

      },
focusfns () {
  // console.log(this.$refs.loginformemailref.value);
if(this.$refs.loginformemailref.value=="a"){
  console.log(this.$refs.loginformemailref.value);
  this.isCloseform=false
}else{
  this.isCloseform=true
}
},
blurfns () {
  if(this.$refs.loginformemailref.value ==""){
    this.isCloseform=false
  }
},
      
            // 回到顶部
           
            // checkEmail(){
            //     this.errorMsg1='';
            //     if(
            //         this.loginForm.email !==this.currentEmail&&
            //         this.loginForm.email
            //     ){
            //         var checkForm = {
            //             email:this.loginForm.email
            //         };
            //         let param = {
            //             token: this.$store.state.token,
            //             checkLoginForm:checkForm
            //         };
            //         userCheck(param).then(res=>{
            //             console.log("校验",res);
            //             if(res.data.respCode !=='00000'){
            //                 thos.errorMsg1 =res.data.respCode;
            //             }
            //         })
            //     }
            // },
        //    头像点击
        outsideClose() {
        this.user_show = false
      
    },
    closebtn(){
       this.dialogLoginVisible=false
      },
      isForget(){
        this.dialogLoginVisible=false
      },
      opendialog(){
        this.dialogLoginVisible=true;
      
           const params= {
                   hitType: 'event',
                   eventCategory: 'dialog',
                   eventAction: 'click',
                   eventLabel: 'open sign in dialog'
                }
             window.ga('send',params)
              fbq('trackCustom', 'openlogindialog')
           
      },
    isPricy(){
      
  this.dialogLoginVisible=false
    },
     isAgreement(){

   this.dialogLoginVisible=false
     } , 
            login(){
                const params= {
                   hitType: 'event',
                   eventCategory: 'login',
                   eventAction: 'click',
                   eventLabel: 'click label'
                }
                 window.ga('send',params)
                let that=this;
             
                this.$refs.loginFormRef.validate(async valid=>{
         
                    
                    if(!valid) return false
                    var data={email:this.loginForm.email,password:this.loginForm.password}
                    
 
                   data=JSON.stringify(data)

                  
                  
                    var data=AES.encrypt(data)
        
                    var data=DES.encrypt(data)
                    // console.log(data);
                    var data=Base64.encode(data)
                    // console.log(data);
                    var data ={params:data}
                    // console.log(data);
                    var data =JSON.stringify(data)

                    const res = await this.axios({
                           method:"post",
                           url:'v1/user/register',
                           data:data
                       })
                  var data =res.data
                  var data=Base64.decode(data)
                   //  console.log(data);
                    var data=DES.decrypt(data)
                    //  console.log(data);
                     var data=AES.decrypt(data)
       
                     var datas =JSON.parse(data)
         
                    
            
              if(datas.code !==200) {
             this.dialogLoginVisible=true

             this. tip='The user mailbox already exists or the password is wrong'
      
            }
              // else if(datas.msg=='The email  already exists, Login successful !'){
              //   this.dialogRegisterVisible=true
              // }
              else{
                 
                 this.dialogLoginVisible=false
                 this.$store.commit('set_token',datas.data.token)
                 console.log(datas.data.token);
                 this.$store.commit('set_email',datas.data.email)

                 this.user_show=false;
                 this.showname=true
                }
               
              })
             
              fbq('trackCustom', 'login')
            },
       async  signOut(){
          fbq('trackCustom', 'logout')
               let params = '';
               params = this.$store.state.token
               var data = {token:params}
                const datas=qs.stringify(data)
                const res =await this.axios({
                  method:'post',
                  headers: { 'content-type': 'application/x-www-form-urlencoded' },
                  url:"v1/user/logout",
                  data:datas
                               })
                   console.log(res.status);
                 if(res.status !==200){

                  }else{
                  window.sessionStorage.removeItem('token')
                  window.sessionStorage.removeItem('email')
                  this.$store.commit('set_email')
                  this.$store.commit('set_token')
                    // console.log('token');
                  window.location.reload()
                    }            
            }
           
        }
          // 原来注册逻辑原来注册逻辑原来注册逻辑原来注册逻辑原来注册逻辑
    //        getCode(){
    // if(this.registerFormrules){
    //     let params = {}
    //     params.email = this.registerForm.email
    //     // 调用获取短信验证码接口
    //     this.$http.post('register',params).then(res=>{
    //         res = res.data
    //         if(res.status==200) {
    //             this.$message({
    //                 message: '验证码已发送，请稍候...',
    //                 type: 'success',
    //                 center:true
    //             })
    //         }
    //     })
    //     // 因为下面用到了定时器，需要保存this指向
    //     let that = this
    //     that.waitTime--
    //     that.getCodeBtnDisable = true
    //     this.codeBtnWord = `${this.waitTime}`
    //     let timer = setInterval(function(){
    //         if(that.waitTime>1){
    //             that.waitTime--
    //             that.codeBtnWord = `${that.waitTime}s `
    //         }else{
    //             clearInterval(timer)
    //             that.codeBtnWord = 'Send Code'
    //             that.getCodeBtnDisable = false
    //             that.waitTime = 61
    //         }
    //     },1000)
    // }
    //     },

    // 原来提交注册逻辑原来提交注册逻辑原来提交注册逻辑原来提交注册逻辑原来提交注册逻辑
        // submitForm(){
        //     this.$refs.registerFormRef.validate(async valid=>{
        //         if(valid){
        //                setTimeout(()=>{
        //                    alert('成功')
        //                },400);
        //             } else{
        //                 console.log('error submit');
        //                 return false
        //             }







            //    if(!valid) return false
            //    const { data:res} = await this.$http.post('register',this.registerForm)
            //    if(res.meta.status !==200) return this.$message.error('注册失败')
            //    this.$message.success('注册成功')
            //    window.sessionStorage.setItem('token',res.data.token)
            // })
        // } 
}
</script>
<style lang='less' scoped>
li{
  list-style: none;
}
.router_banner,
.el-checkbox__label,
.login_pri_agree{
  font-size: 16px !important;
  font-family: PingFangSC-Regular, PingFang SC !important;
  font-weight: 400 !important;
}

.selflogin{
    width: 100px!important;
    height: 36px!important;
    background-color: #FFB900!important;
    border: none!important;
    border-radius: 6px!important;
    position: absolute!important;
    right: 260px!important;
    top: 14px!important;
    font-style: 16px!important;
    font-family: PingFang SC!important;
    font-weight: 400!important;
    color: #FFFFFF!important;

font-size: 16px;
                
}
.router_banner{
.el-checkbox__label {
  color: #333333 !important;
  line-height: 22px !important;
}
.login_pri_agree{
color: #FA4E4E !important;
line-height: 22px !important;
}


.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #FA4E4E !important;
    color: #FA4E4E !important;
    border-color:#FA4E4E !important
}

.el-checkbox__inner:hover {
border-color: #FA4E4E !important;
}
    .changeregister{
        text-align: center;
        position: absolute;
        top: 487px;
        left: 555px;
    }
  
    // 注册发送验证码
    .el-button.disabled-style {
    background-color: #eee;
    color: #CCCCCC;
}
.register-agree{
     position: absolute;
     top: 487px;
     left: 505px;
     font-size: 14px;
     font-family: PingFangSC-Regular, PingFang SC;
     font-weight: 400;
     color: #FA4E4E;
     line-height: 16px;
     width: 251px;
     text-align: center;
}

.register-agree>a{
    text-decoration: #fa4e4e;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FA4E4E;
    line-height: 16px;
    text-decoration: underline;
}
   

    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 22px;
}
.zhanwei{
    width: 1920px;
    height: 20px;
}
.zhanwei2{
    display: inline-block;
    width: 699px;
}
.zhanwei3{
    width: 61px;
    display: inline-block;
    // height: 50px;
}
.zhanwei4{
  width: 45px;
  display: inline-block;
}
// .zhanwei10{
//   width: 1920px;
//   height: 23px;
//   display: block;
//   background-color: rgb(164, 0, 0);
//   z-index: 100000;
// }
// .tab_banner{
//   position: absolute;
//   top: 38px; 
// }
// .tab_home{
//     left: 767px;
// }
// .tab_sub {
//     left: 887px;
// }
// .router-link-active{

// height: 22px !important;
// font-size: 16px;
// font-family: PingFangSC-Semibold, PingFang SC !important;
// font-weight: 600 !important;

// line-height: 22px !important;
// }
.el-input__inner {
  width: 450px !important;
 
}
.el-input--medium .el-input__inner {
  height: 50px !important;
}
.forpass{
  color: #FA4E4E;
  text-align: right;
  display: block;
}
 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .login_sign{
width: 450px;
height: 33px;
font-size: 24px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #000000;
line-height: 33px;
  }
  .login__email{

    height: 35px;
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000;
    line-height: 28px;
    margin-bottom: 10px;
    display: inline-block;
  }
  .el-dialog>.el-input--medium .el-input__inner {
    height: 50px !important;
  }
  .dialoglogo{
    position: absolute;
    top: 182px;
    left: 118px;
    width: 136px;
    height: 159px;
  }
  .close_btn{
    width: 34px;height: 34px;
    float: right;

  }
  .agreement>.router-link-active{
    color:  #FA4E4E !important;
  }
  .foot_log{
    position: absolute;
    width: 450px;
    top: 350px;
  }
  .user_small{
    width: 36px;
    height: 40px;
  }
  // .closeform{
  //   position: absolute;
  //   width: 20px;
  //   height: 20px;
  //   left: 418px;
  //   top: 10px;
  //   display: none;
  // }
  .closeform{
    position: absolute;
    width: 20px;
    height: 20px;
    left: 418px;
    top: 10px;
    display: inline;
  }
.main_drop_sub{
  display: inline-block;
  height: 48px;

}
.main_drop_about{
  width: 80px;
  text-align: center;
  // display: block;
}

.dropdown_sub{
  width: 230px;
  height: 206px;
  display: none;
  position: absolute;
  background: #FFFFFF;
  box-shadow: 4px 6px 14px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 6px 6px;
}
.main_drop_sub:hover>.dropdown_sub{
  display: block;
  width: 230px;
  height: 206px;
  position: absolute;
  top: 67px;
  left: 756px;
  z-index: 999999;
  text-align: center;
  line-height: 40px;
}
ul>:first-child{
  margin-top: 20px;
}
li{
 width: 206px;
 height: 40px;
 margin-left: 12px;
 margin-right: 12px;

border-radius: 4px;
margin-top: 3px;
}
.drop_down_a{
    font-size: 16px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #333333;
line-height: 40px;
text-align: center;
}
li:hover .drop_down_a{

  font-size: 16px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #A40000;
}
li:hover{
   background: #F6F6F6;
}
.dropdown_about{
  width: 230px;
  height: 103px;
  display: none;
  position: absolute;
  background: #FFFFFF;
box-shadow: 4px 6px 14px 0px rgba(0, 0, 0, 0.1);
border-radius: 0px 0px 6px 6px;
}
.main_drop_sub:hover>.dropdown_about{
  display: block;
  width: 230px;
  height: 113px;
  position: absolute;
  top: 64px;
  left: 922px;
  z-index: 999999;
  text-align: center;
  line-height: 40px;
}
.dropdown_serv{
  width: 230px;
  height: 256px;
  display: none;
  position: absolute;
  background: #FFFFFF;
box-shadow: 4px 6px 14px 0px rgba(0, 0, 0, 0.1);
border-radius: 0px 0px 6px 6px;
}
.main_drop_sub:hover>.dropdown_serv{
  display: block;
  width: 230px;
  height: 256px;
  position: absolute;
  top: 64px;
  left: 1056px;
  z-index: 999999;
  text-align: center;
  line-height: 40px;
}
.userexit{
  position: absolute;
  bottom: 260px;
  left: 420px  ;
color: #F56C6C;
}
</style>
