<template>
  <Whole_page_block :title="'我的成绩'">
    <template v-slot:default>
      <div class="header_line">
        <Common_selector_form
            :show_semester="true"
            :show_backupbtn="true">
          <template v-slot:main_selector>
            <a-col :span="5">
              <a-form-item has-feedback name="show_record_type">
                <a-radio-group v-model:value="show_record_type" button-style="solid">
                  <a-radio-button value="best_record">显示最好成绩</a-radio-button>
                  <a-radio-button value="all_record">显示全部成绩</a-radio-button>
                </a-radio-group>
              </a-form-item>
            </a-col>
            <a-col :span="5">
              <a-form-item has-feedback name="show_record_type">
                <a-radio-group v-model:value="show_info_type" button-style="solid">
                  <a-radio-button value="imp_record">显示主要信息</a-radio-button>
                  <a-radio-button value="all_record">显示全部信息</a-radio-button>
                </a-radio-group>
              </a-form-item>
            </a-col>
          </template>
        </Common_selector_form>
      </div>
      <div class="content-table" ref="content-table">
        <a-table
            :columns="show_info_type.includes('all') ? columns : columns_reduced"
            :data-source="score_data"
            :pagination="false"
            :scroll="show_info_type.includes('all') ? {x:1800 , y: table_content_height} : {x:0, y: table_content_height}"
        >
          <template #bodyCell="{column, index}">
            <template v-if="column.key === 'row_num'">
              {{ index + 1 }}
            </template>
          </template>

        </a-table>
      </div>
    </template>
  </Whole_page_block>
</template>

<script>
import Whole_page_block from "@/components/whole_page_block";
import Common_selector_form from "@/components/common_selector_form";
import {ref} from "vue";

export default {
  name: "score_management",
  components: {Common_selector_form, Whole_page_block},
  data() {
    return {
      show_record_type: ref('best_record'),
      show_info_type: ref('imp_record'),
      columns: [
        {
          title: '序号',
          dataIndex: 'row_num',
          key: 'row_num',
          width: 60,
          align: 'center',
          fixed: 'left',
        },
        {
          title: '课程名称',
          dataIndex: 'course_name',
          key: 'course_name',
          fixed: 'left',
          width: 180,
        },
        {
          title: '开课学期',
          dataIndex: 'semester',
          key: 'semester',
          width: 135,
        },
        {
          title: '课程编号',
          dataIndex: 'course_id',
          key: 'course_id',
        },
        {
          title: '分组名',
          dataIndex: 'group_name',
          key: 'group_name'
        },
        {
          title: '成绩',
          dataIndex: 'score',
          key: 'score',
          width: 60,
          align: 'center',
        },
        {
          title: '修读方式',
          dataIndex: 'repair_and_reading_method',
          key: 'repair_and_reading_method'
        },
        {
          title: '成绩标识',
          dataIndex: 'score_mark',
          key: 'score_mark',
          width: 60,
          align: 'center',
        },
        {
          title: '学分',
          dataIndex: 'credit',
          key: 'credit',
          width: 60,
          align: 'center',
        },
        {
          title: '总学时',
          dataIndex: 'credit_hour',
          key: 'credit_hour',
          width: 60,
          align: 'center',
        },
        {
          title: '绩点',
          dataIndex: 'gp',
          key: 'gp',
          width: 60,
          align: 'center',
        },
        {
          title: '补重学期',
          dataIndex: 're_semester',
          key: 're_semester'
        },
        {
          title: '考核方式',
          dataIndex: 'assessment_method',
          key: 'assessment_method'
        },
        {
          title: '考试性质',
          dataIndex: 'exam_type',
          key: 'exam_type'
        },
        {
          title: '课程属性',
          dataIndex: 'course_property',
          key: 'course_property'
        },
        {
          title: '课程性质',
          dataIndex: 'course_nature',
          key: 'course_nature'
        },
        {
          title: '课程类别',
          dataIndex: 'course_type',
          key: 'course_type'
        },
      ],
      columns_reduced: [
        {
          title: '序号',
          dataIndex: 'row_num',
          key: 'row_num',
          width: 60,
          align: 'center',
        },
        {
          title: '开课学期',
          dataIndex: 'semester',
          key: 'semester'
        },
        {
          title: '课程编号',
          dataIndex: 'course_id',
          key: 'course_id'
        },
        {
          title: '课程名称',
          dataIndex: 'course_name',
          key: 'course_name'
        },
        {
          title: '成绩',
          dataIndex: 'score',
          key: 'score',
          width: 60,
          align: 'center',
        },
        {
          title: '修读方式',
          dataIndex: 'repair_and_reading_method',
          key: 'repair_and_reading_method',
          width: 60,
          align: 'center',
        },
        {
          title: '成绩标识',
          dataIndex: 'score_mark',
          key: 'score_mark',
          width: 60,
          align: 'center',
        },
        {
          title: '学分',
          dataIndex: 'credit',
          key: 'credit',
          width: 60,
          align: 'center',
        },
        {
          title: '绩点',
          dataIndex: 'gp',
          key: 'gp',
          width: 60,
          align: 'center',
        },
        {
          title: '补重学期',
          dataIndex: 're_semester',
          key: 're_semester'
        },
        {
          title: '课程属性',
          dataIndex: 'course_property',
          key: 'course_property'
        },
      ],
      score_data: [
        {

          semester: '2020-2021-1',
          course_id: '0302000023',
          course_name: '思想道德与法治',
          group_name: '',
          score: '90',
          repair_and_reading_method: '主修',
          score_mark: '',
          credit: '2',
          credit_hour: '32',
          gp: '4.0',
          re_semester: '',
          assessment_method: '考试',
          exam_type: '正常考试',
          course_property: '必修',
          course_nature: '公共课',
          course_type: '',
        },
        {
          semester: '2020-2021-1',
          course_id: '0403000015',
          course_name: '体育(一)',
          group_name: '20汽机计算机男25',
          score: '95',
          repair_and_reading_method: '主修',
          score_mark: '',
          credit: '1',
          credit_hour: '30',
          gp: '4.0',
          re_semester: '',
          assessment_method: '考查',
          exam_type: '正常考试',
          course_property: '必修',
          course_nature: '公共课',
          course_type: '',
        },
        {
          semester: '2020-2021-1', course_id: '0502000033',
          course_name: '大学英语(一)',
          group_name: '',
         score: '99',
          repair_and_reading_method: '主修',
          score_mark: '',
          credit: '3',
          credit_hour: '48',
          gp: '4.0',
          re_semester: '',
          assessment_method: '考试',
          exam_type: '正常考试',
          course_property: '必修',
          course_nature: '公共课',
          course_type: '',
        },
        {
          semester: '2020-2021-1',
          course_id: '0701000225',
          course_name: '高等数学A(一)',
          group_name: '',
         score: '99',
          repair_and_reading_method: '主修',
          score_mark: '',
          credit: '5',
          credit_hour: '80',
          gp: '4.0',
          re_semester: '',
          assessment_method: '考试',
          exam_type: '正常考试',
          course_property: '必修',
          course_nature: '公共课',
          course_type: '',
        },
        {
          semester: '2020-2021-1',
          course_id: '0701000635',
          course_name: '线性代数',
          group_name: '',
          score: '95',
          repair_and_reading_method: '主修',
          score_mark: '',
          credit: '2',
          credit_hour: '32',
          gp: '4.0',
          re_semester: '',
          assessment_method: '考试',
          exam_type: '正常考试',
          course_property: '必修',
          course_nature: '公共课',
          course_type: '',
        },
        {

          semester: '2020-2021-1',
          course_id: '0302000023',
          course_name: '思想道德与法治',
          group_name: '',
          score: '90',
          repair_and_reading_method: '主修',
          score_mark: '',
          credit: '2',
          credit_hour: '32',
          gp: '4.0',
          re_semester: '',
          assessment_method: '考试',
          exam_type: '正常考试',
          course_property: '必修',
          course_nature: '公共课',
          course_type: '',
        },
        {
          semester: '2020-2021-1',
          course_id: '0403000015',
          course_name: '体育(一)',
          group_name: '20汽机计算机男25',
          score: '95',
          repair_and_reading_method: '主修',
          score_mark: '',
          credit: '1',
          credit_hour: '30',
          gp: '4.0',
          re_semester: '',
          assessment_method: '考查',
          exam_type: '正常考试',
          course_property: '必修',
          course_nature: '公共课',
          course_type: '',
        },
        {
          semester: '2020-2021-1', course_id: '0502000033',
          course_name: '大学英语(一)',
          group_name: '',
         score: '99',
          repair_and_reading_method: '主修',
          score_mark: '',
          credit: '3',
          credit_hour: '48',
          gp: '4.0',
          re_semester: '',
          assessment_method: '考试',
          exam_type: '正常考试',
          course_property: '必修',
          course_nature: '公共课',
          course_type: '',
        },
        {
          semester: '2020-2021-1',
          course_id: '0701000225',
          course_name: '高等数学A(一)',
          group_name: '',
         score: '99',
          repair_and_reading_method: '主修',
          score_mark: '',
          credit: '5',
          credit_hour: '80',
          gp: '4.0',
          re_semester: '',
          assessment_method: '考试',
          exam_type: '正常考试',
          course_property: '必修',
          course_nature: '公共课',
          course_type: '',
        },
        {
          semester: '2020-2021-1',
          course_id: '0701000635',
          course_name: '线性代数',
          group_name: '',
          score: '95',
          repair_and_reading_method: '主修',
          score_mark: '',
          credit: '2',
          credit_hour: '32',
          gp: '4.0',
          re_semester: '',
          assessment_method: '考试',
          exam_type: '正常考试',
          course_property: '必修',
          course_nature: '公共课',
          course_type: '',
        },
        {
          semester: '2020-2021-1',
          course_id: '0403000015',
          course_name: '体育(一)',
          group_name: '20汽机计算机男25',
          score: '95',
          repair_and_reading_method: '主修',
          score_mark: '',
          credit: '1',
          credit_hour: '30',
          gp: '4.0',
          re_semester: '',
          assessment_method: '考查',
          exam_type: '正常考试',
          course_property: '必修',
          course_nature: '公共课',
          course_type: '',
        },
        {
          semester: '2020-2021-1', course_id: '0502000033',
          course_name: '大学英语(一)',
          group_name: '',
         score: '99',
          repair_and_reading_method: '主修',
          score_mark: '',
          credit: '3',
          credit_hour: '48',
          gp: '4.0',
          re_semester: '',
          assessment_method: '考试',
          exam_type: '正常考试',
          course_property: '必修',
          course_nature: '公共课',
          course_type: '',
        },
        {
          semester: '2020-2021-1',
          course_id: '0701000225',
          course_name: '高等数学A(一)',
          group_name: '',
         score: '99',
          repair_and_reading_method: '主修',
          score_mark: '',
          credit: '5',
          credit_hour: '80',
          gp: '4.0',
          re_semester: '',
          assessment_method: '考试',
          exam_type: '正常考试',
          course_property: '必修',
          course_nature: '公共课',
          course_type: '',
        },
        {
          semester: '2020-2021-1',
          course_id: '0701000635',
          course_name: '线性代数',
          group_name: '',
          score: '95',
          repair_and_reading_method: '主修',
          score_mark: '',
          credit: '2',
          credit_hour: '32',
          gp: '4.0',
          re_semester: '',
          assessment_method: '考试',
          exam_type: '正常考试',
          course_property: '必修',
          course_nature: '公共课',
          course_type: '',
        },
      ],
      table_content_height: this.$refs["content-table"]?.clientHeight - 77,
    }
  }, mounted() {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenHeight = document.body.clientHeight
        that.screenHeight = window.clientHeight
        that.table_content_height = that.$refs["content-table"]?.clientHeight - 77
      })()
    }
    setTimeout(() => window.dispatchEvent(new Event('resize')), 1000)
  }
}
</script>

<style scoped>
.header_line {
  height: 88px;
}

.header_line:deep(.ant-form) {
  position: relative;
}

.header_line:deep(.backupbtn) {
  top: 0;
  right: 0;
}

.content-table {
  height: calc(100% - 88px - 20px);
}
</style>