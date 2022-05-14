<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 px-0">
        <b-collapse id="latestNews" v-model="visible">
          <div class="latestNewsWrapper">
            <div class="container newsContent">
              <h1>全新网站上线</h1>
              <p>反应更迅速；网站可读性更佳；焕然一新但清晰简洁。</p>
            </div>
          </div>
        </b-collapse>
        <button type="button" class="latestToggle" v-b-toggle.latestNews> <b-icon class="mr-3" :icon="visible?'chevron-up':'chevron-down'"></b-icon> 最新资讯 <b-icon class="ml-3" :icon="visible?'chevron-up':'chevron-down'"></b-icon> </button>
        <Banner :imgSrc="require('~/assets/img/banner2.jpg')">
          <template v-slot:customContent>
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-5">
                        <img src="~/assets/img/magazine.webp" width="100%" alt="">
                    </div>
                    <div class="col-md-5">
                        <div class="ml-md-5 pl-5">
                            <div class="contentLogo mb-3">
                                <NuxtLogo />
                            </div>
                            <h1>{{$store.state.projectName}} 交易杂志</h1>
                            <h3>集合所有交易技巧为一体</h3>
                            <button class="btn btn-default btn-lg mt-4">马上交易</button>
                        </div>
                    </div>
                </div>
              </div>
          </template>
        </Banner>
          <!--  -->
          <div class="container py-5">
            <div class="row">
              <div class="col-md-6 border-right">
                <div class="row p-4">
                  <div class="col-md-6">
                    <h1 class="text-orange">新手</h1>
                    <h2>交易者</h2>
                    <p class="mt-3">
                      您是否已热切期待要展开您的交易生涯？我们可提供一系列的资源助您起步。
                    </p>
                  </div>
                  <div class="col-md-6">
                    <UrlLinkBlock :linklist="newbieUrl" linkColor="orangeLink" />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="row p-4">
                  <div class="col-md-6">
                    <h1 class="text-blue">有经验的</h1>
                    <h2>交易者</h2>
                    <p class="mt-3">
                      若想要您的交易更得心应手，请查看ATFX提供的各种先进工具及市场分析。
                    </p>
                  </div>
                  <div class="col-md-6">
                    <UrlLinkBlock :linklist="expertUrl" linkColor="blueLink" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container py-5">
            <p class="text-center">合作媒体</p>
            <div class="d-flex justify-content-center align-items-center flex-wrap">
              <img class="sponsorImg" src="~/assets/img/sponsor1.webp" alt="">
              <img class="sponsorImg" src="~/assets/img/sponsor2.webp" alt="">
              <img class="sponsorImg" src="~/assets/img/sponsor3.webp" alt="">
              <img class="sponsorImg" src="~/assets/img/sponsor4.webp" alt="">
              <img class="sponsorImg" src="~/assets/img/sponsor5.webp" alt="">
              <img class="sponsorImg" src="~/assets/img/sponsor6.webp" alt="">
              <img class="sponsorImg" src="~/assets/img/sponsor7.webp" alt="">
            </div>
          </div>

          <Banner :imgSrc="require('~/assets/img/stockBg.webp')" size="big">
            <template v-slot:customContent>
              <div class="container text-center">
                <h1>{{$store.state.projectName}} 丰富的差价合约产品</h1>
                <h3>提供极具竞争力的定价</h3>
                <div class="row mt-5">
                  <div class="col-lg-3 col-md-6">
                    <NuxtLink class="homeBigBtn" to="/">
                      <div class="icon"><b-icon icon="coin"></b-icon></div>
                      <div class="title">外汇</div>
                      <div class="desc">主要货币对、次要货币对及其他货币对</div>
                    </NuxtLink>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <NuxtLink class="homeBigBtn" to="/">
                      <div class="icon"><b-icon icon="gem"></b-icon></div>
                      <div class="title">大宗产品</div>
                      <div class="desc">黄金和白银、美国WTI原油及英国布伦特原油</div>
                    </NuxtLink>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <NuxtLink class="homeBigBtn" to="/">
                      <div class="icon"><b-icon icon="graph-up"></b-icon></div>
                      <div class="title">指数</div>
                      <div class="desc">美国、欧洲和亚洲的主要股市指数</div>
                    </NuxtLink>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <NuxtLink class="homeBigBtn" to="/">
                      <div class="icon"><b-icon icon="bar-chart"></b-icon></div>
                      <div class="title">股票</div>
                      <div class="desc">亚马逊、苹果公司、阿里巴巴及其他著名企业的股票</div>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </template>
          </Banner>

          <div class="container">
            <div class="row py-5">
              <div class="col-12 text-center">
                  <h2>全球化经纪商 | 本地化定制服务</h2> 
                  <h5 class="mt-2">我们正扩展我们的全球业务足迹，目前已在欧洲、拉丁美洲及亚洲地区开设了多个办事处。</h5>

                  <h5 class="mt-4">这让我们可以在这些地区提供优质的本地化定制服务，而我们的专业团队也将致力为客户带来超乎预期的优质服务。</h5>
                  <img src="~/assets/img/map.svg" width="100%" alt="">
              </div>
            </div>
          </div>

          <div class="container-fluid py-5 bg-grey">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <h1><b class="text-orange">随时</b> <b class="text-blue">随地</b>进行交易</h1>
                  <p class="text-banner mt-3">MetaTrader 4(MT4)平台、Web Trader、以手机和平板电脑应用程式，让您在世界任何地方随时交易，享受其灵活性。</p>
                  <p class="text-banner mt-4">MT4提供广泛的图表分析工具，包括超过30个指标和技术分析工具。您可自行设定自己的参数、显示选项及图表类型，以建立为自己量身定制的交易工具，感受更好的交易体验。</p>
                </div>
                <div class="offset-md-1 col-md-5">
                  <img src="~/assets/img/mt4Screenshot.webp" width="100%" alt="">
                </div>
              </div>
            </div>
          </div>

          <RegisterStep />
          
          <div class="container-fluid py-5 bg-grey">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h1>与我们合作的支付系统</h1>
                  <p class="text-banner mt-3">高效率及自动化的流程、严格的审核以确保安全、专家的后续跟进与协助、带来多元化的出金渠道。</p>
                </div>
                <div class="col-12 d-flex flex-wrap justify-content-center">
                  <img src="~/assets/img/coorperate1.svg" class="coorperateImg" alt="">
                  <img src="~/assets/img/coorperate2.svg" class="coorperateImg" alt="">
                  <img src="~/assets/img/coorperate3.svg" class="coorperateImg" alt="">
                  <img src="~/assets/img/coorperate4.svg" class="coorperateImg" alt="">
                  <img src="~/assets/img/coorperate5.svg" class="coorperateImg" alt="">
                  <img src="~/assets/img/coorperate6.svg" class="coorperateImg" alt="">
                  <img src="~/assets/img/coorperate7.svg" class="coorperateImg" alt="">
                  <img src="~/assets/img/coorperate8.svg" class="coorperateImg" alt="">
                  <img src="~/assets/img/coorperate9.svg" class="coorperateImg" alt="">
                  <img src="~/assets/img/coorperate10.svg" class="coorperateImg" alt="">
                  <img src="~/assets/img/coorperate11.svg" class="coorperateImg" alt="">
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      visible: false,
      newbieUrl: [
        {link: "/", label: "网络研讨会"},
        {link: "/", label: "研讨会"},
        {link: "/", label: "财经日历"},
        {link: "/", label: "市场分析"},
      ],
      expertUrl: [
        {link: "/", label: "交易及工具"},
        {link: "/", label: "Metatrader 4"},
        {link: "/", label: "为什么选择我们"},
        {link: "/", label: "交易市场"},
      ],
    }
  },
}
</script>

<style>
  .contentLogo {
    width: 150px;
  }
</style>
