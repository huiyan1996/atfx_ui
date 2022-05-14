<template>
    <div>
        <div class="container-fluid py-4">
            <div class="container">
                <div class="d-flex flex-wrap">
                    <nuxt-link to="/" class="footerLink blueLink">法律</nuxt-link>
                    <nuxt-link to="/" class="footerLink blueLink">业务条款</nuxt-link>
                    <nuxt-link to="/" class="footerLink blueLink">隐私</nuxt-link>
                    <nuxt-link to="/" class="footerLink blueLink">Cookies</nuxt-link>
                    <nuxt-link to="/" class="footerLink blueLink">公告</nuxt-link>
                </div>
            </div>
        </div>
        <div class="container-fluid bg-grey">
            <div class="container py-5 text-blue border-bottom">
                <p>ATFX 是由多家公司共同使用的业务品牌，包括：</p> 

                <p class="mt-4">AT Global Markets LLC 是位于圣文森特和格林纳丁斯的有限责任公司，公司编号为 333 LLC 2020。注册地址是：1st Floor, First St. Vincent Bank Bldg, James Street, Kingstown, St. Vincent and the Grenadines。</p> 

                <p class="mt-4">AT Global Markets (UK) Ltd. 获英国金融行为监管局 (FCA) 授权并受其监管，FCA 许可证号码为 760555。注册地址是：1st Floor, 32 Cornhill, London EC3V 3SG, United Kingdom。</p> 

                <p class="mt-4">ATFX Global Markets (CY) Ltd. 获塞浦路斯证券交易委员会 (CySEC) 授权并受其监管，许可证号码为 285/15。注册地址是：159 Leontiou A' Street, Maryvonne Building Office 204, 3022, Limassol, Cyprus。</p> 

                <p class="mt-4">AT Global Markets Intl. Ltd. 获毛里求斯共和国的金融服务委员会 (FSC) 授权并受其监管，许可证号码为 C118023331。注册地址是：G08, Ground Floor, The Catalyst, Silicon Avenue, 40 Cybercity, 72201 Ebène, Republic of Mauritius。</p> 

                <p class="mt-4">高风险投资警告：外汇保证金和差价合约交易具有高度投机性和高风险性，并不适合所有投资者。您可能损失部分或全部投资资金。因此，您的投资金额应该在您可承受的范围之内。您应当了解保证金交易相关的所有风险。请阅读标准业务条款中完整的风险披露政策。</p> 

                <p class="mt-4">受限制地区：AT GLOBAL MARKETS LLC 的网站信息不针对加拿大的卑诗省、魁北克省和萨斯喀彻温省地区、日本、朝鲜民主主义人民共和国（朝鲜）、伊朗、美国的居民；并且不向身处与发布或使用该信息有违当地法律法规的国家或管辖地之人发送或供其使用。</p> 
            </div>
            <div class="container py-5">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="left">© {{$store.state.projectName}}.COM. 版权所有 不得转载。</div>
                    <div class="right">
                        <a href="#" class="footerIco blueLink"><b-icon icon="facebook" /></a>
                        <a href="#" class="footerIco blueLink"><b-icon icon="instagram" /></a>
                        <a href="#" class="footerIco blueLink"><b-icon icon="twitter" /></a>
                        <a href="#" class="footerIco blueLink"><b-icon icon="linkedin" /></a>
                        <a href="#" class="footerIco blueLink"><b-icon icon="youtube" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>
export default {
  name: 'RegisterStep',
  data() {
    return {
    }
  },
}
</script>

<style scoped>
.footerLink {
    padding: 0 20px;
    border-right: 1px solid var(--blue);
    font-size: 13px;
    font-weight: bold;
}

.footerIco {
    font-size: 26px;
    margin-left: 15px;
}
</style>