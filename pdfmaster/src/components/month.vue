<template>
  <div>

    <div class="price-style">
      <div class="change_price_month">
        <span class="change_price_title">
          PDFmaster for <br> Mac/Win
        </span>
        <span class="change_price_now">
          $19.99
        </span>
        <span class="change_price_before">
          $25
        </span>
        <span class="change_price_each">
          /Month
        </span>
        <span class="change_price_cancel">
          Automatically renew, cancel any time
        </span>
        
        <button class="change_price_btn" @click="BuyMonth()">BUY NOW</button>
      </div>

      <div class="price_year">
        <span class="price_title">
          PDFmaster for<br> Mac/Win
        </span>
        <img
          src="../assets/css/subscription/popular.png"
          alt=""
          class="popular"
        />
        <span class="price_now">
          $69.99
        </span>
        <span class="price_before">
          $125
        </span>
        <span class="price_each">
          /Year
        </span>
        <span class="price_cancel">
          Automatically renew, cancel any time
        </span>
        
        <button class="price_btn" @click="buyyear()">BUY NOW</button>
      </div>

      <div class="price_quarterly">
        <span class="price_title">
          PDFmaster for <br> Mac/Win
        </span>
        <span class="price_now">
          $39.99
        </span>
        <span class="price_before">
          $75
        </span>
        <span class="price_each">
          /Quarterly
        </span>
        <span class="price_cancel">
          Automatically renew, cancel any time
        </span>
        <button class="price_btn" @click="buyquar()">BUY NOW</button>
      </div>
    </div>
  </div>
</template>
<script>
import qs from 'qs'
export default {
  
  name: "month",
  data() {
    return {
      id:8000
    };
  },
 
  computed:{
    email(){
      
      return this.$store.state.email;
    }
  },
  created(){
fbq('track', 'ViewContent', {content_name: "month"});
  },
   methods: {
    async BuyMonth(){
      fbq('trackCustom', 'payMonth',{currency: "USD", value: 19.99})
     
      fbq('track', 'Purchase', {currency: "USD", value: 19.99});
const params= {
                   hitType: 'event',
                   eventCategory: 'month',
                   eventAction: 'pay',
                   eventLabel: 'pay month',
                   value: 19.99
                }
             window.ga('send',params)

      if(this.$store.state.token ==undefined||this.$store.state.token ==''){
   
 this.$parent.$parent.opendialog()
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
  },
};
</script>
<style lang="less" scope></style>
