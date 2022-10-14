<template>
  <InnerBlock :block-name="'notification'">
    <template v-slot:content>
      <div class="block-title">
        <CommonTitle :title="'消息中心'"></CommonTitle>
      </div>
      <div class="noti-content">
        <div class="iic bulletin">
          <div class="iic-title-block">
            <div class="iic-title">
              <span>公告栏</span>
              <span class="more-info">{{ bulletin.unread }}条未读</span>
            </div>
            <div class="read_more">查看更多</div>
          </div>
          <div class="iic-content">
            <ul class="items">
              <li class="item" v-for="(item, index) in bulletin.info" :key="index">
                <div class="tp_info">
                  <div :class="['topic', item.unread ? 'unread' : '']">{{ item.topic }}</div>
                  <div class="tp-more info" v-if="item.unread">
                    <span>未读</span>
                  </div>
                </div>
                <div class="time">
                  {{ item.time }}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="iic emails">
          <div class="iic-title-block">
            <div class="iic-title"><span>邮箱</span></div>
          </div>
          <div class="iic-content"></div>
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
      }
    }
  }
}
</script>

<style scoped>
.noti-content {
  display: flex;
  margin-top: 6px;
  height: calc(100% - 22px - 0.6rem - 6px);
}
.iic {
  background-color: #fff;
  border-radius: 6px;
  padding: 6px 8px;
}

.bulletin {
  width: 74%;
  margin-right: 1%;
}

.emails {
  width: 25%;
}

.iic-title-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.iic-title {
  display: flex;
  align-items: center;
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

.iic-content {
  font-family: "Alibaba PuHuiTi 2.0", serif;
}

.iic-content .item {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 12px 0;
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

/*------*/
.block-title {
  display: flex;
  justify-content: space-between;
  height: 22px;
}
</style>