const search = document.getElementById('search-btn')
const remove = document.getElementById('delete-btn')
const gifContainer = document.querySelector('.giphy-container')

function randomNum(limit) { 
     return Math.floor(Math.random() * limit)
}

function getSearchTerm(event) {
    event.preventDefault()
    const searchTerm = document.querySelector('#search-term').value
    searchGify(searchTerm)
}

async function searchGify(searchTerm) {
    const res = await axios.get("http://api.giphy.com/v1/gifs/search", { params: {
            api_key: "FtbMmNwshxlB0AmP0gRnzZyyaV430ruS",
            q: searchTerm,
        }
    })
    const indexNum = randomNum(res.data.data.length)
    const url = res.data.data[indexNum].images.original.url
    appendGif(url)
}

function appendGif(url) {
    const newImg = document.createElement('img')
    newImg.src = url
    newImg.className = "gif"
    gifContainer.appendChild(newImg)
}

function removeGifs() {
    const gifs = Array.from(document.querySelectorAll('.gif'))
    for( let gif of gifs) {
        gif.remove()
    }
} 

search.addEventListener('click', getSearchTerm)
remove.addEventListener('click', removeGifs)