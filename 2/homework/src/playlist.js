/* Initialization */
const URL_GET_ALBUMS = 'https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json'

getAlbums()

function handleSubmit() {
	let title = document.querySelector('#title').value
	let description = document.querySelector("#description").value
	if (title !== '' && description !== '') {
		alert(`Title: ${title} Description: ${description}`)
	} else {
		alert('You have not defined the title and description!')
	}                                                                                                                                       
}

function getAlbums() {
	axios.get(URL_GET_ALBUMS)
		.then(response => {
			console.log(response)
		})
		.catch(error => {
			alert(`Error: ${error}`)
		})
}