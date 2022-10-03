$(function () {
    
// 背景アニメーション
particlesJS("particles-js", {
    particles: {
      number: {
        value: 50, //この数値を変更するとホタルの数が増減できる
        density: {
          enable: true,
          value_area: 1602.3971861905397
        }
      },
      color: {
        value: "#ffc9d2" //色
      },
      shape: {
        type: "circle", //形状はcircleを指定
        stroke: {
          width: 0
        }
      },
      opacity: {
        value: 1,
        random: true, //透過をランダムに
        anim: {
          enable: false,
          speed: 1.10115236356258881,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 4.005992965476349,
        random: true, //サイズをランダムに
        anim: {
          enable: true,
          speed: 24.345709068776642,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        enable: true,
        speed: 2, //この数値を小さくするとゆっくりな動きになる
        direction: "none", //方向指定なし
        random: true, //動きはランダムに
        straight: false, //動きをとどめない
        out_mode: "out", //画面の外に出るように描写
        bounce: false, //跳ね返りなし
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false
        },
        onclick: {
          enable: false
        },
        resize: true
      }
    },
    retina_detect: true
  });


    // ヘッダーナビゲーション
    $(".navhead").on("click", function () {
        $(this).next(".nv").slideToggle(1000);
        $(this).toggleClass("on");
    })

    // ハンバーガーメニュー
    $(function () {

        /* オプション設定 */
        const options = {
            slide: 'top', /* スライド方向（none, top, bottom, left, right） */
            duration: 300, /* 表示アニメーション速度（ms） */
            weight: 'regular', /* アイコン太さ（regular, light, solid） */
            dark: true, /* 画面の暗転（true, false） */
        };

        const icons = {
            barsRegular: '<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"></path></svg>',
            barsLight: '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"></path></svg>',
            barsSolid: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>',
            timesRegular: '<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="times" class="svg-inline--fa fa-times fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path></svg>',
            timesLight: '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" class="svg-inline--fa fa-times fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg>',
            timesSolid: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>',
        };
        const $nav = $('.hamburger-nav');
        const $button = $('.hamburger-button');
        let navHeight = $nav.outerHeight();
        let navWidth = $nav.outerWidth();
        const weight = options.weight[0].toUpperCase() + options.weight.substring(1);
        const barsIcon = icons['bars' + weight];
        const timesIcon = icons['times' + options.weight[0].toUpperCase() + options.weight.substring(1)];

        /* overlay（z-index対策） */
        $nav.parent().append('<div id="hamburger-overlay"></div>');
        const $overlay = $('#hamburger-overlay');
        $overlay.css('transition-duration', (options.duration / 1000) + 's');
        if (!options.dark) {
            $overlay.css('background-color', 'transparent');
        }

        /* メニュー収納 */
        prepare();
        setTimeout(() => {
            prepare();
        }, 0)
        $(window).on('resize', function () {
            prepare();
        });

        /* クリック処理 */
        let isOpen = false;
        $button.on('click', function () {
            isOpen ? close() : open();
            isOpen = !isOpen;
        });

        /* Prepare */
        function prepare() {
            navHeight = $nav.outerHeight(); /* responsive対応 */
            navWidth = $nav.outerWidth(); /* responsive対応 */
            close();
            setTimeout(() => {
                $nav.css('display', 'block');
                $nav.css('transition-duration', (options.duration / 1000) + 's');
            }, 0); /* 表示される不具合対策 */
        }
        /* Close */
        function close() {
            if (options.slide === 'none') {
                $nav.css('opacity', 0);
            } else {
                if (options.slide === 'top' || options.slide === 'bottom') {
                    $nav.css('left', 0); // 要検討
                    $nav.css(options.slide, - navHeight);
                } else {
                    $nav.css('top', 0); // 要検討
                    $nav.css(options.slide, - navWidth);
                }
            }
            $button.html(barsIcon);
            $overlay.css('opacity', 0);
            $button.removeClass('close');
        }
        /* Open */
        function open() {
            if (options.slide === 'none') {
                $nav.css('opacity', 1);
                $nav.css('top', 0);
            } else {
                $nav.css(options.slide, 0);
            }
            $button.html(timesIcon);
            $overlay.css('opacity', 1);
            $button.addClass('close');
        }
    });


    // hoverコンテンツ
    $('.hover-fade1').each(function () {
        var off_img = $(this).find('img').attr('src').replace('_off', '_on');
        var on_img = $('<img src="' + off_img + '" alt="" style="position:absolute; opacity:0;" />');
        $(this).find('img').before(on_img);
        $(this).find('img').hover(function () {
            $(this).stop().animate({ 'opacity': '1' }, 400);
        }, function () {
            $(this).stop().animate({ 'opacity': '0' }, 300);
        }
        )
    });


    $('.hover-fade2').each(function () {
        var off_img = $(this).find('img').attr('src').replace('_off', '_on');
        var on_img = $('<img src="' + off_img + '" alt="" style="position:absolute; opacity:0;" />');
        $(this).find('img').before(on_img);
        $(this).find('img').hover(function () {
            $(this).stop().animate({ 'opacity': '1' }, 400);
        }, function () {
            $(this).stop().animate({ 'opacity': '0' }, 300);
        }
        )
    });

    $('.hover-fade3').each(function () {
        var off_img = $(this).find('img').attr('src').replace('_off', '_on');
        var on_img = $('<img src="' + off_img + '" alt="" style="position:absolute; opacity:0;" />');
        $(this).find('img').before(on_img);
        $(this).find('img').hover(function () {
            $(this).stop().animate({ 'opacity': '1' }, 400);
        }, function () {
            $(this).stop().animate({ 'opacity': '0' }, 300);
        }
        )
    });

    $('.hover-fade4').each(function () {
        var off_img = $(this).find('img').attr('src').replace('_off', '_on');
        var on_img = $('<img src="' + off_img + '" alt="" style="position:absolute; opacity:0;" />');
        $(this).find('img').before(on_img);
        $(this).find('img').hover(function () {
            $(this).stop().animate({ 'opacity': '1' }, 400);
        }, function () {
            $(this).stop().animate({ 'opacity': '0' }, 300);
        }
        )
    });

    // スライド
    $('.slider-1').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    
});
