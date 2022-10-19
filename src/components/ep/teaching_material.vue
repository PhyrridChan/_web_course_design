<template>
  <Whole_page_block :title="'教材管理'">
    <template v-slot:default>
      <div ref="header_line" class="header_line">
        <Common_selector_form
            :show_semester="true"
            :show_backupbtn="true"
        ></Common_selector_form>
      </div>
    </template>
  </Whole_page_block>
</template>

<script>
import Whole_page_block from "@/components/whole_page_block";
import Common_selector_form from "@/components/common_selector_form";

export default {
  name: "teaching_material",
  components: {Common_selector_form, Whole_page_block}
}
</script>

<style scoped>
.header_line {
  text-align: center;
  margin: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.header_line >>> .ant-form {
  position: relative;
}

.header_line >>> .backupbtn {
  top: 0;
  right: 0;
}
</style>