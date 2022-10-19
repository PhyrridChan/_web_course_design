<template>
  <div class="course-content">
    <div class="wkd_wkselector inoneline">
      <div class="wk_selector">
        <template v-if="wk !== 'all'">
          <select name="wk" id="wk">
            <option :selected="wk === index" v-for="(item,index) of Array(5)" :key="index">
              第<em class="option-em">{{ index + 1 }}</em>周
            </option>
          </select>
        </template>
        <template v-else>
          <span>学期理论课表</span>
        </template>
      </div>
      <div class="wkd">
        <th v-for="item of wkd" :key="item">{{ item }}</th>
      </div>
    </div>
    <div class="slots_content inoneline">
      <div class="slots">
        <th v-for="item of slot" :key="item">
          <span class="th-name">{{ item.name }}</span>
          <span class="th-range">{{ item.range }}</span>
        </th>
      </div>
      <div class="cc-content">
        <table>
          <td class="content-item" v-for="(col, col_index) of courses" :key="col_index">
            <tr v-for="(item, index) of col" :key="index">
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
              <div v-if="item.course_id && wk !== 'all'" class="tooltiptext_container">
                <span class="tooltiptext">
                  <span><span class="tp-name">课程名：</span>{{ item.name }}</span>
                  <span><span class="tp-name">课室：</span>{{ item.site }}</span>
                  <span><span class="tp-name">授课老师：</span>{{ item.teacher }}</span>
                  <span><span class="tp-name">课程编号：</span>{{ item.course_id }}</span>
                  <span><span class="tp-name">课程类型：</span>{{ item.course_type }}</span>
                </span>
              </div>
            </tr>
          </td>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "course_schedule",
  props: ['wk', 'courses'],
  data() {
    return {
      wkd: [
        '周日', '周一', '周二', '周三', '周四', '周五', '周六'
      ],
      slot: [
        {
          name: '第一节',
          range: '08:00-09:40',
        },
        {
          name: '第二节',
          range: '10:10-11:50',
        },
        {
          name: '第三节',
          range: '14:00-15:40',
        },
        {
          name: '第四节',
          range: '16:10-17:50',
        },
        {
          name: '第五节',
          range: '19:30-21:10',
        },
      ],
    }
  },
}
</script>

<style scoped>
*, *::before, *::after {
  box-sizing: initial;
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
  width: calc(100% / 7);
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
}

.item-block {
  min-width: calc(100% - 6px);
  flex-grow: .9;
}

.item-block:hover {
  transform: scale(1.03);
}

.ibib {
  padding: 0.1rem 0.3rem;
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

/**/
.item-block:hover + .tooltiptext_container {
  visibility: visible;
  opacity: 1;
}

.tooltiptext {
  font-family: "Alibaba PuHuiTi 2.0", serif;
}

.tooltiptext_container {
  visibility: hidden;
  opacity: 0;
  background-color: #000000a0;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  position: absolute;
  z-index: 9999;
  transform: translate(50%, -30%);
  padding: 8px;
  font-weight: 500;
  min-width: 180px;
  max-width: 200px;
  line-break: anywhere;

  transition: all .3s cubic-bezier(0.4, 0, 0.2, 1);
}

.tooltiptext {
  display: table;
}

.tooltiptext .tp-name {
  color: #F5F5F5;
  font-weight: 400;
  display: table-cell;

  white-space: nowrap;
  line-break: strict;
}

.tooltiptext > span {
  display: table-row;
  max-width: initial;
  text-align: left;
  font-size: 15px;
}

table > td:nth-child(7) .tooltiptext_container {
  transform: translate(-80%, -30%);
}
</style>