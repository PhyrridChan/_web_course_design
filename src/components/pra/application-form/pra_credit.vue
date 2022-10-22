<template>
  <div>
    <a-form layout="horizontal"
            :label-col="{ span: 6 }"
            :wrapper-col="{ span: 12 }">
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
      <a-form-item has-feedback label="第二课堂学分项目">
        <a-cascader
            :options="options.pra_cate.data"
            :show-search="{ filter }"
            placeholder="请点击选择或输入以搜索"
        ></a-cascader>
      </a-form-item>
      <a-form-item has-feedback label="获得项目时间">
        <a-date-picker placeholder="请点击选择获得项目时间"
        ></a-date-picker>
      </a-form-item>
      <a-form-item has-feedback label="备注">
        <a-textarea></a-textarea>
      </a-form-item>
      <a-form-item has-feedback label="附件">
        <a-upload>
          <a-button>
            <upload-outlined></upload-outlined>
            点击上传
          </a-button>
        </a-upload>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import {UploadOutlined} from '@ant-design/icons-vue';

export default {
  name: "pra_credit",
  components: {UploadOutlined,},
  data() {
    return {
      options: {
        pra_cate: {
          data: [
            {
              label: '学科竞赛类',
              value: 'academic_competition',
              children: [
                {
                  label: '学科竞赛类（5分）',
                  value: 'ac_5',
                },
                {
                  label: '学科竞赛类（4分）',
                  value: 'ac_4',
                },
                {
                  label: '学科竞赛类（3分）',
                  value: 'ac_3',
                },
                {
                  label: '学科竞赛类（2分）',
                  value: 'ac_2',
                },
                {
                  label: '学科竞赛类（1.5分）',
                  value: 'ac_1.5',
                },
                {
                  label: '学科竞赛类（1分）',
                  value: 'ac_1',
                },
                {
                  label: '学科竞赛类（0.5分）',
                  value: 'ac_0.5',
                },
              ]
            },
            {
              label: '科研(技能)训练类',
              value: 'RTP',
              children: [
                {
                  label: '科研(技能)训练类（2.5分）',
                  value: 'RTP_2.5',
                },
                {
                  label: '科研(技能)训练类（2分）',
                  value: 'RTP_2',
                },
                {
                  label: '科研(技能)训练类（1分）',
                  value: 'RTP_1',
                },
                {
                  label: '科研(技能)训练类（0.5分）',
                  value: 'RTP_0.5',
                },
              ]
            },
            {
              label: '学术研究成果类',
              value: 'ARR',
              children: [
                {
                  label: '学术研究成果类（5分）',
                  value: 'ARR_5',
                },
                {
                  label: '学术研究成果类（4.5分）',
                  value: 'ARR_4.5',
                },
                {
                  label: '学术研究成果类（4分）',
                  value: 'ARR_4',
                },
                {
                  label: '学术研究成果类（3.5分）',
                  value: 'ARR_3.5',
                },
                {
                  label: '学术研究成果类（3分）',
                  value: 'ARR_3',
                },
                {
                  label: '学术研究成果类（2.5分）',
                  value: 'ARR_2.5',
                },
                {
                  label: '学术研究成果类（2分）',
                  value: 'ARR_2',
                },
                {
                  label: '学术研究成果类（1.5分）',
                  value: 'ARR_1.5',
                },
                {
                  label: '学术研究成果类（1分）',
                  value: 'ARR_1',
                },
                {
                  label: '学术研究成果类（0.5分）',
                  value: 'ARR_0.5',
                },
              ]
            },
            {
              label: '读书活动、学术报告及讲座类',
              value: 'lecture',
              children: [
                {
                  label: '读书活动模糊、学术报告及讲座类（1分）',
                  value: 'lecture_1',
                },
                {
                  label: '读书活动模糊、学术报告及讲座类（0.5分）',
                  value: 'lecture_0.5x'
                }
              ]
            },
            {
              label: '文体竞赛类',
              value: 'ASC',
              children: [
                {
                  label: '文体竞赛类（5分）',
                  value: 'ASC_5',
                },
                {
                  label: '文体竞赛类（4分）',
                  value: 'ASC_4',
                },
                {
                  label: '文体竞赛类（3分）',
                  value: 'ASC_3',
                },
                {
                  label: '文体竞赛类（2分）',
                  value: 'ASC_2',
                },
                {
                  label: '文体竞赛类（1.5分）',
                  value: 'ASC_1.5',
                },
                {
                  label: '文体竞赛类（1分）',
                  value: 'ASC_1',
                },
                {
                  label: '文体竞赛类（0.5分）',
                  value: 'ASC_0.5',
                },
              ]
            },
            {
              label: '社会实践与社会工作类',
              value: 'volunteer',
              children: [
                {
                  label: '社会实践与社会工作类（2分）',
                  value: 'volunteer_2',
                },
                {
                  label: '社会实践与社会工作类（1.5分）',
                  value: 'volunteer_1.5',
                },
                {
                  label: '社会实践与社会工作类（1分）',
                  value: 'volunteer_1',
                },
                {
                  label: '社会实践与社会工作类（0.5分）',
                  value: 'volunteer_0.5',
                },
              ]
            },
            {
              label: '就业实习与境外交流类',
              value: 'EA',
              children: [
                {
                  label: '就业实习与境外交流类（1.5分）',
                  value: 'EA_1',
                },
                {
                  label: '就业实习与境外交流类（1分）',
                  value: 'EA_1',
                },
              ],
            },
          ]
        }
      }
    }
  },
  methods: {
    filter: (inputValue, path) => {
      return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    },
  }
}
</script>

<style scoped>

</style>