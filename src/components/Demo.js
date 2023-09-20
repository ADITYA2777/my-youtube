import React, { useMemo, useState } from 'react'
import {  findNthPrime } from '../utils/constant';

const Demo = () => {
    const [text, settext] = useState(0)
    const [ isDarkTheme,setisDarkTheme]= useState(false)
    
    console.log("rendering");

    //heavy operations
    const prime = useMemo(() => findNthPrime(text), [text]);
  return (
      <div className={
          "m-4 w-96 h-96 p-2 border border-black" +
          (isDarkTheme && "  bg-gray-950 text-white")}>
          <div>
              <button className='m-10 p-2 bg-green-200'
                  onClick={() => { setisDarkTheme(!isDarkTheme) }}>Toggle</button>
          </div>
      <div>
        <input
          className="border border-black w-72 px-2"
          type="number"
          value={text}
          onChange={(e) => settext(e.target.value)}
        />
      </div>
      <div>
        <h1> Nth prime :{prime}</h1>
      </div>
    </div>
  );
}

export default Demo