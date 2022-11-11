import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export default function SliderMobile({product}){

    console.log("Sem tratamento", product);

    // const products = product.slice(0,5).map(images => {return (images, id)});


    // console.log("Images e ids", products);

    const productImages = product?.map(prodImages => {
        return prodImages?.urlImage}
    );

    console.log("Apenas imagens", productImages);

    const urlImages = productImages?.map(imagesLib => {
        return {
          original: imagesLib,
          thumbnail: imagesLib
        }
    });

    console.log("Array alterado", urlImages);



    return(
        <>
            <div className="slider_mobile">

                <ImageGallery autoPlay="true" items={urlImages}/>

            </div>

        </>
    );

}