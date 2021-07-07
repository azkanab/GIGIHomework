function handleSubmit() {
	let title = document.querySelector('#title').value
	let description = document.querySelector("#description").value
	if (title !== '' && description !== '') {
		alert(`Title: ${title} Description: ${description}`)
	} else {
		alert('You have not defined the title and description!')
	}                                                                                                                                       
}