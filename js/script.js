var test = {
	createHeader: function () {
		var el = document.createElement('h1');
		el.innerHTML = 'Тест по програмированию';
		var DOME1 = document.querySelector('body');
		DOME1.appendChild(el);
	}, 

	createUl: function () {
		var el = document.createElement ('ol');
		var DOME1 = document.querySelector('body');
		DOME1.appendChild(el);
	},

	createOl: function (inner, addClass) {
		var el = document.createElement('li');
		el.innerHTML = inner;
		el.className = addClass;
		var DOME1 = document.querySelector('ol');
		DOME1.appendChild(el);
	},

	createAnsver: function (ansver, DOM) {
		var input = document.createElement('input');
		var DOM1 = document.querySelector(DOM);
		DOM1.appendChild(input);
		input.setAttribute("type", "checkbox");
		var label = document.createElement('label');
		label.innerHTML = ansver;
		DOM1.appendChild(label);
	},

	createButton: function () {
		var el = document.createElement('button');
		el.innerHTML = 'Проверить';
		var DOME1 = document.querySelector('body');
		DOME1.appendChild(el);
	}
}

test.createHeader();
test.createUl();

for (var i = 1; i < 4; i++) {
	test.createOl('Вопрос ' + i, 'question' + i);
for (var j = 1; j < 4; j++) {
	test.createAnsver('Вариант '+ j, '.question' + i);
	}

}

test.createButton()
