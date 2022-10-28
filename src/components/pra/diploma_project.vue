<template>
  <Whole_page_block :title="'毕业设计'">
    <template v-slot:default>
      <div class="content-table" ref="content-table">
        <div class="steps_container">
          <a-steps v-model:current="current" type="navigation">
            <a-step v-for="item in steps" :key="item.title" :title="item.title" :status="item.status"/>
          </a-steps>
          <div class="steps-content">
            {{ steps[current].content }}
          </div>
          <div class="steps-action">
            <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">上一步</a-button>
            <a-button v-if="current < steps.length - 1" type="primary" @click="next">下一步</a-button>
            <a-button
                v-if="current === steps.length - 1"
                type="primary"
                @click="msg('成功完成毕业设计流程!')"
            >
              完成
            </a-button>
          </div>
        </div>
      </div>
    </template>
  </Whole_page_block>
</template>

<script>
import Whole_page_block from "@/components/whole_page_block";
import {message} from "ant-design-vue";

export default {
  name: "diploma_project",
  components: {Whole_page_block},
  data() {
    return {
      current: 1,
      steps: [
          {
        title: '开题报告',
        content: '开题报告',
        status: "finish",
      },
        {
          title: '中期报告',
          content: '中期报告',
          status: "process",
        },
        {
          title: '设计译文',
          content: '设计译文',
          status: "wait",
        },
        {
          title: '明评论文',
          content: '明评论文',
          status: "wait",
        },
        {
          title: '论文成绩查询',
          content: '论文成绩查询',
          status: "wait",
        },
        {
          title: '定稿论文上传',
          content: '定稿论文上传',
          status: "wait",
        },],
    }
  },
  methods: {
    next: function () {
      this.current++;
    },

    prev: function () {
      this.current--;
    },
    msg: info => {
      message.success(info)
    }
  }
}
</script>

<style scoped>
.content-table {
  height: calc(100% - 20px);
  margin: 10px 0;
}

.steps_container {
  padding: 13px;
}

.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
  text-align: right;
}

.steps-action > button:nth-last-child(1) {
  margin-left: 13px;
}
</style>