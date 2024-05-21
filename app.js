let inputFiled = document.querySelector('#Sproduct'),
products = document.querySelectorAll('.single-product')


inputFiled.addEventListener('input' , (e)=>{
    let value = e.target.value

    products.forEach(prod =>{
        let isInCluded = prod.querySelector('#name').textContent.includes(value)
        if(!isInCluded){
            prod.classList.add('hidden')
        }
        else{
            prod.classList.remove('hidden')
        }
    })
})