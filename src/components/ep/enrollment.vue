<template>
  <Whole_page_block :title="'学籍管理'">
    <template v-slot:default>
      <a-empty :image="simpleImage" :description="error_message"
      ></a-empty>
    </template>
  </Whole_page_block>
</template>

<script>
import Whole_page_block from "@/components/whole_page_block";
import { message, Empty } from 'ant-design-vue';

export default {
  name: "enrollment_management",
  components: {Whole_page_block},
  data() {
    return {
      simpleImage: Empty.PRESENTED_IMAGE_SIMPLE,
      error_message: "当前学籍信息修改功能未到开放时间或不在可修改设置范围内，不能修改"
    }
  },
  mounted() {
    message.error(this.error_message)
  }
}
</script>

<style scoped>

</style>