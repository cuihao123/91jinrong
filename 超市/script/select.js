$(document).delegate(".ui-select", "mouseenter", function() {
    ({els: {root: $(this),valuebar: $(this).find(".select-valueBar"),input: $(this).find("input[type='hidden']"),text: $(this).find(".select-text"),list: $(this).find(".select-list"),item: $(this).find(".select-item")},options: {eventType: $(this).data("option-event") ? $(this).data("option-event") : "click",isInput: $(this).data("option-input")},init: function() {
            return this.bind(), this.input(), this
        },bind: function() {
            var t = this;
            t.els.root.delegate(t.els.valuebar.selector, t.options.eventType, function(e) {
                t.els.root.css("position", "relative"), t.els.list.show();
                var i = t.els.list.height(), n = $(window).height() - e.pageY;
                i > n && t.els.root.addClass("ui-select-bottom")
            }), t.els.root.delegate(t.els.item.selector, "click", function() {
                var e = $(this).data("type");
                if ("input" != e) {
                    var i = $(this).text(), n = $(this).data("value"), a = t.els.text[0].tagName;
                    "INPUT" == a ? t.els.text.val(n) : t.els.text.text(i), t.els.text.focus(), t.els.input.val(n), t.els.input.attr("check-status", "yes"), $(this).parents("[data-field]").find(".error").hide().html("")
                } else
                    t.els.text.val(""), t.els.text.focus();
                t.els.item.removeClass("select-active"), $(this).addClass("select-active"), t.els.root.css("position", "static"), t.els.list.hide()
            }), t.els.item.attr("data-css-hover", "select-hover")
        },input: function() {
            var t = this;
            t.els.root.delegate(t.els.text.selector, "keyup", function() {
                t.els.input.val($(this).val())
            })
        }}).init()
}), $(document).delegate(".ui-select", "mouseleave", function() {
    $(this).css("position", "static"), $(this).find(".select-list").hide()
})