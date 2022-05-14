<!-- Please remove this file from your project -->
<template>
  <div class="navbar-top" @mouseleave="closeAllMenu">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-md-3 col-3 p-4">
          <nuxt-link to="/"><NuxtLogo /></nuxt-link>
        </div>
        <div class="col-lg-10 col-md-9 col-9 d-none d-md-flex flex-column">
          <div class="bar1 d-flex align-items-center justify-content-between p-3">
            <div class="left">
              <NuxtLink class="bar1Btn" to="/">机构业务</NuxtLink>
              <NuxtLink class="bar1Btn" to="/">联系我们</NuxtLink>
            </div>
            <div class="right">
              <button type="button" class="btn btn-icon btn-primary"><b-icon icon="person-fill"></b-icon></button>
            </div>
          </div>
          <div class="bar2 h-100 d-flex align-items-center justify-content-between">
            <div class="left">
              <a href="javascript:;" class="bar2Btn" @mouseover="openMenu('about')">关于我们
                <div class="bar2SubMenu" v-if="menu.about" @mouseleave="closeAllMenu">
                  <div class="row">
                    <div class="col-md-3">
                      <NuxtLink class="defaultLink" to="/about"><b>关于我们</b></NuxtLink>
                      <NuxtLink class="defaultLink" to="/">公司愿景</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">为何选择ATFX</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">监管</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">奖项与荣誉</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">赞助</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">公司新闻</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">联系我们</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">加入我们</NuxtLink>
                    </div>
                  </div>
                </div>
              </a>
              <a href="javascript:;" class="bar2Btn" @mouseenter="openMenu('trading')">交易
                <div class="bar2SubMenu" v-if="menu.trading" @mouseleave="closeAllMenu">
                  <div class="row">
                    <div class="col-md-3">
                      <div><b>市场</b></div>
                      <NuxtLink class="defaultLink" to="/">外汇</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">指数</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">大宗商品</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">加密货币</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">ETF CFDs</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">香港股票差价合约</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">股票</NuxtLink>
                    </div>
                    <div class="col-md-3">
                      <div><b>实时行情</b></div>
                      <NuxtLink class="defaultLink" to="/">EUR/USD</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">GBP/USD</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">USD/JPY</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">道琼斯</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">黄金价格</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">比特币价格</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">原油价格</NuxtLink>
                    </div>
                    <div class="col-md-3">
                      <div><b>交易方式</b></div>
                      <NuxtLink class="defaultLink" to="/">差价合约交易</NuxtLink>
                    </div>
                    <div class="col-md-3">
                      <div><b>交易账户类型</b></div>
                      <NuxtLink class="defaultLink" to="/">模拟账户</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">入金和出金</NuxtLink>
                    </div>
                  </div>
                </div>
              </a>
              <a href="javascript:;" class="bar2Btn" @mouseenter="openMenu('platform')">交易平台
                <div class="bar2SubMenu" v-if="menu.platform" @mouseleave="closeAllMenu">
                  <div class="row">
                    <div class="col-md-3">
                      <div><b>MetaTrader 4</b></div>
                      <NuxtLink class="defaultLink" to="/">下载MT4</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">MT4模拟账户</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">MT4指标</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">MT4常见问题</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">支撑和阻力指标</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">仓位计算器</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">MT4经济日历</NuxtLink>
                    </div>
                  </div>
                </div>
              </a>
              <a href="javascript:;" class="bar2Btn" @mouseenter="openMenu('learn')">交易学院
                <div class="bar2SubMenu" v-if="menu.learn" @mouseleave="closeAllMenu">
                  <div class="row">
                    <div class="col-md-3">
                      <div><b>市场分析</b></div>
                      <NuxtLink class="defaultLink" to="/">交易策略</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">市场资讯</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">财经日历</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">交易杂志</NuxtLink>
                    </div>
                    <div class="col-md-3">
                      <div><b>教育和工具</b></div>
                      <NuxtLink class="defaultLink" to="/">在线研讨会</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">交易研讨会</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">Trading Central</NuxtLink>
                      <NuxtLink class="defaultLink" to="/">教育视频</NuxtLink>
                    </div>
                  </div>
                </div>
              </a>
              <a href="javascript:;" class="bar2Btn" @mouseenter="openMenu('broker')">合作伙伴
                <div class="bar2SubMenu" v-if="menu.broker" @mouseleave="closeAllMenu">
                  <div class="row">
                    <div class="col-md-3">
                      <b><NuxtLink class="defaultLink" to="/">合作伙伴计划</NuxtLink></b>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="right">
              <button type="button" class="btn btn-success">马上加入</button>
            </div>
          </div>
        </div>
        <div class="col-9 d-flex align-items-center justify-content-end d-md-none text-right">
          <a href="javascript:;" class="menuBurger blueLink">
            <b-icon icon="list"></b-icon>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'topbar',
  data() {
    return {
      menu: {
        about: false,
        trading: false,
        platform: false,
        learn: false,
        broker: false,
      }
    }
  },
  methods: {
    closeAllMenu() {
      this.menu = {
        about: false,
        trading: false,
        platform: false,
        learn: false,
        broker: false,
      }
    },
    openMenu(type) {
      this.closeAllMenu();
      this.menu[type] = true;
    }
  }
}
</script>
