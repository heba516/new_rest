document.addEventListener('DOMContentLoaded', async () => {

    const token = localStorage.getItem('token');
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const response = await axios.get('http://localhost:3000/api/v1/cuisines', config);
    console.log('Complete response:', response);
    console.log(localStorage)

    // Handle the response here (e.g., redirect to another page)

    let {cuisines} = response.data.message
    const productList = document.getElementById('productList')
    console.log(productList)

    for (let cuisine of cuisines) {
        const div = `<div class="col-sm-12 col-md-6 d-flex align-items-center">
        <img src="${cuisine.image}" alt="">
        <div class="title m-3">
            <h3>${cuisine.name}</h3>
            <p>${cuisine.description}</p>
        </div>
        <div class="price mb-4">$${cuisine.price}</div>
        </div>`;
        productList.innerHTML += div
    }
        
});