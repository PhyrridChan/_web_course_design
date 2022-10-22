<template>
  <Whole_page_block :title="'教学评价'">
    <template v-slot:default>
      <div class="ee_filed_container">
        <div class="ee_filed">
          <template v-for="(item, index) of cs_card_info.data" :key="index">
            <a-card
                hoverable
                size="small"
                :title="item.title">
              <template #extra>
              <span>
                未完成
              </span>
              </template>
              <template #cover>
                <img
                    alt="cover_default"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              </template>
              <template #actions>
                <span>
                进入课程评价
                  <login-outlined key="pre-edit"/>
              </span>
                <span>
                <ellipsis-outlined key="ellipsis"/>
              </span>
              </template>
            </a-card>
          </template>
        </div>
      </div>
    </template>
  </Whole_page_block>
</template>

<script>
import Whole_page_block from "@/components/whole_page_block";
import {LoginOutlined, EllipsisOutlined} from '@ant-design/icons-vue';

export default {
  name: "edu_evaluate",
  components: {Whole_page_block, LoginOutlined, EllipsisOutlined,},
  data() {
    return {
      cs_card_info: {
        data: [
          {
            title: '2022-2023-1学期课程评价',
          },
          {
            title: '2022-2023-1学期课程评价',
          },
          {
            title: '2022-2023-1学期课程评价',
          },
          {
            title: '2022-2023-1学期课程评价',
          },
          {
            title: '2022-2023-1学期课程评价',
          },
        ]
      }
    }
  }
}
</script>

<style scoped>
.ee_filed:deep(.ant-card) {
  margin-left: 1.3%;
  margin-bottom: 1.3%;
  width: 24.025%;
}

.ee_filed:deep(.ant-card:nth-child(4n+1)) {
  margin-left: 0;
}
</style>