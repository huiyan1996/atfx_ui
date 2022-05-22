<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 px-0">
        <Banner 
          :imgSrc="require('~/assets/img/regulators.jpg')"
          :title="市场交易"
          subtitle="了解我们广泛的金融市场。"
          content="确定，点击，交易。三个简单的步骤即可随时进行外汇保证金、指数、虚拟货币、大宗商品和股票等交易。"
        />

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h2>在线市场交易</h2>
              <p>互联网和技术让交易出现了指数级的发展。所有通过电脑上网的人都可以在金融市场上交易。现在，进入金融市场参与交易已变得前所未有的容易，并且速度不慢。</p>
            </div>
          </div>
        </div>

        <div class="container py-5">
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
        </div>

        <RegisterStep />

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h2>通过{{$store.state.projectName}}交易金融市场的方式</h2>
              <p class="mt-3">我们提供两种最受欢迎的金融市场交易方式，让您可以对上涨和下跌的市场均可配置交易。</p>
              <p>无论选择哪条路径，您都可以通过MT4平台体验闪电般的执行速度和行业最低的交易成本。</p>
            </div>
          </div>
        </div>

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h2>差价合约</h2>
              <p class="mt-3">为了便于您对这些市场进行交易，通过差价合约（CFD），我们向您提供进入金融市场的快速通道。</p>
              <ul>
                  <li>不涉及实物交割，交易更便捷</li>
                  <li>针对走向、多头和空头均可交易</li>
                  <li>每周5天，每天24小时交易任意市场。</li>
                  <li>获得负余额保护</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h2>ATFX交易市场的优势</h2>
              <ul class="mt-3">
                  <li>业内具有竞争力的点差 - 我们提供业内最低的点差，让您尽可能获得最大的价值</li>
                  <li>顶级的客户服务 - 在我们的优先事项中，我们始终将您放在最优先的考虑之列</li>
                  <li>广泛的全球市场 - 交易最庞大和最热门的金融市场</li>
                  <li>受监管的经纪商 - 在多个司法管辖区受到监管并获得授权</li>
                  <li>先进的教育和工具 - 我们为您提供出色的工具就是最好的教育，只有您获得成功，才有我们的繁荣</li>
                  <li>屡获殊荣的交易服务 - 获得超快的交易执行速度，配置至关重要的订单，让您的交易水平更上一层楼</li>
              </ul>
            </div>
          </div>
        </div>

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
        {img: "market1.webp", title: "外汇", content: "在世界最庞大的金融市场交易。包括全部主要货币对以及热门的次要及其他货币对。"},
        {img: "market2.webp", title: "贵金属", content: "对包括贵金属在内的热门商品市场进行投机。"},
        {img: "market3.svg", title: "石油", content: "对包括石油在内的热门能源产品进行投机。"},
        {img: "market4.png", title: "指数", content: "提供全球热门的股市指数及美元指数。"},
        {img: "market5.png", title: "加密货币", content: "交易这一激动人心的新资产类别，并选择交易最受市场欢迎的币种。"},
        {img: "market6.svg", title: "股票", content: "交易全球企业股票并且无需支付佣金。持有苹果、亚马逊和其他公司股票的差价合约头寸。"},
      ],
    }
  }
}
</script>
