<template>
  <Common_view :nav_bar="nav_bar" :positions="positions" :page_root="page_root"
               :theme="'#e0a418'"
  ></Common_view>
</template>

<script>
import Common_view from "@/components/common_view";

export default {
  name: "pra_",
  components: {Common_view},
  data() {
    return {
      positions: [
        {
          id: 'pra0',
          link: '/pra',
          name: '实践环节',
        },
      ],
      page_root: {
        id: 'pra0',
        link: '/pra',
        name: '实践环节',
      },
      nav_bar: [
        {
          name: '实验课表查询',
          id: 'practice_query',
          parent: 'pra',
          link: '/pra/practice_query'
        },
        {
          name: '第二课堂学分管理',
          id: 'practice_credit',
          parent: 'pra',
          link: '/pra/practice_credit'
        },
        {
          name: '毕业设计',
          id: 'diploma_project',
          parent: 'pra',
          link: '/pra/diploma_project'
        },
        {
          name: '学科活动',
          id: 'academic_activity',
          parent: 'pra',
          link: '/pra/academic_activity'
        },
        {
          name: '创新创业',
          id: 'innovative_entrepreneurship',
          parent: 'pra',
          link: '/pra/innovative_entrepreneurship'
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>