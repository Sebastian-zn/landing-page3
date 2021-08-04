const btn = document.getElementById('btt-button');

window.onscroll = () => {
  onScroll();
}

function onScroll() {
  if (document.body.scrollTop >= 40 || document.documentElement.scrollTop >= 40) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
}

function backToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

$(function () {
  menu = $('nav ul');

  $('#openup').on('click', function (e) {
    e.preventDefault(); menu.slideToggle();
  });

  $(window).resize(function () {
    var w = $(this).width();

    if (w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

  $('nav li').on('click', function (e) {
    var w = $(window).width();

    if (w < 480) {
      menu.slideToggle();
    }
  });
  $('.open-menu').height($(window).height());
});