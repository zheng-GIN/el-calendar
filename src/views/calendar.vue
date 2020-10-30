<template>
  <div>
    <el-row class="rowHeader">
      <el-col>
        <el-button>正常工作日</el-button>
        <el-button type="success" @click="workday">周日加班</el-button>
        <el-button type="primary" @click="workrest">周末休息</el-button>
        <el-button type="warning" @click="holidayrest"
          >节假日休息，其他休息</el-button
        >
      </el-col>
    </el-row>
    <el-calendar v-model="elcalendar" id="calendar">
      <template slot="dateCell" slot-scope="{ date, data }">
        <div>
          <div
            v-for="(item, index) in calendarData"
            :key="index"
            @click="handleelcalendar(item)"
          >
            <div
              v-if="
                data.day.split('-').slice(1)[0] ==
                  item.currantTime
                    .split('-')
                    .slice(1)
                    .join('-')
                    .split('', 2)
                    .join('')
              "
            >
              <div
                v-if="
                  data.day.split('-').slice(2)[0] ==
                    item.currantTime
                      .split('-')
                      .slice(2)
                      .join('-')
                      .split('', 2)
                      .join('')
                "
                :class="'li-0'+item.status,"
              >
                {{ data.day.split("-").slice(2)[0] }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-calendar>
  </div>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      elcalendar:'2020-11',
      calendarData: [
        { currantTime: "2020-11-01", status: "1" },
        { currantTime: "2020-11-02", status: "1" },
        { currantTime: "2020-11-03", status: "1" },
        { currantTime: "2020-11-04", status: "1" },
        { currantTime: "2020-11-05", status: "1" },
        { currantTime: "2020-11-06", status: "1" },
        { currantTime: "2020-11-07", status: "1" },
        { currantTime: "2020-11-08", status: "1" },
        { currantTime: "2020-11-09", status: "1" },
        { currantTime: "2020-11-10", status: "1" },
        { currantTime: "2020-11-11", status: "1" },
        { currantTime: "2020-11-12", status: "1" },
        { currantTime: "2020-11-13", status: "2" },
        { currantTime: "2020-11-14", status: "1" },
        { currantTime: "2020-11-15", status: "1" },
        { currantTime: "2020-11-16", status: "4" },
        { currantTime: "2020-11-17", status: "1" },
        { currantTime: "2020-11-18", status: "1" },
        { currantTime: "2020-11-19", status: "4" },
        { currantTime: "2020-11-20", status: "1" },
        { currantTime: "2020-11-21", status: "1" },
        { currantTime: "2020-11-22", status: "1" },
        { currantTime: "2020-11-23", status: "2" },
        { currantTime: "2020-11-24", status: "3" },
        { currantTime: "2020-11-25", status: "1" },
        { currantTime: "2020-11-26", status: "1" },
        { currantTime: "2020-11-27", status: "1" },
        { currantTime: "2020-11-28", status: "1" },
        { currantTime: "2020-11-29", status: "1" },
        { currantTime: "2020-11-30", status: "1" },
      ],
    };
  },
  methods: {
    //周日加班
    workday() {
      this.status = 3;
    },
    //周末休息
    workrest() {
      this.status = 2;
    },
    //节假日休息，其他休息
    holidayrest() {
      this.status = 4;
    },
        handleelcalendar(e) {
      // this.choose=!this.choose
      if (e.status == 4) {
        this.$set(e, "status", 1);
         return;
      }else if(e.status==3){
          this.$set(e, "status", 1);
         return;
      }else if(e.status==2){
         this.$set(e, "status", 1);
         return
      }
       this.$set(e, "status", this.status);
     
    },
  },
};
</script>
<style>
.rowHeader {
  margin-bottom: 20px;
}
.li-01 {
  width: 100%;
  height: 84px;
  line-height: 84px;
  text-align: center;
}
.li-02 {
  width: 100%;
  height: 84px;
  line-height: 84px;
  text-align: center;
  background-color: #1890ff;
}
.li-03 {
  width: 100%;
  height: 84px;
  line-height: 84px;
  text-align: center;
  background-color: #13ce66;
}
.li-04 {
  width: 100%;
  height: 84px;
  line-height: 84px;
  text-align: center;
  background-color: #ffdf25;
}
.li-05 {
  width: 100%;
  height: 84px;
  line-height: 84px;
  text-align: center;
  background-color: rgb(255, 0, 55);
}
</style>
