<template>
  <div>
   <div class="main_title">Purchase History</div>
    <!-- <div class="a_p_titles">Purchase History</div> -->
    <div class="agreement_body">
      <div class="agreement_p_a">
        <div class="agreement_title">
        
         <table>
           <tr>
             <th style="width:60px">Number</th>
             <th style="width:186px">Product</th>
             <th style="width:143px">Price</th>
             <th style="width:200px"> Order number</th>
             <th style="width:260px">Purchase Time</th>
             <th style="width:200px">Automatic renewal</th>
            
             <th></th>
           </tr>
            <tbody>
              <tr v-for="(item,index) in newArr" :key="index">
                <td>{{index+1}}</td>
                <td >{{item.desc}}</td>
                <td>${{item.price}}</td>
                <td>{{item.order_id}}</td>
                <td>{{item.created_at}}</td>
                <td :style="item.status=='3' ? ' color: #A40000' :'color: #7BD52F'">{{item.status==="3" ? 'Closed' : 'Turned on'}}</td>
              

              </tr>
            </tbody>
         </table>
          <button @click="purhis()"></button> 
          
        </div>

        <div class="agreement_content"></div>
       
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
  newArr:[],
  status:''
   
}
  },
//  watch(){
  //   let email = this.$store.state.email;
  //    var data={email:email}
  //    const datas =qs.stringify(data)
  //   const res=await this.axios.post({
  //    url:"v1/order/orderList",
  //    data:datas,
  //    headers: { 'content-type': 'application/x-www-form-urlencoded' },
  //  })
  //  if(res.status !==200){
  // console.log(res);
  //  }else{
  //     console.log(res.data.data);
  //       this.newArr = res.data.data
  //  }
  // },
 methods:{
     
     outsideClose() {
        this.user_show = false
      
    },
     purhis:function(){
     let email = this.$store.state.email;
     var data={email:email}
     const datas =qs.stringify(data)
     this.axios({
        method:'post',
        url:"v1/order/orderList",
        data:datas,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      }).then(res =>{
        if(res.status !==200){

        }else{
           console.log(res);
           this.newArr = res.data.data
           console.log(res.data.data);
           
        }
      })
     
      // if(res.status !==200){
      //   console.log(res);
      // }else{
     
      //   console.log(res.data.data);
      //   this.newArr = res.data.data
      // }
     },
  },
 mounted:function(){
   this.purhis();
 }
};
</script>
<style lang='less' scoped>
.agreement-body {
  width: 1920px;
  height: 1742px;
  background: #f9f9f9;
}
.agreement_p_a {
  width: 1066px;

  position: absolute;
  top: 0px;
  left: 332px;
  // background: #ffffff;
  border-radius: 6px;
}

th,td{
 text-align: center; 
}
tbody>tr{
  background-color: #fff;

}
th{

font-size: 18px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #999999;
line-height: 25px;
}
tr>td{
  
font-size: 16px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #333333;

}
tbody{
  overflow: auto;
}
tr{
  width: 1066px;
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
