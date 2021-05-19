<template>
<div>


   <el-form :inline=true class="form_filter">
     <el-form-item>
       <el-select v-model="dateRange.value" placeholder="事件类型"   >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
     >
      
    </el-option>
  </el-select>
     </el-form-item>
      <el-form-item>
          <!-- <el-date-picker v-model="dateRange.startTime" type="datetime" placeholder="选择开始日期" value-format="yyyy-MM-dd HH:mm:ss"
            :default-time="'00:00:00'">
          </el-date-picker>
          ~
          <el-date-picker v-model="dateRange.endTime" type="datetime" placeholder="选择结束日期" value-format="yyyy-MM-dd HH:mm:ss"
            :default-time="'23:59:59'">
          </el-date-picker> -->
          <el-date-picker v-model="dateRange.startTime" type="datetime" placeholder="选择开始日期" value-format="yyyy-MM-dd "
            >
          </el-date-picker>
          ~
          <el-date-picker v-model="dateRange.endTime" type="datetime" end-placeholder=aaa value-format="yyyy-MM-dd "
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="loadData()">查询</el-button>
        </el-form-item>
      </el-form>
        <table>
           <tr>
             <th style="width:20px">Number</th>
             <th style="width:160px">ip</th>
             <th style="width:286px">uuid</th>
             <th style="width:300px">time</th>
             <th style="width:100px"> email</th>
             <th style="width:150px">type</th>
             <th style="width:160px">systemVersion</th>
             <th style="width:160px">version</th>
             <th style="width:160px"> evenName</th>
           </tr>
            <tbody>
              <tr v-for="(item,index) in newArr" :key="index">
                  <td>{{index+1}}</td>
                <td>{{item.ip}}</td>
                <td >{{item.uuid}}</td>
                <td>{{item.time}}</td>
                <td>{{item.email}}</td>
                <td>{{item.type}}</td>
                <td >{{item.systemVersion}}</td>
                <td>{{item.version}}</td>
                <td>{{item.eventName}}</td>
              

              </tr>
            </tbody>
         </table>
</div>
</template>

<script>
import qs from 'qs'
  export default {
    data() {
      return {
        newArr:[],
           dateRange: {
            
            
           
          startTime:  new Date(new Date().setHours(0, 0, 0, 0)),
          endTime: new Date(),
        
           
        },
        options: [{
          value: 'open_app',
          label: 'open_app'
        }, {
          value: 'login',
          label: 'login'
        }, {
          value: 'jump_to_sub',
          label: 'jump_to_sub'
        }],
        value: ''
      }
    },
   created(){
    //  console.log(this.options[0].value);
   this.dateRange.value=this.options[0].value
   },
     methods:{
      
      loadData() {
       
        let params = {
          type:this.dateRange.value,
          start_date: this.dateRange.startTime,
          end_date: this.dateRange.endTime
          

        }
        //  console.log(params);
        var datas = qs.stringify(params)
        this.axios({
          method:'post',
          url:'v1/recordlog/filterDetail',
          data:datas,
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
        }).then(res=>{
          if(res.status !=200){

          }else{
            // console.log(res);
            this.newArr =res.data.data.logDetail
            console.log(res.data.data.logDetail);
            // console.log(item);

          }
        })
        
        // getDataByTime(params).then(res => {
        //   this.dataList = res.data.data
        //   this.page.total = res.data.total
        // })
      }

    }
  }
</script>
<style lang="less" scoped>
.form_filter{
    position: absolute;
    top: 30px;
    left: 600px;
}
table{
  position: absolute;
  top: 100px;
  left: 50px;
  
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
</style>