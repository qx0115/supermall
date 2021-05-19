<template>
<div>
    <div class="header-home"></div>
    <div class="main-master">
        <div class="download_total" @click="downloadfree_down()">
            <img src="../assets/css/main-master/download1.png" alt="" class="download_download_png" >
            <span class="download_total_num">{{downloadNum}}

            </span>
            <span class="download_download">
                Downloads
            </span>
        </div>
        <div class="home_style">

        </div>
    <img src="../assets/css/main-master/pdfmaster.png" alt="" class="pdfmaster">
    <span class="advanced">Advanced PDF editor for all your business needs</span>
    <span class="create">Create, edit, sign, convert and  Cipher text documents with PDFmaster</span>
    <img src="../assets/css/main-master/interface.png" alt="" class="interface">
     <button @click="downloadfree()" class="download__free"><img src="../assets/css/main-master/download.png" alt="" class="download-icon"> <span class="free-download">TRY IT FREE</span></button>
        <!-- <el-dropdown>
            <el-button style="border: none; padding: 0;">
                <img src="../assets/css/main-master/download.png" alt="" class="download-icon"> <span class="free-download">FREE DOWNLOAD</span>
            </el-button>
            <el-dropdown-menu slot="dropdown" style="background-color: #ffedbf;padding: 6px;" >
               <div name="downloadfile"  @click="downloadMac()" >
              <el-dropdown-item  > For Mac OS</el-dropdown-item></div> 
              <div name="downloadfile"  @click="downloadwin()" >
                  <el-dropdown-item >For Windows 64bit</el-dropdown-item>
              </div>
              
            </el-dropdown-menu>
          </el-dropdown> -->
          <div class="operation">
             <ul class="op">
    <!-- <li @mouseenter="showChange(1)" @mouseleave="showChange(0)">
   
        
        <img  src="../assets/css/main-master/opration/ocr.png" alt="" >
        <img v-show="change===1" src="../assets/css/main-master/opration/ocr-active.png" alt=""  class="active">
        <span class="op-test" style="left:13px">Optical Character Recognition</span></li> -->
    <li @mouseenter="showChange(1)" @mouseleave="showChange(0)">
      <img  src="../assets/css/main-master/opration/picture.png" alt="">
      <img v-show="change===1" src="../assets/css/main-master/opration/picture-active.png" alt="">
      <span class="op-test-pic"> PDF <br> Picture Editing</span>
    </li>
    <li @mouseenter="showChange(2)" @mouseleave="showChange(0)" >
      <img  src="../assets/css/main-master/opration/text.png" alt="">
      <img v-show="change===2" src="../assets/css/main-master/opration/text-active.png" alt="">
     <span class="op-test-edi" >PDF <br> Text Editor</span>
    </li>
    <li @mouseenter="showChange(3)" @mouseleave="showChange(0)">
      <img  src="../assets/css/main-master/opration/water.png" alt="">
      <img  v-show="change===3" src="../assets/css/main-master/opration/water-active.png" alt="">
     <span class="op-test-water">PDF <br> Add Watermark </span>
    </li>
    <li @mouseenter="showChange(4)" @mouseleave="showChange(0)">
      <img src="../assets/css/main-master/opration/format.png" alt="">
      <img v-show="change===4" src="../assets/css/main-master/opration/format-active.png" alt="">
      <span class="op-test-format">PDF <br> Format Conversion</span>
    </li>
  </ul>

          </div>
         <!-- <router-link to="discount"> <img src="../assets/css/main-master/opration/discount.svg" alt="" class="home_discount"> </router-link> -->
          <img class="mouse" src="../assets/css/main-master/mouse.png" alt="">
          
    </div>

       <!-- main-pdf -->
    <div class="main-pdfs">
     <div class="main-pdfs-title" >
               <img class="tookit" src="../assets/css/main-pdfs/tookit.png" alt="">
               <span class="main-pdfs-text">DO MORE WITH YOUR PDFS</span> 
               <span class="main-pdfs-striping"></span>
    </div>
    <div class="main-pdfs-content" >
              <ul>
               <!-- <li  class="main-pdfs-item">
                <div @mouseenter="showActive(1)" @mouseleave="showActive(0)" class="pdf_item">
                <img src="../assets/css/main-pdfs/normaltookit/ocr1.png"  alt="" >
                <img v-show="active===1"  src="../assets/css/main-pdfs/activetookit/ocr1-active.png" alt="" >
                <span>Optical Character Recognition</span>
                </div></li> -->
                <li class="main-pdfs-item">
                <div href="" @mouseenter="showActive(1)" @mouseleave="showActive(0)" class="pdf_item"> 
                <img src="../assets/css/main-pdfs/normaltookit/link.png" alt="" >
                <img v-show="active===1" src="../assets/css/main-pdfs/activetookit/link-active.png" alt="" >
                </div>
                <span>Add a link</span></li>
               <li class="main-pdfs-item">
                <div @mouseenter="showActive(2)" @mouseleave="showActive(0)" class="pdf_item">
                <img src="../assets/css/main-pdfs/normaltookit/tag.png" alt="" >
                
                <img v-show="active===2"  src="../assets/css/main-pdfs/activetookit/tag-active.png" alt="" >
               </div>
                <span>Add tag</span></li>
               <li class="main-pdfs-item">
                <div @mouseenter="showActive(3)" @mouseleave="showActive(0)" class="pdf_item">  
                <img src="../assets/css/main-pdfs/normaltookit/digi.png" alt=""  >
                <img v-show="active===3"  src="../assets/css/main-pdfs/activetookit/digi-active.png" alt="" >
                </div>
                <span>Digi-Sign</span></li>
               <li class="main-pdfs-item">
                <div href="" @mouseenter="showActive(4)" @mouseleave="showActive(0)" class="pdf_item">   
                <img src="../assets/css/main-pdfs/normaltookit/background.png" alt="" >
                <img v-show="active===4" src="../assets/css/main-pdfs/activetookit/background-active.png" alt="" >
                </div>
                <span>Add background</span></li>
               <li class="main-pdfs-item">
                <div href="" @mouseenter="showActive(5)" @mouseleave="showActive(0)" class="pdf_item">   
                <img src="../assets/css/main-pdfs/normaltookit/watermark.png" alt="" >
                <img v-show="active===5" src="../assets/css/main-pdfs/activetookit/watermark-active.png" alt="" >
                </div>
                <span>Add watermark</span></li>
               <li class="main-pdfs-item">
                <div href="" @mouseenter="showActive(6)" @mouseleave="showActive(0)" class="pdf_item">
                <img src="../assets/css/main-pdfs/normaltookit/header.png" alt="" >
                <img v-show="active===6" src="../assets/css/main-pdfs/activetookit/header-active.png" alt="" >
                </div>
                <span>Edit <br> header and footer</span></li>
               <li class="main-pdfs-item">
                <div href="" @mouseenter="showActive(7)" @mouseleave="showActive(0)" class="pdf_item">  
                <img src="../assets/css/main-pdfs/normaltookit/conversion.png" alt="" >
                <img v-show="active===7"  src="../assets/css/main-pdfs/activetookit/conversion-active.png" alt="" >
                </div>
                <span>Format conversion</span></li>
               <li class="main-pdfs-item">
                <div href="" @mouseenter="showActive(8)" @mouseleave="showActive(0)" class="pdf_item">
                <img src="../assets/css/main-pdfs/normaltookit/annotation.png" alt="" >
                <img v-show="active===8"  src="../assets/css/main-pdfs/activetookit/annotation-active.png" alt="" >
                </div>
                <span>Text annotation</span></li>
               <li class="main-pdfs-item">
                <div href="" @mouseenter="showActive(9)" @mouseleave="showActive(0)" class="pdf_item">
                <img src="../assets/css/main-pdfs/normaltookit/graphics.png" alt="" >
                <img v-show="active===9"  src="../assets/css/main-pdfs/activetookit/graphics-active.png" alt="" >
                </div>
                <span>Add graphics</span></li>
               <li class="main-pdfs-item">
                <div href="" @mouseenter="showActive(10)" @mouseleave="showActive(0)" class="pdf_item">  
                <img src="../assets/css/main-pdfs/normaltookit/edit.png" alt="" >
                <img v-show="active===10"  src="../assets/css/main-pdfs/activetookit/edit-active.png" alt="" >
                </div>
                <span>Edit text</span></li>
               <li class="main-pdfs-item">
                <div href="" @mouseenter="showActive(11)" @mouseleave="showActive(0)" class="pdf_item">
                <img src="../assets/css/main-pdfs/normaltookit/split.png" alt="" >
                <img v-show="active===11"  src="../assets/css/main-pdfs/activetookit/split-active.png" alt="" >
                </div>
                <span class="split_pdf">Split pdf</span></li>
               
              </ul>
     </div>
    </div>
    <!-- pdf-editor -->
    <div class="pdf-editor">
            <div class="pdf-editor-title" ></div>
            <img class="pdf-editor-titleicon" src="../assets/css/main-master/pdf-editor/help.png" alt="">
            <span class="pdf-editor-text">A PDF EDITOR BUILT FOR SIMPLICITY</span> 
            <span class="main-pdfs-striping"></span>
            <img class="pdf-editor-resultant" src="../assets/css/main-master/pdf-editor/resultant.png" alt="">
            <span class="per-title">Edit PDFs in any way you want</span>
            <span class="per-content">It’s never been easier to edit text, images, pages, links, backgrounds, watermarks, headers and footers in your PDF! This can now be done exactly as you would in a word document. You can even fix typos, rearrange pages, crop or swap photos.	</span>
            <img class="per-pagetwo" src="../assets/css/main-master/pdf-editor/pagetwo.png" alt="" >
            <img class="per-pageone" src="../assets/css/main-master/pdf-editor/pageone.png" alt="">
            <img class="per-digi-ico" src="../assets/css/main-pdfs/normaltookit/digi.png" alt="">
            <span class="per-digi-title" >Protect & Sign</span>
            <span class="per-digi-content">Protect sensitive PDF content with passwords and permissions to restrict printing, copying, or sharing. Sign with digital signatures if necessary.</span>
            <div class="dropdown-editor">
                <button @click="downloadfree()" class="download__free"><img src="../assets/css/main-master/download.png" alt="" class="download-icon"> <span class="free-download">TRY IT FREE</span></button>
            <!-- <el-dropdown>
            <el-button style="border: none; padding: 0;">
                <img src="../assets/css/main-master/download.png" alt="" class="download-icon"> <span class="free-download">FREE DOWNLOAD</span>
            </el-button>
            <el-dropdown-menu slot="dropdown" style="background-color: #ffedbf;padding: 6px;" >
               <div name="downloadfile"  @click="downloadMac()" >
              <el-dropdown-item  > For Mac OS</el-dropdown-item></div> 
              <div name="downloadfile"  @click="downloadwin()" >
                  <el-dropdown-item >For Windows 64bit</el-dropdown-item>
              </div>
              
            </el-dropdown-menu>
          </el-dropdown> -->
           
          </div>
     </div>
   
    


  <div class="help-pdf">
      <img class="help-pdf-icon" src="../assets/css/help-pdf/help-pdf-icon.png" alt="">
      <div class="help-pdf-title">HELP YOU BETTER WITH YOUR PDF</div>
      <span class="help-pdfs-striping"></span>
      <span class="help-content-title">This software will reduce the trouble between you and your colleagues</span>
      <span class="help-content-content">At work, we usually need to deal with a lot of problems when working with colleagues. This software will help you deal with these troubles more efficiently and reduce your communication costs.In many cases, we can't work together well, but this software can share in real time and convert it into multiple formats, which can quickly process documents.</span>
       <img class="help-pdf-page" src="../assets/css/help-pdf/help-pdf-page.png" alt="">
</div>


  <!-- help-user 用户评论 -->


  <div class="pdf-user">
      <img class="pdf-user-icon" src="../assets/css/pdf-user/user.png" alt="">
      <span class="pdf-user-title">PDFmaster users</span>
      <div class="user__card">
      <el-carousel :interval="40004" type="card" height="348px">
    <el-carousel-item v-for="item in userCardList" :key="item.name">
    
      <h3 class="medium">{{item.usertalk}} </h3>
      <span class="zhanwei12">{{item.name}}</span><br><br><br>
      
    </el-carousel-item>
   
    
  </el-carousel>
  </div>
  </div>
  
  <!-- footer -->
  <div class="footer">
    <div class="footer-title"> <img class="footer-logo-a" src="../assets/css/footer/footerlogo.png" alt=""></div> 
    <div class="fengexian_1"></div>
    <div class="footer-content">
        <div class="footer-content-list">
     <dl>
         <dt><span>APPs</span></dt>
       
         <dd><span @click="footerDownMac()">Mac download</span></dd>
         <dd><span  @click="footerDownWin()" >Windows download</span></dd>
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
       <dd><router-link to="/termsService" >Terms of service</router-link></dd> 
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
        <button @click="downloadfree()" class="download__free"><img src="../assets/css/main-master/download.png" alt="" class="download-icon"> <span class="free-download">TRY IT FREE</span></button>
         <!-- <el-dropdown>
            <el-button style="border: none; padding: 0;">
                <img src="../assets/css/main-master/download.png" alt="" class="download-icon"> <span class="free-download">FREE DOWNLOAD</span>
            </el-button>
            <el-dropdown-menu slot="dropdown" style="background-color: #ffedbf;padding: 6px;" >
               <div name="downloadfile"  @click="downloadMac()" >
              <el-dropdown-item  > For Mac OS</el-dropdown-item></div> 
              <div name="downloadfile"  @click="downloadwin()" >
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
  <div class="end">
      <div class="copyright">Copyright © 2021 All rights reserved.</div>
  </div>
    <!-- 回到顶部 --> 
<div v-show="isShowimg === true">
       <img class="backtop" src="../assets/css/backtop.png" alt="" @click="goTop" >  
      </div>
  
 </div>
    

</template>
<script>
import qs from 'qs'
import { mapMutations } from 'vuex';
    export default {
        data() {
            return {
                downloadNum:'',
                 value: 5,
                isShowimg: false,
                change:0,
                active: 0,
                stepMap:0,
            
                userCardList:[
                    {id:1,
                    usertalk:`I  really like this PDF editor! I just used it tomerge three pdf documents, and it only took less than half a minute, which is really convenient! Imust want my friends to recommend this PDF editor!`,
                    name:"—— Rebecca Stone"},
                    {id:2,
                    usertalk:`I have been looking for a PDF editor, until I found 
      PDFMaster. I can choose one of the artistic design
       signatures it provides as my exclusive signature. 
       I like this feature because it can make the signature 
       on the PDF look more smooth.`,
                    name:' —— Dalal Aldowaihi'},
                    {id:3,
                    usertalk :`One particularly magical feature I have to say is
      that this PSFMaster can add my own watermark to 
      the pdf document! I can use this feature to protect
      my personal documents. This is really incredible! `,
                    name:  ' —— Mohammed Alghamdi '}
                ]
              }
        },
       
        mounted() {
            
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
        },

        updated(){
             
        },
        destroyed(){
            document.removeEventListener('scroll', this.handleScroll)
            document.body.scrollTop = document.documentElement.scrollTop = 0
        },
        methods: {
               ...mapMutations(['changeLogin']),
            showActive(index) {
                this.active = index
            },
            showChange(index){
                this.change = index
            },
            // 下载数
          
           async downloadfree(){
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
        //   gtag('event','add_payment_info',{
        //   })
        //       gtag('event', 'add_to_cart', {
        //        items: [{
        //        id: "win/mac",
        //        name: "win/mac"
        //        }]
        //       });
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
},




            footerDownMac(){
                this.downloadfree()
            },
            footerDownWin(){
               this.downloadfree()
            },
            downloadfree_down(){
                this.downloadfree()
            },
        //    async downloadMac(){
        //         const params= {
        //            hitType: 'event',
        //            eventCategory: 'Mac',
        //            eventAction: 'download',
        //            eventLabel: 'download mac'
        //         }
        //      window.ga('send',params)
        //     //  fbq('trackCustom', 'downloadMac')
        //        fbq('track', 'AddPaymentInfo');
        //       fbq('track', 'AddToCart');
        //       const res = await this.axios({
        //          method:'get',
        //          url:'v1/file/downList', 
        //      })
        //      console.log(res.data.data.dmg);
        //         const data =  res.data.data.dmg
        //         let a =document.createElement('a');
        //         a.href=data;
        //         a.click()

        //    },
        //    async downloadwin(){
        //        const params= {
        //            hitType: 'event',
        //            eventCategory: 'Windows',
        //            eventAction: 'download',
        //            eventLabel: 'download win'
        //         }
        //      window.ga('send',params)
        //     //  fbq('trackCustom', 'downloadWin')
        //        fbq('track', 'InitiateCheckout');
        //         fbq('track', 'AddToCart');
        //      const res = await this.axios({
        //          method:'get',
        //          url:'v1/file/downList', 
        //      })   
             
        //          console.log(res.data);
        //         const data =  res.data.data.exe
        //         let a =document.createElement('a');
        //         a.href=data;
        //         a.click()

           
        //     },

        // 安装包
           // 回到顶部
        //    缓慢回到顶部
    //        let top = document.documentElement.scrollTop || document.body.scrollTop;
    //   // 实现滚动效果 
    //   const timeTop = setInterval(() => {
    //     document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
    //     if (top <= 0) {
    //       clearInterval(timeTop);
    //     }
    //   }, 10);
            goTop() {
                // 回到顶部
                document.body.scrollTop = document.documentElement.scrollTop = 0
                this.isShowimg = false
            },
            handleScroll(e) {
                // 滚动操作监听
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                console.log(scrollTop)
                let offsetTop = 0
                try {
                    offsetTop = document.querySelector('').offsetTop
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
                }}
</script>
<style lang='less' scope>
@import '../assets/fonts/font.css';
*{
    margin: 0;
    padding: 0;
}
ul,li{
    list-style: none;
    margin: 0;
    padding: 0;
}
a{
    text-decoration: none;
    color: #FFFFFF;
}
    .header {
     width:1920px;
        height: 67px;
        background: #A40000;
        position: relative;
    }

    
    .header_logo img {
        position: absolute;
        width: 136px;
        height: 40px;
        left: 260px;
        top: 12px;
    }

.home_tab_home,.home_tab_subscription{
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 22px;
    font-weight: 400;
}
.home_tab_home{
    font-weight: 600;
    font-family: PingFangSC-Semibold, PingFang SC;
}
.home_tab_subscription{
    font-weight: 400;
   font-family: PingFangSC-Regular, PingFang SC;
}

//  登陆注册样式
// 登陆下面链接
.agreement>span{

position: absolute;
top: 487px;
left: 505px;
font-size: 16px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #FA4E4E;
line-height: 16px;

text-align: center;
}
// 头像
.dropbtn{
    position: absolute;
    top: 14px;
    left: 1585px;
    width: 75px;
    height: 36px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:6px ;
}
// 点击后头像样式
.yellow_drop{
     position: absolute;
    top: 20px;
    left: 1454px;
    width: 75px;
    height: 56px;
    background-color: #FFB900;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:6px ;
}
.user_dropdown_content{
    position: absolute;
    left: 1361px;
    top: 84px;
    width: 278px;
    height: 219px;
    background-color:#FFF;
  
    box-sizing: border-box;
    box-shadow: 2px 2px 12px 5px rgba(0, 0, 0, 0.13);
    border-radius: 6px;
}
.user_dropdown_list{
    height: 45px;
    
    padding-left: 10px;
    text-align: left;
    line-height: 45px;
    margin: 5px 10px;

font-size: 16px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #333333;
display: block;

}
.signout{
    padding-left: 0;
}
.user_dropdown_list_span{
    margin-top: 5px;
    padding-left: 10px;
}
hr{
    background-color: #D5D5D5;
    border: 0;
    height: 1px;
}
.user_dropdown_content>div:first-child{
    border-bottom: 1px solid #D5D5D5;
    height: 55px;
    margin: 0 10px;
    line-height: 55px;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #A40000;
}

.user_dropdown_content>div:last-child{
    // border-top: 1px solid #D5D5D5;
      border-radius: 6px;
}
.userinformation:hover{
    background-color: #FDCACA;
      border-radius: 6px;
}
.purchase:hover{
    background-color: #FDCACA;
      border-radius: 6px;
}
.user_dropdown_list_span:hover{
    background-color: #FDCACA;


    border-radius: 6px;
}
.el-dialog{
    width: 900px;
    background-image: linear-gradient(to right,  #FA4E4E 40%, #FFF 0)!important;
    height: 560px;
    
}
.login_left{
    background-color: red;
    width: 360px;
    height: 560px;
}
.login-right{
    width: 54px;
    height: 560px;
    float: left;
}

.el-dialog__title{
    position: absolute;
    left: 405px;
    top: 40px;
    font-size: 24px !important;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #000000;
    line-height: 33px;
}
.el-dialog__header {
    padding: 0;
}
.el-dialog__headerbtn{
    position: absolute;
    top: 45px !important;
    right: 45px !important;
    font-size: 24px !important;
}
.el-form{
    width: 465px;
    height: 445px;
    float: left;
    margin-top: 17px;
}
.el-dialog__body{
    font-size: 20px !important;
    font-family: PingFangSC-Medium, PingFang SC !important;
    font-weight: 500 !important;
    color: #000000 !important;
    padding: 0px;
    padding-top: 35px;
    margin-bottom: 17px;
}
.el-input{
    width: 450px !important;
    height: 50px !important;
}
.el-input-inner{
    height: 50px !important;
}
.el-checkbox__label {

font-size: 16px !important;
font-family: PingFangSC-Regular, PingFang SC !important;
font-weight: 400 !important;
color: #333333 !important;
line-height: 22px !important;
}
.login_pri_agree{
font-size: 16px !important;
font-family: PingFangSC-Regular, PingFang SC !important;
font-weight: 400 !important;
color: #FA4E4E !important;
line-height: 22px !important;
}
.el-button--danger {
    background-color: #FA4E4E !important;
    position: absolute;
    top: 425px;
    left: 405px;
    width: 450px;
    height: 50px;
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
  
//     // 注册发送验证码
//     .el-button.disabled-style {
//     background-color: #eee;
//     color: #CCCCCC;
// }
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
   
.home_discount{
    position: absolute;
    top: 94px;

left: 530px;
}
    
    .main-master {
        position: relative;
        width: 1920px;
        height: 980px;
        background-image: url('../assets/css/main-master/background.png');
    }
    
    .pdfmaster {
        position: absolute;
        left: 261px;
        top: 254px;
        width: 350px;
        height: 55px;
    }
    .download_total{
        position: absolute;
        width: 174px;
        height: 138px;
        top: 128px;
        left: 630px;
    }
    .download_total_num{
        font-size: 30px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #FFF;
position: absolute;
top: 42px;
left: 40px;
    }
    .download_download_png{
          width: 174px;
        height: 138px;
    }
    .download_download{
        position: absolute;
         font-size: 18px;
        font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
color: #FFFFFF;
position: absolute;
top: 70px;
left: 57px;


    }
    .advanced {
        position: absolute;
        top: 350px;
        left: 261px;
    
        height: 26px;
        font-size: 26px;
        font-family: PingFang SC;
        font-weight: 600;
        color: #A40000;
        line-height: 26px;
    }
    
    .create {
        position: absolute;
        top: 385px;
        left: 261px;
        width: 534px;
        height: 45px;
        font-size: 22px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #333333;
    }
    
    .interface {
        position: absolute;
        top: 128px;
        left: 886px;
        width: 980px;
        height: 556px;
    }
    
    .download__free{
        position: absolute;
        position: relative;
        top: 497px;
        left: 260px;
        width: 327px;
        height: 80px;
        background: #FFB900;
        border-radius: 6px;
        border-style: none;
        outline: none;
       
    }
    
    .el-button {
        padding: 0;
        border: none;
    }
    
    .download-icon {
        position: absolute;
        top: 15px;
       left: 60px;
        width: 50px;
        height: 50px;
    }
    
    .free-download {
        position: absolute;
        left: 103px;
        top: 31px;
        width: 210px;
        height: 80px;
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 19px;
    }
    


    .operation {
        position: absolute;
        top: 670px;
        left: 762px;
      
        box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.17);
    }
    .op{
  width: 720px;
  height: 155px;
  background-color: #a40000;
  color: #fff;
}
.op>li{
  float: left;
  width: 180px;
  height: 155px;
  position: relative;

}
.op-test-pic,.op-test-edi,.op-test-water,.op-test-format{
    position: absolute;

}
.op-test-pic{
    right: 31px;
}
.op-test-edi{
    left: 48px;
}
.op-test-water{
    left: 30px;
}
.op-test-format{
    left: 18px;
}
.whites{
background-color:#fff !important;
// color: #a40000;
}
.reds{
    background-color:#a40000 !important;
    // color: #FFF;
}
.op>li:hover{
background-color:#fff;
color: #a40000 
}

.op>li>img{
  position: absolute;
  top: 27px;
  left: 63px;
  width: 55px;
  height: 55px;
}
.op>li>span{
  
  position: absolute;
  top: 90px;

  text-align: center;
}

    
    .picture,
    .ocr,
    .text,
    .water,
    .format {
        width: 55px;
        height: 55px;
        position: absolute;
        top: 26px;
    }
    
    .ocr {
        left: 62px;
    }
    
    .picture {
        left: 243px;
    }
    
    .text {
        left: 424px;
    }
    
    .water {
        left: 603px;
    }
    
    .format {
        left: 783px;
    }
    
    .ocr-text,
    .picture-text,
    .text-text,
    .water-text,
    .format-text {
        position: absolute;
        top: 90px;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        height: 31px;
        text-align: center;
    }
    
    .ocr-text {
        left: 32px;
        width: 116px;
    }
    
    .picture-text {
        left: 222px;
        width: 96px;
    }
    
    .text-text {
        left: 414px;
        width: 73px;
    }
    
    .water-text {
        left: 579px;
        width: 102px;
    }
    
    .format-text {
        left: 748px;
        width: 124px;
    }
    
    .mouse {
        position: absolute;
        top: 914px;
        left: 936px;
        width: 50px;
        height: 50px;
    }
    /* pdf */
    
    .main-pdfs {
        position: relative;
   width: 1920px;
        height: 720px;
        background: #FFF5F5;
    }
    
    .main-pdfs-title {
        width: 1920px;
        height: 192px;
    }
    
    .tookit {
        position: absolute;
        top: 75px;
        left: 677px;
        width: 50px;
        height: 50px;
    }
    
    .main-pdfs-text {
        position: absolute;
        top: 85px;
        left: 741px;
        width: 505px;
        height: 28px;
        font-size: 36px;
        font-family: PingFang SC;
        font-weight: 600;
        color: #A40000;
        line-height: 39px;
    }
    
    .main-pdfs-striping {
        position: absolute;
        top: 132px;
        left: 936px;
        width: 68px;
        height: 12px;
        background: #A40000;
        border-radius: 6px;
    }
    
    .main-pdfs-content {
        box-sizing: border-box;
        padding-left: 196px;
        padding-right: 268px;
        padding-bottom: 16px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    
    .main-pdfs-item {
        position: relative;
        display: block;
        width: 180px;
        height: 198px;
    //    background-color: #fff;
        list-style-type: none;
        display: inline-block;
        margin-left: 56px;
      
        margin-bottom: 55px;
    }
    .main-pdfs-item:hover{
        background-color: #fff;
    }
    .pdf_item{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        position: absolute;
        top: 25px;
        left: 40px;
    }
   .pdf_item:hover{
        background-color: #a40000;
        position: absolute;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        top: 25px;
        left: 40px;
    }
    
    .main-pdfs-item>div>img {
        width: 50px;
        height: 50px;
        position: absolute;
        top: 25px;
        left: 25px;
    }
    
    .main-pdfs-item>span {
      
        position: absolute;
        top: 136px;
        width: 180px;
        // left: -9px;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #333333;
        text-align: center;
       
    }
    // 替换的下载下拉菜单
//    .el-dropdown-menu__item{
//        width: 318px;
//        height: 72px;
//        background: #FFEDBF;
//        border-radius: 6px;
//        font-size: 20px;
//        text-align: center;
//        line-height: 72px;
//    }

    // .el-dropdown-menu__item:hover{
    //     background-color: #FFCD54 !important;
    //     color: #fff !important;
    // }
    /* editor */
    
    .pdf-editor {
        position: relative;
    width: 1920px;
        height: 1560px;
        background: #FFffff;
    }
    
    .pdf-editor-titleicon {
        position: absolute;
        top: 75px;
        left: 590px;
        width: 50px;
        height: 50px;
    }
    
    .pdf-editor-text {
        position: absolute;
        top: 85px;
        left: 653px;
    
        height: 28px;
        font-size: 36px;
        font-family: PingFang SC;
        font-weight: 600;
        color: #A40000;
        line-height: 28px;
    }
    
    .pdf-editor-resultant {
        position: absolute;
        top: 257px;
        left: 251px;
        width: 50px;
        height: 50px;
    }
    
 
    
    .per-content {
        position: absolute;
        top: 346px;
        left: 261px;
        width: 393px;
        height: 99px;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 21px;
    }
    
    .per-title {
        position: absolute;
        top: 276px;
        left: 309px;

        height: 23px;
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: 600;
        color: #A40000;
        line-height: 39px;
    }
    
    .per-pagetwo {
        position: absolute;
        top: 183px;
        left: 737px;
        width: 980px;
        height: 556px;
    }
    
    .per-pageone {
        position: absolute;
        top: 811px;
        left: 211px;
        width: 980px;
        height: 556px;
    }
    
    .per-digi-ico {
        position: absolute;
        top: 918px;
        left: 1262px;
        width: 50px;
        height: 50px;
    }
    
    .per-digi-title {
        position: absolute;
        top: 940px;
        left: 1322px;
        height: 24px;
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: 600;
        color: #A40000;
        line-height: 24px;
    }
    
    .per-digi-content {
        position: absolute;
        top: 1011px;
        left: 1266px;
        width: 371px;
        height: 57px;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 21px;
    }
    
    .dropdown-editor> .download__free {
        position: absolute;
        top: 1410px;
        left: 818px;
    }
    
    .backtop {
        position: fixed;
        bottom: 28px;
        right: 210px;
        width: 50px;
        height: 50px;
    }
    
    .help-pdf {
        position: relative;
       width: 1920px;
        height: 720px;
        background: #FFF5F5;
        // opacity: 0.7;
    }
    .help-pdf-icon{
        position: absolute;
        top: 93px;
        left: 609px;
        width: 50px;
        height: 50px;
    }
    .help-pdf-title{
        position: absolute;
        top: 75px;
        left: 670px;
        font-size: 36px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #A40000;
        line-height: 50px;
        line-height: 80px !important;
        
    
    }
    .router_banner{
        line-height: 64px;
    }
    .help-pdfs-striping{
        position: absolute;
        top: 151px;
        left: 925px;
        width: 68px;
        height: 12px;
        background: #A40000;
        border-radius: 6px;
    }
    .help-content-title{
        position: absolute;
        top: 286px;
        left: 310px;
        width: 524px;
height: 60px;
font-size: 24px;
font-family: PingFang SC;
font-weight: 600;
color: #A40000;
line-height: 36px;

    }
   .help-content-content {
        position: absolute;
        top: 369px;
        left: 309px;
        width: 468px;
height: 119px;
font-size: 14px;
font-family: PingFang SC;
font-weight: 400;
color: #333333;
line-height: 21px;

    }
    .help-pdf-page{
        position: absolute;
        top: 249px;
        left: 922px;
        width: 799px;
        height: 374px;
       
  }
//   用户

.pdf-user{
    position: relative;
    height: 750px;
 width: 100%;
    background-color:#fff;
}
.pdf-user-icon{
    position: absolute;
    top: 74px;
    left: 781px;
    width: 50px;
    height: 50px;
}
.pdf-user-title{
    position: absolute;
    top: 85px;
    left: 843px;
 
height: 28px;
font-size: 36px;
font-family: PingFang SC;
font-weight: 600;
color: #A40000;
line-height: 28px;
}

.el-carousel{
   width: 70%;
   position: absolute;
   left: 285px;
   top: 179px;
   position: relative;
   
}
.el-carousel__container{
    width: 82%;
    width: 100%;
    position: absolute;
    left: 126px;
   
}
.el-carousel--horizontal{
    overflow: visible;
}
.el-carousel__arrow,.el-carousel__arrow--left{
    display: none !important;
}
  .el-carousel__item{
background: #FFFFFF;
box-shadow: 0px 2px 11px 0px #CFCFCF;
border-radius: 6px
  }
.el-carousel__mask{
  width: 400px;
  height: 320px !important;
 }
 .el-carousel__item--card{
     width: 400px;
     height: 295px;
 }
//  .el-carousel__item--card>.is-active {
//      height: 320px;
//  }
.el-carousel__container>.is-active {
  font-size: 14px !important;
    font-family: PingFangSC-Semibold, PingFang SC !important;
    font-weight: 600 !important;
    color: #fff !important;
    line-height: 22px !important;
  }
  .el-carousel__item {
         
font-size: 12px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #999999;
line-height: 20px;
padding: 69px;


  }
  .user_name_1{
      position: absolute;
      top: 400px;
      left: 200px;
      z-index: 100000000;
      float: left;
    color: #000;
  }
//  .el-carousel__item h3 {
//     color: #475669;
//     font-size: 14px;
//     opacity: 0.75;
//     line-height: 20px;
//     margin: 0;
//   }
.el-carousel__container>.is-active{
    background-color: #666666;
    background: url('../assets/css/reduser.png') no-repeat;
    background-size: cover;
    box-shadow: none;
    padding:96px 34px 60px 56px ;

    
}
.el-carousel__indicators--outside{
    position: absolute;
    bottom: -450px !important;
    left: 640px;
    color: #666666
}
.el-carousel__button {
    width: 13px !important;
    height: 13px !important;
    border-radius: 50%;
}
.zhanwei12{
   display: block;
  text-align: right;
}

.left,right{ 
    width: 50px;
    height: 50px;
    }
    .left{
    position: absolute;
    top: 366px;
    left: 166px;
    }
    
.right{
    position: absolute;
    top: 366px;
    right: 168px;
   
}
// footer
.footer{
width: 100%;
    height: 477px;
    position: relative;
    background: #A40000;;
}
.footer-title{
width: 100%;
    height: 160px;

}
.footer-logo{
    position: absolute;
    top: 64px;
    left: 261px;
    width: 330px;
    height: 96px;
}
.footer-logo-a{
    width: 200px;
    height: 200px;
    position: absolute;
    top: 130px;
    left: 160px;
   
}
.footer-content{
    height: 317px;
    box-sizing: border-box;

}
.footer-content-list{
    width: 759px;
    display: flex;
    position: absolute;
    left: 462px;
    top: 144px;
  justify-content: space-between;
}
.footer-content dl{

  text-align: left;
}
.footer-content dt a{
font-size: 16px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #FFFFFF;
line-height: 22px;

}
.footer-content dt{
    margin-bottom: 17px;
}
.footer-content dd {
    margin-top: 14px;
}
.footer-content dd a {

font-size: 14px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #FFFFFF;
line-height: 20px;

}
.footer-content a:hover{
    opacity: 0.8
}
.footer-free-text{
    position: absolute;
    top: 168px;
    left: 1303px;
    font-family: PingFang SC;
    font-weight: 400;
   font-size: 24px;
   color: #FFFFFF;
}
.footer-free-download>.download__free {
    position: absolute;
    top: 243px;
    left: 1367px;
}
.end{
    // position: relative;
    width: 100%;
    height: 80px;
    background-color: #333;
}
.copyright{
    
height: 12px;
font-size: 12px;
font-family: PingFang SC;
font-weight: 400;
color: #FFFFFF;
line-height: 80px;
text-align: center;
}
.fengexian_1{
    height: 172px;
    border: 1px solid #fff;
    position: absolute;
    top: 144px;
    left: 410px;
}
.fengexian_2{
   height: 172px;
    border: 1px solid #fff;
    position: absolute;
    top: 144px;
left: 1251px;
}
.foot-face,.foot-youtu,.foot-twi{
    width: 24px;
    height: 24px;
}
.foot-face{
    position: absolute;
    right: 582px;
    bottom: 99px;
}
.foot-youtu{
    position: absolute;
    right: 538px;
    bottom: 99px;
}
.foot-twi{
    position: absolute;
    right: 494px;
    bottom: 99px;
}
.home_style{
    width: 80px;
    height: 8px;
    background: #FFB900;
    position: absolute;
    top: -9px;
    border-radius: 5px;
    left: 684px;
}

</style>