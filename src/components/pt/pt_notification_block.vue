<template>
  <div class="notification_block_container">
    <div class="title-block">
      <CommonTitle :title="'课程活动提醒'"></CommonTitle>
    </div>
    <div class="notification_field">
      <div class="noti_nav_bar" ref="noti_nav_bar">
        <label v-for="item in nav_items" :key="item.id" class="noti_nav_item">
          <input type="radio" name="nav">
          <span class="nav-text">{{ item.name }}</span>
          <div class="nav-decoration"></div>
        </label>
      </div>
      <div class="noti_block_contianer">
        <div class="noti_block" v-for="(item, index) in noti_data[current].data" :key="index">
          <div class="noti_info">
            <div class="noti_title">{{ item.title }}</div>
            <div class="noti_sub" v-for="(sub, s_index) in item.info" :key="s_index"><span>{{sub.name}}：</span><span>{{ sub.value }}</span></div>
          </div>
          <div class="noti_course">{{item.course}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonTitle from "@/components/common_title";

export default {
  name: "pt_notification_block",
  components: {CommonTitle},
  mounted() {
    this.$refs.noti_nav_bar.firstElementChild.querySelector('input').checked = true
  },
  data() {
    return {
      nav_items: [
        {
          name: '签到',
          id: 0
        },
        {
          name: '互评',
          id: 1
        },
        {
          name: '问卷',
          id: 2
        },
        {
          name: '测试',
          id: 3
        },
        {
          name: '作业',
          id: 0
        },
        {
          name: '通知',
          id: 0
        },
      ],
      noti_data: {
        '0': {
          data: [
            {
              title: '学期大作业-web前端系统',
              course: 'Web系统与技术',
              info: [
                {
                  name: '截止日期',
                  value: '2022-11-11 23:59',
                }
              ]
            },
            {
              title: '学期大作业-web前端系统',
              course: 'Web系统与技术',
              info: [
                {
                  name: '截止日期',
                  value: '2022-11-11 23:59',
                }
              ]
            },
            {
              title: '学期大作业-web前端系统',
              course: 'Web系统与技术',
              info: [
                {
                  name: '截止日期',
                  value: '2022-11-11 23:59',
                }
              ]
            }
          ]
        }
      },
      current: '0'
    }
  }
}
</script>

<style scoped>
*, *::before, *::after {
  box-sizing: initial;
}

.notification_block_container {
  padding: 10px;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
}

.title-block {
  height: 22px;
  display: flex;
  justify-content: space-between;
}

.notification_field {
  width: 100%;
  height: calc(100% - 22px);
  border-radius: 5px 5px 0 0;
  margin-top: 9px;
  background-color: #F3F4F7;
  overflow: scroll;

  font-family: "Alibaba PuHuiTi 2.0", serif;
}

.noti_nav_bar {
  overflow: scroll;
  margin: 10px;
  width: calc(100% - 20px);
  white-space: nowrap;
}

.noti_nav_bar::-webkit-scrollbar {
  display: none;
}

.noti_nav_item {
  width: 50px;
  height: 50px;
  padding: 0 12px;
  display: inline-block;

  cursor: pointer;
  position: relative;
  vertical-align: bottom;
}

.noti_nav_item input[type="radio"] {
  display: none;
}

.nav-text {
  position: relative;
  z-index: 5;
  font-weight: 500;

  line-height: 40px;

  transition: .3s all ease-in-out;
}

.noti_nav_bar input:checked + .nav-text {
  font-size: 24px;
}

.noti_nav_bar input:checked + * + .nav-decoration {
  visibility: visible;
  opacity: 1;
}

.nav-decoration {
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transition: .3s all ease-in-out;

  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: var(--theme-color);
  bottom: calc(50% - 20px);
  right: 10%;

  z-index: 1;
}

.noti_block {
  border-radius: 5px;
  background-color: #fff;
  margin: 8px 16px;
  padding: 10px 8px;
  color: #7B7A7A;
}

.noti_title {
  font-size: 14px;
  font-weight: 500;
  color: #000;
}

.noti_sub {
  font-size: 12px;
}

.noti_course {
  font-size: 10px;
  text-align: right;
}
</style>