import Image from "next/image";

const Avatar = () => {
  return (
    <div className={`image-container w-48 mt-6 border border-yellow-900 h-2/6`}>
      <Image
        src={
          "https://firebasestorage.googleapis.com/v0/b/images-b3099.appspot.com/o/avatar.svg?alt=media&token=ba3ea983-3133-41d9-88c4-002deffd991a"
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
