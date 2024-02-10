//create li with timezones
export function createElementLi(arr) {
	document.getElementById("timezone-options").innerHTML = "";
	arr.map(el => {
		const newList = document.createElement('li');
		newList.innerText = el.zoneName;
		newList.id = el.id;
		if (el.isOnLocalTimebox === true) newList.classList.add('active');
		return document.getElementById("timezone-options").append(newList)
	})
}