<template>
  <div style="--theme-color:#00C16E;height: 100%">
    <CurrentPosition
        :positions="positions"
    ></CurrentPosition>
    <div class="icontent-container">
      <div class="courses">
        <Pt_course_block></Pt_course_block>
      </div>
      <div class="notification">
        <Pt_notification_block></Pt_notification_block>
      </div>
    </div>
  </div>
</template>

<script>
import CurrentPosition from "@/components/current-position";
import Pt_course_block from "@/components/pt/pt_course_block";
import Pt_notification_block from "@/components/pt/pt_notification_block";

export default {
  name: "p_t",
  components: {Pt_notification_block, Pt_course_block, CurrentPosition},
  data() {
    return {
      positions: [
        {
          id: 'pt0',
          link: '/pt',
          name: '教学平台',
        },
      ],
    }
  }
}
</script>

<style scoped>
.icontent-container {
  display: grid;
  grid-template:
      'courses notification' 1fr
      'courses notification' 1fr
      / 2fr 1fr;;
  width: 100%;
  height: calc(100% - 38px);
  grid-gap: .1rem;
}

.courses {
  grid-area: courses;
  overflow: scroll;
}

.notification {
  grid-area: notification;
  overflow: hidden;
}
</style>