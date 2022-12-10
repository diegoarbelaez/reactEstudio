/* https://api.giphy.com/v1/gifs/random?api_key=HnoB3Yg9ZNvnpfTbky4kmfmQXWFEh0x0&tag=&rating=g */
/* 
const apiKey = "HnoB3Yg9ZNvnpfTbky4kmfmQXWFEh0x0";

const peticion = fetch(
  "https://api.giphy.com/v1/gifs/random?api_key=HnoB3Yg9ZNvnpfTbky4kmfmQXWFEh0x0&tag=&rating=g"
);

//Fetch API
//Encadenamiento de promesas
peticion
  .then((resp) => resp.json())
  .then((data) => {
    //Desestructuración de la propiedad url dentro del json
    const {url} = data.data.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
    


  })

  .catch(console.warn);
 */

/* const getImagen = async () => {
  const peticion = await fetch(
    "https://api.giphy.com/v1/gifs/random?api_key=HnoB3Yg9ZNvnpfTbky4kmfmQXWFEh0x0&tag=&rating=g"
  );
  const data = await peticion.json();

  let {url} = data.data.images.original;
  console.log(url);
  console.log(`URL: ${url}`);

  let img = document.createElement("img");
  img.src = url;

  document.body.append(img);
};

getImagen(); */





//Esta es la manera de asignar una variable a lo que devuelve una promesa
let url;
obtenerURL().then( respuesta => {
    //console.log(`Respuesta URL:${respuesta}`);
    url = respuesta;

    img = document.createElement("img");
    img.src = url;

    document.body.append(img);





});

console.log(url);

async function obtenerURL (){
    let urlString = await fetch('https://api.giphy.com/v1/gifs/random?api_key=HnoB3Yg9ZNvnpfTbky4kmfmQXWFEh0x0&tag=&rating=g');
    let data = await urlString.json();
    let urlExport = data.data.images.original.url;
    console.log(urlExport); 
    return urlExport;
}


