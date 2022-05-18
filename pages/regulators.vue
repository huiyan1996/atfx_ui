<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 px-0">
        <Banner 
          :imgSrc="require('~/assets/img/regulators.jpg')"
          :title="$store.state.projectName+'的金融监管机构'"
          subtitle="您的资金保护和安全是最需要重视的，所以这也是我们的头等要务。您的ATFX交易账户处于我们严密的安全框架保护之下，您可以放心地入金。"
          :content="$store.state.projectName+'受全球多个重磅监管机构监管，以保护您的资金安全。'"
        />

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h2>监管</h2>
              <p class="mt-3">{{$store.state.projectName}}的经营受行业重磅机构监管和企业内部的严格管理。</p>
              <p>我们的经营受一系列本地和地区法规的约束，我们会严格遵守相关规则和义务。这些规则包括资金的要求，这强制我们有特定规模的资本才能交易。</p>
              <p>监管的调整依循欧洲法规，还有新的数据保护法规。这对我们如何整理和使用您提供给我们的个人信息加以约束，保护您的个人权益。</p>
            </div>
          </div>
        </div>

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h2>有哪些机构在监管？</h2>
              <p class="mt-3">AT Global Markets (U.K.)Limited在英国，获得金融行为管理局(FCA)授权并受其监管。</p>
              <p>ATFX Global Markets (C.Y.) Limited在塞浦路斯经营，受塞浦路斯证券交易委员会(CySEC)监管。</p>
              <p>AT Global Markets Intl Ltd获得毛里求斯金融服务委员会(FSC)颁发许可。</p>
              <p>AT Global Markets LLC在圣文森特和格林纳丁斯金融服务管理局(FSA)注册。</p>
            </div>
          </div>
        </div>

        <Accordion :list="list" />

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
        {title: "金融行为管理局(FCA)", content: "<p>金融行为监管局是设在英国的金融监管机构。不过，它的运作独立于英国政府之外。FCA向金融服务业成员收取费用。FCA监管向消费者提供服务的金融企业，维护英国金融市场的健全。</p>"},
        {title: "金融服务委员会(FSC)", content: "<p>FSC遵循《2005年证券法》，是毛里求斯非银行金融市场的监管机构。该市场包括证券交易所、清算和结算设施、证券交易系统、集体投资计划和中介。</p>"},
        {title: "金融服务管理局(FSA)", content: "<p>FSA的成立，是为了遵循国际最佳实践，发展、监管和监督国际非银行金融部门。FSA旨在促进行业的安全和完整，以提高圣文森特和格林纳丁斯作为安全和具有竞争力的金融中心的声誉。</p>"},
        {title: "塞浦路斯证券交易委员会 (CySEC)", content: "<p>塞浦路斯证券交易委员会（简称 CySEC）是塞浦路斯的金融监管机构。作为欧盟成员国，塞浦路斯证券交易委员会的金融法规和运作符合欧洲MiFID金融协调法。</p>"},
      ],
    }
  }
}
</script>
