class Header{
    create (moduleNav){
        this.element = document.createElement('header')
        this.element.classList.add('header')

                this.element.innerHTML=`
                    <div class = "container">
                        <div class="header__content">
                        <div class = "header__logo">
                            <a href="/"> 
                                <img src="img/logo.jpg">
                            </a>
                        </div>
                    
                ${moduleNav.outerHTML}
                </div>
            </div>    
        `

        return this.element
   
    }

    getNav(){
        return import('./Nav.js')
            .then (nav =>{
                let moduleNav = nav.default
                return this.create(moduleNav)
            }) 
    }
  

    init (){
        console.log(this.getNav())
        return this.getNav()
    }
}

const header = new Header().init()
export default header