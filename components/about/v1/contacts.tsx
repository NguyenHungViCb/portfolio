import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contact: React.FC<any> = ({ contactOptions }) => {
  return (
    <div>
      <ul className="flex gap-5">
        {contactOptions &&
          Array.isArray(contactOptions) &&
          contactOptions.map((contact: any) => (
            <li
              className="flex items-center border cursor-pointer border-gray-300 rounded p-2"
              key={contact.name}
            >
              <Link href={contact.link}>
                <a className="p-0 m-0 h-max">
                  <Image
                    src={contact.icon}
                    height={24}
                    width={24}
                    alt={contact.name}
                  />
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default React.memo(Contact);
