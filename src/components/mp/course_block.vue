<template>
  <InnerBlock :block-name="'courses'">
    <template v-slot:content>
      <div class="title-block">
        <CommonTitle :title="'我的课表'" :more-btn="moreBtn"
        ></CommonTitle>

        <div class="wktime-selector">
          <span class="arrow pre-arrow" @click="$nf.not_finish()"></span>
          <span class="wk-time-content">
              {{ today }}
            </span>
          <span class="arrow next-arrow" @click="$nf.not_finish()"></span>
        </div>
      </div>

      <Course_schedule
          :courses="courses"
          :wk="wk"
      ></Course_schedule>
    </template>
  </InnerBlock>
</template>

<script>
import InnerBlock from "@/components/inner-block";
import CommonTitle from "@/components/common_title";
import Course_schedule from "@/components/course_schedule";

export default {
  name: "course_block",
  components: {Course_schedule, CommonTitle, InnerBlock},
  data() {
    return {
      moreBtn: {
        btn: true,
        content: '课表管理',
        icon:

            '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M5.1516 0.46875C5.06044 0.46875 4.973 0.504966 4.90854 0.569432C4.84407 0.633898 4.80785 0.721332 4.80785 0.8125V2.27275C4.45428 2.42734 4.1192 2.62117 3.80892 2.85059L2.54323 2.12013C2.46428 2.07454 2.37045 2.06219 2.28239 2.08578C2.19433 2.10938 2.11925 2.16699 2.07367 2.24594L0.354917 5.22281C0.309335 5.30176 0.296982 5.39559 0.320577 5.48365C0.344171 5.57171 0.40178 5.64679 0.48073 5.69237L1.74607 6.42284C1.70334 6.80643 1.70334 7.19357 1.74607 7.57716L0.481073 8.30763C0.408086 8.34965 0.353066 8.417 0.326452 8.4969C0.299839 8.57681 0.303485 8.6637 0.336698 8.74109L0.354917 8.77719L2.07367 11.7541C2.11925 11.833 2.19433 11.8906 2.28239 11.9142C2.37045 11.9378 2.46428 11.9255 2.54323 11.8799L3.80892 11.1494C4.11922 11.3787 4.4543 11.5724 4.80785 11.7269V13.1875C4.80785 13.2787 4.84407 13.3661 4.90854 13.4306C4.973 13.495 5.06044 13.5312 5.1516 13.5312H8.5891C8.68027 13.5312 8.76771 13.495 8.83217 13.4306C8.89664 13.3661 8.93285 13.2787 8.93285 13.1875V11.7272C9.28655 11.5727 9.62174 11.3789 9.93213 11.1494L11.1978 11.8799C11.2768 11.9255 11.3706 11.9378 11.4587 11.9142C11.5467 11.8906 11.6218 11.833 11.6674 11.7541L13.3861 8.77719C13.4283 8.70426 13.4422 8.61839 13.4252 8.53588C13.4082 8.45338 13.3615 8.37998 13.294 8.32963L13.2603 8.30763L11.995 7.57716C12.0377 7.19357 12.0377 6.80643 11.995 6.42284L13.26 5.69237C13.333 5.65035 13.388 5.583 13.4146 5.5031C13.4412 5.42319 13.4376 5.3363 13.4044 5.25891L13.3861 5.22281L11.6674 2.24594C11.6218 2.16699 11.5467 2.10938 11.4587 2.08578C11.3706 2.06219 11.2768 2.07454 11.1978 2.12013L9.93213 2.85059C9.62184 2.62129 9.28676 2.42757 8.9332 2.27309V0.8125C8.9332 0.721332 8.89698 0.633898 8.83252 0.569432C8.76805 0.504966 8.68062 0.46875 8.58945 0.46875H5.15195H5.1516ZM5.8391 1.5H7.9016V2.94753L8.52035 3.21772C8.80292 3.34147 9.07104 3.4965 9.31923 3.68006L9.86235 4.08156L11.1181 3.35694L12.1493 5.14306L10.8953 5.86666L10.9699 6.53697C11.0042 6.8447 11.0042 7.1553 10.9699 7.46303L10.8953 8.13334L12.1493 8.85694L11.1181 10.6431L9.8627 9.91844L9.31923 10.3199C9.07104 10.5035 8.80292 10.6585 8.52035 10.7823L7.9016 11.0525V12.5H5.8391V11.0525L5.2207 10.7823C4.93814 10.6585 4.67001 10.5035 4.42182 10.3199L3.8787 9.91844L2.62298 10.6431L1.59173 8.85694L2.84573 8.13334L2.77114 7.46303C2.73685 7.1553 2.73685 6.8447 2.77114 6.53697L2.84573 5.86666L1.59173 5.14306L2.62298 3.35694L3.87835 4.08156L4.42182 3.68006C4.66995 3.49651 4.93793 3.34142 5.2207 3.21772L5.83945 2.94753V1.5H5.8391ZM6.85489 4.59375C6.21671 4.59375 5.60467 4.84727 5.15341 5.29852C4.70215 5.74978 4.44864 6.36182 4.44864 7C4.44864 7.63818 4.70215 8.25022 5.15341 8.70148C5.60467 9.15274 6.21671 9.40625 6.85489 9.40625C7.49306 9.40625 8.1051 9.15274 8.55636 8.70148C9.00762 8.25022 9.26114 7.63818 9.26114 7C9.26114 6.36182 9.00762 5.74978 8.55636 5.29852C8.1051 4.84727 7.49306 4.59375 6.85489 4.59375ZM6.85489 5.625C7.21956 5.625 7.56929 5.76987 7.82716 6.02773C8.08502 6.28559 8.22989 6.63533 8.22989 7C8.22989 7.36467 8.08502 7.71441 7.82716 7.97227C7.56929 8.23013 7.21956 8.375 6.85489 8.375C6.49021 8.375 6.14048 8.23013 5.88261 7.97227C5.62475 7.71441 5.47989 7.36467 5.47989 7C5.47989 6.63533 5.62475 6.28559 5.88261 6.02773C6.14048 5.76987 6.49021 5.625 6.85489 5.625V5.625Z" fill="black"/></svg>'
      },
    }
  },
  computed: {
    today() {
      return '10月7日'
    },
    wk() {
      return 0
    },
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
  }
}
</script>

<style scoped>
*, *::before, *::after {
  box-sizing: initial;
}

.title-block {
  padding: 10px;
  height: 22px;
  display: flex;
  justify-content: space-between;
}

.arrow {
  content: url("../../assets/right-forward.svg");
  transform: scale(1.2);

  cursor: pointer;
  transition: transform .3s ease-in-out;
}

.arrow:hover {
  transform: scale(1.3);
}

.pre-arrow {
  transform: rotate(180deg) scale(1.2);
}

.pre-arrow:hover {
  transform: rotate(180deg) scale(1.3);
}

.wk-time-content {
  margin: 0 14px;
  font-size: 13px;
  color: #666666;

  cursor: pointer;
}
</style>