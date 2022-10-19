<template>
  <div class="block-content-container">
    <div class="block-content">
      <CommonTitle :title="title"></CommonTitle>
      <div class="block-main-content">
        <slot name="default"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import CommonTitle from "@/components/common_title";

export default {
  name: "whole_page_block",
  components: {CommonTitle},
  props: ['title'],
}
</script>

<style scoped>
.block-content-container {
  margin: 6px 15px;
  background-color: #F3F4F7;
  border-radius: 6px;
}

.block-content {
  padding: 12px 18px;
  height: 100%;
}

.block-content >>> .title_block {
  font-size: 18px;
}

.block-main-content {
  font-family: "Alibaba PuHuiTi 2.0", serif;
  height: calc(100% - 24px);
}
</style>