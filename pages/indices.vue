<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 px-0">
        <Banner 
          :imgSrc="require('~/assets/img/regulators.jpg')"
          title="线上交易指数差价合约"
          :subtitle="$store.state.projectName+' 在屡获殊荣的MT4平台上交易全球主要指数差价合约。'"
          content="所有交易均涉及风险。您的损失可能大于您的入金。风险政策。"
        />

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-12">
              <h2 class="text-center">与 ATFX 交易指数差价合约的好处</h2>
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

        <div class="row mx-0 indicesBanner">
          <div class="col-12 py-5">
            <div class="container">
              <h2 class="text-center">ATFX提供的货币对</h2>
              <div class="mt-4">
                <table class="table table-dark">
                  <tbody>
                    <tr>
                      <th>产品</th>
                      <th>产品名称</th>
                      <th>货币</th>
                      <th></th>
                    </tr>
                    <tr>
                      <td><div>CHI50</div></td>
                      <td><div>富时中国A50指数（CFD）</div></td>
                      <td><div>USD</div></td>
                    </tr>
                    <tr>
                      <td><div>HK50</div></td>
                      <td><div>香港恒生指数（CFD）</div></td>
                      <td><div>HKD</div></td>
                    </tr>
                    <tr>
                      <td><div>AUS200</div></td>
                      <td><div>澳洲S&amp;P/ASX指数（CFD）</div></td>
                      <td><div>AUD</div></td>
                    </tr>
                    <tr>
                      <td><div>EU50</div></td>
                      <td><div>欧洲斯托克50指数（CFD）</div></td>
                      <td><div>EUR</div></td>
                    </tr>
                    <tr>
                      <td><div>ESP35</div></td>
                      <td><div>西班牙IBEX35指数 (CFD)</div></td>
                      <td><div>EUR</div></td>
                    </tr>
                    <tr>
                      <td><div>FRA40</div></td>
                      <td><div>法国CAC 40指数（CFD）</div></td>
                      <td><div>EUR</div></td>
                    </tr>
                    <tr>
                      <td><div>GER30</div></td>
                      <td><div>德国30指数（CFD）</div></td>
                      <td><div>EUR</div></td>
                    </tr>
                    <tr>
                      <td><div>IT40</div></td>
                      <td><div>意大利MIB40指数 (CFD)</div></td>
                      <td><div>EUR</div></td>
                    </tr>
                    <tr>
                      <td><div>JP225*</div></td>
                      <td><div>日本日经225指数（CFD）</div></td>
                      <td><div>JPY</div></td>
                    </tr>
                    <tr>
                      <td><div>UK100</div></td>
                      <td><div>英国富时100指数（CFD）</div></td>
                      <td><div>GBP</div></td>
                    </tr>
                    <tr>
                      <td><div>US30</div></td>
                      <td><div>美国华尔街30指数（CFD）</div></td>
                      <td><div>USD</div></td>
                    </tr>
                    <tr>
                      <td><div>SPX500</div></td>
                      <td><div>美国标准普尔500指数（CFD）</div></td>
                      <td><div>USD</div></td>
                    </tr>
                    <tr>
                      <td><div>NAS100</div></td>
                      <td><div>美国纳斯达克100指数（CFD）</div></td>
                      <td><div>USD</div></td>
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
              <h2>什么是外汇交易？</h2>
              <p class="mt-3">Forex（简称FX）是指外汇交易市场，它很轻易地成为全球最大的金融市场，交易量达到每日5.3万亿美元。外汇保证金交易是指透过在市场进行杠杆式货币对的买卖，从差价当中获利，故它涉及个人及企业把某种货币兑换成另一种货币的动作。</p>
              <p>有别于股票及商品设有中央交易所，买卖双方可以透过这里进行外汇交易，货币对交易是在全球多家银行、交易商及经纪商的多重网络上进行，于是它并不局限于任何交易时段安排，从而让交易者以更灵活的时间，让交易者有机会进行每星期5日、每日24小时的交易。</p>
              <p>但时间并非吸引交易者进入外汇保证金领域的唯一因素。由于大量的货币交易以及影响货币价格的多方面因素，使这个市场存在较大波幅，让交易者较可能获利。货币价格受多重因素影响，包括国家央行设定的利率、经济数据、政府政策和出口需求等。</p>
            </div>
          </div>
        </div>
        
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h2>为何与 {{$store.state.projectName}} 交易外汇保证金？</h2>
              <p class="mt-3">投资外汇保证金的好处很明显，它是全球金融市场当中流动性最高的部分，交易者可交易很多种货币对，透过增强的波幅、或应用你的外汇交易策略而获利。选择和 ATFX 交易的话，可享有较低和具竞争力的点差、零佣金以及无隐藏费用，买卖差价成为完全的考虑因素。此外，提供进阶执行力的STP交易、以及借着杠杆带来额外的财力，均是其他部分额外原因，值得选择在ATFX开设外汇账户以及交易外汇。</p>
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
        {img: "indices1.svg", title: "客户服务", content: "所有客户都可以获得24/5本地化的一对一客户支援服务，并有相应的工具及教育资料。"},
        {img: "indices2.svg", title: "低点差", content: "ATFX提供极具竞争力的指数点差"},
        {img: "indices3.svg", title: "高效的指数风险管理", content: "在交易指数时採用风险管理工具，例如止损及限单价，以保护你的投资组合。"},
        {img: "indices4.svg", title: "免收佣金", content: "具竞争力的低点差 - 意味您只需以很少代价开立仓位。"},
      ],
    }
  }
}
</script>
