function CreateBasket(){
     

    this.create = (basketData) =>{
        this.element=document.createElement('div')
        this.element.classList.add('basket__container')
        
        if(basketData.length == 0){

            this.element.innerHTML=`<h1>Cart is empty</h1>`
        }else{
            this.list = ''
            this.totalPrice = 0
            this.element.innerHTML= " "
            basketData.forEach(basketProduct => {
            this.list +=`<h3 class="product__basket">${basketProduct.title}</h3>
                        <div class ="basket__total">
                        <div class="product__count">Quantity: ${basketProduct.count} </div>
                        <div class="product__price">${basketProduct.price} BYN</div>
                        </div>` 
                        this.totalPrice += basketProduct.price*basketProduct.count
                        this.totalPriceFinal = this.totalPrice.toFixed(2)
                        
            });

            this.element.innerHTML=`<div class="basket">${this.list}</div>
                                    <hr>
                                    <h2 id="total">Total: ${this.totalPriceFinal} BYN</h2>
                                    <div class="prev_bascet_btn"><button id="prev__basket">Back catalog</button>
                                    </div>`
            
        }

        return this.element
    }

    this.init = (basketData)=>{
        this.basketData = JSON.parse(localStorage.getItem('basket')) || []
        console.log(this.basketData)
        return this.create(this.basketData)

    }
}
const basket = new CreateBasket()
export default basket
