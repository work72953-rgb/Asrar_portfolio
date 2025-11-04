import React from "react";

export default function Education() {
  return (
    <div  className={` my-4 rounded-lg p-[var(--main-padding)] card
        `}>
<h1 className='title'>التعليم</h1>
    <div
      className={`
        flex flex-col
        `}
    >
        <span className={`main-font-size`}>بكالوريوس إدارة أعمال</span>
        <span className={`sub-font-size`}>جامعة الإمام محمد بن سعود الإسلامية</span>
        <span className={`sub-font-size`}>سنة التخرج: 2020</span>
    </div>
    </div>
  );
}
