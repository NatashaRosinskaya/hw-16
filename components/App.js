class App {

    create (){
        this.app = document.createElement('div')
        this.app.classList.add('app') 
        document.body.appendChild(this.app)
        
    }

    init(){
        import('./Head.js')
            .then((data)=>{
                let headtitle = data.title
                headtitle.innerHTML = "First SPA"

                import('./Data.js')
                    .then(data =>data.default
                        .then(defaultData =>{
                            localStorage.setItem('spadata', defaultData)
                            this.create()

                            import('./Header.js')
                                .then(header=>{
                                    let moduleHeader = header.default
                                    moduleHeader.then(newHeader => {                                   
                                         this.app.appendChild(newHeader)
                                         
                                        import('./Main.js')
                                        .then(main=>{
                                            let moduleMain = main.default
                                            this.app.appendChild(moduleMain)

                                            import ('./Footer.js')
                                                .then(footer =>{
                                                    let modulFooter = footer.default
                                                    this.app.appendChild(modulFooter)
                                                })
                                        })
                                    })
                                })
                        }))
               
            })
        }

}

const app = new App().init()
export default app


