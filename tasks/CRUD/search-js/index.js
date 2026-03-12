// ✅ Selectors now match the fixed HTML
const inputs = document.querySelectorAll(".form-input")
const form = document.getElementById("main-form")
const tableBody = document.getElementById("table-body") // ✅ Changed from products-list

const data = []

form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    let newRowData = {}
    inputs.forEach(input => {
        newRowData[input.name] = input.value
    })
    
    data.push(newRowData)
    showData(data)
})

const totalDiv = document.getElementById("total-div")

function showData(data) {
    tableBody.innerHTML = "" 
    inputs.forEach(input => { input.value = "" })
    totalDiv.innerText = "Total"
    let total = 0;
    // in case user searched for something...
    const searchTerm = document.getElementById("search-input").value
    data.forEach((el, index) => {
        total = +el.count * (+el.price + +el.taxes + +el.ads - +el.discount)
        const highlightedTitle = highlightText(el.title, searchTerm)
        totalDiv.innerText = total
        let cols = `
            <td class="px-4 py-3">${index + 1}</td>
            <td class="px-4 py-3">${highlightedTitle}</td>
            <td class="px-4 py-3">${el.price}</td>
            <td class="px-4 py-3">${el.taxes}</td>
            <td class="px-4 py-3">${el.category}</td>
            <td class="px-4 py-3">${total}</td>
            <td class="px-4 py-3"><span class="bg-green-600 px-2 py-1 rounded text-xs">Active</span></td>
            <td class="px-4 py-3"><button class="edit-button text-blue-400 hover:text-blue-300">Edit</button></td>
            <td class="px-4 py-3"><button class="delete-button text-red-400 hover:text-red-300" >Delete</button></td>
        `   
        tableBody.innerHTML += `
            <tr class="border-b border-gray-700 hover:bg-gray-800 transition">
                ${cols}
            </tr>
        `
    })
}   

// Delete button of a single row
const deleteRowButton = document.querySelector(".delete-button")
tableBody.addEventListener("click" , (e) => {
    if(e.target.classList.contains("delete-button")) {
        // get the index of the row to be deleted
        const index = e.target.dataset.index;
        data.splice(index, 1)
        showData(data)
    }
})

const searchInput = document.getElementById("search-input")
searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase()
    const filteredProducts = data.filter(product => product.title.toLowerCase().includes(searchTerm))
    showData(filteredProducts)
})
function highlightText(text, term){
    if(!term) return text
    const regex = new RegExp(`(${term})`, "gi")
    return text.replace(regex,  `<mark class="bg-yellow-300">$1</mark>`)
}