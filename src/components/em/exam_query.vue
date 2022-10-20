<template>
  <Whole_page_block :title="'考试安排查询'">
    <template v-slot:default>
      <div ref="header_line" class="header_line">
        <Common_selector_form
            :show_semester="true"
            :show_backupbtn="true">
          <template v-slot:main_selector>
            <a-col :span="5">
              <a-form-item has-feedback name="exam_type" label="考试时间">
                <a-select placeholder="请点击选择">
                  <a-select-option value="opening">期初</a-select-option>
                  <a-select-option value="midterm">期中</a-select-option>
                  <a-select-option value="final">期末</a-select-option>
                </a-select>
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
            :pagination="false"
            :data-source="exam_data"
            :columns="show_info_type.includes('all') ? columns : columns_reduced"
            :scroll="show_info_type.includes('all') ? {x:1800, y: table_content_height} : {x:0, y: table_content_height}"
        >
          <template #bodyCell="{column, text, index, record}">
            <template v-if="column.key === 'row_num'">
              {{ index + 1 }}
            </template>
            <template v-else-if="column.key === 'note'">
              <div class="editable-cell">
                <div v-if="editableData[record.key]" class="editable-cell-input-wrapper">
                  <a-input v-model:value="editableData[record.key].note" @pressEnter="save(record.key)"/>
                  <check-outlined class="editable-cell-icon-check" @click="save(record.key)"/>
                </div>
                <div v-else class="editable-cell-text-wrapper">
                  {{ text || ' ' }}
                  <edit-outlined class="editable-cell-icon" @click="edit(record.key)"/>
                </div>
              </div>
            </template>
            <template v-else-if="column.key === 'operation'">
              more
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
import {CheckOutlined, EditOutlined} from '@ant-design/icons-vue';
import {cloneDeep} from 'lodash-es';
import {reactive, ref} from "vue";

export default {
  name: "exam_query",
  components: {Common_selector_form, Whole_page_block, CheckOutlined, EditOutlined,},
  data() {
    return {
      show_info_type: ref('imp_record'),
      table_content_height: this.$refs["content-table"]?.clientHeight - 55,
      columns: [
        {
          title: '序号',
          key: 'row_num',
          dataIndex: 'row_num',
          fixed: 'left',
          width: 60,
        }, {
          title: '课程名称',
          key: 'course_name',
          dataIndex: 'course_name',
          fixed: 'left',
        },
        {
          title: '考试时间',
          key: 'exam_time',
          dataIndex: 'exam_time',
        }, {
          title: '考试场次',
          key: 'group_num',
          dataIndex: 'group_num',
        }, {
          title: '课程编号',
          key: 'course_id',
          dataIndex: 'course_id',
        }, {
          title: '授课教师',
          key: 'teacher',
          dataIndex: 'teacher',
        }, {
          title: '校区',
          key: 'campus',
          dataIndex: 'campus',
        }, {
          title: '考场',
          key: 'exam_hall',
          dataIndex: 'exam_hall',
        }, {
          title: '座位号',
          key: 'seat_num',
          dataIndex: 'seat_num',
        }, {
          title: '准考证号',
          key: 'candidate_num',
          dataIndex: 'candidate_num',
        }, {
          title: '备注',
          key: 'note',
          dataIndex: 'note',
          width: 200,
          fixed: 'right',
        }, {
          title: '操作',
          key: 'operation',
          dataIndex: 'operation',
          fixed: 'right',
          width: 60,
        }
      ],
      columns_reduced: [
        {
          title: '序号',
          key: 'row_num',
          dataIndex: 'row_num',
        },
        {
          title: '课程名称',
          key: 'course_name',
          dataIndex: 'course_name',
        },
        {
          title: '考试时间',
          key: 'exam_time',
          dataIndex: 'exam_time',
        }, {
          title: '考场',
          key: 'exam_hall',
          dataIndex: 'exam_hall',
        }, {
          title: '座位号',
          key: 'seat_num',
          dataIndex: 'seat_num',
        },
        {
          title: '准考证号',
          key: 'candidate_num',
          dataIndex: 'candidate_num',
        }, {
          title: '备注',
          key: 'note',
          dataIndex: 'note',
          width: 200,
        }, {
          title: '操作',
          key: 'operation',
          dataIndex: 'operation',
        }
      ],
      exam_data: [
        {
          'campus': 'aa',
          'group_num': 'bb',
          'course_id': 'cc',
          'course_name': 'dd',
          'teacher': 'ee',
          'exam_time': '2022-10-06 25:00',
          'exam_hall': 'gg',
          'seat_num': 'hh',
          'candidate_num': 'ii',
          'note': 'jj',
        },
        {
          'campus': 'aa',
          'group_num': 'bb',
          'course_id': 'cc',
          'course_name': 'dd',
          'teacher': 'ee',
          'exam_time': '2022-10-06 25:00',
          'exam_hall': 'gg',
          'seat_num': 'hh',
          'candidate_num': 'ii',
          'note': 'jj',
        },
        {
          'campus': 'aa',
          'group_num': 'bb',
          'course_id': 'cc',
          'course_name': 'dd',
          'teacher': 'ee',
          'exam_time': '2022-10-06 25:00',
          'exam_hall': 'gg',
          'seat_num': 'hh',
          'candidate_num': 'ii',
          'note': 'jj',
        },
        {
          'campus': 'aa',
          'group_num': 'bb',
          'course_id': 'cc',
          'course_name': 'dd',
          'teacher': 'ee',
          'exam_time': '2022-10-06 25:00',
          'exam_hall': 'gg',
          'seat_num': 'hh',
          'candidate_num': 'ii',
          'note': 'jj',
        },
        {
          'campus': 'aa',
          'group_num': 'bb',
          'course_id': 'cc',
          'course_name': 'dd',
          'teacher': 'ee',
          'exam_time': '2022-10-06 25:00',
          'exam_hall': 'gg',
          'seat_num': 'hh',
          'candidate_num': 'ii',
          'note': 'jj',
        },
        {
          'campus': 'aa',
          'group_num': 'bb',
          'course_id': 'cc',
          'course_name': 'dd',
          'teacher': 'ee',
          'exam_time': '2022-10-06 25:00',
          'exam_hall': 'gg',
          'seat_num': 'hh',
          'candidate_num': 'ii',
          'note': 'jj',
        },
        {
          'campus': 'aa',
          'group_num': 'bb',
          'course_id': 'cc',
          'course_name': 'dd',
          'teacher': 'ee',
          'exam_time': '2022-10-06 25:00',
          'exam_hall': 'gg',
          'seat_num': 'hh',
          'candidate_num': 'ii',
          'note': 'jj',
        },
        {
          'campus': 'aa',
          'group_num': 'bb',
          'course_id': 'cc',
          'course_name': 'dd',
          'teacher': 'ee',
          'exam_time': '2022-10-06 25:00',
          'exam_hall': 'gg',
          'seat_num': 'hh',
          'candidate_num': 'ii',
          'note': 'jj',
        },
      ],
      editableData: reactive({}),
    }
  },
  methods: {
    edit: function (key) {
      this.editableData[key] = cloneDeep(this.exam_data.filter(item => key === item.key)[0]);
    },
    save: function (key) {
      Object.assign(this.exam_data.filter(item => key === item.key)[0], this.editableData[key]);
      delete this.editableData[key];
    },
  },
  mounted() {
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

<style scoped lang="less">
.header_line {
  height: 88px;
}

.content-table {
  height: calc(100% - 88px - 20px);
}

.header_line:deep(.ant-form) {
  position: relative;
}

.header_line:deep(.backupbtn) {
  top: 0;
  right: 0;
}

.editable-cell {
  position: relative;

  .editable-cell-input-wrapper,
  .editable-cell-text-wrapper {
    padding-right: 24px;
  }

  .editable-cell-text-wrapper {
    padding: 5px 24px 5px 5px;
  }

  .editable-cell-icon,
  .editable-cell-icon-check {
    position: absolute;
    right: 0;
    width: 20px;
    cursor: pointer;
  }

  .editable-cell-icon {
    margin-top: 4px;
    display: none;
  }

  .editable-cell-icon-check {
    line-height: 28px;
  }

  .editable-cell-icon:hover,
  .editable-cell-icon-check:hover {
    color: #108ee9;
  }

  .editable-add-btn {
    margin-bottom: 8px;
  }
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}
</style>