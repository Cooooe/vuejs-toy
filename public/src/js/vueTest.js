/**
 * Created by KangHyungWon on 2017. 4. 11..
 */
var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello View!'
	}
});

/**
 * Created by KangHyungWon on 2017. 4. 11..
 */
var app2 = new Vue({
	el: '#app2',
	data: {
		message: 'You loaded this page on ' + new Date()
	}
});

var app3 = new Vue({
	el:'#app3',
	data: {
		message: 'Hello Vue!'
	}
});