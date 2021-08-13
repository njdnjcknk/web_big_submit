$(function() {
    $("#link_reg").on("click", function() {
        $(".login-box").hide().siblings(".reg-box").show()
    })
    $("#link_login").on("click", function() {
            $(".reg-box").hide().siblings(".login-box").show()
        })
        // 从layui里面获取from
    var form = layui.form
    var layer = layui.layer
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
        var data = {
            username: $(".reg-box [name=username]").val(),
            password: $(".reg-box [name=password]").val(),
            repassword: $(".reg-box [name=repassword]").val()
        }
        $.ajax({
            method: "POST",
            url: "/api/reg",
            data: data,
            success: function(res) {
                console.log(res);
                if (res.code !== 0) return layer.msg(res.message)
                layer.msg(res.message)
                $("#link_login").click()
            }
        });
    })
    $("#form_login").submit(function(e) {
        // console.log($(this).serialize());
        e.preventDefault()
        $.ajax({
            method: "post",
            url: "/api/login",
            data: $(this).serialize(),
            success: function(res) {
                console.log(res);
                if (res.code !== 0) return layer.msg(res.message)
                layer.msg(res.message)
                localStorage.setItem("token", res.token)
                window.open("/index.html", "_blank");
            }
        });
    })
});