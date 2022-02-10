import Image from "next/image";

const Avatar = () => {
  return (
    <div className={`image-container w-48 mt-6 rounded-full overflow-hidden`}>
      <Image
        className="object-cover"
        src={
          "https://firebasestorage.googleapis.com/v0/b/images-b3099.appspot.com/o/me%2FIMG-e016b3afdd83c55fb4d39ceeee078c3b-V.jpg?alt=media&token=e973b1f5-7d86-4d94-bc7d-6b02deca0e5d"
        }
        layout="responsive"
        priority={true}
        width={100}
        height={100}
        alt={"avatar"}
      />
    </div>
  );
};

export default Avatar
