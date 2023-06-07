$(function () {
    // 偵測目前 div 的 font-size
    // let currentSize = parseInt($('div').css('fontSize'))
    // alert(currentSize)

    $('#shrink').click(function () {
        changeSize('small')
    })
    $('#enlarge').click(function () {
        changeSize('big')
    })
})