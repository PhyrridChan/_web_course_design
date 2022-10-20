<template>
  <Whole_page_block :title="'第二课堂学分管理'">
    <template v-slot:default>
      <div class="pra_cre_field_container" ref="filed_container">
        <a-card
            :tab-list="tabList"
            style="height: 100%; width: 100%"
            size="small"
            @tabChange="key => {tab_value = key;}"
        >
          <template #customTab="item">
            <span v-if="item.key === 'search'">
              {{ item.tab }}
              <file-search-outlined/>
            </span>
            <span v-if="item.key === 'application'">
              {{ item.tab }}
              <form-outlined/>
            </span>
          </template>
          <a-table
              :columns="tab_value === 'search' ? columns : apply_columns"
              :data-source="tab_value === 'search' ? pra_data : []"
              :pagination="{
                defaultPageSize: 6,
                pageSize: this.page_size,
                }"
          >
            <template #bodyCell="{column, index}">
              <template v-if="column.key === 'row_num'">
                {{ index + 1 }}
              </template>
            </template>
          </a-table>
        </a-card>
      </div>
    </template>
  </Whole_page_block>
</template>

<script>
import Whole_page_block from "@/components/whole_page_block";
import {FormOutlined, FileSearchOutlined} from '@ant-design/icons-vue';

export default {
  name: "practice_credit",
  components: {Whole_page_block, FormOutlined, FileSearchOutlined},
  data() {
    return {
      tabList: [
        {
          key: 'search',
          tab: '第二课堂学分查询',
        },
        {
          key: 'application',
          tab: '第二课堂学分申报',
        },
      ],
      columns: [
        {
          title: '序号',
          dataIndex: 'row_num',
          key: 'row_num',
        },
        {
          title: '学年学期',
          dataIndex: 'semester',
          key: 'semester',
        },
        {
          title: '项目编号',
          dataIndex: 'pra_id',
          key: 'pra_id',
        },
        {
          title: '分类名称',
          dataIndex: 'cate_name',
          key: 'cate_name',
        },
        {
          title: '学分',
          dataIndex: 'credit',
          key: 'credit',
        },
        {
          title: '学分类型',
          dataIndex: 'pra_credit_type',
          key: 'pra_credit_type',
        },
        {title: '评分', dataIndex: 'score', key: 'score'},
      ],
      apply_columns: [
        {title: '序号',},
        {title: '组织方式',},
        {title: '学年学期',},
        {title: '分类名称',},
        {title: '获得项目时间',},
        {title: '认定学分',},
        {title: '审核状态',},
        {title: '认定状态',},
        {title: '评分',},
        {title: '操作',},
      ],
      pra_data: [
        {
          semester: '2020-2021-1',
          pra_id: '812',
          cate_name: '大学生学习方法',
          credit: '0.5',
          pra_credit_type: '文化素质拓展',
          score: '90'
        },
        {
          semester: '2020-2021-1',
          pra_id: '812',
          cate_name: '大学生学习方法',
          credit: '0.5',
          pra_credit_type: '文化素质拓展',
          score: '90'
        },
        {
          semester: '2020-2021-1',
          pra_id: '812',
          cate_name: '大学生学习方法',
          credit: '0.5',
          pra_credit_type: '文化素质拓展',
          score: '90'
        },
        {
          semester: '2020-2021-1',
          pra_id: '812',
          cate_name: '大学生学习方法',
          credit: '0.5',
          pra_credit_type: '文化素质拓展',
          score: '90'
        },
        {
          semester: '2020-2021-1',
          pra_id: '812',
          cate_name: '大学生学习方法',
          credit: '0.5',
          pra_credit_type: '文化素质拓展',
          score: '90'
        },
        {
          semester: '2020-2021-1',
          pra_id: '812',
          cate_name: '大学生学习方法',
          credit: '0.5',
          pra_credit_type: '文化素质拓展',
          score: '90'
        },
        {
          semester: '2020-2021-1',
          pra_id: '812',
          cate_name: '大学生学习方法',
          credit: '0.5',
          pra_credit_type: '文化素质拓展',
          score: '90'
        },
        {
          semester: '2020-2021-1',
          pra_id: '812',
          cate_name: '大学生学习方法',
          credit: '0.5',
          pra_credit_type: '文化素质拓展',
          score: '90'
        },
        {
          semester: '2020-2021-1',
          pra_id: '812',
          cate_name: '大学生学习方法',
          credit: '0.5',
          pra_credit_type: '文化素质拓展',
          score: '90'
        },
        {
          semester: '2020-2021-1',
          pra_id: '812',
          cate_name: '大学生学习方法',
          credit: '0.5',
          pra_credit_type: '文化素质拓展',
          score: '90'
        },
      ],
      page_size: (this.$refs.filed_container - 58 - 55 - 50) / 55 || 6,
      screenHeight: document.body.clientHeight,
      tab_value: '',
    }
  },
  mounted() {
    const that = this
    this.tab_value =  this.tabList[0].key
    window.onresize = () => {
      return (() => {
        console.warn("!!!!")
        window.screenHeight = document.body.clientHeight
        that.screenHeight = window.clientHeight
        that.page_size = (this.$refs.filed_container?.clientHeight - 58 - 55 - 50) / 55 || 6
      })
    }

    console.log(this.page_size)

    setTimeout(() => window.dispatchEvent(new Event('resize')), 1000)
  },
  watch: {
    screenHeight(val) {
      if (!this.timer) {
        this.screenWidth = val
        this.timer = true
        let that = this
        console.log(this.page_size)
        setTimeout(function () {
          that.timer = false
        }, 400)
      }
    }
  }
}
</script>

<style scoped>
.pra_cre_field_container {
  background-color: white;
  margin: 6px 0;
  padding: 13px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>