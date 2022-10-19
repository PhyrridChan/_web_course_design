<template>
  <a-table
      :columns="columns"
      :data-source="slot"
      :pagination="false"
  >
    <template #bodyCell="{ text, record, column}">
      <template v-if="column.dataIndex === 'hd'">
        <span class="th-name">{{ record.name }}</span>
        <span class="th-range">{{ record.range }}</span>
      </template>

      <template v-else-if="column.dataIndex.startsWith('wk_day_')">
        <div class="item-block-container">
          <template v-for="(item, index) of text" :key="index">
            <div :style="'--item-block-color:'.concat(item.color)+';'+
              'background-color:' +  item.color + '35;' +
               'border-left-color: '+item.color+ ';' +
                'color:' + item.color"
                 class="item-block">
              <div class="ibib">
                <span class="ib-name">{{ item.name }}</span>
                <span class="ib-other">{{ item.site }}</span>
                <span class="ib-other">{{ item.teacher }}</span>
              </div>
            </div>
          </template>
        </div>
      </template>
    </template>
  </a-table>
</template>

<script>
export default {
  name: "course_schecule_content",
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
          [{
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
              color: '#037EF3'
            },],
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
    columns() {
      let res = [
        {
          title: '',
          dataIndex: 'hd',
          key: 'hd',
          width: 150,
          align: 'center',
        },
      ]
      let wk_day_arr = [
        '周日', '周一', '周二', '周三', '周四', '周五', '周六'
      ]
      let i = 0
      wk_day_arr.forEach(
          v => {
            res.push(
                {
                  title: v,
                  dataIndex: 'wk_day_' + i,
                  key: 'wk_day_' + i,
                  width: 300,
                  align: 'center',
                }
            )
            i += 1;
          }
      )
      return res
    },
    slot() {
      let res = [
        {
          hd: '第一节',
          wk_day_0: [],
          wk_day_1: [],
          wk_day_2: [],
          wk_day_3: [],
          wk_day_4: [],
          wk_day_5: [],
          wk_day_6: [],
          name: '第一节',
          range: '08:00-09:40',
        },
        {
          hd: '第二节',
          wk_day_0: [],
          wk_day_1: [],
          wk_day_2: [],
          wk_day_3: [],
          wk_day_4: [],
          wk_day_5: [],
          wk_day_6: [],
          name: '第二节',
          range: '10:10-11:50',
        },
        {
          hd: '第三节',
          wk_day_0: [],
          wk_day_1: [],
          wk_day_2: [],
          wk_day_3: [],
          wk_day_4: [],
          wk_day_5: [],
          wk_day_6: [],
          name: '第三节',
          range: '14:00-15:40',
        },
        {
          hd: '第四节',
          wk_day_0: [],
          wk_day_1: [],
          wk_day_2: [],
          wk_day_3: [],
          wk_day_4: [],
          wk_day_5: [],
          wk_day_6: [],
          name: '第四节',
          range: '16:10-17:50',
        },
        {
          hd: '第五节',
          wk_day_0: [],
          wk_day_1: [],
          wk_day_2: [],
          wk_day_3: [],
          wk_day_4: [],
          wk_day_5: [],
          wk_day_6: [],
          name: '第五节',
          range: '19:30-21:10',
        },
      ]
      for (let i = 0; i < this.courses.length; i++) {
        for (let j = 0; j < this.courses[i].length; j++) {
          if (this.courses[i][j] instanceof Array)
            res[j]['wk_day_' + i].push.call(res[j]['wk_day_' + i], ...this.courses[i][j])
          else res[j]['wk_day_' + i].push(this.courses[i][j])
        }
      }
      return res;
    },
  },
  data() {},
}
</script>

<style scoped>
table {
  border-collapse: separate;
  empty-cells: show;
}

tbody td {
  width: calc(100% / 7);
  min-width: calc(100% / 7);
  height: 100%;
}

tbody tr {
  min-height: calc(100% / 5);
}

.cell {
  display: table-cell;
}

.course-content {
  height: calc(100% - 45px);
  width: 98%;
  margin: 0 auto;
  background-color: #FFFFFF;

  border-radius: 6px;
}

.wkd_wkselector {
  height: 10%;
  align-items: center;
}

.slots_content {
  height: 90%;
}

.inoneline {
  display: flex;
  text-align: center;
}

.wk_selector {
  flex-basis: 9%;
  padding: 3px;
}

.wk_selector {
  border: none;
  background-color: transparent;
  font-size: 15px;
  font-weight: 900;
  cursor: pointer;
}

.wk_selector > select {
  border: none;
}

.wkd {
  display: flex;
  justify-content: space-around;
  flex-basis: 91%;
  align-items: center;
}

.wkd > th {
  flex-basis: calc(100% / 7);
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  color: #666666;
}

.slots {
  flex-basis: 9%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
  justify-content: space-around;

  padding: 2px;
}

.slots th {
  font-weight: 400;
  width: 100%;
}

.th-name {
  font-size: 14px;
  color: #666666;
  display: block;
}

.th-range {
  font-size: 12px;
  line-height: 12px;
  font-family: "Alibaba PuHuiTi 2.0", serif;
  color: #999999;
  display: block;
}

.cc-content {
  flex-basis: 91%;
  width: 91%;
  height: 100%;

  background-color: #F3F4F7;
}

.cc-content table {
  width: 100%;
  height: 100%;
  display: flex;
  border-spacing: 0;
}

td.content-item {
  display: table-column;
  height: 100%;
  width: calc(91% / 7);
}

.content-item > tr {
  width: 100%;
  max-height: 19.5%;
  height: 19.5%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: .25% 3px;
  align-items: center;
  justify-content: center;
}

.item-block {
  border-left: solid 2px;
  border-radius: 1px 3px 3px 1px;
  font-weight: 500;

  border-left-color: transparent;

  transition: .3s all cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  padding: .5em .5em 2em;
}

.item-block {
  min-width: calc(100% - 6px);
  flex-grow: .9;

  margin-top: .15em;
}

.item-block:nth-child(1) {
  margin-top: 0;
}

.item-block:hover {
  transform: scale(1.03);
}

.ibib > span {
  display: block;
  text-align: left;
  font-family: "Alibaba PuHuiTi 2.0", serif;
}

.ib-name {
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  max-width: 89px;
}

.ib-other {
  font-size: 11px;
  line-height: 11px;
  font-weight: 400;
}

* >>> .ant-table-cell {
  padding: .05em;
  vertical-align: top;
}

* >>> .ant-table-cell:nth-child(1) {
  text-align: center;
  vertical-align: inherit;
}
</style>