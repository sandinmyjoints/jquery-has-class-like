// Select elements by testing each value of an element's classes for `pattern`.
(function($) {
  $.fn.hasClassLike = function(pattern) {
    return $(this).hasAttrLike("class", pattern);
  };
}(jQuery));
