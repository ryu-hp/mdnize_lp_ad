jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
// アコーディオンメニューの開閉動作
  $('.is-Accordion').on('click', function(){
    $(this).toggleClass('is-active');
    $(this).next('.accordionItem__description').toggleClass('is-open');
  });

})