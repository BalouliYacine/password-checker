import { React, useState } from "react";
import "./pg.css";

function Pg() {
  const [gen, setgen] = useState("");
  let [val, setval] = useState("8");

  let alph1 =
    "A a B b C c D d / § ! ? E e % F f G g H h I ù [ ] i J j K k L l M m N n O o P p Q @ & é q R r ( ) S s T t U { } u V v W w $ X x Y y Z z 1 2 3 4 5 6 7 8 9 0 S";
  const Gen = () => {
    setgen(function () {
      let grnV = [];
      for (let i = 0; i < val; i++) {
        grnV.push(alph1.split(" ")[Math.floor(Math.random() * 79)]);
      }
      return grnV;
    });
  };

  // const valch = (e) => {
  //   setval(e.target.value);
  // };

  const Ran = (e) => {
    setval(e.target.value);
    Gen();
  };

  return (
    <div className="pg">
      <h1>Password Generator</h1>
      <p> Generate secure, random passwords to stay safe online.</p>
      <br />
      <input
        className="range"
        type="range"
        onChange={Ran}
        min="8"
        max="50"
        defaultValue={8}
      />
      <span>{val} </span>
      <br />
      <button onClick={Gen}> Generate </button>
      <br />
      <br />
      <p className="firstP">
        Your <span>Password</span> Is :
      </p>
      <br />
      <p className="genP"> {gen} </p>
    </div>
  );
}

export default Pg;
