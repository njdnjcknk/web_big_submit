$(function() {
    $("#link-reg").on("click", function() {
        $(".login-box").hide().siblings(".reg-box").show()
    })
    $("#link-login").on("click", function() {
            $(".reg-box").hide().siblings(".login-box").show()
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
    });

    $("#form_reg").on("submit", function(e) {

        e.preventDefault()
        $.ajax({
            method: "POST",
            url: " http://www.liulongbin.top:3008/api/reg",
            data: {
                username = $("#form_reg [name=username]").val(),
                password = $("#form_reg [name=password]").val(),
                repassword = $("#form_reg [name=repassword]").val()
            },
            success: function(res) {
                console.log(res);
            }
        });
    })
});