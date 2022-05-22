<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 px-0">
        <Banner 
          :imgSrc="require('~/assets/img/awards.jpg')"
          :title="$store.state.projectName+'赞助爱丁堡公爵杯国际高尔夫球赛'"
          :subtitle="$store.state.projectName+'很荣幸地宣布赞助爱丁堡杯公爵杯（Duke of Edinburgh Cup）的英国区选拔赛2021。我们很乐意继续支持这项已发展多年的慈善项目，热心履行社会责任，致力于支持像这样的公益活动。'"
        />

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h2 class="text-center">为何{{$store.state.projectName}}赞助爱爵杯</h2>
              <div class="row py-5 justify-content-center">
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/sponsor1.svg" class="sponsorIcon" alt="">
                    <div><strong>起源自英国</strong></div>
                    <div class="text-grey mt-2">爱丁堡公爵杯高尔夫球赛是一项源于英国的体育比赛，目前已扩展至全球不同地区。 ATFX 则是受全球多个监管机构的监管，业务正在全球多个地区扩张。 ATFX 和爱爵杯成为合作伙伴，发展轨迹可说是不谋而合。</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/sponsor2.svg" class="sponsorIcon" alt="">
                    <div><strong>覆盖全球的慈善活动</strong></div>
                    <div class="text-grey mt-2">ATFX对社区的关怀遍布全球，积极地关注及支持有需要受助的社群。我们希望跟爱爵杯一同努力，为全球的年轻人提供帮助。我们认为照顾及培育下一代非常重要，而爱爵杯的宗旨正符合ATFX推动公益的理念。</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/sponsor3.svg" class="sponsorIcon" alt="">
                    <div><strong>蜚声国际的体育盛事</strong></div>
                    <div class="text-grey mt-2">爱爵杯已经历了20年的发展。</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h2 class="text-center">为何{{$store.state.projectName}}赞助爱爵杯</h2>
              <div class="row py-5">
                  <div class="col-md-3">
                      <img src="~/assets/img/sponsorImg.jpg" width="100%" alt="" srcset="">
                  </div>
                  <div class="col-md-9">
                    <p>英国王室对社区和慈善服务作出了许多承诺。爱丁堡公爵菲利普亲王曾设立及赞助众多慈善项目，这对英国以至全球的慈善及公益事业发展有举足轻重的影响。</p>
                    <p>自从2001年起，爱爵杯世界决赛就每年在伦敦举行，并获英女王授权使用温莎城堡的球场举行决赛及以国事厅举行年度颁奖晚宴。</p>
                    <p>在过去20年间，这项年度国际业余高尔夫球锦标赛已在超过20个国家或地区举行，涵盖欧洲、亚洲、大洋洲、北美洲及南美洲。这项赛事男女选手均可参加，在资格赛采取定分式（Stableford）比赛的18个洞中，获得最佳净得分的指定数目选手，将可晋身世界总决赛。</p>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <div class="row py-5">
                  <div class="col-md-9">
                    <p>每年举办爱爵杯国际业余高尔夫球赛的宗旨是在全球帮助有需要的青少年及儿童。除了爱爵杯比赛，爱丁堡公爵也在1956年创立了获得高度认可的爱丁堡公爵国际奖 (The Duke of Edinburgh International Award)，这是他跟德国教育家Kurt Hagn共同创立的奖项。爱丁堡公爵国际奖是一个由三个累进级别组成的计划，顺利完成的话，参加者会获得爱丁堡公爵国际奖的铜奖、银奖或金奖。</p>
                    <p>这计划为数以百万计的14至24岁青少年带来机会，以志愿、非竞争为大前提下进行，备受推崇。奖项设立的目的是帮助年轻人克服困境，改善生活质素。这些奖项让参加者更有信心去尝试做一些他们本以为无法实现的事。在过去十一年间，这项目已在超过15个国家筹得并分发了共500万美元（折合约400万英镑）的善款。</p>
                  </div>
                  <div class="col-md-3">
                      <img src="~/assets/img/sponsorImg2.jpg" width="100%" alt="" srcset="">
                  </div>
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
        {link: "/", label: "交易市场"},
        {link: "/", label: "联系我们"},
      ],
    }
  }
}
</script>
