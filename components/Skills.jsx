import React from "react";

const tecSkills = ['كتابة النصوص', 'التعليق الصوتي', 'كتابة المقالات','التفكير الإبداعي']



export default function Skills() {
  return (
    <div className=" my-4 rounded-lg p-[var(--main-padding)] card">
<h1 className='title'>المهارات</h1>
    <div className={`
    flex flex-col items-center gap-5
    `}>
      <div className="tec skills">
        <ul className="flex justify-center items-center gap-3 flex-wrap">
         {tecSkills.map((t,idx)=>(
          <li className={`sub-font-size even:bg-violet-100 odd:bg-cyan-100
            rounded-md p-1`} key={idx}>{t}</li>
         ))}
        </ul>
      </div>
    
    </div>
    </div>
  );
}
