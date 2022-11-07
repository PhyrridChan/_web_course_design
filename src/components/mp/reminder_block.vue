<template>
  <InnerBlock :block-name="'reminder'">
    <template v-slot:content>
      <div class="title-block">
        <CommonTitle :title="'待办事项'" :more-btn="moreBtn" :blockw-width="100"
        ></CommonTitle>
      </div>
      <div class="rem-content">
        <div class="time-selector">
          <div class="wktime-selector">
            <span class="arrow pre-arrow" @click="$nf.not_finish()"></span>
            <span class="wk-time-content">
              {{ today }}
            </span>
            <span class="arrow next-arrow" @click="$nf.not_finish()"></span>
          </div>
          <div class="daytime-selector">
            <div class="wkday-name">
              <div class="wkday" v-for="(item, index) in ['日','一','二','三','四','五','六']" :key="item">
                <div class="wk-name">{{ item }}</div>
                <div
                    :class="['day-num', wkdays[index] === today_num ? 'today' : '', to_do_num.includes(wkdays[index]) ? 'to-do' : '']"
                    @click="reset_day(wkdays[index])"
                >
                  {{ wkdays[index] }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="reminder-list">
          <div class="reminder-group" v-for="(rem_group, g_index) of reminder" :key="g_index"
               :style="'--group-theme-color:' + rem_group.theme_color" :ref="rem_group.name"
               :data-ginfo="JSON.stringify(rem_group)">
            <div class="reminder-g-title-container">
              <div class="reminder-g-name">{{ rem_group.group_name }}</div>
              <div class="reminder-g-count">{{ rem_group.list.length - 1 }}</div>
            </div>
            <div class="reminder-g-items-container">
              <div class="rg-item" v-for="(item, index) of rem_group.list" :key="index">
                <label v-if="item.status !== -1 && item.time_begin !== -1 && today_num >= item.time_begin && today_num <= item.time_end"
                       @click.prevent="update_state(item, $event)">
                  <input type="checkbox" :checked="item.status">
                  <div class="cus-checkbox"></div>
                  <div class="rg-item-content">
                    <span>{{ item.task_info }}</span>
                    <div class="rg-item-content-icon">
                      <delete-outlined/>
                    </div>
                  </div>
                </label>
              </div>
              <div class="rg-item add-item">
                <label>
                  <div class="cus-checkbox-add"></div>
                  <div class="rg-item-content add-item"
                       @click="add_item(g_index)"
                       ref="add-item">
                    <fieldset>
                      <input class="fs-name show" type="text" name="task-name" id="nt-name" placeholder="添加待办事项">
                      <div ref="show-other" class="fs-other">
                        <input class="fs-other" type="text" name="notes" id="nt-notes" placeholder="添加备注">
                        <input class="fs-other" type="text" name="tags" id="nt-tags" placeholder="添加标签">
                        <a-range-picker :disabled-date="disabledDate"
                                        :locale="zh_local" v-model:value="date_range" :bordered="false" size="small"
                                        @change="change_dt"/>
                      </div>
                    </fieldset>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </InnerBlock>
</template>

<script>
import InnerBlock from "@/components/inner-block";
import CommonTitle from "@/components/common_title";
import axios from "axios";
import {message} from "ant-design-vue";
import cookie from "@/assets/js/cookie";
import {ref} from "vue";
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
import dayjs from 'dayjs';
import {DeleteOutlined} from '@ant-design/icons-vue';

export default {
  name: "reminder_block",
  components: {CommonTitle, InnerBlock, DeleteOutlined},
  methods: {
    add_item(dom) {
      this.$refs["show-other"][dom].classList.add('show-other')
    },
    change_dt() {
      this.range_begin = new Date(this.date_range[0].$d).getDate()
      this.range_end = new Date(this.date_range[1].$d).getDate()
    },
    reset_day(day) {
      this.today_num = day
    },
    get_todo_list(query_field) {
      this.reminder = []
      this.to_do_num = []
      axios.post('http://127.0.0.1:3000/api/todo/get', query_field).then(
          (res) => {
            let res_data = res.data
            res_data.forEach((item) => {
              let has = this.reminder.findIndex(o => o.group_name === item.group_name)
              if (has === -1) {
                this.reminder.push({
                  group_name: item.group_name,
                  group_id: item.group_id,
                  list: [item]
                })
              } else this.reminder[has].list.push(item)
              let range = (start, end) => new Array(end - start).fill(start).map((el, i) => start + i);
              this.to_do_num = [...new Set(this.to_do_num.concat(range(item.time_begin, item.time_end + 1)))]
            })
            let theme_color_arr = ['#037EF3', '#0CB9C1', '#7552CC']
            this.reminder.forEach((v, index) => v.theme_color = theme_color_arr[index])
          },
      ).catch(err => {
        console.error(err)
        message.error("数据获取失败")
      });
    },
    update_state(item, e) {
      let arr1 = e.path || (e.composedPath && e.composedPath());
      let arr2 = document.querySelectorAll(".anticon-delete")
      let contain = ((arr1.length + arr2.length) !==
          Array.from(new Set([...arr1, ...arr2])).length);
      let query_field = {
        userId: cookie.getCookie("uid"),
        taskId: item.task_id
      }
      let state = contain ? 'delete' : item.status === 0 ? 'done' : 'reset'
      axios.post('http://127.0.0.1:3000/api/todo/'.concat(state), query_field).then(
          res => {
            if (res.data.affectedRows === 1 && res.data.changedRows === 1) {
              message.info("数据更新成功")
              this.get_todo_list({
                userId: cookie.getCookie("uid")
              })
            } else message.error("数据更新失败")
          }
      ).catch(err => {
        console.error(err)
        message.error("数据更新失败")
      })
    },
    reset_newInfo(group) {
      group.querySelectorAll('input').forEach(v => v.value = '')
      this.date_range = ref()
      this.range_begin = null
      this.range_end = null
    },
    disabledDate: current => {
      return current && (current < dayjs("2022-10-1").endOf('day') || current > dayjs("2022-10-8").endOf('day'));
    },
    add_to_db(group) {
      document.querySelectorAll(".reminder-group").forEach(v => {
        if (v.querySelector('.fs-other') === group) {
          let ginfo = JSON.parse(v.dataset.ginfo)
          let newFormdd = v.querySelector('.rg-item-content.add-item').querySelector('fieldset').querySelectorAll('input');
          let newInfo = newFormdd[0].value
          let b = this.range_begin
          let e = this.range_end
          if (!(newInfo === null || b === null || e === null || newInfo.length <= 0)) {
            let query_field = {
              userId: cookie.getCookie("uid"),
              groupId: ginfo.group_id,
              groupName: ginfo.group_name,
              taskInfo: newInfo,
              timeBegin: b,
              timeEnd: e,
            }
            axios.post('http://127.0.0.1:3000/api/todo/add', query_field).then(
                (res) => {
                  let res_data = res.data
                  console.log(res_data)
                  if (res_data.affectedRows === 1) {
                    message.info("成功录入数据")
                    this.get_todo_list({
                      userId: cookie.getCookie("uid")
                    })
                  }
                },
            ).catch(err => {
              console.error(err)
              message.error("数据更新失败")
            });
          }
        }
        this.reset_newInfo(group)
      })
    }
  },
  mounted() {
    let query_field = {
      userId: cookie.getCookie("uid")
    }
    this.get_todo_list(query_field)

    document.addEventListener('mousedown', (e) => {
      this.opetating_group = document.querySelector(".show-other")
      if (this.opetating_group === null) return
      let arr1 = e.path || (e.composedPath && e.composedPath());
      let arr2 = this.$refs["add-item"];
      let arr3 = document.querySelectorAll(".ant-picker-dropdown")
      let contain = ((arr1.length + arr2.length + arr3.length) !==
          Array.from(new Set([...arr1, ...arr2, ...arr3])).length);
      if (!contain) {
        this.$refs["show-other"].forEach(v => v.classList.remove('show-other'))
        this.add_to_db(this.opetating_group)
      } else {
        let group = arr1.filter(v => v.classList?.contains("reminder-group"))[0]
        let now_show = group?.querySelector(".fs-other") || this.opetating_group
        this.$refs["show-other"].forEach(v => (v !== now_show) ? v.classList.remove('show-other') : null)
        if (this.opetating_group !== now_show) this.add_to_db(this.opetating_group)
      }
    })

    this.datetime = new Array(this.reminder.length)
    this.datetime.fill('添加时间')
  },
  data() {
    return {
      date_range: ref(),
      moreBtn: {
        btn: true,
        content: '待办管理',
        icon:

            '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M5.1516 0.46875C5.06044 0.46875 4.973 0.504966 4.90854 0.569432C4.84407 0.633898 4.80785 0.721332 4.80785 0.8125V2.27275C4.45428 2.42734 4.1192 2.62117 3.80892 2.85059L2.54323 2.12013C2.46428 2.07454 2.37045 2.06219 2.28239 2.08578C2.19433 2.10938 2.11925 2.16699 2.07367 2.24594L0.354917 5.22281C0.309335 5.30176 0.296982 5.39559 0.320577 5.48365C0.344171 5.57171 0.40178 5.64679 0.48073 5.69237L1.74607 6.42284C1.70334 6.80643 1.70334 7.19357 1.74607 7.57716L0.481073 8.30763C0.408086 8.34965 0.353066 8.417 0.326452 8.4969C0.299839 8.57681 0.303485 8.6637 0.336698 8.74109L0.354917 8.77719L2.07367 11.7541C2.11925 11.833 2.19433 11.8906 2.28239 11.9142C2.37045 11.9378 2.46428 11.9255 2.54323 11.8799L3.80892 11.1494C4.11922 11.3787 4.4543 11.5724 4.80785 11.7269V13.1875C4.80785 13.2787 4.84407 13.3661 4.90854 13.4306C4.973 13.495 5.06044 13.5312 5.1516 13.5312H8.5891C8.68027 13.5312 8.76771 13.495 8.83217 13.4306C8.89664 13.3661 8.93285 13.2787 8.93285 13.1875V11.7272C9.28655 11.5727 9.62174 11.3789 9.93213 11.1494L11.1978 11.8799C11.2768 11.9255 11.3706 11.9378 11.4587 11.9142C11.5467 11.8906 11.6218 11.833 11.6674 11.7541L13.3861 8.77719C13.4283 8.70426 13.4422 8.61839 13.4252 8.53588C13.4082 8.45338 13.3615 8.37998 13.294 8.32963L13.2603 8.30763L11.995 7.57716C12.0377 7.19357 12.0377 6.80643 11.995 6.42284L13.26 5.69237C13.333 5.65035 13.388 5.583 13.4146 5.5031C13.4412 5.42319 13.4376 5.3363 13.4044 5.25891L13.3861 5.22281L11.6674 2.24594C11.6218 2.16699 11.5467 2.10938 11.4587 2.08578C11.3706 2.06219 11.2768 2.07454 11.1978 2.12013L9.93213 2.85059C9.62184 2.62129 9.28676 2.42757 8.9332 2.27309V0.8125C8.9332 0.721332 8.89698 0.633898 8.83252 0.569432C8.76805 0.504966 8.68062 0.46875 8.58945 0.46875H5.15195H5.1516ZM5.8391 1.5H7.9016V2.94753L8.52035 3.21772C8.80292 3.34147 9.07104 3.4965 9.31923 3.68006L9.86235 4.08156L11.1181 3.35694L12.1493 5.14306L10.8953 5.86666L10.9699 6.53697C11.0042 6.8447 11.0042 7.1553 10.9699 7.46303L10.8953 8.13334L12.1493 8.85694L11.1181 10.6431L9.8627 9.91844L9.31923 10.3199C9.07104 10.5035 8.80292 10.6585 8.52035 10.7823L7.9016 11.0525V12.5H5.8391V11.0525L5.2207 10.7823C4.93814 10.6585 4.67001 10.5035 4.42182 10.3199L3.8787 9.91844L2.62298 10.6431L1.59173 8.85694L2.84573 8.13334L2.77114 7.46303C2.73685 7.1553 2.73685 6.8447 2.77114 6.53697L2.84573 5.86666L1.59173 5.14306L2.62298 3.35694L3.87835 4.08156L4.42182 3.68006C4.66995 3.49651 4.93793 3.34142 5.2207 3.21772L5.83945 2.94753V1.5H5.8391ZM6.85489 4.59375C6.21671 4.59375 5.60467 4.84727 5.15341 5.29852C4.70215 5.74978 4.44864 6.36182 4.44864 7C4.44864 7.63818 4.70215 8.25022 5.15341 8.70148C5.60467 9.15274 6.21671 9.40625 6.85489 9.40625C7.49306 9.40625 8.1051 9.15274 8.55636 8.70148C9.00762 8.25022 9.26114 7.63818 9.26114 7C9.26114 6.36182 9.00762 5.74978 8.55636 5.29852C8.1051 4.84727 7.49306 4.59375 6.85489 4.59375ZM6.85489 5.625C7.21956 5.625 7.56929 5.76987 7.82716 6.02773C8.08502 6.28559 8.22989 6.63533 8.22989 7C8.22989 7.36467 8.08502 7.71441 7.82716 7.97227C7.56929 8.23013 7.21956 8.375 6.85489 8.375C6.49021 8.375 6.14048 8.23013 5.88261 7.97227C5.62475 7.71441 5.47989 7.36467 5.47989 7C5.47989 6.63533 5.62475 6.28559 5.88261 6.02773C6.14048 5.76987 6.49021 5.625 6.85489 5.625V5.625Z" fill="black"/></svg>'
      },
      wkdays: [2, 3, 4, 5, 6, 7, 8],
      today_num: 6,
      to_do_num: [2, 5, 6],
      reminder: [
        {
          name: 'Web',
          theme_color: '#037EF3',
          list: [
            {
              title: '完成Web大作业网页设计',
            },
            {
              title: '完成Web本周作业',
            },
            {
              title: '精进Vue技术',
            },
          ]
        },
        {
          name: 'TOEFL',
          theme_color: '#0CB9C1',
          list: []
        },
        {
          name: '学习',
          theme_color: '#7552CC',
          list: [
            {
              title: '完成Web大作业网页设计',
            },
            {
              title: '完成Web本周作业',
            },
            {
              title: '精进Vue技术',
            },
          ]
        },
      ],
      datetime: '添加时间',
      opetating_group: null,
      range_begin: null,
      range_end: null,
      zh_local: locale,
    }
  },
  computed: {
    today() {
      return `10月${this.today_num}日`
    },
  },
}
</script>

<style scoped>
*, *::before, *::after {
  box-sizing: initial;
}

.title-block {
  padding: 10px;
  height: 22px;
  display: flex;
  justify-content: space-between;
}

.rem-content {
  padding: 0 10px;

  height: calc(100% - 42px);
}

.time-selector {
  border-radius: 6px;
  padding: 12px 0;
  padding-bottom: 22px;
  background-color: #fff;

  position: relative;
}

.time-selector::after {
  content: '';
  background-image: url("../../assets/right-forward-b.svg");
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  transform: rotate(90deg);
  background-color: white;
  width: 20px;
  height: 20px;
  bottom: -18px;
  left: calc(50% - 14px);
  border: 14px solid white;
  border-radius: 6px;
  border-left-width: 5px;
  border-right-width: 3px;

  cursor: alias;
}

.wktime-selector {
  display: flex;
  justify-content: space-around;
}

.wk-time-content {
  margin: 0 14px;
  font-size: 13px;
  color: #000000;

  cursor: pointer;
}

.wkday {
  text-align: center;
}

.arrow {
  content: url("../../assets/right-forward-b.svg");
  transform: scale(1.2);

  cursor: pointer;
  transition: transform .3s ease-in-out;
}

.arrow:hover {
  transform: scale(1.3);
}

.pre-arrow {
  transform: rotate(180deg) scale(1.2);
}

.pre-arrow:hover {
  transform: rotate(180deg) scale(1.3);
}

.wkday-name {
  display: flex;
  color: #999999;
  font-size: 14px;
  justify-content: space-evenly;

  font-weight: 500;
  font-family: "Alibaba PuHuiTi 2.0", serif;
}

.day-num {
  color: #000;
  padding: 2px 8px;
  border-radius: 4px;
  height: 20px;
  position: relative;

  cursor: pointer;
}

.day-num.today {
  background-color: #037EF3;
  color: white;
}

.day-num.to-do::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #FF033E;
  bottom: -4px;
  right: calc(50% - 4px);

  z-index: 99;
}

.reminder-list {
  background-color: #fff;
  margin-top: 24px;
  width: 100%;

  border-radius: 6px;
  height: calc(100% - 93.5px - 24px - 12px);
  overflow: scroll;
}

.reminder-group {
  padding: 12px 0;
  margin: 0 13px;
}

.reminder-g-title-container {
  color: var(--group-theme-color);
  font-size: 20px;
  font-weight: 800;

  cursor: pointer;

  display: flex;
  justify-content: space-between;
}

.reminder-g-items-container {
  font-family: "Alibaba PuHuiTi 2.0", serif;
  font-size: 13px;
  background-color: #fff;
  border-radius: 6px;
}

.rg-item {
  margin: 6px 0;
}

.rg-item input[type='checkbox'] {
  display: none;
}

.rg-item input[type='text'] {
  border: none;
  outline: none;
}

.rg-item label {
  display: flex;
  align-items: baseline;

  cursor: pointer;
}

.rg-item .cus-checkbox {
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  aspect-ratio: 1;
  border-radius: 9px;

  border: 1px solid #D9D9D9;
  background-color: #fff;

  position: relative;
  top: 6px;

  transition: .3s all cubic-bezier(0.4, 0, 0.2, 1);
}

.rg-item-content {
  position: relative;
  line-height: 17px;
  min-height: 17px;
  padding: 4px;
  padding-right: 14px;
  margin: 3px;
  margin-left: 10px;
  width: 100%;
  border-bottom: 1px solid #D9D9D9;

  transition: .3s all cubic-bezier(0.4, 0, 0.2, 1);
}

.rg-item-content > .rg-item-content-icon {
  position: absolute;
  right: 0;
  bottom: 4px;
  opacity: 0;
  display: none;

  transition: .3s all cubic-bezier(0.4, 0, 0.2, 1);
}

.rg-item-content:hover > .rg-item-content-icon {
  display: block;
  opacity: 1;
}

.rg-item input:checked + .cus-checkbox {
  border-color: var(--group-theme-color);
}

.cus-checkbox::after {
  position: absolute;
  width: 70%;
  height: 70%;

  left: 15%;
  top: 15%;

  border-radius: 50%;
}

.rg-item input:checked + .cus-checkbox::after {
  content: '';
  background-color: var(--group-theme-color);
}

.rg-item input:checked + .cus-checkbox + .rg-item-content {
  opacity: 0.65;
  text-decoration: line-through;
}

.rg-item.add-item {
}

.cus-checkbox-add {
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  aspect-ratio: 1;
  border-radius: 9px;

  border: 1px solid #D9D9D9;
  background-color: #D9D9D9;

  position: relative;
  top: 6px;

  transition: .3s all cubic-bezier(0.4, 0, 0.2, 1);

  background-image: url("../../assets/add-more.svg");
  background-repeat: no-repeat;
  background-size: 11px 11px;
  background-position: center center;
}

.rg-item-content.add-item {
  color: #999999;
}

.rg-item.add-item fieldset {
  border: none;
  display: flex;
  flex-direction: column;
}

.fs-other {
  font-size: 12px;
  display: flex;
  margin: 3px 0;
}

.fs-other input[type='datetime-local'] {
  width: 16px;
  border: none;
  height: 16px;
  background-color: #D9D9D9;
  border-radius: 3px;
}

.like-btn {
  border: none;
  background-color: #D9D9D9;
  border-radius: 3px;
  color: black;
  width: max-content;
  padding: 1px 5px;
}

.rg-item.add-item input:focus {
  margin: 6px 0;
}


.rg-item.add-item input {
  transition: all .3s ease-in-out;
}

div.fs-other {
  visibility: hidden;
  display: none;
  opacity: 0;
  transition: all .3s ease-in-out;
}

div.show-other {
  display: flex;
  visibility: visible;
  height: auto;
  opacity: 1;
  flex-direction: column;
}
</style>