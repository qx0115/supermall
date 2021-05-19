<template>
<div>
  
<div class="discount">
     
    <div class="pdf_fun">
    <ul >
        <li class="fun_li"><img src="../assets/css/discount/web.svg" alt="" > <span class="fun_title">Trusted brand</span><span class="fun_body" >Millions of customers use PDFmaster <br> every day</span></li>
        <li class="fun_li"><img src="../assets/css/discount/web2.svg" alt=""><span class="fun_title">Award-winning software</span><span class="fun_body">Most popular software</span></li>
        <li class="fun_li"><img src="../assets/css/discount/webcopy.svg" alt=""><span class="fun_title">Powerful editing tools</span><span class="fun_body">Feature-rich software to mee all <br> your PDF needs</span></li>
        <li class="fun_li"><img src="../assets/css/discount/webcopy.png" alt=""><span class="fun_title">Cost effective</span><span class="fun_body">All the features you need at <br> a lower price</span></li>
    </ul>
  </div>
    <div class="waimakar">
<img src="../assets/css/discount/Waimakariri.png" alt="" class="bgc_i">

<img  class="group11" src="../assets/css/discount/Group11.png" alt="">
<!-- 促销前样式 -->
<div class="wai_price">
    <span class="price_now_a">
$62.99
    </span>
    <span class="price_before_a">
$69.99
    </span>

</div>
<!-- 促销后 -->
<div @click="downloadfree_d()" class="download__free_d"><img src="../assets/css/main-master/download.png" alt="" class="download-icon"> <span class="free-download">TRY IT FREE</span></div>
 <!-- <el-dropdown>
            <el-button style="border: none; padding: 0;">
                <img src="../assets/css/main-master/download.png" alt="" class="download-icon"> <span class="free-download">FREE DOWNLOAD</span>
            </el-button>
            <el-dropdown-menu slot="dropdown" style="background-color: #ffedbf;padding: 6px;" >
               <div name="downloadfile"  @click="downloadMac_c()">
              <el-dropdown-item style=" text-align: center;line-height: 48px;
              " > For Mac OS</el-dropdown-item></div> 
             <div name="downloadfile"  @click="downloadwin_c()">
             <el-dropdown-item style="line-height: 24px; text-align: center">For Windows 64bit</el-dropdown-item>
             </div>   
            </el-dropdown-menu>
    </el-dropdown> -->

<button class="price_buynow">
    <img class="price_buynow_icon" src="../assets/css/discount/openbuy.svg" alt="">
    <span class="price_buynow_buy" @click="buydiscount()"> BUY NOW
    </span>
</button>

<div class="move_icon">
    <!-- <div class="group17"><img src="../assets/css/discount/Group17.png" alt=""></div> -->
    <div ref="moveTrans" class="move  group"><img src="../assets/css/discount/Group.svg" alt=""></div>
    <div ref="moveTrans" class="move  group3copy"><img src="../assets/css/discount/Group3Copy.svg" alt=""></div>
    <div ref="moveTrans" class="move group4copy"><img src="../assets/css/discount/Group4Copy.svg" alt=""></div>
    <div ref="moveTrans" class="move group5"><img src="../assets/css/discount/Group5.svg" alt=""></div>
    <div ref="moveTrans" class="move Shape"><img src="../assets/css/discount/Shape.svg" alt=""></div>
    <div ref="moveTrans" class="move group1"><img src="../assets/css/discount/group1.svg" alt=""></div>
</div>

   </div>

<div class="discount_pdfs">

<img class="group_l" src="../assets/css/discount/Group3.svg" alt="">
<div class="group-r">
    <ul>
        <li v-for="item in get_control" :key="item.titlt"><span class="circle"></span>
            <span class="get_control_title"> {{item.title}}</span>
            <span class="get_control_body"> {{item.body}}</span>
        </li>
    </ul>
</div>
<img class="kongjian" src="../assets/css/discount/kongjian2.png" alt="">
</div>
 <div class="end">
      <div class="copyright">Copyright © 2021 All rights reserved.</div>
  </div>
    <!-- 回到顶部 --> 

</div>
</div>
</template>
<script>
import qs from 'qs'
import move from '../assets/common/pricemove.js'
export default{
name:'',



data(){
    return {
      get_control:[
          {title:"Watermark ",
          body:"Create a watermark for PDF."},
          {title:"Digital Signature ",
          body:"Design a unique signature that belongs to you."},
          {title:"Protect ",
          body:"Unique encryption technology to protect documents."},
          {title:"Edit PDFs ",
          body:"Edit PDFs in any way you want, whether it is editing images, text, links or backgrounds, etc."
          }

      ]
    }
},
computed:{
    email(){
      
      return this.$store.state.email;
    }
  },
   created(){
fbq('track', 'ViewContent', {content_name: "discount"});
  },
  
methods:{
            async downloadfree_d(){
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
            //  gtag("event", "begin_checkout", {
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
        //    gtag('event','add_payment_info',{
        //    })
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
    mousemove(){
      
    },
    async buydiscount(){
        fbq('trackCustom', 'payDiscount',{currency: "USD", value: 62.99})
        fbq('track', 'Purchase', {currency: "USD", value: 62.99});
        const params= {
                   hitType: 'event',
                   eventCategory: 'discount',
                   eventAction: 'pay',
                   eventLabel: 'pay discount',
                   value: 62.99
                }
             window.ga('send',params)
//            gtag("event", "purchase", {
//   currency: "USD",
//   transaction_id: "discount",
//   value:"62.99",})
               if(this.$store.state.token =='undefined'||this.$store.state.token ==null){

 this.$parent.opendialog()
 setTimeout(() => {
 
   this.buydiscount()
  
 }, 5000);
      }else{
      this.axios.get('v1/order/priceList').then(function(res){

        
      })
   let email =this.$store.state.email;
   let id = 8003
      var data ={email:email,good_id:id}
      const datas =qs.stringify(data)

      
     

   
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
    }}
}
}
</script>

<style lang='less' scoped >
@import '../assets/fonts/font.css';
ul,li{
    list-style: none;
}
.discount{
   width: 1920px;
    height: 2365px;
    // position: relative;
    position: absolute;
   overflow: hidden;

}
.logo{
    position: absolute;
    width: 200px;
    height: 60px;
    top: 20px;
    left: 260px;
}
.waimakar{
   width: 1920px;
    height: 900px;
}
.bgc_i{
    width: 1920px;
}
.pdf_fun{
   width: 1400px;
height: 220px;
background: #FFFFFF;
box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.1);
border-radius: 6px;
   position: absolute;
    top: 847px;
    left: 260px;
    z-index: 100;
}

.fun_li{
width: 350px;
height: 220px;
  float: left;
  position: relative;
}

.fun_li>img{
    position: absolute;
    top: 38px;
    left: 143px;
    width: 74px;
    height: 64px;
   
}
.fun_title{
   width: 350px;
    position: absolute;
    top: 116px;
    text-align: center;

font-size: 18px;
font-family: Raleway-Black, Raleway;
font-weight: 900;
color: #A40000;
line-height: 21px;
}
.discount_pdfs{
    width: 1920px;
}
.group5>img{
    width: 54px;
    height: 54px;
}

.group1>img{
    width: 71px;
    height: 71px;
}
.group3copy>img{
    width: 72px;
    height: 72px;
}
.group>img{
    width: 164px;
    height: 164px;
}
.group4copy>img{
    width: 62px;
    height: 62px;
}
.Shape>img{
    width: 164px;
    height: 164px;
}
.fun_body{
    width: 350px;
    position: absolute;
    top: 143px;
   text-align: center;
    
font-size: 16px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #666666;
line-height: 18px;
}
.group-r>ul{
    width: 512px;
    height: 595px;
    background-color:#FEF9F0;
    position: absolute;
    left: 1083px;
    top: 363px;
}
.group-r>ul>li{
    width: 512px;
    height: 137px;
    margin-bottom: 12px;
    background-color: #fff;
    position: relative;

background: #FFFFFF;
border-radius: 12px;
}
.get_control_title{
    position: absolute;
    top: 28px;
    left: 56px;

font-size: 18px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #A40000;
line-height: 25px;
}
.get_control_body{
    position: absolute;
    top: 65px;
    left: 56px;

font-size: 16px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #666666;
line-height: 22px;
}
.discount_pdfs{
width: 1920px;
height: 1385px;
position: relative;
background: #FEF9F0;
border-radius: 1px;

}
.group_l{
    top: 363px;
    left: 325px;
    position: absolute;
    width: 698px;
    height: 595px;
}
.kongjian{
position: absolute;
bottom: 0;
width: 1920px;
height: 312px;
}
.circle{
    position: absolute;
    top: 31px;
    left: 22px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px dashed #c3c3c3;
}
 
.waimakar{
   width: 1920px;
    height: 900px;
    position: relative;
}
.group11{
    position: absolute;
    top: 181px;
    left: 260px;
    width: 624px;
    height: 163px;
}
.wai_price{
    width: 481px;
height: 134px;
background: rgba(255, 166, 138, 0.71);
border-radius: 21px;
// opacity: 0.59;
position: absolute;
top: 405px;
left: 260px;

}
.price_now_a{


width: 297px;
height: 64px;
font-size: 90px;

font-family: Raleway-Black, Raleway;
font-weight: 900;
color: #FFFFFF;
line-height: 64px;
text-shadow: 2px 2px 4px #CD3E46;
-webkit-text-stroke: 2px  #FF4820;
position: absolute;
top: 31px;
left: 25px;
z-index: 10000;
}
.price_before_a{
font-size: 40px;
font-family: Raleway-Black, Raleway;
font-weight: 900;
color: #FFFFFF;
line-height: 44px;
position: absolute;
top: 54px;
left: 327px;
z-index: 10000;
text-decoration: line-through;
}
.price_buynow{
    width: 303px;
height: 64px;
background: linear-gradient(180deg, #FFE7AD 0%, #FF8460 100%);
box-shadow: 0px 2px 5px 0px rgba(250, 100, 0, 0.53);
border-radius: 6px;
border: 3px solid #FFFFFF;
position: absolute;
top: 612px;
left: 263px;
}
.price_buynow:hover{
    background: linear-gradient(180deg, #FFE7D5 0%, #FFE3A0 66%, #FFF1CF 100%);
box-shadow: 0px 2px 5px 0px rgba(250, 100, 0, 0.53);
border-radius: 6px;
border: 3px solid #FFFFFF;
}
.price_buynow_buy{
font-size: 24px;

font-family: Raleway-Black, Raleway;
font-weight: 900;
color: #FFFFFF;
line-height: 29px;
position: absolute;
top: 18px;
left: 112px;
}
.price_buynow_icon{
    position: absolute;
    top: 15px;
    left: 73px;
    width: 34px;
    height: 34px;
}
.group{
position: absolute;
top: 651px;
right: 545px;
}
.group3copy{
    top: 436px;
   right: 348px;
    position: absolute;
}
.group4copy{
position: absolute;
top: 245px;
right: 50px;
}
.group5{
position: absolute;
top: 73px;
right: 618px;
}
.group1{
    position: absolute;
top: 201px;
right: 564px;
}
.Shape{
    top: 52px;
    right: 83px;
    position: absolute;
}
.end{
    width: 100%;
height: 80px;
background: #333333;
border-radius: 1px;
text-align: center;
font-size: 12px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #FFFFFF;
line-height: 80px;
}
.download__free_d{
    width: 303px;
    height: 64px;
    position: absolute;
    top: 612px;
    left: 585px;
   background-color: none;

    border-radius: 6px;
    border: 3px solid #FFFFFF  !important;
   border-style: none;
        outline: none;

}
.download__free_d:hover{
    width: 303px;
    height: 64px;
    position: absolute;
    top: 612px;
    left: 585px;
 background: rgba(255, 255, 255, 0.2);

    border-radius: 6px;
    border: 3px solid #FFFFFF  !important;
   border-style: none;
        outline: none; 
}
.free-download{
    position: absolute;
    top: 18px;
    left: 103px;
    font-size: 24px;
font-family: Raleway-Black, Raleway;
font-weight: 900;
color: #FFFFFF;
line-height: 29px;
}
.download-icon{
    position: absolute;
    top: 15px;
    left: 60px;
    width: 34px;
    height: 34px;
  
}
.group17{
    width: 461px;
    height: 457px;
    position: absolute;
    top: 241px;
    right: 545px;
}
// 改版前下载下拉菜单
// .el-dropdown-menu {
//     width: 308px;
//     height: 84px;
//     display: flex
// }

// .el-dropdown-menu__item{
    
// font-size: 16px !important;
// font-family: PingFangSC-Regular, PingFang SC;
// font-weight: 400 !important;
// color: #333333 !important;
// width: 144px !important;
// height: 72px !important;

// text-align: center;

// }
//  .el-dropdown-menu__item:hover{
//         background-color: #FFCD54 !important;
//         color: #fff !important;
//     }

</style>