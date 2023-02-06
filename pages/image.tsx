import Image from "next/image";
import Landscape from "../public/nick-perez-unsplash.jpg";

function ImageDemo() {
  return (
    <div
      style={{ textAlign: "center", color: "white", height: "100vh" }}
    >
      <Image
        fill={true}
        style={{ objectFit: "cover" }}
        alt="Photo by Nick Perez at unsplash.com"
        src={Landscape}
        quality={100}
        placeholder="blur"
      />
    </div>
  );
}

export default ImageDemo;
