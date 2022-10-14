<template>
  <div>
    <div style="position:absolute; right: 10px; top: 10px; z-index: 999">
      <router-link to="/about_me">ME</router-link>
    </div>
    <CommonSide :theme="theme" :nav_bar="nav_bar" @navWidth="nav_width_update"></CommonSide>
    <main ref="main_content" class="main_content" :style="'width:' + 'calc(82% + 250px - ' + nav_width + 'px);'">
      <router-view v-slot="{ Component }">
        <transition name="swap">
          <component :is="Component" @navBar="nav_bar_update"/>
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
import CommonSide from "@/components/common_side";
import E_p from "@/views/ep";

export default {
  name: 'main_page',
  components: {E_p, CommonSide},
  data() {
    return {
      nav_bar: [],
      theme: '#037EF3',
      pc: [
        {path: '/', color: '#037EF3',},
        {path: '/mp', color: '#037EF3',},
        {path: '/pt', color: '#00C16E',},
        {path: '/ep', color: '#0CB9C1',},
        {path: '/em', color: '#F48924',},
        {path: '/pra', color: '#FFC845',},
        {path: '/ee', color: '#F85A40',}],
      nav_width: 250,
      nav: true
    }
  },
  mounted() {
    this.route_handler(this.$route, this.$route)
  },
  methods: {
    nav_bar_update: function (data) {
      this.nav_bar = data
    },
    nav_width_update: function (data) {
      console.log(data)
      if (data === undefined) return
      this.nav_width = this.nav ? 250 : data
    },
    route_handler(route, from) {
      let path_parser = (path) => {
        if (path === undefined) return '/'
        let index = path.indexOf('/', 1)
        return path.substring(0, index > 0 ? index : path.length)
      }

      let path = path_parser(route.fullPath)
      let old_path = path_parser(from?.fullPath)

      if (!['/', '/mp', '/pt'].includes(path)) {
        this.nav = false
        document.getElementById('avatar-aside')?.classList.add('out')
        document.getElementById('common-aside')?.classList.remove('out')
        document.getElementById('common_header')?.classList.add('expand')
        this.$refs.main_content?.classList.add('expand')
      } else {
        this.nav = true
        document.getElementById('avatar-aside')?.classList.remove('out')
        document.getElementById('common-aside')?.classList.add('out')
        document.getElementById('common_header')?.classList.remove('expand')
        this.$refs.main_content?.classList.remove('expand')
      }

      if (old_path !== path) {
        let color = this.theme
        this.pc.forEach(v => {
          if (v.path === path) color = v.color
        })
        this.theme = color
      }
    }
  },
  computed: {},
  watch: {
    $route: {
      handler: function (route, from) {
        this.route_handler(route, from)
      },
      immediate: true,
    },
  },
  updated() {
    this.route_handler(this.$route, this.$route)
  }
}
</script>

<style>
.main_content {
  background-color: #fff;
  position: absolute;
  width: 82%;
  height: calc(100% - 76px);
  top: 76px;
  right: 0;
  border-radius: 12px 0 0 0;

  transition: .3s ease-in-out all;
  overflow: hidden;
}

.main_content.expand {
  width: calc(82% + 125px);
}

.swap-enter-active,
.swap-leave-active {
  transition: all 0.33s cubic-bezier(0.4, 0, 0.2, 1);
}

.swap-enter-active {
  transition-delay: 0.33s;
}

.swap-enter-from,
.swap-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.swap-leave-to {
  transform: translateX(100%);
}
</style>
