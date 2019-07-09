$(function () {
  // 判断是否手机屏幕
  if (window.screen.width < window.screen.height) {
    document.body.classList.add('min')
    // 手机屏幕下缩放路径卡片
    $('.path-box .card').css('transform', 'scale(' + (window.screen.width - 20) / 980  + ')')
    $('.page-3-2 .swiper-card').css('transform', 'scale(' + (window.screen.width - 50) / 980  + ')')
    // 手势控制
    var start = null
    var moveY = null
    // 当前页面序号
    var pageIndex = 0
    $('body').on('touchstart', function (e) {
      start = e.originalEvent.targetTouches[0].screenY
    })
    $('body').on('touchmove', function (e) {
      e.preventDefault()
      moveY = e.originalEvent.targetTouches[0].screenY - start
    })
    $('body').on('touchend', function (e) {
      // var move = e.originalEvent.targetTouches[0].screenY - start
      // console.log(pageIndex)
      if (moveY < -60) {
        if (pageIndex >= 6) return
        pageIndex++
        // 切换下一页
        $('.home').css('top', -pageIndex * 100 + 'vh')
      } else if (moveY > 60) {
        if (pageIndex == 0) return
        pageIndex--
        $('.home').css('top', -pageIndex * 100 + 'vh')
      }
      start = moveY = 0
    })
  }
 
})
