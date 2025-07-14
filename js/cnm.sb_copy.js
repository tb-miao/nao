// 返回桌面的时候显示
((function() {
		var callbacks = [],
			timeLimit = 50,
			open = false;
		setInterval(loop, 1);
		return {
			addListener: function(fn) {
				callbacks.push(fn);
			},
			cancleListenr: function(fn) {
				callbacks = callbacks.filter(function(v) {
					return v !== fn;
				});
			}
		}

}))
document.addEventListener('contextmenu', function(event) {

    event.preventDefault();


});
// 禁止右键菜单
document.oncontextmenu = function(){ return false; };
// 禁止文字选择
document.onselectstart = function(){ return false; };
// 禁止复制
document.oncopy = function(){ return false; };
// 禁止剪切
document.oncut = function(){ return false; };
// 禁止粘贴
document.onpaste = function(){ return false; };
// 禁止拖放
document.ondragstart = function(){ return false; };
// 禁止F12调试
document.onkeydown = function(event){
    if(event.keyCode == 123){
        return false;
    }
};
// 禁止保存页面
document.onbeforeunload = function(){ return false; };