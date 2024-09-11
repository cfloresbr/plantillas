jQuery('#ir-arriba').fadeOut();

jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop()) {
        jQuery('#ir-arriba').fadeIn();
    } else {
        jQuery('#ir-arriba').fadeOut();
    }
});

jQuery("#ir-arriba").click(function() {
    jQuery("html, body").animate({ scrollTop: 0 }, 0);
});