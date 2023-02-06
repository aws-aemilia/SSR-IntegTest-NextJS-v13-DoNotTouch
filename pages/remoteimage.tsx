import Image from "next/image";

function RemoteImageDemo() {
  return (
    <div
      style={{ textAlign: "center", color: "white", height: "100vh" }}
    >
      <Image
        fill={true}
        style={{ objectFit: "cover" }}
        alt="Photo by Nick Perez at unsplash.com"
        src={"https://picsum.photos/1900/1100"}
        quality={100}
        placeholder="blur"
        blurDataURL="https://picsum.photos/800/600"
      />
    </div>
  );
}

export default RemoteImageDemo;
