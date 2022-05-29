<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 px-0">
        <Banner 
          :imgSrc="require('~/assets/img/regulators.jpg')"
          title="外汇交易"
          subtitle="线上外汇交易平台提供多种货币对，并提供具竞争力的点差、高品质的外汇交易执行以及 24/5 支援。"
          content="所有交易均涉及风险。您的损失可能大于您的入金。 风险政策。"
        />

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-12">
              <h2 class="text-center">在 ATFX 外汇开户的好处</h2>
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

        <div class="row mx-0 tradingBanner">
          <div class="col-12 py-5">
            <div class="container">
              <h2 class="text-center">ATFX提供的货币对</h2>
              <div class="mt-4">
                <table class="table table-dark">
                  <tbody>
                    <tr>
                      <td>
                        <div class="text-nowrap">
                            主要货币
                        </div>
                      </td>
                      <td>
                        <div>
                            <span class="badge badge-light">EUR/USD</span>
                            <span class="badge badge-light">USD/JPY</span>
                            <span class="badge badge-light">GBP/USD</span>
                            <span class="badge badge-light">USD/CHF</span>
                            <span class="badge badge-light">AUD/USD</span>
                            <span class="badge badge-light">NZD/USD</span>
                            <span class="badge badge-light">USD/CAD</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="text-nowrap">
                            次要货币对
                        </div>
                      </td>
                      <td>
                        <div>
                            <span class="badge badge-light">AUD/CAD</span>
                            <span class="badge badge-light">AUD/CHF</span>
                            <span class="badge badge-light">AUD/JPY</span>
                            <span class="badge badge-light">AUD/NZD</span>
                            <span class="badge badge-light">CAD/CHF</span>
                            <span class="badge badge-light">CAD/JPY</span>
                            <span class="badge badge-light">CHF/JPY</span>
                            <span class="badge badge-light">EUR/AUD</span>
                            <span class="badge badge-light">EUR/CAD</span>
                            <span class="badge badge-light">EUR/CHF</span>
                            <span class="badge badge-light">EUR/GBP</span>
                            <span class="badge badge-light">EUR/JPY</span>
                            <span class="badge badge-light">EUR/NZD</span>
                            <span class="badge badge-light">GBP/AUD</span>
                            <span class="badge badge-light">GBP/CAD</span>
                            <span class="badge badge-light">GBP/CHF</span>
                            <span class="badge badge-light">GBP/JPY</span>
                            <span class="badge badge-light">GBP/NZD</span>
                            <span class="badge badge-light">NZD/CAD</span>
                            <span class="badge badge-light">NZD/CHF</span>
                            <span class="badge badge-light">NZD/JPY</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="text-nowrap">
                            其他货币对
                        </div>
                      </td>
                      <td>
                        <div>
                            <span class="badge badge-light">USD/CNH</span>
                            <span class="badge badge-light">USD/HKD</span>
                            <span class="badge badge-light">USD/SGD</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h2 class="text-center">什么是外汇交易？</h2>
              <p class="mt-3">Forex（简称FX）是指外汇交易市场，它很轻易地成为全球最大的金融市场，交易量达到每日5.3万亿美元。外汇保证金交易是指透过在市场进行杠杆式货币对的买卖，从差价当中获利，故它涉及个人及企业把某种货币兑换成另一种货币的动作。</p>
              <p>有别于股票及商品设有中央交易所，买卖双方可以透过这里进行外汇交易，货币对交易是在全球多家银行、交易商及经纪商的多重网络上进行，于是它并不局限于任何交易时段安排，从而让交易者以更灵活的时间，让交易者有机会进行每星期5日、每日24小时的交易。</p>
              <p>但时间并非吸引交易者进入外汇保证金领域的唯一因素。由于大量的货币交易以及影响货币价格的多方面因素，使这个市场存在较大波幅，让交易者较可能获利。货币价格受多重因素影响，包括国家央行设定的利率、经济数据、政府政策和出口需求等。</p>
            </div>
          </div>
        </div>
        
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h2 class="text-center">为何与 {{$store.state.projectName}} 交易外汇保证金？</h2>
              <p class="mt-3">投资外汇保证金的好处很明显，它是全球金融市场当中流动性最高的部分，交易者可交易很多种货币对，透过增强的波幅、或应用你的外汇交易策略而获利。选择和 ATFX 交易的话，可享有较低和具竞争力的点差、零佣金以及无隐藏费用，买卖差价成为完全的考虑因素。此外，提供进阶执行力的STP交易、以及借着杠杆带来额外的财力，均是其他部分额外原因，值得选择在ATFX开设外汇账户以及交易外汇。</p>
            </div>
          </div>
        </div>

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
        {img: "trading1.svg", title: "具竞争力的点差", content: "享有EURUSD和GBPUSD的竞争差价。"},
        {img: "trading2.svg", title: "24/5 不间断交易", content: "外汇交易者可以每周5天、每天24小时，获得灵活性和充足的时间，就你的计划作测试及交易，不论该计划是长期、短期还是对冲策略。"},
        {img: "trading3.svg", title: "交易多达 43 种低点差货币对", content: "针对多达43种货币对，我们帮助外汇交易者实施其交易策略，并设有本地的专家提供 24/5 支持。"},
        {img: "trading4.svg", title: "STP交易", content: "直通式处理（STP）交易带来最高质素的外汇交易执行以及最少的延迟。"},
      ],
    }
  }
}
</script>
