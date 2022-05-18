<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 px-0">
        <Banner 
          :imgSrc="require('~/assets/img/awards.jpg')"
          title="荣誉和奖项"
          :subtitle="$store.state.projectName+'是一家屡获殊荣的在线外汇金融市场经纪商。我们很荣幸被客户和行业专家公认为全球优秀外汇差价合约（CFD）经纪商。'"
        />

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
                <h2>{{$store.state.projectName}}全球奖项</h2>
                <p class="mt-3">在过去的三年中，我们斩获多达37项大奖，这是我们全球团队勤勉工作和敬业奉献的证明。在{{$store.state.projectName}}，我们始终坚持客户满意至上的经营理念，将客户需求放在首位，没有您的信任、支持和您持续的成功，我们无法取得任何的进步。</p>
                <p>{{$store.state.projectName}}不仅仅在竞争激烈的欧洲地区是市场先锋和领导者。我们在世界各地也获得过多个奖项，包括亚洲、南美、欧洲和中东。</p>
                <p>我们获得了“最具影响力经纪商”、“欧洲增长最快的外汇经纪商”、“最佳投资者教育提供商”、“金融市场创新和卓越奖”等奖项。</p>
                <p>{{$store.state.projectName}}是全球多个不同实体共用的联合品牌，服务地区包括：</p>
                <ul>
                    <li>AT Global Markets (UK) Limited在英国，获得金融行为管理局(FCA)监管。</li>
                    <li>{{$store.state.projectName}} Global Markets (CY) Limited在塞浦路斯经营，受塞浦路斯证券交易委员会(CySEC)监管；</li>
                    <li>AT Global Markets Limited在圣文森特和格林纳丁斯金融服务管理局(FSA)注册；</li>
                    <li>AT Global Markets Intl Ltd是毛里求斯公司，获得金融服务委员会(FSC)颁发许可</li>
                </ul>
            </div>
          </div>
        </div>

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h2 class="text-center">{{$store.state.projectName}}全球奖项一览</h2>
              <div class="row py-5 justify-content-center">
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/award1.png" class="aboutUsIcon" alt="">
                    <div><strong>最佳机构外汇经纪商</strong></div>
                    <div class="text-grey mt-2">Fintech Awards 2020</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/award2.png" class="aboutUsIcon" alt="">
                    <div><strong>最佳联盟行销计划</strong></div>
                    <div class="text-grey mt-2">Forex Brokers Awards 2020</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/award3.png" class="aboutUsIcon" alt="">
                    <div><strong>最佳消息及分析供应商</strong></div>
                    <div class="text-grey mt-2">Forex Brokers Awards 2020</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/award4.png" class="aboutUsIcon" alt="">
                    <div><strong>最佳线上交易服务</strong></div>
                    <div class="text-grey mt-2">ADVFN International Financial Awards 2020</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/award5.png" class="aboutUsIcon" alt="">
                    <div><strong>最佳外汇经纪商</strong></div>
                    <div class="text-grey mt-2">Rankia Awards 2020</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/award6.png" class="aboutUsIcon" alt="">
                    <div><strong>最具透明度经纪商</strong></div>
                    <div class="text-grey mt-2">World Forex Awards 2019</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/award7.png" class="aboutUsIcon" alt="">
                    <div><strong>最佳教育计划</strong></div>
                    <div class="text-grey mt-2">World Forex Awards 2019</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/award8.png" class="aboutUsIcon" alt="">
                    <div><strong>最佳外汇客户服务</strong></div>
                    <div class="text-grey mt-2">World Finance Forex Awards 2019</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/award9.png" class="aboutUsIcon" alt="">
                    <div><strong>最佳客户服务</strong></div>
                    <div class="text-grey mt-2">ADVFN International Financial Awards 2019</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/award10.png" class="aboutUsIcon" alt="">
                    <div><strong>最佳客户支援第一位</strong></div>
                    <div class="text-grey mt-2">OnlineBroker-Portal Award 2019</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/award11.png" class="aboutUsIcon" alt="">
                    <div><strong>英国年度外汇经纪商</strong></div>
                    <div class="text-grey mt-2">The European Business Awards 2018 Global Banking & Finance</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/award12.png" class="aboutUsIcon" alt="">
                    <div><strong>最佳外汇差价合约经纪商</strong></div>
                    <div class="text-grey mt-2">UK Forex Awards 2018</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/award13.png" class="aboutUsIcon" alt="">
                    <div><strong>欧洲增长最快外汇经纪商</strong></div>
                    <div class="text-grey mt-2">Forex Awards 2017</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/award14.png" class="aboutUsIcon" alt="">
                    <div><strong>最佳NDD外汇经纪商</strong></div>
                    <div class="text-grey mt-2">Online Personal Wealth Awards 2018</div>
                  </div>
                </div>
              </div>
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
        {link: "/", label: "交易市场"},
        {link: "/", label: "联系我们"},
      ],
    }
  }
}
</script>
