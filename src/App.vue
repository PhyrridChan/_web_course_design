<template>
  <div class="about-me" ref="about_me" @dblclick.prevent="dbclickHandler" @click.prevent="clickHandler">
    <a-tooltip placement="bottomRight" :color="'#000'">
      <template #title>
        双击隐藏个人简介页入口
      </template>
      <div>
        <div class="am_content">
          <svg t="1667576042222" class="icon" viewBox="0 0 1041 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="3497" width="20" height="20">
            <path
                d="M984.549414 910.79397H891.926298v-840.469012C891.926298 30.874372 861.051926 0 821.60134 0H219.551089c-37.735343 0-70.324958 30.874372-70.324958 70.324958v840.469012H58.318258C25.728643 910.79397 0 933.092127 0 960.536013v13.721943c0 27.443886 25.728643 49.742044 58.318258 49.742044h924.515913c32.589615 0 58.318258-22.298157 58.318258-49.742044V960.536013c0-27.443886-25.728643-49.742044-56.603015-49.742043zM307.028476 154.371859h428.81072v554.023451l-428.81072 192.107203V154.371859z"
                fill="#ffffff" p-id="3498"></path>
            <path
                d="M408.227806 521.433836c-13.721943 0-24.0134-10.291457-24.013401-24.0134v-48.026801c0-13.721943 10.291457-24.0134 24.013401-24.0134H497.420436c13.721943 0 24.0134 10.291457 24.0134 24.0134 0 13.721943-10.291457 24.0134-24.0134 24.0134h-65.17923V497.420436c0 13.721943-10.291457 24.0134-24.0134 24.0134z"
                fill="#ffffff" p-id="3499"></path>
          </svg>
          <span>网页制作者个人简介页</span>
        </div>
      </div>
    </a-tooltip>
  </div>
  <router-view v-slot="{ Component }" @resetEntrance="resetEntrance">
    <transition name="slide-fade">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<script>
import {message} from "ant-design-vue";
import {h} from "vue";

export default {
  name: 'App',
  data() {
    return {
      show: true,
      timer: null,
    }
  },
  methods: {
    profileTip() {
      setTimeout(() => {
        this.$refs.about_me?.classList.add('show')
      }, 1000)
      setTimeout(() => {
        this.$refs.about_me?.classList.remove('show')
      }, 5000)
    },
    resetEntrance() {
      this.$refs.about_me?.style.setProperty("display", 'block')
      this.$refs.about_me?.style.setProperty("opacity", '1')
      this.profileTip()
    },
    hideProfile() {
      this.$refs.about_me?.style.setProperty("opacity", 0)
      setTimeout(() => {
        this.$refs.about_me?.style.setProperty("display", 'none')
      }, 1000)
    },
    dbclickHandler() {
      clearTimeout(this.timer);
      this.hideProfile();
      let msg = h('span', {style: "font-size: 15px"}, [
        h('span', {}, "按"),
        h('strong', {style: "margin: 0 3px;"}, "ctrl(cmd)+回车"),
        h('span', {}, "重新显示此入口"),
      ])
      message.info(msg)
    },
    toMyProfile() {
      this.$router.push('/about_me')
      this.hideProfile()
    },
    clickHandler() {
      clearTimeout(this.timer);
      let that = this
      that.timer = setTimeout(function () {
        clearTimeout(that.timer);
        that.toMyProfile()
      }, 200)
    },
  },
  mounted() {

    this.profileTip()

    let that = this
    document.onkeydown = function (event) {
      var e = event || window.event || arguments.callee.caller.arguments[0];
      if (e.keyCode == 13 && (e.ctrlKey || e.metaKey)) {
        that.resetEntrance()
      }
    };
  },
  updated() {
    this.profileTip()
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Alimama ShuHeiTi", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #F3F4F7;
}

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.about-me {
  position: absolute;
  right: 20px;
  top: 25px;
  z-index: 99999;

  overflow: hidden;
  border-radius: 6px;
}

.about-me, .about-me * {
  transition: all 1s cubic-bezier(0.65, 0.05, 0.36, 1);
}

.am_content {
  padding: 6px 10px;
  background-color: #000000;
  color: #F3F4F7;
  border-radius: 6px;
  display: flex;
  transform: translateX(calc(100% - 40px));
}

.am_content > svg {
  margin-right: 3px;
}

.about-me .am_content span {
  transform: translateX(13px);
}

.about-me.show .am_content, .about-me.show .am_content span {
  transform: unset;
}
</style>
