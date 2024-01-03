import React, {  useState } from "react"
import { JSfaq} from "../../../Dummydata/Data-JS"

const Faq = () => {
  const [click, setClick] = useState(false)

  const toggle = (index) => {
    if (click === index) {
      return setClick(null)
    }
    setClick(index)
  }

  return (
    <>
      <div className="jsTaskbg">

        <div className="jsTask-heading">
        <h1><span>Java script - </span ><span className="span-text">FAQ</span></h1>
        </div>
      
      <section className='faq'>
          {JSfaq.map((val, index) => (
            <div className='faq-box'>
              <button className='faq-button' onClick={() => toggle(index)} key={index}>
                <h2>{val.title}</h2>
                <span className='faq-span'>{click === index ? <i className='fa fa-chevron-down'></i> : <i className='fa fa-chevron-right'></i>}</span>
              </button>
              {click === index ? (
                <div className="faq-dropdown">
                <div className='faq-text1'>
                  {val.desc.map((answer) => (
                  <p className="faq-text-p">{answer.a}</p>
                  ))}
                  </div>
                  <div className='faq-text2'>
                    {val.word.map((text)=> (
                    <span className="faq-icon-text">{text.t}</span>
                    ))}
                  {val.output.map((data) => ( <p className="faq-text-output">{data.p}</p>))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
      </section>

      </div>
    </>
  )
}

export default Faq
