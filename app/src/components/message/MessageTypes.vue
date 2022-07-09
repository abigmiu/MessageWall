<template>
  <ul class="message-types">
    <li class="type active">全部</li>
  </ul>
</template>
<style lang="scss">
.message-types {
  display: flex;
  justify-content: center;
  align-items: center;
  .type {
    padding: 4px 14px;
    margin-right: 22px;
    font-size: 14px;
    color: #202020;
    line-height: 20px;
    border: 1px solid transparent;
    border-radius: 14px;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
    &.active {
      border: 1px solid rgba(32, 32, 32, 1);
      font-weight: 600;
      color: #202020;
    }
  }
}
</style>
