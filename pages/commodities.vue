<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 px-0">
        <Banner 
          :imgSrc="require('~/assets/img/regulators.jpg')"
          title="大宗商品交易"
          subtitle="欢迎在屡获殊荣的MT4平台上进行黄金及原油等大宗商品差价合约（CFD）交易。"
        />

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-12">
              <h2 class="text-center">为什么在ATFX平台上交易大宗商品？</h2>
            </div>
            <div class="col-md-12 mt-4">
              <div class="row">
                <div v-for="(v,k) in list" :key="k" class="col-md-4">
                  <div class="supportItem text-left">
                    <img :src="require('~/assets/img/'+v.img)" class="sponsorIcon left" alt="">
                    <div class="mt-3"><strong>{{v.title}}</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h2>什么是大宗商品交易？</h2>
              <p class="mt-3">大宗商品分为2大类：硬商品（比如：石油、黄金、橡胶）和软商品（比如：咖啡、小麦、玉米）。硬商品的价格一般比软商品高，但两者在市场上均有广泛交易。大宗商品在全球各大交易所交易。在英国，石油、天然气等能源通常在大宗商品投资交易所进行交易。非贵金属则在伦敦金属交易所（LME）交易。在ATFX，客户随时随地可以在高潜力的市场交易，把握获利机会。</p>
            </div>
          </div>
        </div>

        <!-- <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="row">
                <div v-for="(v,k) in list" :key="k" class="col-md-4">
                  <div class="aboutUsItem">
                    <img :src="require('~/assets/img/'+v.img)" class="sponsorIcon" alt="">
                    <div><strong>{{v.title}}</strong></div>
                    <p>{{v.content}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->

        <RegisterStep />

        <KnowMoreBlock :linklist="learnMoreUrl" title="相关内容" linkColor="blueLink" />
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      learnMoreUrl: [
        {link: "/", label: "交易账户"},
        {link: "/", label: "交易方式"},
        {link: "/", label: "交易市场"},
        {link: "/about", label: "关于我们"},
      ],
      list: [
        {img: "commodities1.svg", title: "ATFX能提供极具竞争力的点差。"},
        {img: "commodities2.svg", title: "免费的交易工具能帮助您更好地分析市场形势。"},
        {img: "commodities3.svg", title: "在全球最受青睐的交易平台MT4上进行交易。"},
      ],
    }
  }
}
</script>
