<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 px-0">
        <!-- <Banner 
          :imgSrc="require('~/assets/img/regulators.jpg')"
          title="交易股票差价合约"
          subtitle="ATFX在其线上交易平台提供广泛的股票差价合约产品选择。马上开始交易以受惠于具竞争力的点差、优质的交易执行、以及免除交易佣金。"
          content="所有交易均涉及风险。您的损失可能大于您的入金。风险政策。"
        /> -->

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h1 class="text-center">道琼斯</h1>
              <p class="mt-3">在本文，我们将深入探讨道琼斯的历史、未来、构成和在ATFX平台交易道指的优势。我们还会回顾道琼斯工业平均指数（DJIA）在过去提供了那些交易机会。另外，通过分析道琼斯即时图表，我们将会探索目前在交易道指时可以使用哪些不同的策略。在问答环节，我们将回答交易者关于道指最常问的一些问题以及如何在差价合约（CFD）经纪商那里交易道指。
              </p>
            </div>
          </div>
        </div>
        
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
                <h2 class="text-center">为什么要交易道指？</h2>
                <p class="mt-3"在过去120年里，道琼斯工业平均指数（DJIA）经历了引人瞩目的波动和起伏，使其成为备受交易者和投资者欢迎的一大热门资产。</p>
            </div>
          </div>
        </div>
        
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
                <h2 class="text-center">重大的道琼斯价格波动</h2>

                <div class="row mt-3">
                  <div class="col-md-6 mb-4">
                    <p>从2020年3月疫情期间的最低位到2021年3月，道琼斯指数上涨76.8%，不仅为长期交易者创造了绝佳的获利机会，而且也为短期交易者带来了多个获利时机。</p>
                    <img src="~/assets/img/dow-jones1.jpg" width="100%" alt="">
                  </div>
                  <div class="col-md-6 mb-4">
                    <p>对于那些能够及时预见新冠疫危险性并在道指暴跌期间及时买空的交易者，他们会获利颇丰。在此之后，如果他们转变预期，那么就可以从道指随后的反弹中继续赚取利润。</p>
                    <img src="~/assets/img/dow-jones2.jpg" width="100%" alt="">
                  </div>
                  <div class="col-md-6 mb-4">
                    <p>从2016年到2018年，道指上涨了48%。2016年12月特朗普当选出人意料地触发了道指从2016年到2018年期间的大反弹，涨幅意外高达48%。</p>
                    <img src="~/assets/img/dow-jones3.jpg" width="100%" alt="">
                  </div>
                  <div class="col-md-6 mb-4">
                    <p>2009年经济大衰退之后，道琼斯在2010年至2015年期间的投资回报率高达185%。道指在反弹期间为交易者创造了大量的交易机会。</p>
                    <img src="~/assets/img/dow-jones4.jpg" width="100%" alt="">
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-12">
              <h2 class="text-center">使用{{$store.state.projectName}}进行交易的优势</h2>
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
                <h2 class="text-center">什么是道琼斯？</h2>
                <p class="mt-3">道琼斯工业平均指数是美国股票市场指数之一，它主要追踪中美国30家最大上市公司的股票表现。</p>
            </div>
          </div>
        </div>
        
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
                <h2 class="text-center">道琼斯工业平均指数的历史</h2>
                <p class="mt-3">道琼斯的含义及其起源是什么？道琼斯指数的历史开始于1896年，当时，查尔斯·道和他的商业伙伴爱德华·琼斯创办了该指数。道琼斯是美国的第二个股票市场指数，从道琼斯运输业平均指数（美国首个股票市场指数）演化而来。</p>
                <img src="~/assets/img/dow-jones5.jpg" width="100%" alt="">
                <p class="mt-3">最初，道琼斯指数追踪美国12家涵盖烟草、棉花、铁路、天然气、制糖和石油交易等行业公司的股票表现。到1928年，道琼斯指数追踪的企业增长到30家。自此之后，随着某些公司跌出该指数的覆盖范围并由其他公司所取代，道琼斯指数也经历了多次变化。很多投资者将道琼斯指数看作美国经济健康与否的晴雨表。不过，由于美国最大的企业都有海外业务，因此也有人持不同的观点。</p>
            </div>
          </div>
        </div>
        
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
                <h2 class="text-center">道琼斯工业平均指数包括多少家公司？</h2>
                <p class="mt-3">那么，道琼斯工业平均指数（DJIA）包括多少家公司呢？答案是30家美国最大的企业。大部分投资者都将道琼斯指数的涨跌与美国经济的健康与否联系起来。</p>
                <p>道琼斯指数所包括的公司按照不同的标准进行排序，例如，股票价格高的公司要比股票价格低的公司拥有更高的权重。道琼斯指数中的每一支股票都构成该股票总市值的一部分，因此，道琼斯指数也是一种价格加权指数。在过去，很多公司因为市值大跌而被剔除出道琼斯指数，同时被那些市值更高、增长更快的企业替代。</p>
                <img src="~/assets/img/dow-jones6.jpg" width="100%" alt="">
                <p class="mt-3">对于道琼斯按照公司股票价格而非公司市值计算相关指数，很多分析人士和投资者都提出了批评。因此，那些股票价格低但市值高的企业可能要比股票价格高但市值低的企业拥有更高的加权。很多人认为道琼斯指数应当根据公司的市值进行计算。</p>
            </div>
          </div>
        </div>
        
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
                <h2 class="text-center">道琼斯图表分析</h2>
                <p class="mt-3">道琼斯指数图表分析指对一定时间内道琼斯指数的价格变动进行深入分析。道琼斯技术分析旨在确定那些能够较好地平衡潜在亏损和利润的交易机会。</p>
                <p>用于道琼斯指数图表分析的指标包括200MDA（日移动平均线），它主要追踪导致呈上涨还是下跌趋势。</p>
                <img src="~/assets/img/dow-jones7.jpg" width="100%" alt="">
                <p class="mt-3">移动平均指标通过对特定时期内（如过去20天）的收盘价格进行相加，然后除以该时期的总天数。20日和50日移动平均指标通常能够识别持续数周的短期趋势。</p>
                <p>而长期投资者在决策时往往会使用100日和200日移动平均指标。当道指在两大移动平均线之上进行交易时，他们会进行多头布局，而当道指在两大移动平均线之下进行交易时，他们就会进行做空交易。</p>
                <p>波段交易者则使用50日和100日移动平均线来确定多头和空头交易机会。同时，短期交易者使用50日和20日移动平均指数来确定与其交易风格相符的机会。</p>
            </div>
          </div>
        </div>
        
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
                <h2 class="text-center">包含200日移动平均线的道琼斯图表</h2>
                <img src="~/assets/img/dow-jones8.jpg" width="100%" alt="">
                <p class="mt-3">当价格高于或低于两大移动平均线时，另一种买入或卖出策略是寻找两大移动平均线相交的时机。</p>
                <p>该策略主要关注其中一条移动平均线何时上升至另一条移动平均线之上。对于看涨趋势来说，20日或其他短期移动平均线应当跨过50日等更长期的移动平均线。这种交叉表示看涨趋势即将开始。</p>
                <p>同样的原理也适用于那些使用100日和200日移动平均线或50日和100日移动平均线的交易者。对于空头交易者来说，原理则相反，他们需要寻找短期移动平均线下穿更长期移动平均线的机会。比如，当100日移动平均线下穿200日移动平均线时，很可能就会出现看跌趋势。</p>
            </div>
          </div>
        </div>
        
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
                <h2 class="text-center">包含100日和200日移动平均线的道琼斯图表</h2>
                <p class="mt-3">表中的绿色箭头为100日移动平均线从200日移动平均线下方与其相交叉的位置，这里就产生了一个买入信号。相应地，红色箭头为100日移动平均线向下移动与200日移动平均线相交叉，并产生一个卖出信号。</p>
                <img src="~/assets/img/dow-jones9.jpg" width="100%" alt="">
            </div>
          </div>
        </div>
        
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
                <h2 class="text-center">最佳道琼斯工业平均指数交易经纪商</h2>
                <p class="mt-3">最佳道琼斯工业平均指数 (DJIA) 交易经纪商是不论价格下跌还是上涨，都能够让你有机会获利的经纪商。ATFX就是这样一家没有大额保证金要求同时又能让你在道指涨跌中获益的经纪商。使用ATFX交易道琼斯指数还意味着你能节约融资成本和佣金。</p>
                <p>ATFX的差价合约（CFD）是一种反映道指涨跌的产品，因此，与传统的股票经纪商不同的是，在你交易交易道琼斯指数时，ATFX并不要求你持有大量的账户余额。在本文撰稿时，道琼斯指数为34000点，如果你使用传统股票经纪商交易该指数的话，你需要最少70,000美元的资金。相比之下，ATFX要求的最低账户余额仅为200美元，因为该平台允许你对该指数进行小仓位，交易整个指数。因此，与使用传统期货或股票经纪商相比，你可以使用更少的本金开始交易道指。</p>
                <img src="~/assets/img/dow-jones10.jpg" width="100%" alt="">
                <p class="mt-3">传统经纪商一般会对所有交易收取一定的佣金，而ATFX则仅针对道琼斯指数交易收取点差。因此，作为散户使用ATFX交易时，你无需担心大量的佣金会快速地侵蚀掉你的利润。</p>
                <p>与传统经纪商不同的是，ATFX让你每周5天、每天24小时交易道指差价合约，让你有更多的机会进行交易。相比之下，传统的经纪商则受到固定市场交易时间的限制。</p>
            </div>
          </div>
        </div>
        
        <!-- <RegisterStep /> -->
        
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
                <h2 class="text-center">常见问题</h2>
                <div class="mt-4">
                    <Accordion :list="accordion" />
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
        {img: "dow-jones21.svg", title: "低点差", content: "我们提供超具竞争力的点差。"},
        {img: "dow-jones22.svg", title: "始终在线", content: "你不会错过任何一次重大的交易机会。每周5.5天，每天24小时开放交易。"},
        {img: "dow-jones23.svg", title: "涵盖所有主要市场", content: "所有重要市场中的所有资产类别均可交易。"},
        {img: "dow-jones24.svg", title: "无佣金", content: "享受零佣金，仅需支付点差。"},
      ],
      accordion: [
            {title: "道琼斯点位是什么？", content: "<p>美元兑日元货币对。</p>"},
            {title: "现实中，纳斯达克有可能超越道琼斯吗？", content: "<p>由于道琼斯追踪的是美国30家最大企业的股票表现，其中也包含了纳斯达克中的某些最大企业的股票，因此，纳斯达克不大可能会超越道琼斯。不过，纳斯达克所包含的3,300只股票总市值并不一定始终低于道琼斯的30支只股票。</p>"},
            {title: "什么样的公司才会被纳入道琼斯、标普500或者纳斯达克？", content: "<p>在确定哪些公司应当被纳入指数方面，这三大股指所使用的标准各不相同。例如，标普500要求公司的市值至少要118亿美元以上，具有高流动性，并且公司至少有10%的股份在股市流通。</p>"},
            {title: "道琼斯工业平均指数包括多少家公司？", content: "<p>道琼斯包含30家美国最大的上市公司。比如，苹果、可口可乐、美国运通和高盛公司等。</p>"},
            {title: "如何在市场大跌时交易道指？", content: "<p>市场大跌时期，最佳的交易方法是建立空仓卖出指数。务必记住的一点是，你要使用止损单来限制亏损，从而在价格在反方向暴涨时保护自身利益。</p>"},
            {title: "道琼斯工业平均指数（DJIA）的总市值是多少？", content: "<p>截止2021年5月中旬，DJIA总市值为9.9万亿美元，这一数字会随着每日的价格变动不断波动。DJIA总市值通过把包含在指数内的30家上市总司的市值相加得来。</p>"},
            {title: "道琼斯的交易代码是什么？", content: "<p>由于道琼斯工业平均指数及其缩写DJIA都受到商标保护，因此，交易者所使用的经纪公司不同，道指的交易代码也有所不同。大多数经纪商都会把道指称之为“US30”或类似的名称。</p>"},
            {title: "做空道琼斯（DJIA）指数可行吗？", content: "<p>当价格下跌时，做空道指是可行的，这样你就可以在下跌行情中获利。不过，所有交易都有风险，对于做空策略来说更是如此，这是因为随着时间的推移市场行情往往趋于上涨而不是下跌。</p>"},
            {title: "道氏理论（Dow Theory)在今天仍然适用吗？", content: "<p>是的，道氏理论在今天仍然适用，而且是所有现代技术分析方法的基础性理论。道氏理论是建立在股票价格反应了该股票所有已知信息的命题之上，该观点目前仍然成立。</p>"},
            {title: "如何投资道琼斯工业平均指数？", content: "<p>你可以直接通过股票经纪商来投资道琼斯工业平均指数，不过，这需要大量的本金。你也可以通过外汇经纪商 或交易所交易基金来投资道指差价合约，或通过股票经纪商投资期权。</p>"},
            {title: "谁来决定哪些公司会纳入道指？以及这是如何决定的？", content: "<p>标普道琼斯指数有限公司（ S&P Dow Jones Indices ）决定哪些公司会纳入道指。是否能进入道指并没有一个简单直接的标准可以沿用，不过，对于道指中的公司如何组成，其最终目标是要对美国经济有一个准确的反应。</p>"},
            {title: "道琼斯工业指数是否已经存在泡沫？", content: "<p>有些人认为道琼斯工业平均指数已经存在泡沫，不过不同的人看法也不同。我们可以肯定的是，道琼斯最近频创历史新高，并且正如它在历史中的表现一样，很可能还会有所突破。</p>"},
            {title: "特朗普上任时道琼斯工业平均指数是多少？", content: "<p>2017年1月19日特朗普上任的前一天，道琼斯工业平均指数为19804.72。自此之后，道琼斯指数持续上涨，到2021年5月10日达到历史新高的35,084点。</p>"},
        ],
    }
  }
}
</script>
