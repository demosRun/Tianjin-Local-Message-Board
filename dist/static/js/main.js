$(function () {
  // 判断是否手机屏幕
 if (window.screen.width < window.screen.height) {
   document.body.classList.add('min')
   // 手机屏幕下缩放路径卡片
   $('.path-box .card').css('transform', 'scale(' + (window.screen.width - 20) / 980  + ')')
 }
 // 手势控制
})
