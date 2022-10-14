<template>
  <div :class="['inner-block', 'block-'.concat(blockName)]">
    <div class="block-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "inner-block",
  props: ['blockName']
}
</script>

<style scoped>
.inner-block {
  background-color: #F3F4F7;
  border-radius: 6px;
  margin: 5px;
  margin-left: 15px;
  width: calc(100% - 20px);
  height: calc(100% - 10px);
}

.block-reminder {
  margin-left: 5px;
}

.block-content {
  height: 100%;
  width: 100%;
}
</style>