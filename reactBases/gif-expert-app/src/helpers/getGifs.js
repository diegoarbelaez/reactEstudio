export const getGifs = async ( category ) => {
    const URL = `http://api.giphy.com/v1/gifs/search?api_key=HnoB3Yg9ZNvnpfTbky4kmfmQXWFEh0x0&q=${category}&limit=10`;
    const resp = await fetch(URL);
    const { data } = await resp.json();

    const gifs = data.map((elemento) => ({
      id: elemento.id,
      title: elemento.title,
      url: elemento.images.downsized_medium.url,
    }));
    // console.log(gifs)
    return gifs;
  

};
