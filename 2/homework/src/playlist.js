/* Initialization */
const URL_GET_TRACK = 'https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json'
const IMAGE_HEIGHT = 300 /* Choices: 640, 300, 64 */
init()

async function init() {
	const trackData = await getTrack()
	await renderPlaylist(trackData)
}

function handleSubmit() {
	let title = document.querySelector('#title').value
	let description = document.querySelector("#description").value
	if (title !== '' && description !== '') {
		alert(`Title: ${title} Description: ${description}`)
	} else {
		alert('You have not defined the title and description!')
	}                                                                                                                                       
}

function getTrack() {
	function onFetchSuccessful(response) {
		console.log(response.data)
		return response.data
	}

	function onFetchError(error) {
		alert(`Error: ${error}`)
	}

	return axios.get(URL_GET_TRACK)
		.then(onFetchSuccessful)
		.catch(onFetchError)
}

// getTrack async/await
// async function anotherGetTrack() {
// 	try {
// 		const response = await axios.get(URL_GET_TRACK)
// 		return response.data
// 	} catch(e) {
// 		alert(error)
// 	}
// }

function findSmallImage(trackData) {
	let images = trackData.album.images
	let url = '../public/smiley.png'

	images.forEach((image) => {
		if (image.height === IMAGE_HEIGHT) {
			url = image.url
		}
	})

	return url
}

async function renderPlaylist(trackData) {
	const playlistWrapper = document.querySelector('.wrapper')
	let IMAGE_URL = findSmallImage(trackData)

	playlistWrapper.innerHTML += `
		<img src='${IMAGE_URL}' class="myImage">
		<p>Track title: ${trackData.name}</p>
		<p>Artist: ${trackData.artists[0].name}</p>
		<p>Album: ${trackData.album.name}</p>
		<button>Select</button>
	`
}
