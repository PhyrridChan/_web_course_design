<template>
  <header ref="common_header" id="common_header" class="common_header">
    <Common_nav></Common_nav>
  </header>
  <div class="header_bg" ref="common_header_bg"></div>
  <div class="change_color_transition" ref="common_header_transition"></div>
  <div :style="'--theme-color:' + theme">
    <Avatar_aside ref="avatar_aside"></Avatar_aside>
    <Common_aside :nav_bar="nav_bar" ref="common_aside"></Common_aside>
  </div>
</template>

<script>
import Avatar_aside from "@/components/side/avatar_aside";
import Common_nav from "@/components/side/common_nav";
import Common_aside from "@/components/common_aside";

export default {
  name: "common-side",
  components: {Common_aside, Common_nav, Avatar_aside},
  props: ['theme', 'nav_bar'],
  data() {
    return {
      nav_width: 125
    }
  },
  watch: {
    $route: {
      handler: function (route, from) {
        let path_parser = (path) => {
          if (path === undefined) return '/'
          let index = path.indexOf('/', 1)
          return path.substring(0, index > 0 ? index : path.length)
        }

        let path = path_parser(route.fullPath)
        let old_path = path_parser(from?.fullPath)

        if (old_path !== path || old_path === '/') {
          this.$refs.common_header_bg?.classList.add('fadeout')
          this.$refs.common_header_transition?.style.setProperty('--theme-color', this.theme)
          let that = this
          this.timerAni = setTimeout(function () {
            that.$refs.common_header_bg?.style.setProperty('--theme-color', that.theme)
            that.$refs.common_header_bg?.classList.remove('fadeout')
          }, 250)
          this.timerAni
        }

        let dom = document.getElementById(route.fullPath)
        if (dom !== undefined && dom !== null) dom.checked = true;
      },
      immediate: true,
    },
  },
  updated() {
    this.nav_width = this.$refs.common_aside?.$el.clientWidth
    this.$emit('navWidth', this.nav_width)

    let dom = document.getElementById(this.$route.fullPath)
    if (dom !== undefined && dom !== null) dom.checked = true;

  },
  unmounted() {
    clearTimeout(this.timerAni)
  }
}
</script>

<style scoped>
.common_header {
  width: 100%;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
}

.change_color_transition {
  width: 100%;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  background-image: linear-gradient(180deg, var(--theme-color) 0%, rgba(0, 0, 0, 0) 100%);
  transition: all .5s cubic-bezier(0.4, 0, 0.2, 1);
}

.header_bg {
  width: 100%;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-image: linear-gradient(180deg, var(--theme-color) 0%, rgba(0, 0, 0, 0) 100%);
  transition: all .5s cubic-bezier(0.4, 0, 0.2, 1);
}

.fadeout {
  opacity: 0;
}

.common_header > nav {
  width: 70%;
  margin-left: 15%;
  margin-top: 35px;

  transition: all .6s ease-in-out;
}

.common_header.expand > nav {
  width: 78.5%;
  margin-left: 6.5%;
}
</style>