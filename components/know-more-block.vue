<template>
  <div class="container-fluid px-0 mb-5">
    <div class="container">
        <div class="row justify-content-center align-items-center">
            <div class="col-md-6">
                <div class="knowMoreContainer">
                    <div class="aboutTxt">
                        <h2 class="text-orange"><b>了解更多</b></h2>
                        <h3>关于ATFX</h3>
                    </div>
                </div>
            </div>
            <div class="col-md-6 pl-md-5">
                <UrlLinkBlock :title="title" :linklist="linklist" :linkColor="linkColor" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  props: ['title','linklist', 'linkColor'],
  data() {
    return {
      visible: false,
    }
  },
}
</script>

<style lang="scss" scoped>
    .knowMoreContainer {
        background-image: url(~/assets/img/learnMoreBg.webp);
        background-size: cover;
        background-position: center;
        height: 385px;
        border-radius: 10px;
        position: relative;

        .aboutTxt {
            background: var(--white);
            position: absolute;
            top: 45%;
            display: inline-block;
            padding: 15px 35px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
        }
    }
</style>