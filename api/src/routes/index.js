const { Router } = require('express');
const axios=require('axios')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {Pokemon, Type} =require('../db')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiInfo = async () => {
    try {
      // aca me traigo todos los 40 pokemones
      const apiResults = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
     //console.log(apiResults)
      const apiNext = await axios.get(apiResults.data.next);
      //console.log(apiNext)
      const allPokemons = apiResults.data.results.concat(apiNext.data.results);
     //console.log(allPokemons)
      for (let p of allPokemons) {
        let url = await axios.get(p.url);
        delete p.url;
        p.id = url.data.id;
        p.img = url.data.sprites.other.home.front_default;
        p.hp = url.data.stats[0].base_stat;
        p.attack = url.data.stats[1].base_stat;
        p.defense = url.data.stats[2].base_stat;
        p.speed = url.data.stats[5].base_stat;
        p.height = url.data.height;
        p.weight = url.data.weight;
        p.type = url.data.types.map((el) => el.type.name);
      }
      //console.log(allPokemons)
      return allPokemons;
    } catch (error) {
      console.log(error);
    }
  };

  const getDbInfo = async ()=>{
      return await  Pokemon.findAll({
        include:{
            model:Type,
            attributes:['name'],
            through:{
                attributes:[],
            }
        }
      })
  }

  const getAllPokemons = async()=>{
      const apiInfo=await getApiInfo();
      const dbInfo= await getDbInfo();
      const infoTotal= apiInfo.concat(dbInfo);
      return infoTotal
  }




  //get/pokemons y get/pokemonsQuery

  router.get('/pokemons', async (req,res)=>{
      const name=req.query.name;
      let pokemonsTotal=await getAllPokemons();
      if(name){
          let ponkemonName= await pokemonsTotal.filter(elem=>elem.name.toLowerCase().includes(name.toLowerCase()));
          ponkemonName.length ?
          res.status(200).send(ponkemonName):
          res.status(404).send('No existe ese Pokemon')
      }else{
          res.status(200).send(pokemonsTotal)
      }

  })


//Pedido de  TYPES
  router.get('/types', async (req,res)=>{
 try {
  const typesApi= await axios.get('https://pokeapi.co/api/v2/type');
     
  const typesApi2= typesApi.data.results;
  
  const onlyTypes =await typesApi2.map(elem=>elem.name);
  
  onlyTypes.forEach((type) => {
    Type.findOrCreate({ 
      where: { name: type } 
    });
})
const allTypes= await Type.findAll();
res.status(200).json(allTypes)
 } catch (error) {
   res.status(404).send(error)
 }
     
  
  })
//CREACION DE UN POKEMON
  router.post('/pokemons', async(req,res)=>{
    const{ 
    name,life,attack,defense,speed,height,weight, img, itsCreated, type}=req.body;

let pokemonCreated = await Pokemon.create({
  name,
  life,
  attack,
  defense,
  speed,
  height,
  weight,
  img,
  itsCreated
})

let typeDb = await Type.findAll({
  where:{name:type}
})
pokemonCreated.addType(typeDb)
res.send('Pokemon creado exitosamente')
  })
  


//Pedido de info según ID
  router.get('/pokemons/:id', async(req,res)=>{
  const{id}=req.params;
  const pokesTotal= await getAllPokemons();
  if(id){
    let pokeId= await pokesTotal.filter(elem=>elem.id==id)
    pokeId.length?
    res.status(200).json(pokeId):
    res.status(404).send('El poke no existe')
  }
})
module.exports = router;
// module.exports = getApiInfo;
