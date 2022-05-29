<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 px-0">
        <Banner 
          :imgSrc="require('~/assets/img/regulators.jpg')"
          title="交易股票差价合约"
          subtitle="ATFX在其线上交易平台提供广泛的股票差价合约产品选择。马上开始交易以受惠于具竞争力的点差、优质的交易执行、以及免除交易佣金。"
          content="所有交易均涉及风险。您的损失可能大于您的入金。风险政策。"
        />

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h2>​与ATFX交易股票差价合约的好处</h2>
            </div>
          </div>
        </div>
        
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
                <h2>如何与 ATFX 交易股票差价合约？</h2>
                <p class="mt-3">当交易单个股票差价合约股票时，相关公司将採取公司行动，例如派发现金股息。当相关公司发放现金股息时，ATFX将会对客户的帐户作出相应调整，并採取两项行动：</p>
                <p>当交易单个股票差价合约股票时，相关公司将採取公司行动，例如派发现金股息。当相关公司发放现金股息时，ATFX将会对客户的帐户作出相应调整，并採取两项行动：</p>
                <p>在除息日，持有单一股票差价合约多头头寸的客户，将获得相当于股息支付的正现金金额（根据客户的手数和支付股息的标的证券的比例，将资金存入客户的交易帐户中）。</p>
            </div>
          </div>
        </div>
        
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10 text-center">
                <p><b>调整公式：</b></p>
                <h3>股票数目 * 每股股息 = 调整金额</h3>
                <p class="mt-3">（如果客户的帐户是以美元计价，则调整金额将根据即期汇率转换为美元）</p>
            </div>
          </div>
        </div>
        
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
                <h2>现金股息</h2>
                <p>例如，假若苹果公司（AAPL）宣布向其股东派发0.01美元的现金股息，在除息日，苹果公司的股价将下跌0.01美元，反映公司行动的影响。ATFX将对客户所持的苹果公司仓位进行现金调整。</p>
                <p>如果ATFX的个人客户持有10,000股多头头寸，则现金调整将以下列公式计算：</p>
            </div>
          </div>
        </div>
        
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10 text-center">
                <p>10000 股差價合約 x 0.01美元 = 100美元現金股息</p>
                <p>（註：如果客戶是持空頭頭寸的話，ATFX 將從客戶的帳戶收取100美元。）</p>
            </div>
          </div>
        </div>
        
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
               <h2>股票分割或反向股票分割</h2>
               <p>如果一家公司宣佈进行股票分割或反向股票分割，那麽该公司的股价将会出现较大变动。</p>
               <p>反向股票分割：差价合约价格将上涨</p>
               <p>股票分割：差价合约价格将下跌</p>
               <p>苹果公司差价合约的未平仓合约。难道不该只说「持有相关差价合约未平仓合约的客户」吗？</p>
               <p>不过，单一股票 CFD 也将受到公司行为的影响，当上市公司出现任何业务变化（如股票分割、储备股份拆分和股息支付等）时，可能会发生这种情况，从而可能影响公司的财务状况、其股价表现和股东利益。</p>
            </div>
          </div>
        </div>
        
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
               <h2>股息</h2>
               <p>上市公司每半年会公佈一次业绩（有些是按季度），董事局会在该日宣佈是否向股东派发股息。若有股息派发的话，一般以「现金」方式或以送「股份」形式支付股息给股东。。</p>
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
