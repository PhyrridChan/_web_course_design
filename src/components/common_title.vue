<template>
  <div class="title_block" :style="'width:' + width">
    <span class="title-content">{{ title }}</span>
    <span :class="['title-more', btn]" v-if="moreBtn" @click="$nf.not_finish()">
      <span class="more-icon" v-html="moreBtn?.icon"></span>
      {{ moreBtn?.content }}
    </span>
  </div>
</template>

<script>
export default {
  name: "common-title",
  props: ['title', 'moreBtn', 'blockwWidth'],
  computed: {
    btn() {
      return this.moreBtn?.btn ? 'btn' : ''
    },
    width() {
      if (this.blockwWidth !== undefined) {
        return this.blockwWidth + '%'
      }
      return 'auto'
    }
  }
}
</script>

<style scoped>
.title_block{
  display: flex;
  justify-content: space-between;
}

.btn {
  padding: 3px 7px;
  border-radius: 4px;
  background-color: #F3F4F7;
  cursor: pointer;

  transition: opacity .3s ease-in-out;
}

.btn:hover {
  opacity: 0.7;
}

/*---------*/

.title-content {
  font-size: 1em;
  position: relative;
  padding-left: 10px;
  line-height: 1.3em;
}

.title-content::before {
  content: '';
  position: absolute;
  width: 5px;
  height: 1.3em;
  left: 0;
  top: 0;

  background: var(--theme-color);
}

.title-more {
  font-family: "Alibaba PuHuiTi 2.0", serif;
  font-size: 11px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;

  margin-left: 13px;
}

.more-icon {
  width: 14px;
  height: 14px;
  margin-right: 3px;

  background-color: #FFFFFF;
}

.title-more.btn {
  background-color: #FFFFFF;
}

</style>