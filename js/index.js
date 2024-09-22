"use strict";

//?<---- nav-bar & back to top ----->
let aboutOffset = $("#about").offset().top;
let navHeight = $("nav").innerHeight();

$(window).on("scroll", function () {
  if ($(window).scrollTop() > aboutOffset - navHeight / 2) {
    $("nav").css("background-color" , "#e65f78")
    $(".backToTop").fadeIn();
    $(".backToTop").css("display", "flex");
  } else {
    $("nav").css("background-color" , "transparent")
    $(".backToTop").fadeOut();
    $(".backToTop").css("display", "none");
  }
});

$(".backToTop").on("click", function () {
  $(window).scrollTop(0);
});
//?<---- nav-bar & back to top ----->

//?<---- loading & spinner ----->
$(function () {
  $(".loader").fadeOut(1000, function () {
    $(".loading").slideDown(1000, function () {
      $("body").css("overflow", "auto");

      $(".loading").remove();
    });
  });
});
//?<---- loading & spinner ----->
