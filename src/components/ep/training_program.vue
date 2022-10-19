<template>
  <Whole_page_block :title="'培养方案'">
    <template v-slot:default>
      <div class="header_line">
        <div class="credits_done">
          <div class="credits_em_num">
            <div class="credits_block em_num_block">
              <div class="em_num">96</div>
              <div class="block_title">已修学分</div>
            </div>
          </div>
          <div class="credits_other">
            <div class="credits_other-content">
              <div class="credits_block">
                <div class="block_title">必修学分</div>
                <div class="block_num _with_percentage">
                  <span>73.5</span><span class="with_percentage">/96.5</span>
                </div>
              </div>
              <div class="credits_block">
                <div class="block_title">必修学分</div>
                <div class="block_num _with_percentage">
                  <span>73.5</span><span class="with_percentage">/96.5</span>
                </div>
              </div>
              <div class="credits_block">
                <div class="block_title">必修学分</div>
                <div class="block_num _with_percentage">
                  <span>73.5</span><span class="with_percentage">/96.5</span>
                </div>
              </div>
              <div class="credits_block">
                <div class="block_title">必修学分</div>
                <div class="block_num _with_percentage">
                  <span>73.5</span><span class="with_percentage">/96.5</span>
                </div>
              </div>
            </div>
            <div class="credits_sub_info">
              已修/应修
            </div>
          </div>
        </div>
        <div class="credits_plan">
          <div class="credits_em_num">
            <div class="credits_block em_num_block">
              <div class="em_num">191.5</div>
              <div class="block_title">总学分</div>
            </div>
          </div>
          <div class="credits_other">
            <div class="credits_other-content">
              <div class="credits_block">
                <div class="block_num _with_icon">
                  <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="4" width="32" height="40" rx="2" fill="#ffffff" stroke="#333" stroke-width="4"
                          stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 16H34" stroke="#0CB9C1" stroke-width="4" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path d="M14 24H34" stroke="#0CB9C1" stroke-width="4" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path d="M14 32H34" stroke="#0CB9C1" stroke-width="4" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path d="M18 12V36" stroke="#0CB9C1" stroke-width="4" stroke-linecap="round"
                          stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="block_title">培养目标</div>
              </div>

              <div class="credits_block">
                <div class="block_num _with_icon">
                  <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z"
                        fill="#ffffff" stroke="#333" stroke-width="4" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M24 11C25.3807 11 26.5 12.1193 26.5 13.5C26.5 14.8807 25.3807 16 24 16C22.6193 16 21.5 14.8807 21.5 13.5C21.5 12.1193 22.6193 11 24 11Z"
                          fill="#0CB9C1"/>
                    <path d="M24.5 34V20H23.5H22.5" stroke="#0CB9C1" stroke-width="4" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path d="M21 34H28" stroke="#0CB9C1" stroke-width="4" stroke-linecap="round"
                          stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="block_title">详细说明</div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="content-table" ref="content-table">
        <a-table :columns="columns"
                 :data-source="course_data"
                 size="small"
                 bordered
                 :scroll="{x: 1000, y: table_content_height }"
                 :pagination="false"
                 @resizeColumn="handleResizeColumn"
        >
          <template #bodyCell="{ column, text }">
            <template v-if="column.dataIndex === 'course_sys'">
              <template v-if="!text.includes('总计')">
                <div
                    style="margin: 10px; font-weight: 500; display: flex; flex-direction: column; font-size: 15px; position: sticky; top: 100px;">
                  <span style="font-weight: 700;">{{ text.split(';')[0] }}</span>
                  <span style="line-height: 14px;">
                  <span style="font-weight: 700">{{ text.split(';')[1].split('/')[0] }}</span>
                  <span style="font-size: 12px">/{{ text.split(';')[1].split('/')[1] }}</span>
                </span>
                  <span style="font-size: 10px; line-height: 10px; color: #666666">已修/应修</span>
                </div>
              </template>
              <template v-else>
                <div style="text-align: center; font-weight: 700">
                  {{ text }}
                </div>
              </template>
            </template>

            <template v-if="column.dataIndex === 'course_id'">
              <template v-if="text.includes('小计')">
                <div style="text-align: center; font-weight: 700">
                  {{ text }}
                </div>
              </template>
            </template>
          </template>
        </a-table>
      </div>
    </template>
  </Whole_page_block>
</template>

<script>
import Whole_page_block from "@/components/whole_page_block";


const sharedOnCell = (_) => {
  if (_.course_id === '小计' || _.course_sys === '总计') {
    return {colSpan: 0};
  }
}

export default {
  name: "training_program",
  components: {Whole_page_block},
  data() {
    return {
      columns: [
        {
          title: '课程体系',
          dataIndex: 'course_sys',
          key: 'course_sys',
          width: 100,
          customCell: (_, index) => {
            if (index === 0) {
              return {rowSpan: 41};
            } else if (index === 41) {
              return {rowSpan: 61}
            } else if (index === this.course_data.length - 1) {
              return {colspan: 6, rowSpan: 1};
            } else {
              return {rowSpan: 0};
            }
          },
          fixed: 'left',
        },
        {
          title: '课程编号',
          dataIndex: 'course_id',
          key: 'course_id',
          width: 110,
          minWidth: 100,
          resizable: true,
          customCell: (_) => ({
            colSpan: _.course_id === '小计' ? 5 : _.course_sys === '总计' ? 0 : 1,
          }),
        },
        {
          title: '课程名称',
          dataIndex: 'course_name',
          key: 'course_name',
          width: 300,
          minWidth: 100,
          resizable: true,
          customCell: sharedOnCell,
        },
        {
          title: '完成情况',
          dataIndex: 'course_state',
          key: 'course_state',
          customCell: sharedOnCell,
          width: 50
        },
        {
          title: '课程性质',
          dataIndex: 'course_nature',
          key: 'course_nature',
          customCell: sharedOnCell,
          width: 90
        },
        {
          title: '课程属性',
          dataIndex: 'course_property',
          key: 'course_property',
          customCell: sharedOnCell,
          width: 50
        },
        {
          title: '学分',
          dataIndex: 'course_credits',
          key: 'course_credits',
          width: 50
        },
        {
          title: '学时分类',
          dataIndex: 'course_credit_hour',
          key: 'course_credit_hour',
          children: [
            {
              title: '讲课学时',
              dataIndex: 'credit_hour_teaching',
              key: 'credit_hour_teaching',
              width: 50,
            },
            {
              title: '上机学时',
              dataIndex: 'credit_hour_operating',
              key: 'credit_hour_operating',
              width: 50,
            },
            {
              title: '其它学时',
              dataIndex: 'credit_hour_other',
              key: 'credit_hour_other',
              width: 50,
            },
            {
              title: '实验学时',
              dataIndex: 'credit_hour_experiment',
              key: 'credit_hour_experiment',
              width: 50,
            },
            {
              title: '实践学时',
              dataIndex: 'credit_hour_practice',
              key: 'credit_hour_practice',
              width: 50,
            },
            {
              title: '总学时',
              dataIndex: 'credit_hour_all',
              key: 'credit_hour_all',
              width: 50,
            },

          ]
        },
        {
          title: '开设学期',
          dataIndex: 'course_semester',
          key: 'course_semester',
          width: 50
        },
      ],
      course_data: [...Array(100)].map((_, i) => ({
        'course_id': '0101200025' + (i + 1),
        'course_sys': i < 40 ? '实践环节;10/47.5' : '选修;4/47.5',
        'course_name': '毛泽东思想和中国特色社会主义理论体系概论课外实践' + i,
        'course_state': 'cc' + i,
        'course_nature': '专业集中实践',
        'course_property': '必修',
        'course_credits': 2,
        'credit_hour_teaching': 0,
        'credit_hour_operating': 0,
        'credit_hour_other': 0,
        'credit_hour_experiment': 0,
        'credit_hour_practice': 2,
        'credit_hour_all': 2,
        'course_semester': 3,
      })),
      table_content_height: this.$refs["content-table"]?.clientHeight - 100,
      screenHeight: document.body.clientHeight,
    }
  },
  mounted() {
    let sum_0 = {
      'course_id': '小计',
      'course_sys': '实践环节;10/47.5',
      'course_name': '',
      'course_state': '',
      'course_nature': '',
      'course_property': '',
      'course_credits': 0,
      'credit_hour_teaching': 0,
      'credit_hour_operating': 0,
      'credit_hour_other': 0,
      'credit_hour_experiment': 0,
      'credit_hour_practice': 0,
      'credit_hour_all': 0,
      'course_semester': '',
    }
    this.course_data.splice(40, 0, sum_0)

    let sum_1 = {
      'course_id': '小计',
      'course_sys': '选修;4/47.5',
      'course_name': '',
      'course_state': '',
      'course_nature': '',
      'course_property': '',
      'course_credits': 0,
      'credit_hour_teaching': 0,
      'credit_hour_operating': 0,
      'credit_hour_other': 0,
      'credit_hour_experiment': 0,
      'credit_hour_practice': 0,
      'credit_hour_all': 0,
      'course_semester': '',
    }
    this.course_data.splice(101, 0, sum_1)

    let sum_all = {
      'course_id': '',
      'course_sys': '总计',
      'course_name': '',
      'course_state': '',
      'course_nature': '',
      'course_property': '',
      'course_credits': 0,
      'credit_hour_teaching': 0,
      'credit_hour_operating': 0,
      'credit_hour_other': 0,
      'credit_hour_experiment': 0,
      'credit_hour_practice': 0,
      'credit_hour_all': 0,
      'course_semester': '',
    }
    this.course_data.splice(this.course_data.length, 0, sum_all)

    const that = this
    window.onresize = () => {
      return (() => {
        window.screenHeight = document.body.clientHeight
        that.screenHeight = window.clientHeight
        that.table_content_height = that.$refs["content-table"]?.clientHeight - 100
      })()
    }

    setTimeout(() => window.dispatchEvent(new Event('resize')), 1000)
  },
  methods: {
    handleResizeColumn: (w, col) => {
      col.width = w;
    }
  },
  watch: {
    screenHeight(val) {
      if (!this.timer) {
        this.screenWidth = val
        this.timer = true
        let that = this
        setTimeout(function () {
          that.timer = false
        }, 400)
      }
    }
  }
}
</script>

<style scoped>
.header_line {
  text-align: center;
  margin: 10px 0;
  width: 100%;
  height: 18%;
  display: flex;
  justify-content: space-between;
}

.credits_other-content {
  display: flex;
  justify-content: space-around;
}

.credits_other {
  text-align: left;
}

.credits_other .credits_block {
  width: 21%;
  margin: auto 2%;
}

.credits_done .credits_em_num,
.credits_plan .credits_em_num {
  flex-grow: 0.5;
  margin-right: 4%;

  border-right: solid 3px #666;
}

.credits_em_num {
  position: relative;
}

.block_title {
  white-space: nowrap;
}

.credits_em_num .block_title {
  line-height: 21px;
  font-size: 18px;
}

.credits_other .block_title {
  font-size: 14px;
  line-height: 19px;
}

.credits_other .credits_sub_info {
  margin: auto 2%;
  font-size: 14px;
  line-height: 19px;
  color: #666;
}

.block_num._with_percentage {
  font-weight: 600;
  font-size: 28px;
  line-height: 30px;
}

._with_percentage .with_percentage {
  font-size: 20px;
  line-height: 29px;
}


.em_num {
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;

  text-align: center;
  font-family: "Alimama ShuHeiTi", serif;

  color: #0CB9C1;
}

.credits_done {
  width: 66%;
  margin-right: 1%;
}

.credits_done > div,
.credits_plan > div {
  flex-grow: 1;
}

.credits_plan {
  width: 33%;
}

.header_line > div {
  background-color: #fff;
  border-radius: 6px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.credits_plan .credits_other {
  text-align: center;
}

.content-table {
  height: calc(82% - 20px);
  overflow: hidden;
  width: 100%;
  background-color: #fff;
  border-radius: 6px;
}

.content-table >>> * td.ant-table-cell-fix-left-last {
  vertical-align: initial;
}
</style>