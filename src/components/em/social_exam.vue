<template>
  <Whole_page_block :title="'社会考试报名'">
    <template v-slot:default>
      <div class="content-table" ref="content-table">
        <a-table
            :pagination="false"
        ></a-table>
      </div>
    </template>
  </Whole_page_block>
</template>

<script>
import Whole_page_block from "@/components/whole_page_block";

export default {
  name: "social_exam",
  components: {Whole_page_block}
}
</script>

<style scoped>
.content-table {
  height: calc(100% - 20px);
  margin: 10px 0;
}
</style>