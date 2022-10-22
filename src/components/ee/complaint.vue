<template>
  <Whole_page_block :title="'教学投诉'">
    <template v-slot:default>
      <div style="margin: 10px 0; padding: 13px;background-color: #fff">
        <a-form
            :label-col="{ span: 6 }"
            :wrapper-col="{ span: 12 }">
          <a-form-item label="投诉课程">
            <a-input></a-input>
          </a-form-item>
          <a-form-item label="投诉内容">
            <a-textarea></a-textarea>
          </a-form-item>
          <a-row>
            <a-col :span="18" style="text-align: right">
              <a-button type="primary">提交</a-button>
              <a-button style="margin-left: 13px;">清除</a-button>
            </a-col>
          </a-row>
        </a-form>
      </div>
    </template>
  </Whole_page_block>
</template>

<script>
import Whole_page_block from "@/components/whole_page_block";

export default {
  name: "edu_complaint",
  components: {Whole_page_block}
}
</script>

<style scoped>

</style>