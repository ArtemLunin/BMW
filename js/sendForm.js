const server = 'https://jsonplaceholder.typicode.com/posts2';

const sendData = (data, callBack, falseCallBack) => {
	const request = new XMLHttpRequest();
	request.open('POST', server);

	request.addEventListener('readystatechange', () => {
		// ждем, пока сервер не вернет статус 4, после этого обрабатываем ответ сервера
		if(request.readyState !== 4) return;
		if(request.status === 200 || request.status === 201) {
			const response = JSON.parse(request.responseText);
			callBack(response.id);
		} else {
			falseCallBack(request.statusText);
			throw new Error(request.status);
		}
	});
	request.send(data);
};

// получение форм на странице
const formElems = document.querySelectorAll('.form');


const formHandler = (form) => {
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		const data = {};
		// пройдемся по всем элементам формы
		for(const {name, value} of form.elements) {
			if(name) {
				data[name] = value;
			}
		}

		const smallElem = document.createElement('small');
		// отправка данных
		sendData(JSON.stringify(data), 
		(id) => {
			smallElem.textContent = 'Succesfully:' + id;
			smallElem.style.color = 'green';
			form.append(smallElem);
		},
		(err) => {
			smallElem.textContent = 'К сожалению, на сервере техничесике неполадки:' + err;
			smallElem.style.color = 'red';
			form.append(smallElem);
		});
		// очищаем форму
		form.reset();
	});
}

// навесим событие на все формы на странице
formElems.forEach(formHandler);
