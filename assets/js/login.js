$(function() {
    $("#link_reg").on("click", function() {
        $(".login-box").hide().siblings(".reg-box").show()
    })
    $("#link_login").click(function() {
            $(".login-box").show().siblings(".reg-box").hide()
        })
        // 从layui里面获取from
    var form = layui.form
        // 通过from.verify()函数自定义规则
    form.verify({
        // 定义了一个pwd的规则
        pwd: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        // 检验俩次密码是否一致
        repwd: function(value) {
            var pwd = $(".reg-box [name=password]").val()
            if (pwd !== value) {
                return "俩次密码不一致"
            }
        }
    })
})