/* =====================================================
   main.js — jQuery Interactions
   (loaded after jQuery CDN and script.js)

   jQuery Interaction 1: Dark / Light mode toggle
     - toggleClass('light-mode') on body
     - text() to update button label

   jQuery Interaction 2: Animated skill bars
     - on('click') triggers css() width update
     - toggleClass('animated') tracks state
     - text() updates button label

   jQuery Interaction 3 (bonus): Project filter
     - show() / hide() on .project-card elements
     - addClass() / removeClass() on filter buttons

   jQuery Interaction 4 (bonus): Active nav link
     - on('click') + addClass() / removeClass()
     - Scroll-based active state update
   ===================================================== */

$(document).ready(function () {

  // -----------------------------------------------
  // JQUERY INTERACTION 1: Dark / Light mode toggle
  // Uses: toggleClass(), text(), on('click')
  // -----------------------------------------------
  $('#theme-toggle').on('click', function () {
    $('body').toggleClass('light-mode');

    var isLight = $('body').hasClass('light-mode');

    // text() — update button label
    $(this).text(isLight ? '\u263E Dark Mode' : '\u2600 Light Mode');
  });

  // -----------------------------------------------
  // JQUERY INTERACTION 2: Animated skill bars
  // Uses: on('click'), each(), css(), toggleClass(), text()
  // -----------------------------------------------
  $('#animate-skills-btn').on('click', function () {
    var alreadyAnimated = $(this).hasClass('animated');

    if (!alreadyAnimated) {
      // Animate each bar to its data-level value
      $('.skill-bar-fill').each(function () {
        var level = $(this).data('level');
        $(this).css('width', level + '%');
      });
      // toggleClass + text() to update state
      $(this).addClass('animated').text('Reset Bars');
    } else {
      // Reset all bars back to 0
      $('.skill-bar-fill').css('width', '0%');
      $(this).removeClass('animated').text('Show Progress');
    }
  });

  // -----------------------------------------------
  // JQUERY INTERACTION 3 (BONUS): Project filter
  // Uses: on('click'), show(), hide(),
  //       addClass(), removeClass()
  // Note: Projects are rendered by script.js fetch,
  // so we use $(document).on() for dynamic elements
  // -----------------------------------------------
  $(document).on('click', '.filter-btn', function () {
    var filter = $(this).data('filter');

    // addClass / removeClass on filter buttons
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    if (filter === 'all') {
      $('.project-card').show();
    } else {
      // hide all, then show matching category
      $('.project-card').hide();
      $('.project-card[data-category="' + filter + '"]').show();
    }
  });

  // -----------------------------------------------
  // JQUERY INTERACTION 4 (BONUS): Active nav link
  // Uses: on('click'), addClass(), removeClass()
  // -----------------------------------------------
  $('.nav-links a').on('click', function () {
    $('.nav-links a').removeClass('active');
    $(this).addClass('active');
  });

  // Auto-highlight nav link based on scroll position
  $(window).on('scroll', function () {
    var scrollPos = $(this).scrollTop() + 80;

    $('section').each(function () {
      var sectionTop = $(this).offset().top;
      var sectionId  = $(this).attr('id');

      if (scrollPos >= sectionTop) {
        $('.nav-links a').removeClass('active');
        $('.nav-links a[href="#' + sectionId + '"]').addClass('active');
      }
    });
  });

});
