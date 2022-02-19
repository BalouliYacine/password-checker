import { React, useRef, useEffect, useState } from 'react'
import { gsap } from "gsap";
import './pg.css'


function Pg() {

    const [gen, setgen] = useState('')
    let [val, setval] = useState('')

    let alph1 = "A a B b C c D d E e F f G g H h I i J j K k L l M m N n O o P p Q q R r S s T t U u V v W w X x Y y Z z 1 2 3 4 5 6 7 8 9 0"
    let alph2 = "+ ( | ) % m N _ O o P p Q q R r S s & ! U u V v [ ] X x Y y Z z - / B b C c D d # é F f G g H h I i J j 3 1 4 8 7 1 2 9 0 5"
    let newpwd = []

    const Gen = () => {
        let pwd = [val.split(' ')];

        for (let i = 0; i < pwd.length; i++) {
            let pwd2 = pwd[i][0].split('')
            for (let g = 0; g < pwd2.length; g++) {
                newpwd.push(alph2[alph1.indexOf(pwd2[g])])
            }
        }
        setgen(newpwd.join(''))
    }

    const valch = (e) => {
        setval(e.target.value)
    }

    return (
        <div className='pg'>
            <h1 >Password Generator (soon)</h1>
            <br />
            <input type="text" value={val} onChange={valch} />
            <button onClick={Gen}> Generate </button>
            <br /><br />
            <p> {gen} </p>
        </div>
    )
}

export default Pg