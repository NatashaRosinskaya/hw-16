class Nav{
    constructor(){
        this.localData = JSON.parse(localStorage.getItem('spadata'))
        console.log(this.localData)
    }
    create(){
        this.element = document.createElement('nav')
        this.element.classList.add('nav')
        this.list = ''

        this.localData.forEach(item => {
            this.list += `<li><a href = "#${item.slug}">${item.shortTitle}</a></li>`
        });

        this.element.innerHTML=`
            <ul> 
                ${this.list}
            </ul>
        `
        return this.element
    }

    init(){
        return this.create()
    }
}

const nav = new Nav().init()
export default nav