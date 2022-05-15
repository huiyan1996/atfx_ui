<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 px-0">
        <Banner 
          :imgSrc="require('~/assets/img/visionBg.jpg')"
          title="我们的愿景"
          subtitle="我们的愿景是为您创造最佳的交易体验，优质的客户服务，助您迈向成功。随时随地了解市场行情享受及时交易。"
        />

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h2>我们的使命</h2>
              <p class="mt-3">{{$store.state.projectName}}管理团队认为客户的利益高于一切。一切决定都是为了您的权益。</p>
              <p>我们的使命是提供最佳的产品和服务，打造最出色的技术，并提供一流的教育，让您具备成功的所需条件。</p>
              <p>我们采取以客户为中心的方法，推动着我们不断创新，与时俱进。</p>
            </div>
          </div>
        </div>

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h2 class="text-center">ATFX公司价值观</h2>
              <div class="row py-5 justify-content-center">
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/vision1.svg" class="aboutUsIcon" alt="">
                    <div><strong>客户至上</strong></div>
                    <div class="text-grey mt-2">我们的任何决定都会以客户权益为中心</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/vision2.svg" class="aboutUsIcon" alt="">
                    <div><strong>精益求精</strong></div>
                    <div class="text-grey mt-2">给予交易者迈向成功的知识和工具，并打造非凡的交易体验</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/vision3.svg" class="aboutUsIcon" alt="">
                    <div><strong>简单的选择</strong></div>
                    <div class="text-grey mt-2">让交易变的更简单是客户选择我们的理由，确定、点击、交易，我们让交易变得简单化</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/vision4.svg" class="aboutUsIcon" alt="">
                    <div><strong>创新与科技</strong></div>
                    <div class="text-grey mt-2">在现有的基础上持续加以创新，让客户体验更多新科技的交易形式</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/vision5.svg" class="aboutUsIcon" alt="">
                    <div><strong>高标准</strong></div>
                    <div class="text-grey mt-2">我们今天的成就源于我们的努力及精益求精的态度</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h2>{{$store.state.projectName}}品牌承诺</h2>
              <p class="mt-3">{{$store.state.projectName}}提供无与伦比的在线交易体验，超高的服务水平与先进的交易技术，超出您的预期。</p>
              <p>高质量的服务是我们企业遵旨，是我们的基础。没有您的支持和信任，我们的品牌和影响力就无法扩大。 我们的成功与您息息相关。</p>
              <p>我们希望您将我们视为您的金融科技伙伴。我们将在您的交易之旅中与您同行。您将会有一个专属的客户经理，方便为您解决您提出的任何疑问。我们不仅仅是外汇经纪商和金融科技公司，还是您的合作伙伴和朋友。</p>
            </div>
          </div>
        </div>

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h2>{{$store.state.projectName}}文化</h2>
              <p class="mt-3">{{$store.state.projectName}}培养了一种互助的企业文化，这种文化源自企业高层，传递给我们充满激情的公司活力，再延伸给我们的客户。</p>
              <p>我们是一家全球化企业，因此沟通、合作和相互理解都至关重要。我们的文化是由我们的全球团队共同制定的，那么如何实现？有以下几点：</p>
            </div>
          </div>
        </div>

        <div class="container pb-5">
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="row justify-content-center">
                <div class="col-md-3">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/visionTick.svg" class="aboutUsIcon" alt="">
                    <div><strong>团队合作</strong></div>
                    <div class="text-grey mt-2">如果所有人携手并进，<br>那么成功就会水到渠成。</div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/visionTick.svg" class="aboutUsIcon" alt="">
                    <div><strong>快乐</strong></div>
                    <div class="text-grey mt-2">我们享受自己的工作。<br>我们乐于为您提供帮助。</div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/visionTick.svg" class="aboutUsIcon" alt="">
                    <div><strong>高标准</strong></div>
                    <div class="text-grey mt-2">我们今天的成就有其必然性，<br>这源于我们精益求精的态度。</div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/visionTick.svg" class="aboutUsIcon" alt="">
                    <div><strong>学习并保持好奇心</strong></div>
                    <div class="text-grey mt-2">会问“为什么”？不断探索，<br>找到看似不可能的关联。</div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/visionTick.svg" class="aboutUsIcon" alt="">
                    <div><strong>跳出固定思维</strong></div>
                    <div class="text-grey mt-2">我们摆脱固有的思维模式，<br>改善对您的服务方式。</div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/visionTick.svg" class="aboutUsIcon" alt="">
                    <div><strong>责任感</strong></div>
                    <div class="text-grey mt-2">我们永远不会说<br>“那不是我的工作”。</div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/visionTick.svg" class="aboutUsIcon" alt="">
                    <div><strong>实现目标</strong></div>
                    <div class="text-grey mt-2">我们分析任务并将其设定为目标，创造成功。</div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="aboutUsItem">
                    <img src="~/assets/img/visionTick.svg" class="aboutUsIcon" alt="">
                    <div><strong>团队精神</strong></div>
                    <div class="text-grey mt-2">我们注重团队精神，<br>展示个人价值，奖励个人付出。</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid bgBlueGradient">
          <div class="container py-5">
              <div class="row justify-content-center">
                  <div class="col-md-10">
                        <h1 class="text-center">我们的员工</h1>
                        <p class="mt-3">员工是我们企业的根基。我们相信是员工成就了我们的事业，是他们的才智和热情创造了我们引以为傲的文化。这种文化可以帮助您获得非同寻常的交易体验。</p>
                        <p>我们的团队不断成长，全球有450多名员工，超过20种语言的服务，分布在13个办事处。这些办事机构位于欧洲、美洲、非洲及亚洲。我们想要成为全球市场的行家，因此我们招募专业的当地员工。</p>
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
