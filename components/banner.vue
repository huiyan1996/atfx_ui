<template>
  <div class="container-fluid px-0">
      <div class="w-100 bannerImg" :class="size">
          <img v-if="imgSrc" :src="imgSrc" alt="" width="100%">
          <div class="bannerContent">
              <div class="container">
                <h1 class="title" v-if="title">{{title}}</h1>
                <h4 class="mt-3" v-if="subtitle">{{subtitle}}</h4>
                <p class="mt-5" v-if="content">{{content}}</p>
                <slot name="customButton"></slot>
              </div>
              <slot name="customContent"></slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  props: ['imgSrc', 'title', 'subtitle', 'content', 'size'],
  data() {
    return {
      visible: false,
    }
  },
}
</script>

<style lang="scss" scoped>
    .bannerImg {
        height: 450px;
        overflow: hidden;
        position: relative;

        &.big {
          height: 550px;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .bannerContent {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            color: #fff;
            background-color: rgba(0,0,0,.5);

            .title {
              font-weight: bold;
            }
        }
    }
</style>