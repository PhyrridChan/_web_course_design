<template>
  <Whole_page_block :title="'实验课表查询'">
    <template v-slot:default>
      <div class="header_line">
        <Common_selector_form
            :show_semester="true"
            :show_backupbtn="true"
        ></Common_selector_form>
      </div>
      <div class="content-table" ref="content-table">
        <a-card
            :tab-list="tabList"
            style="height: 100%; width: 100%"
            size="small"
        >
          <a-table
              :columns="columns"
              :scroll="{x:0, y: table_content_height}"
          ></a-table>
        </a-card>
      </div>
    </template>
  </Whole_page_block>
</template>

<script>
import Whole_page_block from "@/components/whole_page_block";
import Common_selector_form from "@/components/common_selector_form";

export default {
  name: "practice_query",
  components: {Common_selector_form, Whole_page_block},
  data() {
    return {
      columns: [
        {
          title: '项目编号',
          key: 'pra_id',
          dataIndex: 'pra_id',
        },
        {
          title: '实验项目名称',
          key: 'pra_name',
          dataIndex: 'pra_name',
        },
        {
          title: '项目类型',
          key: 'pra_type',
          dataIndex: 'pra_type',
        },
        {
          title: '计划学时',
          key: 'credit_hour',
          dataIndex: 'credit_hour',
        },
        {
          title: '承担实验室',
          key: 'lab',
          dataIndex: 'lab',
        },
        {
          title: '负责教师',
          key: 'teacher',
          dataIndex: 'teacher',
        },
        {
          title: '操作',
          key: 'operation',
          dataIndex: 'operation',
        },

      ],
      table_content_height: this.$refs["content-table"]?.clientHeight - 55,
      tabList: [
        {
          key: 'selectable',
          tab: '可选实验列表',
        },
        {
          key: 'selected',
          tab: '已选实验列表',
        },
      ]
    }
  }, mounted() {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenHeight = document.body.clientHeight
        that.screenHeight = window.clientHeight
        that.table_content_height = that.$refs["content-table"]?.clientHeight - 55
      })()
    }
    setTimeout(() => window.dispatchEvent(new Event('resize')), 1000)
  }
}
</script>

<style scoped>
.header_line:deep(.ant-form) {
  position: relative;
}

.header_line:deep(.backupbtn) {
  top: 0;
  right: 0;
}

.header_line {
  height: 88px;
}

.content-table {
  height: calc(100% - 88px - 20px);
}
</style>