import React from "react";
import Image from "next/image";

const Contact: React.FC<any> = ({ contactOptions }) => {
  return (
    <div>
      <ul className="flex gap-5">
        {contactOptions &&
          Array.isArray(contactOptions) &&
          contactOptions.map((contact: any) => (
            <li className="border border-black flex items-center rounded p-2" key={contact.name}>
              <Image src={contact.icon} height={24} width={24} alt={contact.name}/>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default React.memo(Contact);
