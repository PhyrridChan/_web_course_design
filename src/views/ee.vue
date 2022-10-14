<template>
  <Common_view :nav_bar="nav_bar" :positions="positions" :page_root="page_root"
               :theme="'#F85A40'"
  ></Common_view>
</template>

<script>
import Common_view from "@/components/common_view";

export default {
  name: "e_e",
  components: {Common_view},
  data() {
    return {
      positions: [
        {
          id: 'ee0',
          link: '/ee',
          name: '教学评价',
        },
      ],
      page_root: {
        id: 'ee0',
        link: '/ee',
        name: '教学评价',
      },
      nav_bar: [
        {
          name: '教学评价',
          id: 'evaluate',
          parent: 'ee',
          link: '/ee/evaluate'
        },
        {
          name: '教学投诉',
          id: 'complaint',
          parent: 'ee',
          link: '/ee/complaint'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>