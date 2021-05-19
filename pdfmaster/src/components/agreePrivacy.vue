<template>
  <div class="agreeprivacy-body">
  
  
      <div class="router-link-a">
        <router-link to="/privacy" tag="div" class="rl_1">Privacy policy</router-link>
        <router-link to="/termsService" tag="div" class="rl_2">Terms of service</router-link>
        <router-link to="/returnPolicy" tag="div" class="rl_3">Return policy</router-link>
       <router-link to="/Intelictual" tag="div" class="rl_4">Intelictual propertyights</router-link>
       <router-link to="shipinformation" tag="div" class="rl_5">Shipping information</router-link>
        <router-view></router-view>
      </div>
      <!-- 协议部分 -->
      
  <div class="footer agreeprivacy_footer">
    <div class="footer-title"> <img class="footer-logo-a" src="../assets/css/footer/footerlogo.png" alt=""></div> 
    <div class="fengexian_1"></div>
    <div class="footer-content">
        <div class="footer-content-list">
     <dl>
         <dt><span>APPs</span></dt>
       
         <dd><span @click="downAgreeFootMac()">Mac download</span></dd>
         <dd><span @click="downAgreeFootWin()">Windows download</span></dd>
     </dl>
     <dl>
         <dt><a href="">Product</a></dt>
         <dd> <router-link to="/Subscription">Subscription</router-link></dd>
       
         
     </dl>
     <dl>
         <dt>
              <a href="https://www.geekpandashare.com/agreePrivacy" class="tab_banner">SUPPORT & SERVICE</a>
         </dt>
         <dd>
         <a href="http://www.geekpandashare.com/privacy">Privacy policy</a> </dd>
       <dd>
       <a href="http://www.geekpandashare.com/termsService">Terms of service</a>
       </dd> 
       <dd>
       <a href="http://www.geekpandashare.com/returnPolicy">Return policy</a></dd> 
       <dd>
       <a href="http://www.geekpandashare.com/Intelictual">Intelictual propertyights</a></dd>
       <dd>
       <a href="http://www.geekpandashare.com/shipinformation">Shipping information</a></dd>
     </dl>
     <dl>
         <dt><router-link to="/aboutus" >About</router-link></dt>
         <dd><router-link to="/aboutus">About us </router-link></dd>
         <dd><router-link to="/contactus" >Contact us</router-link></dd>
     </dl>
        </div>
        <div class="fengexian_2"></div>
        <div class="footer-free-download">
            <div class="footer-free-text">Download and experience the  all-aound<br> PDF editing artifact for free,right now!</div>
        <button @click="downloadfree_c()" class="download__free"><img src="../assets/css/main-master/download.png" alt="" class="download-icon"> <span class="free-download">TRY IT FREE</span></button>
         <!-- <el-dropdown>
            <el-button style="border: none; padding: 0;">
                <img src="../assets/css/main-master/download.png" alt="" class="download-icon"> <span class="free-download">FREE DOWNLOAD</span>
            </el-button>
            <el-dropdown-menu slot="dropdown" style="background-color: #ffedbf;padding: 6px;" >
               <div name="downloadfile"  @click="downloadMac_e()" >
              <el-dropdown-item  > For Mac OS</el-dropdown-item></div> 
              <div name="downloadfile"  @click="downloadwin_e()" >
                  <el-dropdown-item >For Windows 64bit</el-dropdown-item>
              </div>
              
            </el-dropdown-menu>
          </el-dropdown> -->
        </div>
    </div>
  <a href="https://www.facebook.com/PDFmaster-100262032163325/" ><img src="../assets/css/footer/facebook.png" alt="" class="foot-face"></a>
  <a href="https://www.youtube.com/channel/UCUUVYvRCCS7fGPheVCdTuBA/" ><img src="../assets/css/footer/youtu.png" alt="" class="foot-youtu"></a>
  <a href="https://twitter.com/GeekPanda4" ><img src="../assets/css/footer/twi.png" alt="" class="foot-twi"></a>
  </div>
      <div class="end agreeprivacy_end">
        <div class="copyright subscription_copyright">
          Copyright © 2021 All rights reserved.
        </div>
      </div>
    </div>

</template>
<script>
export default {
  name: "",
  data(){
return {
  
}
  },
  methods:{
    downAgreeFootMac(){
    this.downloadfree_c()
    },
    downAgreeFootWin(){
      this.downloadfree_c()
    },
  async downloadfree_c(){
               var agent = navigator.userAgent.toLowerCase();
               var isMac = /macintosh|mac os x/i.test(navigator.userAgent);
            if (agent.indexOf("win64") >= 0 || agent.indexOf("wow64") >= 0) {
        
               const params= {
                   hitType: 'event',
                   eventCategory: 'Windows',
                   eventAction: 'download',
                   eventLabel: 'download win'
                }
             window.ga('send',params)
            // gtag("event", "begin_checkout", {

            //     items: [{
            //       id: "win",
            //           name: "win",
            //           }]
            //  });
            //  gtag('event', 'add_to_cart', {

            //    items: [{
            //       id: "win/mac",
            //       name: "win/mac"
            //    }]
            //   });
            //  fbq('trackCustom', 'downloadWin')
               fbq('track', 'InitiateCheckout');
                fbq('track', 'AddToCart');
             const res = await this.axios({
                 method:'get',
                 url:'v1/file/downList', 
             })   
             
                 console.log(res.data);
                const data =  res.data.data.exe
                let a =document.createElement('a');
                a.href=data;
                a.click()
    }
         if(isMac){
          //your code
          
          const params= {
                   hitType: 'event',
                   eventCategory: 'Mac',
                   eventAction: 'download',
                   eventLabel: 'download mac'
                }
             window.ga('send',params)
            // gtag('event','add_payment_info')
            //   gtag('event', 'add_to_cart', {

            //    items: [{
            //    id: "win/mac",
            //    name: "win/mac"
            //    }]
            //   });
            //  fbq('trackCustom', 'downloadMac')
               fbq('track', 'AddPaymentInfo');
              fbq('track', 'AddToCart');
              const res = await this.axios({
                 method:'get',
                 url:'v1/file/downList', 
             })
             console.log(res.data.data.dmg);
                const data =  res.data.data.dmg
                let a =document.createElement('a');
                a.href=data;
                a.click()
    }
               }
  }
};
</script>
<style lang="less" scoped>
.a_p_title {
  font-size: 46px;
  font-family: Raleway-SemiBold, Raleway;
  font-weight: 600;
  color: #a40000;
  line-height: 54px;
  position: absolute;
  top: 177px;
  left: 552px;
}
.agreeprivacy-body {
width: 1920px;
  // height: 2419px;
  background: #f9f9f9;
}
// .agreeprivacy_p {
//   width: 1066px;
//   height: 1506px;
//   position: absolute;
//   top: 0px;
//   left: 332px;
//   background: #ffffff;
//   border-radius: 6px;
// }
.router-link-a {
  width: 292px;
  height: 1506px;
  background: #ffffff;
  border-radius: 6px;
  position: absolute;
  top: 301px;
  left: 262px;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
  line-height: 56px;
  text-align: left;
  padding-left: 16px;
}
.router-link-active {
  font-size: 18px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #333333;
  line-height: 25px;
  width: 276px;
  height: 56px;
  background: rgba(253, 202, 202, 0.59);
  border-radius: 6px;
  line-height: 56px;
  border-left: 7px solid #feb900;
  padding-left: 16px;
}
.rl_1 {
  position: absolute;
  left: 8px;
  padding-left: 16px;
}
.rl_2 {
  position: absolute;
  left: 8px;
  top: 72px;
  padding-left: 16px;
}
.rl_3 {
  position: absolute;
  left: 8px;
  top: 144px;
  padding-left: 16px;
}
.rl_4 {
  position: absolute;
  left: 8px;
  top: 216px;
  padding-left: 16px;
}
.rl_5{
  position: absolute;
  left: 8px;
  top: 288px;
  padding-left: 16px;
}

.agreeprivacy_footer{
  position: absolute;
 top: 1879px;
}
.agreeprivacy_end{
  position: absolute;
top: 2339px;
}

</style>
