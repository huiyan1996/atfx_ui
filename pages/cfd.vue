<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 px-0">
        <Banner 
          :imgSrc="require('~/assets/img/regulators.jpg')"
          title="交易50+香港热门股票"
          subtitle="香港证券交易所最受欢迎的股票差价合约(CFD)"
        />

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h2>为什么选择与ATFX交易股票差价合约？</h2>
            </div>
            <div class="col-md-12 mt-4">
              <div class="row">
                <div v-for="(v,k) in list" :key="k" class="col-md-3">
                  <div class="sponsorItem text-center">
                    <img :src="require('~/assets/img/'+v.img)" class="sponsorIcon" alt="">
                    <div class="mt-3"><strong>{{v.title}}</strong></div>
                    <p class="mt-3 text-grey">{{v.content}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h2>交易50+香港上市公司股票差价合约</h2>
              <P class="MT-3">ATFX的股票差价合约为您提供交易香港最热门的股票。您可以通过ATFX账户直接交易超过50多家公司的差价合约。获得反映市场价格的最优价格，利用20:1杠杆实现超出账户余额的更大交易。一个合约规模等于100股。从香港最具流动性股票的每日价格波动中获利。</P>
            </div>
          </div>
        </div>
        
        <RegisterStep />
        
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
        {img: "cfd1.svg", title: "零佣金", content: "ATFX不收取差价合约股票交易手续费。加上零银行手续费，更大获利空间。"},
        {img: "cfd2.svg", title: "杠杆率20:1", content: "与ATFX交易差价合约股票，可凭较少的保证金，交易完整的仓位。"},
        {img: "cfd3.svg", title: "具有竞争力的价格", content: "我们多渠道获取报价，为您争取最优的差价合约交易价格。"},
        {img: "cfd4.svg", title: "做空做多，自由选择", content: "交易差价合约时可以自由选择做多头或空头交易，利用价格波动获取潜在利益。"},
      ],
    }
  }
}
</script>
