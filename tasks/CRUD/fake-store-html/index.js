let products = []

fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => {
    products = data
    displayProducts(products)
})

function highlightText(text, term){
    if(!term) return text
    const regex = new RegExp(`(${term})`, "gi")
    return text.replace(regex,  `<mark class="bg-yellow-300">$1</mark>`)
}

function displayProducts(items){
    const container = document.getElementById("products")
    container.innerHTML = ""

    const searchTerm = document.getElementById("products-search").value

    items.forEach(product => {
        const card = document.createElement("div")
        card.className = "bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-xl transition"

        const highlightedTitle = highlightText(product.title, searchTerm)

        card.innerHTML = `
            <img src="${product.image}" class="h-40 object-contain mb-4">
            <h4 class="font-semibold text-gray-800 text-sm mb-2">${highlightedTitle}</h4>
            <p class="text-blue-600 font-bold">$${product.price}</p>
            
        `
        container.appendChild(card)
    })
}

const searchInput = document.getElementById("products-search")
searchInput.addEventListener("input", function(){
    const searchItem = searchInput.value.toLowerCase()
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchItem))
    displayProducts(filteredProducts)
})