function Products (){

    this.getProductsData = async () =>{
        if(localStorage.getItem('productData')){
            let localdata = JSON.parse(localStorage.getItem('productData'))
            return this.create(localdata) 
        } else{
            await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{

                localStorage.setItem('productData', JSON.stringify(json))
                this.create(json)
            
            })
        }

        
    }

    this.create = (dataJson)=>{
        this.data = dataJson
        this.element = document.createElement('div')
        this.element.classList.add('products')

        this.list =''
        dataJson.forEach(product => {
            this.list += `
            <li>
                <div class = "product__img">
                    <img src=${product.image}>
                </div>
                <div class="product__caption">
                    <div class="product__title"><a href="/${location.hash}/${product.id}">${product.title}</a></div>
                    <div class="product__price">${product.price} BYN</div>
                    <div class="product__btn"><button class="product__button" id=${product.id}>Add product</button></div>
                </div>
            </li>
            `
            
        });

        this.element.innerHTML=`<ul class="products_items">
                                        ${this.list}
                                    </ul>`
            console.log(this.element)
            return this.element
    }

    this.product = (hash) =>{
        let id = hash.split('/')[1]
        let product = this.data.filter((item) => {
            return item.id == id
        })

        this.element.innerHTML = `
        <div class = "product_info">
            <img src = "${product[0].image}">
            <p class="product_information">${product[0].description}</p>
        </div>
        <div class="btn__prev"><button id="prev">Back catalog</button></div>
          `
        document.title=`${product[0].title}`
        
        
        return this.element
    }

    
    this.init = ()=>{        
            return this.getProductsData()
            .then(data =>{
                if(location.hash.includes('/')){
                    return this.product(location.hash)
                }
                return this.element
            })       
    } 
}

const products = new Products()
export default products