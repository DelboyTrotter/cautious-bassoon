<template>
  <div id="app">
    <header class="header">
      <router-link class="link" to="/">
        Items List
      </router-link>
    </header>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  methods: {
    ...mapActions([
      'loadItemsList',
    ]),
  },
  created() {
    // Call action loadItemsList and set listItems
    this.loadItemsList();
  },
};
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: $app-bg;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $main-app-text-color;
  font-family: Roboto, sans-serif;
}

.header {
  display: flex;
  width: 100%;
  background-color: $card-bg;
  color: $link-text-color;
  padding: 0 30px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 995;
  box-shadow: 4px 0 5px rgba(0,0,0,0.08);

  .link {
    color: $link-text-color;
    line-height: 64px;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      color: $text-color-hover;
      transition: all .5s ease;
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity .5s, transform .5s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-20%);
}
</style>
