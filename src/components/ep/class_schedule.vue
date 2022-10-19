<template>
  <Whole_page_block :title="'课表查询'">
    <template v-slot:default>
      <div ref="header_line" class="header_line">
        <div class="form-container">
          <a-form>
            <a-row :gutter="24">
              <a-col :span="6">
                <a-form-item has-feedback label="学年学期" name="semester">
                  <a-select
                      placeholder="请点击选择"
                  >
                    <a-select-option value="2022-2023-2">2022-2023-2</a-select-option>
                    <a-select-option value="2022-2023-1">2022-2023-1</a-select-option>
                    <a-select-option value="2021-2022-2">2021-2022-2</a-select-option>
                    <a-select-option value="2021-2022-1">2021-2022-1</a-select-option>
                    <a-select-option value="2020-2021-2">2020-2021-2</a-select-option>
                    <a-select-option value="2020-2021-1">2020-2021-1</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item has-feedback label="院系专业" name="major">
                  <a-cascader
                      :options="options.depart_major.data"
                      :show-search="{ filter }"
                      placeholder="请点击选择或输入以搜索"
                  ></a-cascader>
                </a-form-item>
              </a-col>
              <a-col :span="6">
                <a-form-item has-feedback label="年级" name="grade">
                  <a-select
                      placeholder="请点击选择"
                  >
                    <a-select-option value="2022">2022</a-select-option>
                    <a-select-option value="2021">2021</a-select-option>
                    <a-select-option value="2020">2020</a-select-option>
                    <a-select-option value="2019">2019</a-select-option>
                    <a-select-option value="2018">2018</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
            </a-row>
            <Transition name="fade">
              <a-row v-if="expand" class="inner-title">
                <CommonTitle :title="'更多选项'"></CommonTitle>
              </a-row>
            </Transition>
            <a-row :gutter="24">
              <template v-for="(item, index) in more_selector" :key="index">
                <Transition name="fade">
                  <a-col v-if="expand" :span="item.span || 4" class="more_selector_col">
                    <a-form-item has-feedback :label="item.plh" :name="item.name">
                      <template v-if="item.type === 'input'">
                        <a-input :placeholder="'请在此输入'" size="middle">
                        </a-input>
                      </template>
                      <template v-else-if="item.type === 'selector'">
                        <a-select size="middle"
                                  :placeholder="'请点击选择'"
                        ></a-select>
                      </template>
                    </a-form-item>
                  </a-col>
                </Transition>
              </template>
            </a-row>

            <a-row>
              <a-col :span="24" style="text-align: right;">
                <a-button type="primary" html-type="submit">查询</a-button>
                <a-button style="margin: 0 8px" @click="() => formRef.resetFields()">清除</a-button>
                <a style="font-size: 12px; color: var(--theme-color)" @click="handle_expand">
                  <template v-if="expand">
                    隐藏更多
                    <UpOutlined/>
                  </template>
                  <template v-else>
                    显示更多
                    <DownOutlined/>
                  </template>
                </a>
              </a-col>
            </a-row>

          </a-form>
        </div>
      </div>
      <div class="content-course_schedule" ref="main_sec">

      </div>
    </template>
  </Whole_page_block>
</template>

<script>
import Whole_page_block from "@/components/whole_page_block";
import {DownOutlined, UpOutlined} from '@ant-design/icons-vue';
import {reactive, ref} from "vue";
import CommonTitle from "@/components/common_title";

export default {
  name: "class_schedule",
  components: {CommonTitle, Whole_page_block, DownOutlined, UpOutlined,},
  data() {
    return {
      options: {
        depart_major: {
          data: [
            {
              label: '计算机与通信工程学院',
              value: 'jitong',
              children: [
                {
                  label: '数据科学与大数据技术',
                  value: 'big_data',
                },
                {
                  label: '计算机科学与技术',
                  value: 'cs',
                },
                {
                  label: '通信工程',
                  value: 'telecom',
                },
                {
                  label: '软件工程',
                  value: 'sw',
                }
              ],
            },
            {
              label: '交通运输工程学院',
              value: 'jiaoyun',
              children: [
                {
                  label: '道路桥梁与渡河工程',
                  value: 'road_bridge',
                },
                {
                  label: '交通运输类',
                  value: 'trans',
                },
                {
                  label: '测绘工程',
                  value: 'cehui',
                },
                {
                  label: '工程管理',
                  value: 'proj_m',
                }
              ],
            }
          ]
        }
      },
      more_selector: [
        {
          name: 'campus',
          plh: '上课校区',
          type: 'selector',
          span: 5
        },
        {
          name: 'class_room',
          plh: '上课教室',
          type: 'input',
          span: 5
        },
        {
          name: 'teacher',
          plh: '授课老师',
          type: 'input',
          span: 5
        },
        {
          name: 'id',
          plh: '课程编号',
          type: 'input',
          span: 5
        },
        {
          name: 'course_type',
          plh: '课程类型',
          type: 'selector',
          span: 4
        },
        {
          name: 'course_name',
          plh: '课程名',
          type: 'input',
          span: 6
        },
      ],
      expand: ref(false),
      formRef: ref(),
      formState: reactive({}),
    }
  },
  methods: {
    filter: (inputValue, path) => {
      return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    },
    onFinish: function (values) {
      console.log('Received values of form: ', values);
      console.log('formState: ', this.formState);
    },
    handle_expand: function () {
      this.expand = !this.expand
      var that = this
      setTimeout(
          () => {
            let header_height = (that.$refs.header_line?.clientHeight || 120)+ 20
            that.$refs.main_sec?.style.setProperty('height', 'calc(100% - ' + header_height + 'px)')
          }, 550
      )
    }
  },
  mounted() {
    var that = this
    setTimeout(
        () => {
          let header_height = (that.$refs.header_line?.clientHeight || 120)+ 20
          that.$refs.main_sec?.style.setProperty('height', 'calc(100% - ' + header_height + 'px)')
        }, 1000
    )
  }
}
</script>

<style scoped>
.header_line {
  text-align: center;
  margin: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.header_line .form-container {
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  padding: 16px 10px;

  text-align: left;
}

.more_selector_col >>> .ant-form-item {
  margin: 6px 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/*.inner-title >>> .title-content {*/
/*  font-size: 16px;*/
/*  font-family: "Alibaba PuHuiTi 2.0", serif;*/
/*  font-weight: 500;*/
/*}*/

.content-course_schedule {
  background-color: #fff;
  width: 100%;
  height: 100%;
}

.dynamic-section {
  transition: .5s all ease-in-out;
}
</style>