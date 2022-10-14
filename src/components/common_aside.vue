<template>
  <aside class="common_aside" id="common-aside">
    <div class="nav_container">
      <div class="nav_content">
        <div class="nav_item" v-for="(item, index) in nav_bar" :key="index">
          <label class="nav_name">
            <input type="radio" name="nav_bar" :id="item.link">
            <router-link class="nav_item_text" :to="item?.link">{{ item?.name }}</router-link>
          </label>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "common_aside",
  props: ['nav_bar'],
  updated() {

  }
}
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;

  transition: .3s all ease;
}

a:hover {
  color: var(--theme-color);
  opacity: 0.7;
}

.common_aside {
  min-width: 125px;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;

  transition: .3s ease-in-out all;
  transition-delay: .2s;

  font-family: "Alibaba PuHuiTi 2.0", serif;
  font-weight: 600;
}

.nav_container {
  margin-top: 76px;
  height: calc(100% - 76px);
  width: 100%;
  background-color: white;
  border-radius: 0 12px 0 0;
}

.nav_content {
  padding-top: 10px;
}

.nav_item {
  padding-left: 6px;
  margin: 18px 12px;
  position: relative;
}

.nav_item input[type='radio'] {
  display: none;
}

.nav_item input[type='radio']:checked + .nav_item_text::after {
  visibility: visible;
  opacity: 1;
}

.nav_item input[type='radio']:checked + .nav_item_text {
  color: var(--theme-color);
  font-weight: 700;
}

.nav_item_text::after {
  content: '';
  position: absolute;
  visibility: hidden;
  opacity: 1;
  left: 0;
  width: 3px;
  top: 5%;
  height: 90%;
  background-color: var(--theme-color);
}

.out {
  width: 0;
  opacity: 0;
  z-index: -1;
}
</style>