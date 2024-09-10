import React, { useState } from 'react';
import style from './Calculator.module.css';




function Calculator() {



  const [result, setResult] = useState("");

  const clickhandler = (event) => {
    setResult(result.concat(event.target.value));
    console.log("working")
  }

  const clear = () => {
    setResult("");
  }

  const dl = () => {
    setResult(result.substring(0, result.length - 1))

  }
  const calculate = () => {
    setResult(eval(result).toString())
  }

  return (
    <div className='bg-slate-400 h-screen'>
      {/* onClick="display.value =  display.value.toString().slice(0,-1)" */}



      <div className='bg-gray-500 w-full sm:w-1/4 m-auto p-2 center rounded-2xl flex flex-shrink-0   '>
        <form>
          <div 
          className="flex justify-end m-2 "
          >
            <input type="text" name="display" id='display' placeholder='0' className="text-end w-full rounded-md h-16 text-4xl" value={result} />
          </div>
          <div className=''>
            <input type="button" value="AC" onClick={clear} className={`${style.operator} ${style.input}`} />
            <input type="button" value="DE" onClick={dl} className={`${style.operator} ${style.input}`} />
            <input type="button" value="." onClick={clickhandler} className={`${style.operator} ${style.input}`} />
            <input type="button" value="/" onClick={clickhandler} className={`${style.operator} ${style.input}`} />
          
            <input type="button" className={style.input} value="7" onClick={clickhandler} />
            <input type="button" className={style.input} value="8" onClick={clickhandler} />
            <input type="button" className={style.input} value="9" onClick={clickhandler} />
            <input type="button" value="*" onClick={clickhandler} className={`${style.operator} ${style.input}`} />
          
            <input type="button" className={style.input} value="4" onClick={clickhandler} />
            <input type="button" className={style.input} value="5" onClick={clickhandler} />
            <input type="button" className={style.input} value="6" onClick={clickhandler} />
            <input type="button" value="-" onClick={clickhandler} className={`${style.operator} ${style.input}`} />
          
            <input type="button" className={style.input} value="1" onClick={clickhandler} />
            <input type="button" className={style.input} value="2" onClick={clickhandler} />
            <input type="button" className={style.input} value="3" onClick={clickhandler} />
            <input type="button" value="+" onClick={clickhandler} className={`${style.operator} ${style.input}`} />
          
          {/* className={`${styles.buttonClass} ${styles.buttonColor}`} */}
          
            <input type="button" className={style.input} value="00" onClick={clickhandler} />
            <input type="button" className={style.input} value="0" onClick={clickhandler} />
            <input type="button" value="=" className={`${style.operator} ${style.equal} ${style.input}`} onClick={calculate} />

          </div>
        </form>
      </div>



    </div>


  )
}

export default App
