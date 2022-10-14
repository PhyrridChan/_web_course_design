<template>
  <aside class="avatar-aside" id="avatar-aside">
    <div class="avatar_container">
      <div class="avatar">
        <img src="" alt="avatar"></div>
    </div>
    <div class="info_container">
      <div class="info_content">
        <div class="info_name"><span class="bb">{{ info.name }}</span></div>
        <div class="info_details">
          <ul>
            <li class="none_list info_d-item" v-for="(item, index) of info.other" :key="index">
              <span class="info_di-name">{{ item.name }}</span>
              <span class="info_di-val">{{ item.value }}</span>
            </li>
          </ul>
        </div>
        <div class="edit_info btn">
          编辑个人信息
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "avatar_aside",
  data() {
    return {
      info: {
        name: '张帆',
        other: [
          {
            name: '学生编号',
            value: '202008170217',
          },
          {
            name: '专业班级',
            value: '数据科学与大数据技术2002班',
          },
          {
            name: '所属院系',
            value: '计算机与通信工程学院',
          },
        ]
      }
    }
  }
}
</script>

<style scoped>
.avatar-aside {
  --content-width: 185px;
  --avatar-width: 160px;

  width: 250px;
  height: 100%;
  left: 0;
  position: absolute;

  display: flex;
  align-items: center;
  flex-direction: column;

  transition: .3s ease-in-out all;
}

.avatar_container {
  position: relative;
  z-index: 5;
  margin-top: 33px;
}

.avatar {
  width: var(--avatar-width);
  aspect-ratio: 1;
  background-color: transparent;
  border-radius: calc(var(--avatar-width) / 2);
  border: 2px solid white;

  display: flex;
  overflow: hidden;
}

.avatar img {
  width: var(--avatar-width);
  aspect-ratio: 1;

  background-color: #000000;
}

.info_container {
  font-family: "Alibaba PuHuiTi 2.0", serif;
  background: #FFFFFF;
  width: 100%;
  height: calc(100% - 76px);
  position: absolute;
  z-index: 1;
  top: 76px;
  border-radius: 0 12px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info_content {
  max-width: var(--content-width);
  width: var(--content-width);

  margin-top: 135px;
}


.info_name {
  font-family: "Alimama ShuHeiTi", serif;
  width: 100%;
  margin: 16px 0;
  color: black;
}

.info_d-item {
  margin: 4px 0;
  max-width: var(--content-width);
  width: var(--content-width);
}

.info_d-item > span {
  display: block;
  margin: 2px 0;
}

.info_di-name {
  font-size: 14px;
  line-height: 14px;
  color: #999999;
}

.info_di-val {
  font-size: 16px;
  line-height: 16px;
  color: #000;
}

.edit_info {
  color: black;
  background-color: #F3F4F7;
  font-size: 15px;
  height: 32px;
  width: var(--content-width);

  text-align: center;
  line-height: 32px;

  margin-top: 36px;
  border-radius: 5px;

  cursor: pointer;
}

.out {
  width: 0;
  opacity: 0;
  z-index: -1;
}

/*------*/
.none_list {
  list-style: none;
}

.bb {
  font-size: 24px;
  line-height: 29px;
}
</style>