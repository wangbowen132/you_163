// 将运算符加载函数定义的前面，是将函数看做一个整体
// ! function(win, lib){}()
// 等同于 (function(win, lib){})(), 属于立即执行函数的一种写法
! function(win, lib) {
	// 根据DOM可视宽度调整字体大小
	var flexible = lib.flexible || (lib.flexible = {});
	function a() {
	  if (parseInt(document.documentElement.clientWidth) > 720) {
		document.documentElement.style.fontSize = 720 / 7.5 + "px";
	  } else {
		document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + "px";
	  }
	}
	
	var b = null;
	flexible.dpr = 1;
	flexible.rem = 100;
	
	// 提供了 px 和 rem 转换的方法
	flexible.rem2px = function(d) {
		var val = parseFloat(d * 75 / 100) * this.rem;
		if (typeof d === 'string' && d.match(/rem$/)) {
			val += 'px';
		}
		return val;
	}
	flexible.px2rem = function(d) {
		var val = parseFloat(d) / this.rem;
		if (typeof d === 'string' && d.match(/px$/)) {
			val += 'rem';
		}
		return val;
	}
	// 监听窗口大小变化, 调整字体大小
	win.addEventListener("resize", function() {
		clearTimeout(b);
		b = setTimeout(a, 300);
	}, !1);
	a();
}(window, window['lib'] || (window['lib'] = {}));

// 禁止微信客户端调整字体大小的兼容写法
(function() {
	if (typeof window.WeixinJSBridge == "object" && typeof window.WeixinJSBridge.invoke == "function") {
	  handleFontSize();
	} else {
	  document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
	}
	function handleFontSize() {
		window.WeixinJSBridge.invoke('setFontSizeCallback', {
			'fontSize': 0
		});
		window.WeixinJSBridge.on('menu:setfont', function() {
			window.WeixinJSBridge.invoke('setFontSizeCallback', {
				'fontSize': 0
			});
		});
	}
})();