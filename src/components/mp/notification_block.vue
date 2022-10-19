<template>
  <InnerBlock :block-name="'notification'">
    <template v-slot:content>
      <div class="title-block">
        <CommonTitle :title="'消息中心'"></CommonTitle>
      </div>
      <div class="noti-content">
        <div class="bulletin inonecol">
          <div class="child-title-block">
            <div class="child-title"><span>公告栏</span>
              <span class="more-info">{{ bulletin.unread }}条未读</span></div>
            <div class="read_more">查看更多</div>
          </div>
          <div class="child-content-block">
            <div class="messages-container">
              <div class="message" v-for="(item, index) in bulletin.info" :key="index">
                <div class="tp_info">
                  <div :class="['topic', item.unread ? 'unread' : '']">{{ item.topic }}</div>
                  <div class="tp-more info" v-if="item.unread">
                    <span>未读</span>
                  </div>
                </div>
                <div class="time">
                  {{ item.time }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="emails inonecol">
          <div class="child-title-block">
            <div class="child-title"><span>邮箱</span>
            </div>
          </div>
          <div class="child-content-block">
            <div class="emails-container">
              <div class="email" v-for="(item, index) in emails.info" :key="index">
                <div>
                  <div class="email-logo">
                    <img :src="item.logo" :alt="item.name">
                  </div>
                  <div class="email-name">{{ item.name }}</div>
                  <div class="email-add">{{ item.add }}</div>
                </div>
                <div class="noti-count">{{ item.noti_count }}</div>
              </div>
            </div>
          </div>
          <div class="read_more">查看全部</div>
        </div>
      </div>
    </template>
  </InnerBlock>
</template>

<script>
import InnerBlock from "@/components/inner-block";
import CommonTitle from "@/components/common_title";

export default {
  name: "notification-block",
  components: {CommonTitle, InnerBlock},
  data() {
    return {
      bulletin: {
        unread: 2,
        info: [
          {
            topic: '关于2022年下半年全国大学英语四、六级考试报名的通知',
            unread: true,
            time: '2022/09/13 20:02'
          },
          {
            topic: '长沙理工大学本科生选课操作手册',
            unread: true,
            time: '2022/09/13 20:02'
          },
          {
            topic: '关于2022年下半年全国大学英语四、六级考试报名的通知',
            unread: false,
            time: '2022/09/13 20:02'
          },
          {
            topic: '长沙理工大学本科生选课操作手册',
            unread: false,
            time: '2022/09/13 20:02'
          },
        ]
      },
      emails: {
        info: [
          {
            logo: require('../../assets/qq-e-mail.png'),
            name: '校园邮箱',
            add: '202008170217@stu.csust.edu.cn',
            noti_count: '3',
          },
          {
            logo: require('../../assets/qq-mail.png'),
            name: 'QQ邮箱',
            add: '1564575045@qq.com',
            noti_count: '2',
          },
        ]
      }
    }
  }
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

.noti-content {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  height: calc(100% - 42px);
  width: 100%;
}

.inonecol {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;

  background-color: #FFFFFF;
  padding: 10px;
  padding-top: 16px;
  border-radius: 6px;
}

.bulletin {
  margin: 0 1%;
  width: 72%;
  height: calc(100% - 16px - 20px);
}

.emails {
  width: 25%;
  margin-right: 1%;
  height: calc(100% - 16px - 20px);
}


.child-title-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.more-info {
  font-size: 14px;
  height: 20px;
  font-family: "Alibaba PuHuiTi 2.0", serif;

  padding: 0 6px;
  border-radius: 10px;
  background-color: #FF033E;

  color: #FFFFFF;

  margin-left: 8px;
  font-weight: 500;
}

.read_more {
  font-size: 14px;
  font-family: "Alibaba PuHuiTi 2.0", serif;
  cursor: pointer;
}

.read_more::after {
  content: url("../../assets/right-forward-b.svg");
}

.child-content-block {
  font-family: "Alibaba PuHuiTi 2.0", serif;
  height: calc(100% - 22px);
  width: 100%;
}

.child-content-block .messages-container {
  width: 100%;
  height: 98%;

  max-height: 156px;
  overflow: hidden;
}

@media screen and (min-height: 850px) {
  .child-content-block .messages-container {
    max-height: 228px;
  }
}

.child-content-block .message {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 8px 0;
}

.tp_info {
  display: flex;
  align-items: center;
  cursor: pointer;

  max-width: 80%;
  min-width: 80%;
}

.topic {
  color: #6F6E6E;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  line-height: 24px;
  margin-right: 3px;
}

.topic.unread {
  color: black;
  max-width: 90%;
}

.info {
  font-family: "Alibaba PuHuiTi 2.0", serif;
  color: #fff;
  background-color: #FF033E;
  border-radius: 10px;
  font-size: 13px;
  min-width: 30px;

  text-align: center;
  padding: 0 1px;
}

.time {
  font-size: 13px;
}

.emails-container {
  width: 100%;
  height: 98%;

  max-height: 156px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;

  overflow: scroll;
}

@media screen and (min-height: 850px) {
  .emails {
    width: 145px;
  }

  .bulletin{
    width: calc(97% - 145px);
  }
  .emails-container {
    max-height: 228px;
    flex-direction: column;
    padding: 6px 3px;
    align-items: baseline;
  }

  .email {
    margin-bottom: 8px;
  }

  .email-add {
    width: 160px;
    max-width: 160px;
  }
}

.email {
  cursor: pointer;
  position: relative;
  background: #F3F4F7;
  border-radius: 6px;
  height: 68px;

  padding: 5px;
  margin-right: 6px;
}

.email-logo > img {
  margin: 6px 0 2px 0;
  height: 12px;
}

.email-name {
  margin-top: 3px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  color: #000;
}

.email-add {
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #999;

  max-width: 128px;
  width: 128px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.noti-count {
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background-color: #FF033E;

  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #fff;
  text-align: center;
  position: absolute;
  z-index: 99;

  right: 0px;
  top: -5px;
}
</style>