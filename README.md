# fuzzy-dollop

## Training Project

I'm gonna try to get an API of Pokemon or else, and make a working dynamic website around it, fetching data from api.
I'm gonna use ESM instead of commonJS to import (adding type : module to the package.json)

Steps & Notes pour moi-meme :

- Adding packages env, sequelize, express
- creation of gitignore and .env + .env.example
- adding node modules and .env to the gitignore file
- starting app on index.js
- Attention a la difference function et methode; dans un objet une function devient une methode et je ne peut pas la definir en utilisant le mot clé 'function', il faut utiliser `js objet={ nomdelafonction : function(params){} }`
- ATTENTION si j'utilise ESM (import : export) plutot que commonjs (module require), dirname ne fonctionnera plus !!! je devrais alors importer differentes choses et definir la variable
