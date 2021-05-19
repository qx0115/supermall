<template>
  <div class="subscription">

    <div class="miaosha">
      <div class="sub_download_total" @click="downloadfree_sdown()">
            <img src="../assets/css/subscription/download2.png" alt="" class="sub_download_png">
            <span class="download_total_num">{{downloadNum}}

            </span>
            <span class="sub_download_download">
                Downloads
            </span>
        </div>

      <!-- 弹幕横向 -->
      <div class="remind-block">
        <div class="marquee-block">
            <div class="marquee"  v-show='notice.id == current'  v-for='notice in noticeArr' :key="notice.id">{{notice.email}}</div>
            <div class="marqueeT" v-show='notice.id == current'  v-for='notice in noticeArr' :key="notice.id">{{notice.email}}</div>
        </div>
    </div>  

  <span class="miaosha_title">
60%OFF
  </span>
  <span class="miaosha_body">
    3-Day free trail, automatically renew, cancel any time.

  </span>
  <div class="miaosha_button">
  FREE TRAIL
  </div>

  <ul class="miaosha_time">
    <li>
      <span class="time_miaosha">
        {{d}}
      </span>
      <span class="time_time_miaosha">
     DAYS
      </span>
      <span class="miaosha_top">

      </span>
      <span class="miaosha_bottom">

      </span>
    </li>
    <li>
      <span class="time_miaosha">
        {{h}}
      </span>
       <span class="time_time_miaosha">
     HOURS
      </span>
        <span class="miaosha_top">
  
      </span>
      <span class="miaosha_bottom">

      </span>
    </li>
    <li>
      <span class="time_miaosha">
        {{m}}
      </span>
       <span class="time_time_miaosha">
     MINUTES
      </span>
        <span class="miaosha_top">
         
      </span>
      <span class="miaosha_bottom">

      </span>
    </li>
    <li>
      <span class="time_miaosha">
        {{s}}
      </span>
       <span class="time_time_miaosha">
     SECONDS
      </span>
        <span class="miaosha_top">
        
      </span>
      <span class="miaosha_bottom">
     
      </span>
    </li>
  </ul>
   </div>
   <div class="sub_style">
     <ul class="dropdown_sub_a">
         <li><router-link to="/Subscription" class="drop_down_a">for Month</router-link></li>
         <li><router-link to="/Subscription" class="drop_down_a">for Quarterly</router-link></li>
         <li><router-link to="/Subscription" class="drop_down_a">for Year</router-link></li>
         <li><router-link to="/discount" class="drop_down_a">Limit discounts</router-link></li>
       </ul>
        </div>
       
      <div class="subscription_pay">
        <!-- <div class="subscription_pay_title">
          Plans & Pricing
        </div>
        <div class="subscription_pay_content">
          Choose the right plan and get started in minutes.
        </div> -->

        <!-- 选择套餐位置 -->
          <div class="price-style">
    
      <div class="price_month">
        <span class="price_title">
          PDFmaster for 
        </span>
        <span class="price_title_2">Mac/Windows</span>
        <span class="price_now price_now_month">
          $9.99
        </span>
        <span class="price_before">
          $24.99
        </span>
        <span class="price_each">
          /Month
        </span>
        <span class="price_cancel">
          3-Day free trail <br>
Automatically renew, cancel any time
        </span>
        <button class="price_btn" @click="BuyMonth()">TRY FREE NOW</button>
      </div>

      <div class="change_price_year">
        <span class="change_price_title">
          PDFmaster for
        </span>
        <span class="change_price_title_2">Mac/Windows</span>
        <img
          src="../assets/css/subscription/popular.png"
          alt=""
          class="change_popular"
        />
        <span class="change_price_now">
          $34.99
        </span>
        <span class="change_price_before">
          $89.99
        </span>
        <span class="change_price_each ">
          /Year
        </span>
        <span class="change_price_cancel">
          3-Day free trail <br>
Automatically renew, cancel any time
        </span>
        <button class="change_price_btn" @click="changeyear()">TRY FREE NOW</button>
      </div>

      <div class="price_quarterly">
        <span class="price_title">
          PDFmaster for 
        </span>
        <span class="price_title_2">Mac/Windows</span>
        <span class="price_now">
          $14.99
        </span>
        <span class="price_before">
          $39.99
        </span>
        <span class="price_each">
          /Quarter
        </span>
        <span class="price_cancel">
        3-Day free trail <br>
Automatically renew, cancel any time
        </span>
        <button class="price_btn" @click="changequarterly()">TRY FREE NOW</button>
      </div>
    </div>
 
        <!-- <router-link to="month" tag="div" class="price_month_a"></router-link>
        <router-link to="year" tag="div" class="price_year_a"></router-link>
        <router-link
          to="quarterly"
          tag="div"
          class="price_quarterly_a"
        ></router-link>
        <router-view></router-view> -->
      </div>

    <div class="subscription_function">
      <div class="subscription_function_title">
        Functions and Advantages of PDFmaster
      </div>
      <ul class="function_pdf">
        <li
          class="function_list"
          v-for="(val, key, index) in list"
          :class="{ on: index % 2 == 0, off: index % 2 != 0 }"
          :key="index"
        >
          {{ val.name }}
          <img
            class="function_list_icon"
            src="../assets/css/subscription/duigou_icon.svg"
            alt=""
          /><span class="val_edition">{{ val.edition }}</span>
        </li>
      </ul>
    </div>
    <!-- 同首页footer -->
 <div class="footer subscription_footer">
    <div class="footer-title"> <img class="footer-logo-a" src="../assets/css/footer/footerlogo.png" alt=""></div> 
    <div class="fengexian_1"></div>
    <div class="footer-content">
        <div class="footer-content-list">
     <dl>
         <dt><span>APPs</span></dt>
       
         <dd><span @click="downSubFootMac()">Mac download</span></dd>
         <dd><span @click="downSubFootWin()">Windows download</span></dd>
     </dl>
     <dl>
         <dt><a href="">Product</a></dt>
         <dd> <router-link to="/Subscription">Subscription</router-link></dd>

       
         
     </dl>
     <dl>
         <dt>
              <router-link to="/privacy" class="tab_banner">SUPPORT & SERVICE</router-link>
         </dt>
         <dd> <router-link to="/privacy" >Privacy policy</router-link></dd>
       <dd><router-link to="/termsService">Terms of service</router-link></dd> 
       <dd><router-link to="/returnPolicy" >Return policy</router-link></dd> 
       <dd><router-link to="/Intelictual" >Intelictual propertyights</router-link></dd>
       <dd><router-link to="shipinformation" >Shipping information</router-link></dd>
     </dl>
     <dl>
         <dt><router-link to="/aboutus" >About</router-link></dt>
         <dd><router-link to="/aboutus" >About us </router-link></dd>
         <dd><router-link to="/contactus" >Contact us</router-link></dd>
     </dl>
        </div>
        <div class="fengexian_2"></div>
        <div class="footer-free-download">
            <div class="footer-free-text">Download and experience the  all-aound<br> PDF editing artifact for free,right now!</div>
      <button @click="downloadfree_e()" class="download__free"><img src="../assets/css/main-master/download.png" alt="" class="download-icon"> <span class="free-download">TRY IT FREE</span></button>
         <!-- <el-dropdown>
            <el-button style="border: none; padding: 0;">
                <img src="../assets/css/main-master/download.png" alt="" class="download-icon"> <span class="free-download">FREE DOWNLOAD</span>
            </el-button>
            <el-dropdown-menu slot="dropdown" style="background-color: #ffedbf;padding: 6px;" >
               <div name="downloadfile"  @click="downloadMac_d()" >
              <el-dropdown-item  > For Mac OS</el-dropdown-item></div> 
              <div name="downloadfile"  @click="downloadwin_d()" >
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
    <div class="end subscription_end">
      <div class="copyright subscription_copyright">
        Copyright © 2021 All rights reserved.
      </div>
    </div>
    <div v-show="isShowimg === true">
    <div class="fix_miaosha_time" >
      <img src="../assets/css/subscription/naozhong.png" alt="" class="naozhong">
     <div class="fix_title" >
    Limit discounts
     </div>
     <div class="fix_body">
60%OFF
     </div>
     <ul class="fix_timemiaosha_time">
    <li>
      <span class="fix_time_miaosha">
        {{d}}
      </span>
      <span class="fix_time_time_miaosha">
     DAYS
      </span>
      <span class="fix_top">

      </span>
      <span class="fix_bottom">

      </span>
    </li>
     <li>
      <span class="fix_time_miaosha">
       {{h}}
      </span>
      <span class="fix_time_time_miaosha">
    HOURS
      </span>
      <span class="fix_top">

      </span>
      <span class="fix_bottom">

      </span>
    </li>
     <li>
      <span class="fix_time_miaosha">
       {{m}}
      </span>
      <span class="fix_time_time_miaosha">
      MINUTES
      </span>
      <span class="fix_top">

      </span>
      <span class="fix_bottom">

      </span>
    </li>
     <li>
      <span class="fix_time_miaosha">
        {{s}}
      </span>
      <span class="fix_time_time_miaosha">
     SECONDS
      </span>
      <span class="fix_top">

      </span>
      <span class="fix_bottom">

      </span>
    </li>
  </ul>
    </div>
    </div>
</div>
 
</template>
<script>
import AES from '../utils/AES'
 import qs from 'qs'
 let Base64 = require('js-base64').Base64
import DES from '../utils/DES'

export default {
  name: "subscriptions",

  data() {
    return {
      downloadNum:'',
       noticeArr:[{email:'Reb*******tone@gmail.com subscribed to PDFMaster quarterly membership just now~',
                id:1},
               {email:'Lu****ray@yahoo.com subscribed to PDFMaster annual membership just now~',
              id:2 },
              {email: 'Tere******ee@outlook.com subscribed to PDFMaster quarterly membership just now~',
              id:3},
               {email:'Adi******ain@zohomail.com subscribed to PDFMaster monthly membership just now',
              id:4 },
               {email:'Joh***lson@mail.com subscribed to PDFMaster annual membership just now',
               id:5},
              {email: 'Jess****nelson@live.com subscribed to PDFMaster monthly membership just now',
              id:6},
              {email: 'Er****iri@yahoo.com subscribed to PDFMaster quarterly membership just now',
              id:7},
               {email:'Lou*****sworth@live.com subscribed to PDFMaster annual membership just now',
              id:8 },
              {email: 'Tin*****uail@zohomail.com subscribed to PDFMaster annual membership just now',
              id:9},
               {email:'Dal*****dowaihi@outlook.com subscribed to PDFMaster annual membership just now',
               id:10},
               {email:'Lu*****hranova@gmail.com  subscribed to PDFMaster monthly membership just now',
              id:11 }

     ],
     current:1,
        isShowimg: false,
              d:"",
              h:'',
              m:'',
              s:'',
        seconds: "259200",
      isactive: 1,

      list: [
        { name: "Create PDF Files", edition: "" },
        { name: "Annotate and Comment PDF Files", edition: "" },
        { name: "Edit Texts and Images in PDF Files", edition: "" },
        { name: "Add Headers & Footers", edition: "" },
        { name: "Add watermark", edition: "" },

        { name: "Save PDF as a Flattened Copy", edition: "" },
        { name: "Archive with PDF/A Format", edition: "" },
        { name: "Export PDFs to Word, Excel, or PowerPoint", edition: "" },
        { name: "Optical Character Recognition (OCR)", edition: "V2.0" },

        { name: "Create and Edit Form Fields", edition: "V2.0" },
        { name: "Add Digital Signature", edition: "V2.0" }
      ],
      
      
    };
  },
async created(){
   setInterval(()=>{
     if(this.current<=11){
       this.current++
     }else{
       this.current=1
     }
    
   },30000)

 if(this.$store.state.seconds!==null){
        this.seconds=this.$store.state.seconds
      }else{
        this.seconds=259200
      }
  fbq('track', 'ViewContent', {content_name: "subscription"});
// let url = 'https://www.geekpandashare.com/Subscription?token=3d2364a0a49a626becc6fbb4e5a9d7dd'
let url =window.location.href
console.log(url);
let arrsplid = url.split('?')
let arrsplid2 =arrsplid[1].split('&')

let token 
console.log(arrsplid2) // ["id=45", "type=3", "token=dfafgegga65464", "");
for(let i = 0;i < arrsplid2.length;i++){
                // 在数组里面再次根据 = 分割
                let arrsplid3 = arrsplid2[i].split('=')
                //arrsplid3里面的数据  0 下标 ['id','45']     1 下标 ['type','3']     2 下标 ['token','dfafgegga65464']  

                // 下面就是根据三目运算  arrsplid3[0] 是否等于id true直接取数组下标为1
                arrsplid3[0] == 'token' ? token = arrsplid3[1] : arrsplid3[0] == 'type'  
          }
 console.log(token);
   var data = token;
    var data = {token:data}
    data=JSON.stringify(data)
   var data=AES.encrypt(data)
   var data=DES.encrypt(data)
   var data=Base64.encode(data)
   var data ={params:data}
   var data =JSON.stringify(data)
   const res = await this.axios({
                           method:"post",
                           url:'v1/user/userStatus',
                           data:data
                       })
                      // console.log(res);
                      var data =res.data
                      var data=Base64.decode(data)
                   //  console.log(data);
                      var data=DES.decrypt(data)
                    //  console.log(data);
                      var data=AES.decrypt(data)
       
                      var datas =JSON.parse(data)
                     console.log(datas);
                     if(datas.code ==200){
                    this.$store.commit('set_token',datas.data.token)
                    this.$store.commit('set_email',datas.data.email)
                    this.$parent.user_show = false
                     this.$parent.showname =true       
                     }
  },
  methods: {
     handleScroll(e) {
                // 滚动操作监听
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                // console.log(scrollTop)
                let offsetTop = 0
                try {
                    // offsetTop = document.querySelector('').offsetTop
                } catch (e) {
                    offsetTop = 0
                }
                if (scrollTop > offsetTop) {
                    // this.searchBarFixed = true
                    // this.scrollStatus = {
                    //   display: 'block',
                    //   background: '#fff',
                    //   h: this.statusBarHeight.h
                    // }
                
                    if (scrollTop > 500) {
                     
                        this.isShowimg = true
                    } else {
                        this.isShowimg = false
                    }
                } else {
                    
                    this.isShowimg = false
                             }
                             
                             },
    countDown() {
            let d = parseInt(this.seconds/24/60/60)
            d = d < 10 ? "0" + d : d
            let h = parseInt((this.seconds/ 60 / 60) % 24);
            h = h < 10 ? "0" + h : h
            let m = parseInt((this.seconds / 60) % 60);
            m = m < 10 ? "0" + m : m
            let s = parseInt((this.seconds)% 60);
            s = s < 10 ? "0" + s : s
            this.count = d + '天' + h + '时' + m + '分' + s + '秒'
            this.d=d
            this.h=h
            this.m=m
            this.s=s
        },
        //定时器没过1秒参数减1
        
   Time() {
          setInterval(() => {
                this.seconds -= 1
                this.$store.commit('set_seconds',this.seconds)
                // console.log(this.seconds);
                this.countDown()
            },1000)
                
         
        },
    
    downSubFootMac(){
      this.downloadfree_e()
    },
    downSubFootWin(){
       this.downloadfree_e()
    },
    downloadfree_sdown(){
      this.downloadfree_e()
    },
           async downloadfree_e(){
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
          // 原来ga统计
          const params= {
                   hitType: 'event',
                   eventCategory: 'Mac',
                   eventAction: 'download',
                   eventLabel: 'download mac'
                }
             window.ga('send',params)
            //  fbq('trackCustom', 'downloadMac')
            // 新ga统计
              // gtag('event','add_payment_info',{
              // })
              // gtag('event', 'add_to_cart', {
              //  items: [{
              //  id: "win/mac",
              //  name: "win/mac"
              //  }]
              // });
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
    },
    async BuyMonth(){
      fbq('trackCustom', 'payMonth',{currency: "USD", value: 9.99})
     
      fbq('track', 'Purchase', {currency: "USD", value: 9.99});
const params= {
                   hitType: 'event',
                   eventCategory: 'month',
                   eventAction: 'pay',
                   eventLabel: 'pay month',
                   value: 9.99
                }
             window.ga('send',params)
// gtag("event", "purchase", {
//   currency: "USD",
//   transaction_id: "month",
//   value:"19.99",})

    //  console.log(this.$store.state.token);
      if(this.$store.state.token==="undefined"||this.$store.state.token===null){
 
 this.$parent.opendialog()
  setTimeout(() => {

   if(this.$store.state.token =='undefined'||this.$store.state.token ==null){
  
   }else{
    this.changeyear()
   }

 }, 5000);
      }else{
      this.axios.get('v1/order/priceList').then(function(res){
 
        
      })
   let email =this.$store.state.email;
   let id = 8000
      var data ={email:email,good_id:id}
      const datas =qs.stringify(data)

      
     
    //  console.log(datas);


      const res =await this.axios({
        method:'post',
         url:"v1/order/paypalCreateOrder",
           data:datas,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
       
      
      })
      if(res.status !==200){

      }else{
       
        var url = res.data.data.url
        window.location.href=url
      }
      }
    },
     async changeyear(){
      fbq('trackCustom', 'payYear',{currency: "USD", value: 34.99})
     
      fbq('track', 'Purchase', {currency: "USD", value: 34.99});
       const params= {
                   hitType: 'event',
                   eventCategory: 'year',
                   eventAction: 'pay',
                   eventLabel: 'pay year',
                   value: 34.99
                }
             window.ga('send',params)
  //     gtag("event", "purchase", {
  // currency: "USD",
  // transaction_id: "year",
  // value:"69.99",})

       if(this.$store.state.token =='undefined'||this.$store.state.token ==null){
    // console.log(this.$parent);
 this.$parent.opendialog()
  setInterval(() => {
   if(this.$store.state.token =='undefined'||this.$store.state.token ==null){
  
   }else{
    this.changeyear()
   }
 }, 5000);
      }else{
      this.axios.get('v1/order/priceList').then(function(res){
 
        
      })
   let email =this.$store.state.email;
   let id = 8001
      var data ={email:email,good_id:id}
      const datas =qs.stringify(data)

      // console.log(datas);
     

      const res =await this.axios({
        method:"post",
        url:"v1/order/paypalCreateOrder",
       data:datas,
        headers: {'content-type': 'application/x-www-form-urlencoded'},
       })
      if(res.status !==200){

      }else{
       

        var url = res.data.data.url
        window.location.href=url

      }
    }
    },
    async changequarterly(){
   
    },
      async changequarterly(){
      fbq('trackCustom', 'payQuarterly',{currency: "USD", value: 14.99})
      
      fbq('track', 'Purchase', {currency: "USD", value: 14.99});
     const params= {
                   hitType: 'event',
                   eventCategory: 'quarterly',
                   eventAction: 'pay',
                   eventLabel: 'pay quarterly',
                   value: 14.99
                }
             window.ga('send',params)
  //   gtag("event", "purchase", {
  // currency: "USD",
  // transaction_id: "quarterly",
  // value:"39.99",})
      if(this.$store.state.token =='undefined'||this.$store.state.token ==null){
 
 this.$parent.opendialog()
 setTimeout(() => {
 if(this.$store.state.token =='undefined'||this.$store.state.token ==null){
  
   }else{
    this.changeyear()
   }
 }, 5000);
      }
      else{
      this.axios.get('v1/order/priceList').then(function(res){

        
      })
   let email =this.$store.state.email;
   let id = 8002
      var data ={email:email,good_id:id}
      const datas =qs.stringify(data)

      
     
    //  console.log(datas);

      const res =await this.axios({
        method:'post',
         url:"v1/order/paypalCreateOrder",
           data:datas,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
       
      
      })
      if(res.status !==200){
 
      }else{
 

        // window.location.href('res.data.data.url')
        
        var url = res.data.data.url
        window.location.href=url
        
      }
    }
   }

  },

  mounted(){
     this.Time()
     window.addEventListener('scroll', this.handleScroll);
       if(this.$store.state.downloadNum!==null){
               
               this.downloadNum=this.$store.state.downloadNum
            }else{
               this.downloadNum=558603
            }
           setInterval(()=>{    
              this.downloadNum=parseInt(this.downloadNum) + Math.round(Math.random()*4)
              this.$store.commit('set_downloadNum',this.downloadNum)
           },3000)
 
    
    //     let activ=document.querySelectorAll('.price-style-li')
    //     // console.log(activ);
    //  this.isactive= this.isactive.index
    //  let a =this.isactive.index
    //  console.log(a);
   
  },
 
};
</script>
<style lang="less" scoped>
@import "../assets/fonts/font.css";
ul,li {
  list-style: none;
}
.subscription {
  width: 1920px;
  height: 2362px;
  position: relative;
}
.subscription_header {
  width: 1920px;
  height: 100px;
  background-color: #a40000;
}
.subscription_logo {
  position: absolute;
  top: 20px;
  left: 260px;
  width: 200px;
  height: 60px;
}

.subscription_tab_home,
.subscription_tab_subscription {
  font-size: 16px;

  font-weight: 400;
  color: #ffffff;
  line-height: 22px;
  font-weight: 400;
}
.subscription_tab_home {
  position: absolute;
  top: 38px;
  left: 767px;
  font-weight: 400;
  font-family: PingFangSC-Regular, PingFang SC;
}
.subscription_tab_subscription {
  position: absolute;
  top: 38px;
  left: 887px;
  font-weight: 600;
  font-family: PingFangSC-Semibold, PingFang SC;
}
.subscription_pay_title {
  position: absolute;

  height: 54px;
  top: 153px;
  left: 799px;
  font-size: 46px;
  font-family: Raleway-SemiBold, Raleway;
  font-weight: 600;
  color: #a40000;
  line-height: 54px;
}
.subscription_pay_content {
  position: absolute;
  top: 234px;
  left: 683px;
  font-size: 24px;
  font-family: Raleway-SemiBold, Raleway;
  font-weight: 600;
  color: #a40000;
  line-height: 29px;
}

.price_month,
.price_year,
.price_quarterly {
  width: 423px;
  height: 441px;
  // background-color: #f9f9f9;
  box-shadow: 0px 2px 10px 0px rgba(207, 207, 207, 0.5);
  border-radius: 4px;
  background-color: #fff;
}
.price_month {
  position: absolute;
  top: 584px;
  left: 277px;
}
// routerlink的定位
.price_month_a {
  position: absolute;
  // background-color:blue;
  top: 336px;
  left: 277px;
  z-index: 10;
  width: 423px;
  height: 441px;
}
.router-link-active {
  z-index: 1 !important;
}
.price_year_a {
  position: absolute;
  top: 336px;
  left: 748px;
  z-index: 10;
  width: 423px;
  height: 441px;
}
.price_quarterly_a {
  position: absolute;
  z-index: 10;
  width: 423px;
  height: 441px;

  top: 336px;
  left: 1220px;
}
.change_price_month {
  position: relative;
  width: 455px;
  height: 473px;
  position: absolute;
  top: 320px;
  left: 261px;
  background-color: #ffe5a7;
}
.price_year {
  position: absolute;
  top: 584px;
  left: 748px;
}
.change_price_year {
  position: relative;
  width: 455px;
  height: 473px;
  position: absolute;
  top: 567px;
  left: 732px;
  background-color: #ffe5a7;
}
.price_quarterly {
  position: absolute;
  left: 1220px;
  top: 584px;
}
.change_price_quarterly {
  position: absolute;
  top: 320px;
  left: 1204px;
  width: 455px;
  height: 473px;
  background-color: #ffe5a7;
}
.popular {
  position: absolute;
  left: 261px;
  top: 0;
  width: 162px;
  height: 103px;
}
.change_popular {
  position: absolute;
  left: 293px;
  top: 0;
  width: 162px;
  height: 103px;
}
.price_title,
.change_price_title {
font-size: 36px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #333333;
line-height: 36px;
}
.price_title {
  width: 338px;

  position: absolute;
  top: 52px;
  left: 43px;
  text-align: center;
}
.change_price_title {
  width: 338px;
  position: absolute;
  top: 68px;
  left: 60px;
  text-align: center;
}
.price_title_2{
  position: absolute;
  top: 91px;
  left: 116px;
  font-size: 28px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #333333;

}
.change_price_title_2{
  position: absolute;
  left: 132px;
  font-size: 28px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #333333;
top: 107px;
}
.price_now,
.change_price_now {
  font-size: 60px;
  font-family: Raleway-SemiBold, Raleway;
  font-weight: 600;
  color: #d50200;
  line-height: 70px;
}
.price_now {
  position: absolute;
  top: 153px;
  left: 97px;
}
.price_now_month{
  width: 185px;
  height: 70px;
  text-align: center;
left: 104px;
}
.change_price_now {
  position: absolute;
  top: 170px;
  left: 109px;
}
.price_before,
.change_price_before {
  font-size: 30px;
  font-family: Raleway-SemiBold, Raleway;
  font-weight: 600;

  line-height: 42px;
}
.price_before {
  position: absolute;
  top: 176px;
  left: 289px;
  color: #999999;
  text-decoration: line-through;
}
.change_price_before {
  position: absolute;
  top: 193px;
  left: 305px;
  color: #856846;
  text-decoration: line-through;
}
.price_each,
.change_price_each {
  font-size: 24px;
  font-family: Raleway-SemiBold, Raleway;
  font-weight: 600;

  line-height: 29px;
}
.price_each {
  position: absolute;
  top: 233px;
  left: 167px;
    color: #666666;
}
.change_price_each {
  position: absolute;
  top: 250px;
  left: 193px;
  
color: #856846;
}
.price_cancel,
.change_price_cancel {
  font-size: 18px;
  font-family: Raleway-SemiBold, Raleway;
  font-weight: 600;

  line-height: 21px;
}
.price_cancel {
  position: absolute;
  top: 299px;
  left: 51px;

color: #999999;

  height: 42px;
  text-align: center;
}
.change_price_cancel {
  position: absolute;
  top: 331px;
  left: 67px;
  color: #856846;
 
  height: 42px;
  text-align: center;
}

.price_btn {
  position: absolute;
  top: 351px;
  left: 97px;
  width: 230px;
  height: 55px;
  text-align: center;
  background-color: #fff;
  font-size: 24px;
  font-family: Raleway-Black, Raleway;
  font-weight: 900;
  color: #ffb900;
  border-radius: 4px;
  border: 2px solid #ffb900;

  outline: none;
}
.change_price_btn {
  position: absolute;
  top: 383px;
  left: 113px;
  width: 230px;
  height: 55px;
  text-align: center;
  font-size: 24px;
  font-family: Raleway-Black, Raleway;
  font-weight: 900;
  color: #fff;
background: #FFB900;
  border-radius: 4px;
  border: none;
  z-index: 5;
  outline: none;
}
.subscription_function_title {
  position: absolute;
  top:1127px;
  left: 609px;

  font-size: 36px;
  font-family: Raleway-SemiBold, Raleway;
  font-weight: 600;
  color: #a40000;
  line-height: 42px;
}

.on {
  width: 1400px;
  height: 66px;
  background: #f9f9f9;
  border-radius: 1px;
  font-size: 24px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #666666;
  line-height: 66px;
}
.off {
  font-size: 24px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #666666;
  line-height: 66px;
  background: #ffffff;
  border-radius: 1px;
}
.function_pdf {
  position: absolute;
  top: 1231px;
  left: 260px;
  width: 1400px;
}
.function_list {
  padding-left: 153px;
  position: relative;
}
.function_pdf > li:nth-child(odd) {
  background-color: #f9f9f9;
}
.function_list_icon {
  position: absolute;
  top: 18px;
  left: 1049px;
}
.val_edition {
  position: absolute;
  left: 1240px;
   top:0;
  font-size: 23px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #999999;
}
.subscription_footer {
  position: absolute;
  left: 0;
  top: 2105px  !important;
}
.subscription_end {
  position: absolute;
top: 2565px !important;
}
.subscription_copyright {
  text-align: center;
  line-height: 80px;
}
.sub_style{
  width: 80px;
  height: 8px;
  background: #FFB900;
  border-radius: 5px;
  position: absolute;
  left: 828px;
  top: -8px;

}
.miaosha{
  width: 1920px;
  height: 620px;
  position: relative;
  background:  url('../assets/css/subscription/yuansu.png') no-repeat,linear-gradient(90deg, #290B65 0%, #5C146B 19%, #EA2578 50%, #5C146B 82%, #290B65 100%);
  margin: -1px;
  background-size: 100% auto
}
.miaosha_title{
  width: 325px;
 height: 101px;
font-size: 72px;
font-family: Archivo-Black, Archivo;
font-weight: 900;
color: #FFFFFF;
line-height: 101px;
position: absolute;
top: 80px;
left: 798px;
display:block;
}
.miaosha_body{

height: 33px;
font-size: 24px;
font-family: Arial-Black, Arial;
font-weight: 900;
color: #FFFFFF;
line-height: 33px;
position: absolute;
top: 162px;
left: 629px;
}
.miaosha_button{
  width: 510px;
height: 90px;
background: linear-gradient(180deg, #FF7EAC 0%, #FF3C81 73%, #EA2269 100%);
box-shadow: 0px -6px 10px 0px rgba(205, 17, 83, 0.65);
border-radius: 6px;
position: absolute;
top: 224px;
left: 704px;

font-size: 40px;
font-family: Arial-Black, Arial;
font-weight: 900;
color: #FFFFFF;
line-height: 90px;
text-align: center;
}
.miaosha_time{
  position: absolute;
  top: 380px;
  left: 742px;
  width: 436px;
  height: 95px;
  display: flex;
  justify-content:space-between;

}
.miaosha_time>li{
  width: 94px;
  height: 95px;
  position: relative;
}
.miaosha_top{
  width: 94px;
  height: 42px;
  background: #FFFFFF;
  border-radius: 6px 6px 0px 0px;
  opacity: 0.3;
  margin-bottom: 2px;
  display: block;
 
}
.miaosha_bottom{
  width: 94px;
height: 51px;
background: #FFFFFF;
border-radius: 0px 0px 6px 6px;
opacity: 0.2;
display: block;
}
.time_miaosha{
  width: 54px;
  height: 40px;
  position: absolute;
  top: 20px;
  left: 20px;
  line-height: 40px;
  font-size: 40px;
  font-family: Arial-Black, Arial;
  font-weight: 900;
  color: #FFFFFF;
  
}
.time_time_miaosha{
  width: 94px;
  height: 22px;
  font-size: 16px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #FFFFFF;
position: absolute;
text-align: center;
opacity: 0.2;
bottom: 10px;
}
.sub_download_total{
  position: absolute;
  width: 182px;
  height: 145px;
  top: 80px;
  left: 428px;
}
.sub_download_png{
   width: 182px;
  height: 145px;
}
.sub_download_download{
  position: absolute;
  top: 71px;
  left: 44px;
          font-size: 18px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #FFFFFF;

}
.fix_miaosha_time{

position: fixed; // position: fixed;
  width: 280px;
  height: 198px;
  background: linear-gradient(160deg, #EA2578 0%, #5C146B 50%, #430C66 100%);
box-shadow: 6px 4px 10px 0px rgba(207, 207, 207, 0.5), 0px 3px 8px 0px rgba(0, 0, 0, 0.2);
border-radius: 6px;
border: 6px solid #FA4E7B;
bottom: 40px;
right: 100px;
}
.fix_title{
  position: absolute;
  width: 118px;
  height: 20px;
  top: 12px;
 left: 81px;
 font-size: 16px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #FFFFFF;
z-index: 2;
  
}
.fix_body{
  position: absolute;
  top: 46px;
  left: 27px;
  font-size: 52px;
font-family: Archivo-Black, Archivo;
font-weight: 900;
color: #FFFFFF;
z-index: 2;
line-height: 46px;
}
.fix_timemiaosha_time{
  
  position: absolute;
  top: 110px;
  left: 12px;
  width: 244px;
  height: 68px;
  display: flex;
  justify-content:space-between;
}
.fix_timemiaosha_time>li{
  width: 58px;
  height: 68px;position: relative;
}
.fix_top{
  width: 58px;
height: 32px;
background: #FFFFFF;
border-radius: 6px 6px 0px 0px;
opacity: 0.3;
margin-bottom: 2px;
display: block;
}
.fix_bottom{
  width: 58px;
height: 34px;
background: #FFFFFF;
border-radius: 0px 0px 6px 6px;
opacity: 0.2;
display: block;
}
.fix_time_miaosha{
  width: 34px;
  height: 28px;
  top: 12px;
  left: 12px;
  position: absolute;
  line-height: 40px;
  font-size: 24px;
  font-family: Arial-Black, Arial;
  font-weight: 900;
  color: #FFFFFF;
}
.fix_time_time_miaosha{
  width: 58px;
  height: 14px;
  font-size: 10px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #FFFFFF;
position: absolute;
text-align: center;
opacity: 0.2;
bottom: 10px;
}
.naozhong{
  position: absolute;
  right: 224px;
  bottom: 136px;
  width: 88px;
  height: 113px;
}

  // display: none;
  .dropdown_sub_a{
  width: 230px;
  height: 206px;
  display: none;
  
  background: #FFFFFF;
  box-shadow: 4px 6px 14px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 6px 6px;


}
.sub_style:hover>.dropdown_sub_a{
  display: block;
display: block;
  width: 230px;
  height: 206px;
  position: absolute;
   top: 8px;
  left: -72px;
  z-index: 999999;
  text-align: center;
  line-height: 40px;
}
.dropdown_sub_a>:first-child{
  margin-top: 20px;
}
.dropdown_sub_a>li{
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
.dropdown_sub_a>li:hover .drop_down_a{

  font-size: 16px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #A40000;
}
.dropdown_sub_a>li:hover{
   background: #F6F6F6;
}
// 弹幕横向

  .remind-block {
            height: 30px;
            line-height: 30px;
            // background-color: #fce9aa;
            // color: #947334;
            position: relative;
            overflow: hidden;
            text-align: center;
            width: 100%;
            padding-right: 20px;
            z-index: 100;
        }
        
        .marquee-block {
            display: inline-block;
            width: 100%;
            height: 100%;
            vertical-align: middle;
            overflow: hidden;
            box-sizing: border-box;
            padding-left: 15px;
            position: relative;
        }
        
        .marquee {
            animation: marquee 30s linear infinite;
            white-space: nowrap;
            position: absolute;
        }
        
        .marqueeT {
            animation: marqueeT 30s linear infinite;
            white-space: nowrap;
            position: absolute;
        }
        
        @keyframes marquee {
            0% {
                left: 0;
            }
            100% {
                left: -105%;
            }
        }
        
        @keyframes marqueeT {
            0% {
                left: 105%;
            }
            100% {
                left: 0;
            }
        }
        
        .remind-block span {
            border-bottom: 1px solid #947334;
            font-weight: bold;
        }
        
        .remind-block img {
            height: 20px;
            position: absolute;
            right: 2px;
            top: 5px;
        }
</style>
