<template>
  <Whole_page_block :title="'教材管理'">
    <template v-slot:default>
      <div ref="header_line" class="header_line">
        <Common_selector_form
            :show_semester="true"
            :show_backupbtn="true"
        ></Common_selector_form>
      </div>
      <div class="content-table" ref="content-table">
        <a-table
            :columns="columns"
            :data-source="table_data"
            :pagination="false"
            :scroll="{y: table_content_height}">
          <template #bodyCell="{column, record, text}">
            <template v-if="column.key === 'operation'">
              <span>
                <a @click="record.states = record.states === '否' ? '是' : '否'"
                >{{ record.states === '否' ? '征订' : '取消' }}</a>
              </span>
            </template>
            <template v-else-if="column.key === 'states'">

              <span :style="'color: '+ (record.states === '否' ? '#ff033e' : 'var(--theme-color)')">
                {{ text }}
              </span>
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

export default {
  name: "teaching_material",
  data() {
    return {
      columns: [
        {
          title: '课程编号',
          dataIndex: 'course_id',
          key: 'course_id',
          width: 115,
        },
        {
          title: '课程名称',
          dataIndex: 'course_name',
          key: 'course_name',
          width: 150,
        },
        {
          title: 'ISBN书号',
          dataIndex: 'isbn',
          key: 'isbn',
          width: 150
        },
        {
          title: '教材名称',
          dataIndex: 'book_name',
          key: 'book_name',
        },
        {
          title: '版次',
          dataIndex: 'version',
          key: 'version',
          width: 70,
        },
        {
          title: '出版社',
          dataIndex: 'punishment',
          key: 'press',
        },
        {
          title: '上课教师',
          dataIndex: 'teacher',
          key: 'teacher',
          width: 90,
        },
        {
          title: '上课院系',
          dataIndex: 'major',
          key: 'major',
        },
        {
          title: '状态',
          dataIndex: 'states',
          key: 'states',
          width: 60,
        },
        {
          title: '操作',
          dataIndex: 'operation',
          key: 'operation',
          width: 60,
        },],
      table_data: [
        {
          course_id: '0809010670',
          course_name: 'Hadoop集群程序设计与开发实验',
          isbn: '9787115502179',
          book_name: 'Hadoop大数据开发实战',
          version: '1',
          punishment: '人民邮电出版社',
          teacher: '刘文正',
          major: '计算机与通信工程学院',
          states: '否'
        },
        {
          course_id: '0809000675',
          course_name: '数据采集与预处理',
          isbn: '9787548734116',
          book_name: '大数据采集与预处理技术',
          version: '2018',
          punishment: '中南大学出版社',
          teacher: '彭玉旭',
          major: '计算机与通信工程学院',
          states: '否'
        },
        {
          course_id: '0812001045',
          course_name: '计算机网络原理',
          isbn: '9787121411748',
          book_name: '计算机网络',
          version: '8',
          punishment: '电子工业出版社',
          teacher: '刘青',
          major: '计算机与通信工程学院',
          states: '否',
        },
        {
          course_id: '0101000014',
          course_name: '马克思主义基本原理概论',
          isbn: '9787040566208',
          book_name: '马工程教材 马克思主义基本原理概论',
          version: '2021',
          punishment: '高等教育出版社',
          teacher: '符艳红',
          major: '马克思主义学院',
          states: '否',
        },
        {
          course_id: '1201100095',
          course_name: '通用工程英语听说（下）',
          isbn: '9787100164360',
          book_name: '新纬度通用工程英语听说教程（下册）',
          version: '2019',
          punishment: '商务印书馆',
          teacher: '陈润兰',
          major: '外国语学院',
          states: '否',
        },
        {
          course_id: '0809000675',
          course_name: '数据采集与预处理',
          isbn: '9787548734116',
          book_name: '大数据采集与预处理技术',
          version: '2018',
          punishment: '中南大学出版社',
          teacher: '彭玉旭',
          major: '计算机与通信工程学院',
          states: '否'
        },
        {
          course_id: '0812001045',
          course_name: '计算机网络原理',
          isbn: '9787121411748',
          book_name: '计算机网络',
          version: '8',
          punishment: '电子工业出版社',
          teacher: '刘青',
          major: '计算机与通信工程学院',
          states: '否',
        },
        {
          course_id: '0101000014',
          course_name: '马克思主义基本原理概论',
          isbn: '9787040566208',
          book_name: '马工程教材 马克思主义基本原理概论',
          version: '2021',
          punishment: '高等教育出版社',
          teacher: '符艳红',
          major: '马克思主义学院',
          states: '否',
        },
        {
          course_id: '1201100095',
          course_name: '通用工程英语听说（下）',
          isbn: '9787100164360',
          book_name: '新纬度通用工程英语听说教程（下册）',
          version: '2019',
          punishment: '商务印书馆',
          teacher: '陈润兰',
          major: '外国语学院',
          states: '否',
        },
      ],
      table_content_height: this.$refs["content-table"]?.clientHeight - 55,
    }
  },
  components: {Common_selector_form, Whole_page_block},
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
.header_line {
  height: 65px;
}

.header_line:deep(.ant-form) {
  position: relative;
}

.header_line:deep(.backupbtn) {
  top: 0;
  right: 0;
}

.content-table {
  height: calc(100% - 65px - 20px);
}

a {
  color: var(--theme-color);
}

a:hover {
  color: var(--theme-color);
  opacity: 0.75;
  text-decoration: underline;
}
</style>