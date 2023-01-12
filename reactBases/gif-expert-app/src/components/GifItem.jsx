
export const GifItem = (image) => {
    //console.log(image.image.url);
    return (

        <div className="card">
            <img src={image.url} alt={image.title}></img>
            <p>{image.title}</p>
        </div>
    )
}
