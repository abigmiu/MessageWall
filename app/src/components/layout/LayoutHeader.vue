<template>
  <header class="layout-header">
    <div class="logo">
      <img src="@/assets/imgs/logo.svg" alt="logo" />
      <span class="site-name">一刻时光</span>
    </div>
    <nav class="nav">
      <ul class="nav-list">
        <li
          class="nav-item"
          :class="{
            'nav-item__active': activeIndex === 1,
          }"
          @click="changeActiveIndex(1)"
        >
          留言墙
        </li>
        <li
          class="nav-item"
          :class="{
            'nav-item__active': activeIndex === 2,
          }"
          @click="changeActiveIndex(2)"
        >
          照片墙
        </li>
      </ul>
    </nav>
    <div class="holder"></div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activeIndex = ref(1);
const changeActiveIndex = (val: number) => {
  activeIndex.value = val;
};
</script>

<style lang="scss">
.layout-header {
  position: sticky;
  top: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  padding: 8px 30px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);

  .logo {
    height: 32px;
    cursor: pointer;
    img {
      height: 32px;
      width: 32px;
      display: inline-block;
      vertical-align: middle;
      margin-right: 10px;
    }
  }

  .site-name {
    font-size: 20px;
    vertical-align: middle;
    display: inline-block;
  }

  .nav {
    &-list {
      display: flex;
    }
    &-item {
      padding: 8px 20px;
      font-size: 14px;
      line-height: 20px;
      color: #202020;
      font-weight: 400;
      height: 36px;
      border-radius: 20px;
      margin-right: 24px;
      cursor: pointer;
      transition: background 0.2s, color 0.2s;

      &:last-child {
        margin-right: 0;
      }
      &__active {
        color: white;
        background: #3b73f0;
      }
    }
  }
  .nav- .holder {
    width: 0;
  }
}
</style>
