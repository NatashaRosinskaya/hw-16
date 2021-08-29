class Data{
    async getData (){
        return await fetch ('../data/data.json')
            .then((resp)=>resp.text())
            .then((data)=>data)
    }

    init (){
       return this.getData()
    }
}

const data = new Data().init()
export default data