<template>
  <div class="message-item">
    <div class="message-item--info">
      <div class="date">2022.08.23</div>
      <div class="tag">留言</div>
    </div>
    <div class="message-item--content">
      这是一段暖心的话，它或许不长，但是它是我现在最想说的。放在这里就留一个纪念吧，不用回头看，应为现在才是当下最好的。这是一段暖心的话，它或许不长，但是它是我现在最想说的。放在这里就留一个纪念吧。
    </div>
    <div class="message-item--assets">
      <div class="flex items-center">
        <div class="flex items-center assets-item">
          <img src="@/assets/imgs/love.svg" alt="点赞" />
          <span>12</span>
        </div>
        <div class="flex items-center assets-item">
          <img src="@/assets/imgs/comment.svg" alt="评论" />
          <span>4</span>
        </div>
      </div>
      <div class="author">伊卡洛斯</div>
    </div>
  </div>
</template>
<style lang="scss">
.message-item {
  padding: 10px 20px;
  width: 288px;
  height: 240px;
  background-color: rgba(#ffe394, 31%);
  transition: box-shadow 0.3s, transform 0.3s;
  cursor: pointer;

  &--info {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    line-height: 18px;
    color: #949494;
  }

  &--content {
    margin-top: 20px;
    margin-bottom: 30px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;

    font-size: 14px;
    line-height: 22px;
    font-family: HanziPenSC-W3;
    color: #202020;
  }

  &--assets {
    display: flex;
    justify-content: space-between;
    .assets-item {
      margin-right: 10px;
      font-size: 12px;
      color: #7e7e7e;

      img {
        height: 16px;
        width: 16px;
        margin-right: 5px;
      }

      &:last-child {
        margin-right: 0;
      }
    }

    .author {
      font-size: 14px;
      color: #202020;
      font-family: HanziPenSC-W5;
    }
  }

  &:hover {
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
    transform: translateY(-10px);
  }
}
</style>
