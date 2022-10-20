<template>
  <Whole_page_block :title="'特殊情况考试报名'">
    <template v-slot:default>
      <div class="content-table" ref="content-table">
        <template v-if="this.failed_exam && this.delayed_exam">
          <a-table
              :empty-text="'未查询到数据'"
              :pagination="false"
          ></a-table>
        </template>
        <template v-else>
          <a-empty :image="simpleImage" :description="error_message"
          ></a-empty>
        </template>
      </div>
    </template>
  </Whole_page_block>
</template>

<script>
import Whole_page_block from "@/components/whole_page_block";
import {Empty, message} from "ant-design-vue";

export default {
  name: "special_situation",
  components: {Whole_page_block},
  data() {
    return {
      simpleImage: Empty.PRESENTED_IMAGE_SIMPLE,
      failed_exam: Math.round(Math.random()),
      delayed_exam: Math.round(Math.random()),
      error_message: '未查询到挂科或缓考记录，不符合特殊情况报名条件'
    }
  },
  mounted() {
    if (!(this.failed_exam && this.delayed_exam)) {
      message.error(this.error_message)
    }
  }
}
</script>

<style scoped>
.content-table {
  height: calc(100% - 20px);
  margin: 10px 0;
}
</style>