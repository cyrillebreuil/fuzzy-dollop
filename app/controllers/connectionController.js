const connectionController = {

    index : (req,res)=>{
        //* Test d'une erreur avec 'throw new Error'
        //throw new Error ("test erreurzeze");
        res.render("connectionPage")
    },

    infos: ()=>{

    }
}
export {connectionController};