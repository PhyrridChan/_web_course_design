<template>
  <Whole_page_block :title="'选课中心'">
    <template v-slot:default>
      <div class="cs_filed_container">
        <div class="cs_filed">
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
                <form-outlined key="edit"/>
                选课
              </span>
                <span>
                <edit-outlined key="pre-edit"/>
                预选
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
import {FormOutlined, EditOutlined, EllipsisOutlined} from '@ant-design/icons-vue';

export default {
  name: "course_selection",
  components: {
    Whole_page_block,
    FormOutlined,
    EditOutlined,
    EllipsisOutlined,
  },
  data() {
    return {
      cs_card_info: {
        data: [
          {
            title: '2022-2023-1学期选修课选课',
          },
          {
            title: '2022-2023-1学期选修课选课',
          },
          {
            title: '2022-2023-1学期选修课选课',
          },
          {
            title: '2022-2023-1学期选修课选课',
          },
          {
            title: '2022-2023-1学期选修课选课',
          },
        ]
      }
    }
  }
}
</script>

<style scoped>
.cs_filed_container {
  background-color: white;
  margin: 6px 0;
  padding: 13px;
  width: 100%;
  height: 100%;
  overflow: scroll;
}

.cs_filed {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

* >>> .ant-card {
  margin-left: 1.3%;
  margin-bottom: 1.3%;
  width: 24.025%;
}

* >>> .ant-card:nth-child(4n+1) {
  margin-left: 0;
}
</style>