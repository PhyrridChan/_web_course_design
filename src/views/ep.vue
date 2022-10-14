<template>
  <Common_view :nav_bar="nav_bar" :positions="positions" :page_root="page_root"
               :theme="'#0CB9C1'"
  ></Common_view>
</template>

<script>
import Common_view from "@/components/common_view";

export default {
  name: "e_p",
  components: {Common_view},
  data() {
    return {
      positions: [
        {
          id: 'ep0',
          link: '/ep',
          name: '培养管理',
        },
      ],
      page_root: {
        id: 'ep0',
        link: '/ep',
        name: '培养管理',
      },
      nav_bar: [
        {
          name: '培养方案',
          id: 'training_program',
          parent: 'ep',
          link: '/ep/training_program'
        },
        {
          name: '课表查询',
          id: 'class_schedule',
          parent: 'ep',
          link: '/ep/class_schedule'
        },
        {
          name: '教材管理',
          id: 'teaching_material',
          parent: 'ep',
          link: '/ep/teaching_material'
        },
        {
          name: '选课中心',
          id: 'course_selection',
          parent: 'ep',
          link: '/ep/course_selection'
        },
        {
          name: '我的成绩',
          id: 'score',
          parent: 'ep',
          link: '/ep/score'
        },
        {
          name: '学籍管理',
          id: 'enrollment',
          parent: 'ep',
          link: '/ep/enrollment'
        }
      ],
    }
  },
}
</script>

<style scoped>
</style>