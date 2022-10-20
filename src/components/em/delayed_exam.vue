<template>
  <Whole_page_block :title="'免考/缓考申请'">
    <template v-slot:default>
      <div class="content-table" ref="content-table">
        <a-table
            :pagination="false"
            :data-source="exam_data"
            :columns="columns_reduced"
            :scroll="{x:0, y: table_content_height}"
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

export default {
  name: "delayed_exam",
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
    }
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

<style scoped>
.content-table {
  height: calc(100% - 20px);
  margin: 10px 0;
}
</style>