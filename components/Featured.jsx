import Image from "next/image";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "img/photo.jpg" },
  { url: "img/featured.jpg" },
  { url: "img/featured1.jpg" },
  { url: "img/featured2.jpg" },
  { url: "img/featured.3.jpg" },

];

const Featured = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1000}
        height={404}
        images={images}
        showBullets={true}
        showNavs={true}
        
        
      />
    </div>
  );
}


export default Featured;