/*!
 * jquery.fixer.js 0.0.3 - https://github.com/yckart/jquery.fixer.js
 * Fix elements as `position:sticky` do.
 *
 *
 * Copyright (c) 2013 Yannick Albert (http://yckart.com/) | @yckart
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/07/02
 **/

;(function($, window) {

    var $win = $(window);
    var defaults = {
        gap: 0,
        horizontal: false,
        isFixed: $.noop
    };

    var supportSticky = function(elem) {
        elem.style.cssText = 'position: -webkit-sticky; position: -moz-sticky; position: -o-sticky; position: -ms-sticky; position: sticky;'
        return elem.style.position !== '';
    };

    $.fn.fixer = function(options) {
        options = $.extend({}, defaults, options);
        var hori = options.horizontal,
            cssPos = hori ? 'left' : 'top';

        return this.each(function() {
            var style = this.style,
                $this = $(this),
                elemSize = $this[hori ? 'width' : 'height'](),
                $parent = $this.parent(),
                parentSize = $parent[hori ? 'width' : 'height']();

            if (supportSticky(this)) {
                return style[cssPos] = options.gap + 'px';
            }

            $win.on('scroll', function() {
                var scrollPos = $win[hori ? 'scrollLeft' : 'scrollTop'](),
                    parentPos = $parent.offset()[cssPos];

                if (scrollPos >= parentPos - options.gap && (parentSize + parentPos - options.gap) >= (scrollPos + elemSize)) {
                    style.position = 'fixed';
                    style[cssPos] = options.gap + 'px';
                    options.isFixed();
                } else if (scrollPos < parentPos) {
                    style.position = 'absolute';
                    style[cssPos] = 0;
                } else {
                    style.position = 'absolute';
                    style[cssPos] = parentSize - elemSize + 'px';
                }
            }).scroll();
        });
    };

}(jQuery, this));

$('.side').fixer({
    gap: 10
});