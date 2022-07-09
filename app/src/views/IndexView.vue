<template>
  <div class="message-wrapper">
    <h1 class="title">留言墙</h1>
    <h2 class="subtitle">很多事情值得记录，当然也值得回味。</h2>
    <message-types></message-types>

    <section style="margin-top: 30px" class="flex flex-wrap">
      <message-item></message-item>
    </section>

    <button class="add-btn"></button>
  </div>
</template>
<script lang="ts" setup>
import MessageTypes from '@/components/message/MessageTypes.vue';
import MessageItem from '@/components/message/MessageItem.vue';
</script>
<style lang="scss">
.message-wrapper {
  padding: 40px 60px 150px;
  position: relative;
  .title {
    font-size: 56px;
    color: #202020;
    line-height: 78px;
    font-weight: 600;
    text-align: center;
  }
  .subtitle {
    margin-top: 8px;
    font-size: 14px;
    line-height: 20px;
    color: #5b5b5b;
    text-align: center;
    margin-bottom: 40px;
  }
}
.add-btn {
  position: absolute;
  right: 30px;
  bottom: 30px;
  width: 56px;
  height: 56px;
  background: #202020;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;

  &::before {
    content: '';
    width: 1px;
    height: 20px;
    background-color: #ffffff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &::after {
    content: '';
    width: 20px;
    height: 1px;
    background-color: #ffffff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(180deg);
  }
}
</style>
