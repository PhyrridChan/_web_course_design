<template>
  <Whole_page_block :title="'创新创业'">
    <template v-slot:default>
      <div class="content-table" ref="content-table">
        <a-table
            :pagination="false"
            :data-source="exam_data"
            :columns="columns_reduced"
            :scroll="{x:0, y: table_content_height}"
        ></a-table>
      </div>
    </template>
  </Whole_page_block>
</template>

<script>
import Whole_page_block from "@/components/whole_page_block";

export default {
  name: "innovative_entrepreneurship",
  components: {Whole_page_block},
  data() {
    return {
      table_content_height: this.$refs["content-table"]?.clientHeight - 55,
      columns_reduced: [
        {
          title: '序号',
          key: 'row_num',
          dataIndex: 'row_num',
        },
        {
          title: '项目年份',
          key: 'project_year',
          dataIndex: 'project_year',
        },
        {
          title: '项目名称',
          key: 'project_name',
          dataIndex: 'project_name',
        },
        {
          title: '报名时间',
          key: 'register_time',
          dataIndex: 'register_time',
        },
        {
          title: '项目负责人',
          key: 'project_RP',
          dataIndex: 'project_RP',
        },
        {
          title: '审核状态',
          key: 'state',
          dataIndex: 'state',
        }, {
          title: '操作',
          key: 'operation',
          dataIndex: 'operation',
        }
      ],
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