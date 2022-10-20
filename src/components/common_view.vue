<template>
  <div :style="'--theme-color:' + theme + ';height: 100%'">
    <CurrentPosition
        :positions="positions_"
    ></CurrentPosition>
    <router-view style="width: calc(100% - 30px);height: calc(100% - 50px)"></router-view>
  </div>
</template>

<script>
import CurrentPosition from "@/components/current-position";

export default {
  name: "common_view",
  components: {CurrentPosition},
  data() {
    return {
      positions_: []
    }
  },
  props: ['positions', 'page_root', 'nav_bar', 'theme'],
  mounted() {
    this.$emit('navBar', this.nav_bar)
  },
  beforeUpdate() {
    this.$emit('navBar', this.nav_bar)
  },
  watch: {
    $route: {
      handler(route) {
        this.positions_ = []
        this.positions_.push(this.page_root)
        this.nav_bar.forEach(v => {
          if (v.link === route.fullPath) {
            this.positions_.push(v)
          }
        })
      },
      immediate: true,
    }
  }
}
</script>

<style scoped>

</style>