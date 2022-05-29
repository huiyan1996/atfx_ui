<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 px-0">
        <Banner 
          :imgSrc="require('~/assets/img/regulators.jpg')"
          title="加密货币交易"
          subtitle="交易全球最受欢迎的数字货币差价合约。"
          content="声明：加密货币及其它虚拟资产不向中东及北非地区客户提供。"
        />

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-12">
              <h2 class="text-center">为什么选择交易加密货币？</h2>
            </div>
            <div class="col-md-12 mt-4">
              <div class="row">
                <div v-for="(v,k) in list" :key="k" class="col-md-4">
                  <div class="supportItem text-left">
                    <img :src="require('~/assets/img/'+v.img)" class="sponsorIcon" alt="">
                    <div class="mt-3">{{v.title}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mx-0 indicesBanner">
          <div class="col-12 py-5">
            <div class="container">
              <h1 class="text-center">加密货币工具细节</h1>
              <h4 class="text-center my-4">
                <b>请开始在您的ATFX真实账户或模拟账户上交易现在流行的加密货币差价合约</b>
              </h4>
              <div class="mt-4">
                <table class="table table-dark">
                  <tbody>
                    <tr>
                      <th>产品</th>
                      <th>名称</th>
                      <th>最低点差</th>
                      <th>保证金率</th>
                    </tr>
                    <tr>
                      <td><div>BTCUSD</div></td>
                      <td><div>比特币/美元</div></td>
                      <td><div>25.0</div></td>
                      <td><div>10%</div></td>
                    </tr>
                    <tr>
                      <td><div>ETHUSD</div></td>
                      <td><div>以太币/美元</div></td>
                      <td><div>4.0</div></td>
                      <td><div>10%</div></td>
                    </tr>
                    <tr>
                      <td><div>LTCUSD</div></td>
                      <td><div>莱特币/美元</div></td>
                      <td><div>4.0</div></td>
                      <td><div>10%</div></td>
                    </tr>
                    <tr>
                      <td><div>ADAUSD</div></td>
                      <td><div>艾达币/美元</div></td>
                      <td><div>0.008</div></td>
                      <td><div>10%</div></td>
                    </tr>
                    <tr>
                      <td><div>LNKUSD</div></td>
                      <td><div>LINK币/美元</div></td>
                      <td><div>0.080</div></td>
                      <td><div>10%</div></td>
                    </tr>
                    <tr>
                      <td><div>BCHUSD</div></td>
                      <td><div>比特币现金/美元</div></td>
                      <td><div>5.0</div></td>
                      <td><div>10%</div></td>
                    </tr>
                    <tr>
                      <td><div>BNBUSD</div></td>
                      <td><div>币安币/美元</div></td>
                      <td><div>5.0</div></td>
                      <td><div>10%</div></td>
                    </tr>
                    <tr>
                      <td><div>DOGUSD</div></td>
                      <td><div>多吉币/美元</div></td>
                      <td><div>0.005</div></td>
                      <td><div>10%</div></td>
                    </tr>
                    <tr>
                      <td><div>DOTUSD</div></td>
                      <td><div>波卡币/美元</div></td>
                      <td><div>0.100</div></td>
                      <td><div>10%</div></td>
                    </tr>
                    <tr>
                      <td><div>UNIUSD</div></td>
                      <td><div>UNI币/美元</div></td>
                      <td><div>0.080</div></td>
                      <td><div>10%</div></td>
                    </tr>
                    <tr>
                      <td><div>XLMUSD</div></td>
                      <td><div>恒星币/美元</div></td>
                      <td><div>0.005</div></td>
                      <td><div>10%</div></td>
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
              <h2>何为加密货币?</h2>
              <p class="mt-3">加密货币是一种可替代传统货币的数字货币。但加密货币为去中心化货币，可进行投机或交换以赚取利润，因为它可以像任何其它金融工具一样进行交易。加密货币早在上世纪90年代末便出现，但由于比特币在近年突然火爆全球且其价值超过了预期，加密货币交易才逐渐被普及。</p>
            </div>
          </div>
        </div>
        
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h2>主要加密货币种类</h2>
            </div>
          </div>
          <div class="row justify-content-center mt-3">
            <div class="col-md-10">
              <h3>比特币</h3>
              <p class="mt-3">比特币是全球认可度最高的加密货币。比特币是2009年由化名为中本聪（Satoshi Nakamoto）的团体/个人所创建。比特币使用区块链技术，区块链是一种公共账本，可用来在无中介的情况下记录比特币交易。比特币因能作为国际货币流通而受到赞誉，但也因其价值波动被诟病。但这种波动性也为交易者提供了机会，他们可以对比特币进行投机来获取利润。波动性能带来机遇，但也会增加风险，许多交易者在交易比特币时都出现了亏损。</p>
            </div>
          </div>
          <div class="row justify-content-center mt-3">
            <div class="col-md-10">
              <h3>以太币</h3>
              <p class="mt-3">以太币是以太坊数字平台的一种相对较新的加密货币。该数字货币通过网络众筹活动获得资金后，于2015年进入公众视野。该货币面世时，7200万枚以太币被“预挖”；这些以太币约占2018年流通以太币总数的70%。以太币允许交易者通过开放网络发出和接收信用，操作类似于比特币。该货币主要被用作智能合约，而非传统的支付方式。以太币是一个利用区块链技术的开放性软件平台，交易记录存储于区块链，这些记录存放于世界各地的计算机上。这对以太币去中心化而言至关重要。</p>
            </div>
          </div>
          <div class="row justify-content-center mt-3">
            <div class="col-md-10">
              <h3>莱特币</h3>
              <p class="mt-3">莱特币(被称为“山寨币”)是比特币的复制品，在比特币基础上稍有改变。莱特币的初衷是专攻某些领域，例如能够用于较小的交易、更易于日常使用，使大众更能接触到莱特币。莱特币的区块处理速度是比特币的四倍。但它需要更为先进的技术来开采。莱特币是交易量最大的加密货币之一，但其市值远低于比特币。目前主流公司暂未接受将莱特币作为支付方式，但它有可能在未来广泛使用。</p>
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
        {img: "cryptocurrencies1.svg", title: "加密货币价格瞬息万变。其价格波动创造了做多或做空的机会。请注意价格波动会增加风险。"},
        {img: "cryptocurrencies2.svg", title: "加密货币全天候24小时开放，您可随时进行交易。"},
        {img: "cryptocurrencies3.svg", title: "加密货币越来越受欢迎，其价值已接近1000亿美元。"},
      ],
    }
  }
}
</script>
