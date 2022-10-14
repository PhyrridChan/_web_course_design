<template>
  <InnerBlock :block-name="'reminder'">
    <template v-slot:content>
      <div class="block-title">
        <CommonTitle :title="'待办事项'"></CommonTitle>
      </div>
      <div class="rem-content">

      </div>
    </template>
  </InnerBlock>
</template>

<script>
import InnerBlock from "@/components/inner-block";
import CommonTitle from "@/components/common_title";
export default {
  name: "reminder-block",
  components: {CommonTitle, InnerBlock}
}
</script>

<style scoped>

</style>