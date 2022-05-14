<template>
  <div>
      <h3 v-if="title">{{title}}</h3>
      <div class="mt-4">
        <div class="urlListItem" v-for="(v,k) in linklist" :key="k">
        <nuxt-link :class="linkColor" :to="v.link">
            <b-icon class="arrowIcon" icon="arrow-right"></b-icon>
            {{v.label}}
        </nuxt-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UrlLinkBlock',
  props: ['title', 'linkColor', 'linklist'],
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
        }
    }
</style>