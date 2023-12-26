$(document).ready(function () {
  const carouselOptions = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: "auto",
    groupCells: true,
    setGallerySize: false,
    arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 60,
      y2: 45,
      x3: 15,
    },
    initialIndex: 0,
  };

  const $carousel = $("[data-carousel]").flickity(carouselOptions);
  const $slideContent = $(".slider__item");

  function advanceToNextSlide() {
    $carousel.flickity("next", true, false);
  }

  $carousel.on("select", function () {
    $slideContent.removeClass("mask");
    setTimeout(function () {
      $slideContent.addClass("mask");
    }, 15000);
  });

  $carousel.on("dragStart", function (event, pointer, moveVector) {
    const index =
      moveVector.x > 0
        ? $carousel.flickity("selectedIndex") + 1
        : $carousel.flickity("selectedIndex") - 1;

    $slideContent.eq(index).removeClass("mask");
  });

  setTimeout(function () {
    $slideContent.addClass("mask");
  }, 15000);

  setInterval(advanceToNextSlide, 15000);

  const progressBar = $(".carousel__progress div")[0];

  $carousel.on("scroll", function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + "%";
  });

  // Connect Button
  $("#connectBtn").on("click", function (event) {
    event.stopPropagation();
    const connectPage = $(".connectPage");
    connectPage.toggleClass("--active");

    if (connectPage.hasClass("--active")) {
      $("body").css("overflow", "hidden");
      $("body").append("<div class='overlay'></div>");
    } else {
      $("body").css("overflow", "");
      $(".overlay").remove();
    }
  });

  // Close modal when clicking outside
  $(document).on("click", function (event) {
    const connectPage = $(".connectPage");
    const connectBtn = $("#connectBtn");

    if (
      !connectPage.is(event.target) &&
      !connectBtn.is(event.target) &&
      connectPage.has(event.target).length === 0
    ) {
      connectPage.removeClass("--active");
      $("body").css("overflow", "");
      $(".overlay").remove();
    }
  });

  // Close modal when clicking cancel button
  $(".icon").on("click", function (event) {
    event.stopPropagation();
    $(".connectPage").removeClass("--active");
    $("body").css("overflow", "");
    $(".overlay").remove();
  });

  // Tabs
  $(".tab").on("click", function () {
    const tabs = $(".tab");
    const newsItem = $(".course__item-wrap .course__item .course__table");

    tabs.removeClass("active");
    $(this).addClass("active");

    const tabNumber = $(this).data("tabs");
    newsItem.removeClass("active");

    const selectedNews = $(`.new__item-${tabNumber}`);
    selectedNews.addClass("active");
  });

  // Tags
  $(".tag").on("click", function () {
    const tags = $(".tag");
    tags.removeClass("active");
    $(this).addClass("active");
  });

  // Search
  $(".search-input").on({
    focus: function () {
      $(".desktop__search-modal").addClass("active");
    },
    blur: function () {
      $(".desktop__search-modal").removeClass("active");
    },
  });
});
