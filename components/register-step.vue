<template>
  <div class="container-fluid py-5">
        <div class="container">
            <h1 class="text-center">注册账户</h1>
            <div class="row justify-content-center mt-5">
                <div class="col-md-4">
                    <div class="registerBlock">
                        <div class="num">1.</div>
                        <div class="title">开设您的账户
                            <!-- <span class="arrow">
                                <b-icon icon="arrow-right"></b-icon>
                            </span> -->
                        </div>
                        <div class="shortLine"></div>
                        <p class="desc">填写真实交易账户申请表，一旦完成身份验证，我们将立即创建您的账户。</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="registerBlock">
                        <div class="num">2.</div>
                        <div class="title">向您的账户注资
                            <!-- <span class="arrow">
                                <b-icon icon="arrow-right"></b-icon>
                            </span> -->
                        </div>
                        <div class="shortLine"></div>
                        <p class="desc">用信用卡、电子钱包或银行转账存入资金，开始交易。</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="registerBlock">
                        <div class="num">3.</div>
                        <div class="title">开始交易</div>
                        <div class="shortLine"></div>
                        <p class="desc">在任何设备，包括个人电脑、安卓、iPad和iPhone或通过网页版平台交易。</p>
                    </div>
                </div>
            </div>
            <div class="text-center mt-5">
                <button class="btn btn-success btn-lg mx-md-4 mx-1">开设模拟账号</button>
                <button class="btn btn-primary btn-lg mx-md-4 mx-1">开设真实账号</button>
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
.registerBlock .num{
    font-size: 65px;
    font-weight: bold;
    color: var(--orange);
}
.registerBlock .title{
    font-weight: bold;
    position: relative;
}
.registerBlock .arrow{
    position: absolute;
    right: 0;
    background: rgba(242,122,72,0.1);
    color: var(--orange);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
.registerBlock .shortLine{
    margin: 20px 0;
    width: 40px;
    height: 1px;
    background-color: var(--orange);
}
</style>