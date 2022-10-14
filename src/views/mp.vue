<template>
  <div style="--theme-color:#037EF3;height: 100%">
    <CurrentPosition
        :positions="positions"
    ></CurrentPosition>
    <div class="icontent-container">
      <div class="courses">
        <CoursesBlock></CoursesBlock>
      </div>
      <div class="reminder">
        <ReminderBlock></ReminderBlock>
      </div>
      <div class="notification">
        <NotificationBlock></NotificationBlock>
      </div>
    </div>
  </div>
</template>

<script>

import CurrentPosition from "@/components/current-position";
import CoursesBlock from "@/components/mp/course_block.vue";
import NotificationBlock from "@/components/mp/notification_block.vue";
import ReminderBlock from "@/components/mp/reminder_block.vue";

export default {
  name: "m_p",
  components: {
    ReminderBlock,
    NotificationBlock,
    CoursesBlock,
    CurrentPosition
  },
  data() {
    return {
      positions: [
        {
          id: 'mp0',
          link: '/mp',
          name: '个人主页',
        },
      ],
    }
  }
}
</script>

<style scoped>
.common_header {
  width: 100%;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(180deg, #037EF3 0%, rgba(3, 126, 243, 0) 100%);
}

.common_header > nav {
  width: 70%;
  margin-left: 15%;
  margin-top: 35px;

  transition: all .6s ease-in-out;
}

.common_header.expand > nav {
  width: 82%;
  margin-left: 0;
}

.icontent-container {
  display: grid;
  grid-template:
      'courses      reminder' 3fr
      'notification reminder' 2fr
      / 3fr         1fr;
  width: 100%;
  height: calc(100% - 38px);
  grid-gap: .1rem;
}

.courses {
  grid-area: courses;
}

.reminder {
  grid-area: reminder;
}

.notification {
  grid-area: notification;
}
</style>