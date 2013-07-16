/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-menu' : '&#xe000;',
			'icon-arrow-down' : '&#xe001;',
			'icon-arrow-up' : '&#xe002;',
			'icon-arrow-right' : '&#xe003;',
			'icon-arrow-left' : '&#xe004;',
			'icon-facebook' : '&#xe005;',
			'icon-twitter' : '&#xe006;',
			'icon-share' : '&#xe007;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};