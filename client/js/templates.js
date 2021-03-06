var jade = require('jade/runtime');
var i18n = require('i18next');
module.exports = {
"cams": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"tabs\"><div class=\"header\"><ul class=\"tab-links\"><li data-tab=\"cams\" class=\"active\"><a><i class=\"fa fa-home fa-2x\"></i></a></li><li data-tab=\"display\"><a><i class=\"fa fa-eye fa-2x\"></i></a></li><li data-tab=\"settings\"><a><i class=\"fa fa-gear fa-2x\"></i></a></li><li data-tab=\"console\"><a><span class=\"fa-stack\"><i class=\"fa fa-square fa-stack-2x\"></i><i class=\"fa fa-terminal fa-stack-1x fa-inverse\"></i></span></a></li><li data-tab=\"links\"><a><i class=\"fa fa-github fa-2x\"></i></a></li></ul></div><div class=\"tab-content\"><div id=\"cams\" class=\"tab active\"><p>Cams</p></div><div id=\"display\" class=\"tab\"><p>Display</p></div><div id=\"settings\" class=\"tab\"><p>Settings</p></div><div id=\"console\" class=\"tab\"><p>Console</p></div><div id=\"links\" class=\"tab\"><p>Other stuff</p></div></div><div class=\"tool-buttons\"><span class=\"minimize\"><a><i class=\"fa fa-compress\"></i></a></span><span class=\"close\"><a><i class=\"fa fa-close\"></i></a></span></div></div>");;return buf.join("");
},
"header": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<nav style=\"margin-bottom: 0\" class=\"navbar navbar-inverse\"><div class=\"navbar-header\"><a href=\"#contacts\" class=\"navbar-brand\">Contact manager</a></div><div id=\"bs-example-navbar-collapse-1\" class=\"collapse navbar-collapse\"><ul class=\"nav navbar-nav\"></ul></div></nav>");;return buf.join("");
},
"intro": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (content, i18n) {
buf.push("<div id=\"header\"><nav style=\"margin-bottom: 0\" class=\"navbar navbar-inverse\"><div class=\"navbar-header\"><a href=\"/\" class=\"navbar-brand\">Broviki</a></div><ul class=\"nav navbar-nav navbar-right\"><li><a id=\"login-wnd\" href=\"/login\">" + (jade.escape((jade_interp = i18n.t('Login')) == null ? '' : jade_interp)) + "</a></li><li><a id=\"signup-wnd\" href=\"/signup\">" + (jade.escape((jade_interp = i18n.t('Signup')) == null ? '' : jade_interp)) + "</a></li></ul></nav></div><div id=\"content\">" + (jade.escape((jade_interp = i18n.t(content)) == null ? '' : jade_interp)) + "</div>");}.call(this,"content" in locals_for_with?locals_for_with.content:typeof content!=="undefined"?content:undefined,"i18n" in locals_for_with?locals_for_with.i18n:typeof i18n!=="undefined"?i18n:undefined));;return buf.join("");
},
"login": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (i18n, login) {
buf.push("<div class=\"container\"><div id=\"login-form-container\" class=\"row clearfix\"><!-- img.displayed(src=\"/assets/img/logo.png\", alt=\"logo\")--><div class=\"col-md-5 well well-lg text-center\"><h1>" + (jade.escape((jade_interp = i18n.t('Login')) == null ? '' : jade_interp)) + "</h1><div><ul id=\"login-errors\" class=\"parsley-error-list\"></ul></div><form id=\"login-form\" data-validate=\"parsley\" class=\"form\"><fieldset><div class=\"control-group\"><div class=\"controls\"><input id=\"login-username-input\" type=\"text\" name=\"username\"" + (jade.attr("placeholder", i18n.t('Username'), true, false)) + (jade.attr("value", login, true, false)) + " data-required=\"true\" data-notblank=\"true\"/><span class=\"help-block\"></span></div></div><div class=\"control-group mb20\"><div class=\"controls\"><input id=\"login-password-input\" type=\"password\"" + (jade.attr("placeholder", i18n.t('Password'), true, false)) + " name=\"user_password\" value=\"\" data-required=\"true\" data-notblank=\"true\" data-rangelength=\"[5,25]\" class=\"input-medium\"/><span class=\"help-block\"></span></div></div><a id=\"login-btn\" href=\"#\" data-bypass=\"data-bypass\" class=\"btn btn-primary btn-lg\">Login</a></fieldset></form></div></div></div>");}.call(this,"i18n" in locals_for_with?locals_for_with.i18n:typeof i18n!=="undefined"?i18n:undefined,"login" in locals_for_with?locals_for_with.login:typeof login!=="undefined"?login:undefined));;return buf.join("");
},
"main": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div id=\"window\"></div>");;return buf.join("");
},
"signup": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (login) {
buf.push("<div class=\"container\"><div class=\"col-md-5 well well-lg text-center\"><h1>Signup</h1><div><ul id=\"signup-errors\" class=\"parsley-error-list\"></ul></div><form id=\"signup-form\" data-validate=\"parsley\" class=\"form\"><fieldset><div class=\"control-group\"><div class=\"controls\"><input id=\"signup-username-input\" type=\"text\" name=\"username\" placeholder=\"Username\"" + (jade.attr("value", login, true, false)) + " data-required=\"true\" data-notblank=\"true\"/><span class=\"help-block\"></span></div></div><div class=\"control-group\"><div class=\"controls\"><input id=\"signup-password-input\" type=\"password\" placeholder=\"Password\" name=\"user_password\" value=\"\" data-required=\"true\" data-notblank=\"true\" data-rangelength=\"[5,25]\" class=\"input-medium\"/><span class=\"help-block\"></span></div></div><div class=\"control-group mb20\"><div class=\"controls\"><input id=\"signup-password-confirm-input\" type=\"password\" placeholder=\"Confirm Password\" name=\"user_password\" value=\"\" data-required=\"true\" data-notblank=\"true\" data-rangelength=\"[5,25]\" data-equalto=\"#signup-password-input\" class=\"input-medium\"/><span class=\"help-block\"></span></div></div><a id=\"signup-btn\" href=\"#\" data-bypass=\"data-bypass\" class=\"btn btn-primary btn-lg\">Signup</a></fieldset></form></div></div>");}.call(this,"login" in locals_for_with?locals_for_with.login:typeof login!=="undefined"?login:undefined));;return buf.join("");
},
"test": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (test) {
buf.push("<div>test template " + (jade.escape((jade_interp = test) == null ? '' : jade_interp)) + "</div><button class=\"login\">login</button>");}.call(this,"test" in locals_for_with?locals_for_with.test:typeof test!=="undefined"?test:undefined));;return buf.join("");
}};
