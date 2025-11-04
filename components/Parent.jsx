import About from './About'
import Experiences from './Experiences'
import Skills from './Skills'
import Education from './Education'
import Certificates from './Certificates'
import Volunteering from './Volunteering'


export default function Parent() {
  return (
    <div dir='rtl' className='container m-auto  p-[var(--main-padding)] flex flex-col gap-2'>
      <Experiences/>
      {/* <About/> */}
      <Skills/>
      <Education/>
      <Certificates/>
      <Volunteering/>
    </div>
  )
}
