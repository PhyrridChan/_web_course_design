<template>
  <div class="profile">
    <div class="back_btn">
      <div @click="back">Back</div>
      <div>
        my_profile
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my_profile",
  data() {
    return {
      fromPath: ''
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log(from, 'from')
      vm.fromPath = from.path  //获取上一级路由的路径
      if (
          from.path === '/h5/indexOrderDetail' ||
          from.path === '/h5/storeOrderDetail'
      ) {
        vm.headerRightText = ''
        vm.showDefault = false

        console.log(this.fromPath)
      }
    })
  },
  methods: {
    back: function () {
      if (this.fromPath === '/') this.$router.push('/')
      else this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.profile {
  width: 100%;
  min-height: 100%;
}

.back_btn {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 9999;
}
</style>