<template>
  <Whole_page_block :title="'课表查询'">
    <template v-slot:default>
      <div ref="header_line" class="header_line">
        <Common_selector_form
            :show_semester="true"
            :show_grade="true"
            :show_major="true"
            :show_more="true"
        ></Common_selector_form>
      </div>
      <div class="content-course_schedule" ref="main_sec">
        <div class="course_schedule_toolbox inner-title" id="result">
          <CommonTitle :title="'学期理论课表'"></CommonTitle>
          <div class="toolbox_item">
            <svg t="1666164820061" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="2233" width="14" height="14">
              <path
                  d="M256 972.8H85.333333a34.133333 34.133333 0 0 1-34.133333-34.133333V768a34.133333 34.133333 0 0 1 68.266667 0v88.251733l197.7344-197.7344a34.133333 34.133333 0 1 1 48.247466 48.298667L167.7312 904.533333H256a34.133333 34.133333 0 0 1 0 68.266667z m682.666667-0.853333H768a34.133333 34.133333 0 0 1 0-68.266667h88.2688L658.5344 705.9456a34.133333 34.133333 0 1 1 48.264533-48.264533L904.533333 855.415467V768a34.133333 34.133333 0 0 1 68.266667 0v169.813333a34.304 34.304 0 0 1-9.6256 23.773867l-0.034133 0.034133-0.017067 0.017067-0.017067 0.017067-0.597333 0.6144h-0.017067l-0.017066 0.017066-0.034134 0.034134A33.8432 33.8432 0 0 1 938.666667 971.946667zM682.666667 375.466667a34.133333 34.133333 0 0 1-24.149334-58.248534L856.251733 119.466667H768a34.133333 34.133333 0 0 1 0-68.266667h170.871467A34.065067 34.065067 0 0 1 972.8 85.589333V256a34.133333 34.133333 0 0 1-68.266667 0V167.7312L706.816 365.4656A34.030933 34.030933 0 0 1 682.666667 375.466667z m-341.333334 0a33.962667 33.962667 0 0 1-24.132266-10.001067L119.466667 167.748267V256a34.133333 34.133333 0 0 1-68.266667 0V85.333333a34.167467 34.167467 0 0 1 9.5232-23.6544v-0.017066l0.938667-0.938667h0.017066A33.792 33.792 0 0 1 85.333333 51.2h170.666667a34.133333 34.133333 0 0 1 0 68.266667H167.748267l197.717333 197.7344A34.133333 34.133333 0 0 1 341.333333 375.466667zM597.333333 613.546667H426.666667a17.066667 17.066667 0 0 1-17.066667-17.066667v-170.666667a17.066667 17.066667 0 0 1 17.066667-17.066666h170.666666a17.066667 17.066667 0 0 1 17.066667 17.066666v170.666667a17.066667 17.066667 0 0 1-17.066667 17.066667z m-153.6-34.133334h136.533334v-136.533333h-136.533334v136.533333z"
                  p-id="2234" fill="#2c2c2c"></path>
            </svg>
            <span class="toolbox_item_name">放大</span>
          </div>
        </div>
        <div class="cs_container">
          <Course_schecule_content></Course_schecule_content>
        </div>
      </div>
    </template>
  </Whole_page_block>
</template>

<script>
import Whole_page_block from "@/components/whole_page_block";
import CommonTitle from "@/components/common_title";
import Course_schecule_content from "@/components/course_schecule_content";
import Common_selector_form from "@/components/common_selector_form";

export default {
  name: "class_schedule",
  components: {Common_selector_form, Course_schecule_content, CommonTitle, Whole_page_block,},
  data() {
    return {
    }
  },
  computed: {
    courses() {
      return [
        [
          {},
          {},
          {},
          {},
          {},
        ],
        [
          {
            name: 'Spark编程基础',
            site: '云综教C-505',
            teacher: '刘文正',
            course_id: '123456',
            course_type: '必修',
            color: '#037EF3'
          },
          {
            name: 'Spark编程基础',
            site: '云综教C-505',
            teacher: '刘文正',
            course_id: '123456',
            course_type: '必修',
            color: '#0CB9C1'
          },
          {
            name: 'Spark编程基础',
            site: '云综教C-505',
            teacher: '刘文正',
            course_id: '123456',
            course_type: '必修',
            color: '#00C16E'
          },
          {
            name: 'Spark编程基础',
            site: '云综教C-505',
            teacher: '刘文正',
            course_id: '123456',
            course_type: '必修',
            color: '#037EF3'
          },
          {}
        ],
        [
          {},
          {
            name: 'Spark编程基础',
            site: '云综教C-505',
            teacher: '刘文正',
            course_id: '123456',
            course_type: '必修',
            color: '#0CB9C1'
          },
          {},
          {},
          {},
        ],
        [
          {
            name: 'Spark编程基础',
            site: '云综教C-505',
            teacher: '刘文正',
            course_id: '123456',
            course_type: '必修',
            color: '#037EF3'
          },
          {
            name: 'Spark编程基础',
            site: '云综教C-505',
            teacher: '刘文正',
            course_id: '123456',
            course_type: '必修',
            color: '#0CB9C1'
          },
          {
            name: 'Spark编程基础',
            site: '云综教C-505',
            teacher: '刘文正',
            course_id: '123456',
            course_type: '必修',
            color: '#00C16E'
          },
          {},
          {
            name: 'Spark编程基础',
            site: '云综教C-505',
            teacher: '刘文正',
            course_id: '123456',
            course_type: '必修',
            color: '#037EF3'
          },
        ],
        [
          {
            name: 'Spark编程基础',
            site: '云综教C-505',
            teacher: '刘文正',
            course_id: '123456',
            course_type: '必修',
            color: '#037EF3'
          },
          {
            name: 'Spark编程基础',
            site: '云综教C-505',
            teacher: '刘文正',
            course_id: '123456',
            course_type: '必修',
            color: '#0CB9C1'
          },
          {
            name: 'Spark编程基础',
            site: '云综教C-505',
            teacher: '刘文正',
            course_id: '123456',
            course_type: '必修',
            color: '#00C16E'
          },
          {
            name: 'Spark编程基础',
            site: '云综教C-505',
            teacher: '刘文正',
            course_id: '123456',
            course_type: '必修',
            color: '#037EF3'
          },
          {},
        ],
        [
          {},
          {
            name: 'Spark编程基础',
            site: '云综教C-505',
            teacher: '刘文正',
            course_id: '123456',
            course_type: '必修',
            color: '#0CB9C1'
          },
          {},
          {
            name: 'Spark编程基础',
            site: '云综教C-505',
            teacher: '刘文正',
            course_id: '123456',
            course_type: '必修',
            color: '#037EF3'
          },
          {},
        ],
        [
          {
            name: 'Spark编程基础',
            site: '云综教C-505',
            teacher: '刘文正',
            course_id: '123456',
            course_type: '必修',
            color: '#037EF3'
          },
          {
            name: 'Spark编程基础',
            site: '云综教C-505',
            teacher: '刘文正',
            course_id: '123456',
            course_type: '必修',
            color: '#0CB9C1'
          },
          {
            name: 'Spark编程基础',
            site: '云综教C-505',
            teacher: '刘文正',
            course_id: '123456',
            course_type: '必修',
            color: '#00C16E'
          },
          {
            name: 'Spark编程基础',
            site: '云综教C-505',
            teacher: '刘文正',
            course_id: '123456',
            course_type: '必修',
            color: '#037EF3'
          },
          {}
        ],
      ]
    },
  },
  methods: {
  },
  mounted() {
    setTimeout(
        () => {
        }, 1000
    )
  }
}
</script>

<style scoped>
*:deep(.block-main-content) {
  margin: 6px 0;
  overflow: scroll;
  overflow-x: hidden;
}

.header_line {

}

.content-course_schedule {
  background-color: #fff;
  width: 100%;
  padding-bottom: 12px;
}

.content-course_schedule:deep(.course-content) {
  height: calc(100% - 42px);
  margin: 5px 0;
}

.dynamic-section {
  transition: .5s all ease-in-out;
}

.course_schedule_toolbox {
  padding: 12px 13px;
  padding-bottom: 0;

  position: relative;
}

.toolbox_item {
  color: #666;
  position: absolute;
  right: 10px;
  bottom: 0;

  cursor: pointer;

  align-items: center;

  width: max-content;
  white-space: nowrap;
  background-color: white;
  border: solid 1px #999;
  border-radius: 3px;
  padding: 1px 6px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.toolbox_item_name {
  margin-left: 6px;
}

.course_schedule-title{
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: black;
}

.cs_container {
  margin: 13px;
  border-radius: 5px;
}
</style>