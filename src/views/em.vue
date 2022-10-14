<template>
  <Common_view :nav_bar="nav_bar" :positions="positions" :page_root="page_root"
               :theme="'#F48924'"
  ></Common_view>
</template>

<script>
import Common_view from "@/components/common_view";

export default {
  name: "e_m",
  components: {Common_view},
  data() {
    return {
      positions: [
        {
          id: 'em0',
          link: '/em',
          name: '考试管理',
        },
      ],
      page_root: {
        id: 'em0',
        link: '/em',
        name: '考试管理',
      },
      nav_bar: [
        {
          name: '考试安排查询',
          id: 'exam_query',
          parent: 'em',
          link: '/em/exam_query'
        },
        {
          name: '免考/缓考申请',
          id: 'delayed_exam',
          parent: 'em',
          link: '/em/delayed_exam'
        },
        {
          name: '特殊情况考试报名',
          id: 'special_situation',
          parent: 'em',
          link: '/em/special_situation'
        },
        {
          name: '社会考试报名',
          id: 'social_exam',
          parent: 'em',
          link: '/em/social_exam'
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>