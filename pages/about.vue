<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 px-0">
        <Banner 
          :imgSrc="require('~/assets/img/aboutBg.jpg')"
          title="关于我们"
          :subtitle="$store.state.projectName+'相信，金融市场的交易方式可以有更好的选择。凭借先进的技术，丰富的产品与优质的服务以及免费的教育培训，我们为客户尽可能提供最佳交易体验。以客户为中心的理念，让我们始终将您的权益置于首位。'"
        />

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h2>我们的服务</h2>
              <p class="mt-3">我们为您提供简单、便捷的进入金融市场的渠道。我们为您提供最理想的交易工具。如果您问有教育培训吗？我们有！有先进和高效的技术软件吗？是的，我们有！有市场上的最佳的产品选择吗？是的，我们有！有出色的客户服务吗？是的，我们的回答是肯定的，我们为您提供卓越的服务体验。</p>
              <p>我们做的每一件事，都考虑了您的需求。我们深知，只有您获得成功，我们才能成功。</p>
            </div>
          </div>
        </div>

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h2>为什么选择ATFX？</h2>
              <p class="mt-3">为什么 <nuxt-link class="orangeLink" to="/">选择ATFX</nuxt-link> 呢？ 可以试问一下自己，“您想要寻找什么样的经纪商？” ，您可能列出一份含有下列选项要求，我们都可提供：</p>
              <div class="row py-5">
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/aboutUsIco1.svg" class="aboutUsIcon" alt="">
                    <div><strong>点差低</strong></div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/aboutUsIco2.svg" class="aboutUsIcon" alt="">
                    <div><strong>快速的交易订单执行</strong></div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/aboutUsIco3.svg" class="aboutUsIcon" alt="">
                    <div><strong>零佣金</strong></div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/aboutUsIco4.svg" class="aboutUsIcon" alt="">
                    <div><strong>优质的服务和支持</strong></div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/aboutUsIco5.svg" class="aboutUsIcon" alt="">
                    <div><strong>公平、透明的价格</strong></div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/aboutUsIco6.svg" class="aboutUsIcon" alt="">
                    <div><strong>资金安全和保障</strong></div>
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
              <h2>我们的历史</h2>
              <p class="mt-3">在这个极具竞争力的市场中，我们的一直深思怎样才能做到最好，超越行业水平？通过我们的研究发现，前提是要始终将客户的需求放在第一位</p>
              <p>公司成立后，我们快速了解全球客户的需求，为他们定制解决方案，ATFX集团自成立以来努力发展，已在13个国家拥有了450多名员工，覆盖欧洲、非洲、美洲及亚洲地区。</p>
            </div>
          </div>
        </div>

        <div class="container-fluid bgBlueGradient">
          <div class="container py-5">
            <div class="row">
              <div class="col-md-5">
                <h1>历史沿革</h1>
                <p class="mt-3">在发现不同国家和地区的交易者需求不同后，增加全球团队力量变得十分重要，每个员工需要充分了解每个地区的客户需求。所以，我们在各个区域雇佣本地化服务的团队成员。</p>
                <p>进一步的发展需要在实施以客户为中心的战略时，强调技术的重要性。自动化和灵活的工作方式，让我们能为您提供市场上最顺畅的交易体验。我们能够迅速推出定制的产品来满足客户需求。近期的一个例子是ATFX英国为满足机构客户需要而推出的机构业务ATFX Connect。</p>
              </div>
              <div class="col-md-7">
                <img src="~/assets/img/aboutUsHistory.jpg" width="100%" alt="">
              </div>
            </div>
          </div>
        </div>

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h2>荣誉奖项</h2>
              <p class="mt-3">ATFX在全球荣获了多项重量级的荣誉奖项，我们很欣慰我们的努力得到了肯定。</p>
              <p>这些奖项要归功于我们全球团队的辛勤努力和奉献。ATFX在欧洲、亚洲、中东和南美等不同地区均斩获了各类荣誉大奖。</p>
            </div>
          </div>
        </div>

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h2>ATFX的监管机构</h2>
              <p class="mt-3">ATFX是全球化的经纪商平台，服务地区包括：欧洲、非洲、美洲及亚洲。ATFX受四大主要监管机构监管，无论您在哪个国家，都可以放心：</p>
              <ul>
                <li>AT Global Markets (U.K.)Limited在英国，获得金融行为监管局(FCA)授权并受其监管。</li>
                <li>ATFX Global Markets (C.Y.) Limited在塞浦路斯经营，受塞浦路斯证券交易委员会(CySEC)监管。</li>
                <li>AT Global Markets Intl Ltd获得毛里求斯金融服务委员会(FSC)颁发许可。</li>
                <li>AT Global Markets LLC在圣文森特和格林纳丁斯金融服务管理局(FSA)注册。</li>
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
        {link: "/", label: "交易市场"},
        {link: "/", label: "联系我们"},
      ],
    }
  }
}
</script>
