import Image from "next/image";
export default function Footer() {
  return (
    <div
    dir="rtl"
      className={`w-full h-[200px] p-5 bg-[#000000d7] text-white
    `}
    >
      <span className={`text-xl block mb-5`}>تواصل معي</span>
      <div className={`contact flex flex-col gap-2`}>
        <a
          href="https://wa.me/966501508065"
          target="_blank"
          className={`flex items-center gap-2`}
        >
          <Image
            src="/whatsapp.svg"
            alt="whatsapp icon"
            width={30}
            height={30}
            />
            +966 501508065
        </a>
        <a
          href="https://sa.linkedin.com/in/asrar-ahmed-b5367717b"
          target="_blank"
          className={`flex items-center gap-2`}
        >
          <Image
            src={"/linkedin.svg"}
            alt={"linkedin icon"}
            width={30}
            height={30}
            />
            أسرار أحمد
        </a>
        <a
          href="mailto:Aasrar797@gmail.com"
          target="_blank"
          className={`flex items-center gap-2`}
        >
          <Image src={"/mail.svg"} alt={"mail icon"} width={30} height={30} />
          Aasrar797@gmail.com
        </a>
      </div>
    </div>
  );
}
