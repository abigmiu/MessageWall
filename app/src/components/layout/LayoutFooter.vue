<template>
  <footer class="layout-footer">
    <div class="footer-item">
      <div class="logo">
        <img src="@/assets/imgs/logo.svg" alt="logo" />
        <span class="site-name">一刻时光</span>
      </div>
      <div style="margin-bottom: 30px">
        <p>一刻时光是本人独自开发的，为便于与用户交流的留言平台。</p>
        <p>
          用户将留言便签贴在留言墙上，用户可以自定义便签颜色和内容属性，
          不仅可以用于交流，也是一场记录。
        </p>
      </div>
    </div>
    <div class="footer-item">
      <p class="title">链接</p>
      <p><a href="http://baidu.com">链接1</a>&nbsp;<a href="http://baidu.com">链接2</a></p>
    </div>
    <div class="footer-item">
      <p class="title">打赏</p>
      <div>
        <img src="@/assets/imgs/ikaros.jpeg" alt="" class="qrcode" />
      </div>
    </div>
  </footer>
</template>
<style lang="scss">
.layout-footer {
  padding: 20px 200px;
  background: #202020;
  display: flex;
  justify-content: space-between;

  .footer-item {
    margin-right: 80px;
    font-size: 12px;
    color: #ffffff;
    font-weight: 400;
    p {
      opacity: 0.5;
      margin-bottom: 5px;
    }

    .title {
      font-size: 16px;
      margin-bottom: 8px;
    }
    &:last-child {
      margin-right: 0;
    }
  }

  .qrcode {
    width: 100px;
    height: 100px;
  }

  .logo {
    height: 32px;
    margin-bottom: 30px;
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
    color: #ffffff;
    font-size: 20px;
    vertical-align: middle;
    display: inline-block;
  }
}
</style>
