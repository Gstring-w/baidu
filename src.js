function _loGin() {
    let str = ` <div class="login">

            <div class="wrp"></div>

            <div class="content">
                <div class="header1">
                    <div class="h-logo"></div>
                    <div class="h-title">用户名密码登录</div>
                </div>
                <div class="body">
                    <div class="user">
                        <input type="text" id="inputUser" style="outline: none">
                        <span class="close"></span>
                        <span class="closeW"></span>
                    </div>
                    <div class="pass">
                        <input type="password" id='inputPass'>
                    </div>

                    <div class="rember">
                        <input type="checkbox" checked>
                        <span>下次记得登录</span>
                    </div>
                    <div class="btn-login">登录</div>
                    <div class="btn-bottom">
                        <span class="btn-bottom-l">忘记密码？</span>
                        <span class="btn-bottom-r">短信验证登录</span>
                    </div>
                </div>
                <div class="bottom1">
                    <span class="bottom1-l">扫码登录</span>
                    <span class="bottom1-r">立即注册</span>
                </div>
            </div>
        </div>`;
    if (ele !== null) {
        $('.content').before(ele);
    } else {
        $('.content').before(str);
    }

}