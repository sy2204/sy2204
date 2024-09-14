
// 登录界面
const inputs = document.querySelectorAll('.input-field');
const toggle_btn = document.querySelectorAll('.toggle');
const sign = document.querySelector('#sign');
const bullets = document.querySelectorAll('.bullets span');
const carouselImage = document.querySelectorAll('.images-carousel');

inputs.forEach(inp => {
    inp.addEventListener('focus', () => {
        inp.classList.add('active');
    });

    inp.addEventListener('blur', () => {
        if (inp.value != '') return;
        inp.classList.remove('active');
    })
})

toggle_btn.forEach(btn => { 
    btn.addEventListener('click', () => {
        sign.classList.toggle('sign-up-mode');
    })
});

function moveSlider() {
    let index = this.dataset.value;
    let currentImg = document.querySelector(`.carousel-${index}`);
    carouselImage.forEach(carouselImg => {
        carouselImg.classList.remove('carousel-show');
    });
    currentImg.classList.add('carousel-show');
    const textSlider = document.querySelector('.text-group');
    textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`
    bullets.forEach(bullet => {
        bullet.classList.remove('bullet-active');
    })  
    this.classList.add('bullet-active');
}
bullets.forEach(bullet => {
    bullet.addEventListener('click', moveSlider);
})


// 验证登录

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".sign-in-form").addEventListener("submit", function (event) {
        event.preventDefault();
    
        const name = document.getElementById("name").value;
        const password = document.getElementById("password").value;

        // 简单的账号、密码验证逻辑
        if (validateInput(name, password)) {
            alert("登录成功！点击确定以跳转");
            window.location.href = "admin.html"; // 跳转到目标页面
        } else {
            alert("账号或密码不正确，请重新输入！");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".sign-up-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("暂未开放注册，请联系我们获得账号！");
    });
});

    function validateInput(username, password) {
        // 简单验证逻辑，可以根据需要修改
        const usernamePattern = /^[a-zA-Z0-9]{4,10}$/; // 账号为4-10位字母或数字
        const passwordPattern = /^[a-zA-Z0-9]{6,12}$/; // 密码为6-12位字母或数字

        return usernamePattern.test(username) && passwordPattern.test(password);
    }
