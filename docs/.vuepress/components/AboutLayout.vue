<template>
  <div class="container">
    <p>本教程由前端学习小组整理</p>
    <div class="desc-box">
      <div class="desc-name">
        <img src="https://avatars3.githubusercontent.com/u/13514644">
        <p>成员</p>
      </div>
      <div class="desc-text">
        <p><span>大名：</span>hellohy</p>
        <p><span>小名：</span>小黄</p>
        <p><span>特点：</span>准时下班</p>
        <p><a href="https://github.com/hellohy">Github</a><a href="http://hellohy.github.io/">Blog</a></p>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.container {
  padding: 40px 20px;
  max-width: 960px;
  margin: 0 auto;

  .protocol {
    margin-bottom: 40px;
  }

  .desc-box {
    display: flex;
    align-items: center;
    padding: 20px;
    box-shadow: 0 2px 6px 0 #e3e7f6;
    border-radius: 4px;

    &:not(:last-child) {
      margin-bottom: 40px;
    }

    .desc-text {
      p {
        margin: 5px;

        a {
          padding-right: 10px;
          margin-right: 10px;

          &:not(:last-child) {
            border-right: 1px solid #e5e5e5;
          }
        }
      }
    }

    .desc-name {
      width: 100px;
      margin-right: 20px;
      padding: 20px;
      text-align: center;
      border-right: 1px solid #e4e4e4;

      img {
        width: 40px;
        height: 40px;
        border-radius: 20px;
      }

      p {
        margin: 0;
      }
    }
  }
}
</style>
