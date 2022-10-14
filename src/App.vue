<template>
  <router-view v-slot="{ Component }">
    <transition name="slide-fade">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      show: true
    }
  }
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
</style>
