function createEnclosingDiv() {
	const enclosingDiv = document.createElement('div');
	enclosingDiv.classList.add('comment');
	return enclosingDiv;
}

function createAvatar(initials) {
	const newAvatar = document.createElement('span');
	newAvatar.innerText = initials;
	newAvatar.classList.add('avatar');
	return newAvatar;
}

function createText(text) {
	const newText = document.createElement('span');
	newText.innerText = text;
	newText.classList.add('text');
	return newText;
}

function resetFields(){
	document.getElementById('initials').value = '';
	document.getElementById('commentText').value = '';
}

function addComment() {
 let commentsDiv = document.getElementById("commentSection");
	let initialsInput = document.getElementById("initials").value;
	let textInput = document.getElementById("commentText").value;

	let enclosingDiv = createEnclosingDiv();
	let avatar = createAvatar(initialsInput);
	let text = createText(textInput);

	enclosingDiv.appendChild(avatar);
	enclosingDiv.appendChild(text);
	commentsDiv.appendChild(enclosingDiv);
	resetFields();
}
