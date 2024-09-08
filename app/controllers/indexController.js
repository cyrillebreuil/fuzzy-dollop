//Test de méthodes fléchées
const indexController = {

    index : (req,res)=>{
        //* Test d'une erreur avec 'throw new Error'
        //throw new Error ("test erreurzeze");
        res.render("index")
    },

    infos: ()=>{

    }
}
export {indexController};