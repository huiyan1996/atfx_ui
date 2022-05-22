<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 px-0">
        <Banner 
          :imgSrc="require('~/assets/img/newsBanner.jpg')"
          title="公司新闻"
          :subtitle="$store.state.projectName+'集团是一家享誉全球的经纪商，在欧洲、亚洲、拉丁美洲及中东均设有办事处，受当地法律监管。'"
          content="以下为最新公告："
        />

        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="row">
                  <div class="col-md-4 mb-4" v-for="(v, k) in newsData" :key="k" @click="selectNews(k)">
                      <div class="newsBlock">
                        <div class="topImg">
                        <img :src="require('~/assets/img/'+v['imgName'])" alt="">
                        </div>
                        <div class="description">
                        <div class="currentDate">{{v['date']}}</div>
                        <div class="title">{{v['title']}}</div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <b-modal v-model="showNewsModal" hide-footer hide-header>
        <img class="newsModalImg" :src="getImgUrl(selectedNews['imgName'])" alt="">
        <div class="modalDesc">
            <div class="title">{{selectedNews['title']}}</div>
            <div class="date">{{selectedNews['date']}}</div>
            <div class="content">{{selectedNews['desc']}}</div>
        </div>
        </b-modal>

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
      newsData: [
        {imgName: 'news1.jpg', date: '22/03/2022', title: 'Lorem ipsum dolor sit amet', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam nam perferendis id hic, praesentium accusamus et fuga corporis earum amet commodi dolor, consequatur eos qui voluptate nisi doloribus suscipit neque.'},
        {imgName: 'news2.jpg', date: '23/03/2022', title: 'Lorem ipsum dolor sit amet', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam nam perferendis id hic, praesentium accusamus et fuga corporis earum amet commodi dolor, consequatur eos qui voluptate nisi doloribus suscipit neque.'},
        {imgName: 'news3.jpg', date: '25/03/2022', title: 'Lorem ipsum dolor sit amet', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam nam perferendis id hic, praesentium accusamus et fuga corporis earum amet commodi dolor, consequatur eos qui voluptate nisi doloribus suscipit neque.'},
        {imgName: 'news4.jpg', date: '26/03/2022', title: 'Lorem ipsum dolor sit amet', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam nam perferendis id hic, praesentium accusamus et fuga corporis earum amet commodi dolor, consequatur eos qui voluptate nisi doloribus suscipit neque.'},
        {imgName: 'news1.jpg', date: '22/03/2022', title: 'Lorem ipsum dolor sit amet', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam nam perferendis id hic, praesentium accusamus et fuga corporis earum amet commodi dolor, consequatur eos qui voluptate nisi doloribus suscipit neque.'},
        {imgName: 'news2.jpg', date: '23/03/2022', title: 'Lorem ipsum dolor sit amet', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam nam perferendis id hic, praesentium accusamus et fuga corporis earum amet commodi dolor, consequatur eos qui voluptate nisi doloribus suscipit neque.'},
        {imgName: 'news3.jpg', date: '25/03/2022', title: 'Lorem ipsum dolor sit amet', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam nam perferendis id hic, praesentium accusamus et fuga corporis earum amet commodi dolor, consequatur eos qui voluptate nisi doloribus suscipit neque.'},
        {imgName: 'news4.jpg', date: '26/03/2022', title: 'Lorem ipsum dolor sit amet', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam nam perferendis id hic, praesentium accusamus et fuga corporis earum amet commodi dolor, consequatur eos qui voluptate nisi doloribus suscipit neque.'},
      ],
      showNewsModal: false,
      selectedNews: {
        imgName: null,
        date: null,
        title: null,
        desc: null,
      },
    }
  },
  methods: {
    getImgUrl(pic) {
      if (pic)
        return require('~/assets/img/'+pic)

      else 
        return null
    },
    selectNews(ind) {
      this.selectedNews = this.newsData[ind]

      this.showNewsModal = true
    },
  }
}
</script>
