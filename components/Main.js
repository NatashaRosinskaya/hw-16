class Main{
    constructor(){
        this.data = JSON.parse(localStorage.getItem('spadata')) 
        this.basket = JSON.parse(localStorage.getItem('basket')) || []
        
    }
    create(){
        this.element = document.createElement('main')
        this.element.classList.add('main')

       this.render() 
        window.addEventListener('hashchange', ()=>{
            this.render()
        }) 
        return this.element
    }

    render(){
        let hash = location.hash ? location.hash.slice(1): 'home' 

        this.data.forEach(dataItem => {
            if (hash.includes(dataItem.slug)){
                document.title = `${dataItem.title}` 
                this.element.innerHTML=`
                <div class="container">            
                    <h1>${dataItem.title}</h1>
                    <p>${dataItem.content}</p>
                </div>
                `
                if (dataItem.slug == 'basket'){
                    import('./Basket.js').then((newBasket) =>{
                        console.log(newBasket.default.init)
                        this.basketData = newBasket.default.init()
                        this.element.appendChild(this.basketData)

                        let btn_basket = document.querySelector('#prev__basket')
                            if(btn_basket){
                            btn_basket.addEventListener('click', ()=>{
                            location.hash = 'catalog'
                            })
                        }
                    })
                }
                if (dataItem.slug == 'catalog'){
                    if(location.hash.includes('/')) this.element.innerHTML=''
                    import('./Products.js')
                        .then (productsData =>{
                            productsData.default.init()
                                .then((moduleProduct)=>{
                                    this.products = JSON.parse(localStorage.getItem('productData'))  
                                    this.element.appendChild(moduleProduct) 

                                    let btnsAdd = document.querySelectorAll('.product__button')
                                    btnsAdd.forEach((bntAdd) =>{
                                    bntAdd.addEventListener('click', (event)=>{
                                        console.log(event.target.id)
                                    this.addProduct(event.target.id)
                            })
            
                                }) 

                                    
                                    let btn = document.querySelector('#prev')
                                    if(btn){
                                    btn.addEventListener('click', ()=>{
                                    location.hash = 'catalog'
                                })
                            }
                        })
                    })        
                }
            }                    
                    
                    
        });
      
    }

                    addProduct(id){
                        let newId = id - 1
                        console.log( this.basket )
                        let productToCard = this.products[newId] 
                        console.log( productToCard)
                        if (this.basket.length == 0){
                            productToCard.count = 1
                            this.basket.push(productToCard)
                            
                            localStorage.setItem('basket', JSON.stringify(this.basket))
                        }else if(this.basket.length > 0){
                            let flag = true
                            this.basket.forEach((item)=>{
                                if(item.id == id){
                                    item.count += 1;
                                    localStorage.setItem('basket', JSON.stringify(this.basket))
                                    flag = false
                                }
                            })

                            if (flag){
                                productToCard.count = 1
                                this.basket.push(productToCard)
                                localStorage.setItem('basket', JSON.stringify(this.basket))
                            }
                        }
                       
                        
                       
                    }
    init(){
        return this.create()
    }
}

const main = new Main().init()
export default main