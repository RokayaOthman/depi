const data = [
];

const cardList = document.querySelector(".card-list");
const form = document.getElementById("main-form");

const priceInput = document.getElementById("price-input");
const titleInput = document.getElementById("title-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let newCard = {
    id: data.length+1,
    title: titleInput.value,
    price: priceInput.value,
  };
  data.push(newCard);
  showdata();
  console.log(data);
});


function showdata() {
cardList.innerHTML = "";
priceInput.value = "";
titleInput.value = '';
data.forEach((el) => {
  cardList.innerHTML += `
        <div class="bg-white max-w-sm rounded-lg overflow-hidden m-4">
            <div>   
                <img src="/images.jpg" class=" w-full h-48"   >
                <div>
                    <h5>${el.title}</h5>
                    <p>${el.price}</p>
                </div>
            
            </div>


        </div>

    `;
});
}


