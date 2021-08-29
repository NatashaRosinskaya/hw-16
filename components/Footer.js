class Footer{
    create(){
        this.element = document.createElement('footer')
        this.element.classList.add('footer')

        this.element.innerHTML=`
        
            <div class = "container">
            <div class = "footer_infotmation"> 
                <p>Cat shop</p>
                <p>www.cat_shop.com</p>
                <p>Minsk 375291234567</p>
            </div>
            </div>

        `
        return this.element
    }

    init (){
        return this.create()
    }
}

const footer = new Footer().init()
export default footer
