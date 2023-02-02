import React,{useState} from "react";
function Look (){
    const [curValue,operation]=useState("")
    return(
        <div>
            <div id="first">{curValue}</div>
            <div id="second" className="flex">
                <div className="color" onClick={()=>operation("")}>AC</div>
                <div className="color" onClick={()=>operation(prev=>prev.slice(0,-1))}>DEL</div>
                <div className="color" onClick={()=>operation(prev=>prev+"9")}>*</div>
            </div>
            <div id="third" className="flex">
                <div>
                    <div className="color" onClick={()=>operation(prev=>prev+"1")}>1</div>
                    <div className="color" onClick={()=>operation(prev=>prev+"2")} >2</div>
                    <div className="color" onClick={()=>operation(prev=>prev+"3")}>3</div>
                    <div className="color" onClick={()=>operation(prev=>prev+"+")}>+</div>
                </div>
                <div>
                    <div className="color" onClick={()=>operation(prev=>prev+"4")}>4</div>
                    <div className="color" onClick={()=>operation(prev=>prev+"5")}>5</div>
                    <div className="color" onClick={()=>operation(prev=>prev+"6")}>6</div>
                    <div className="color" onClick={()=>operation(prev=>prev+"-")}>-</div>
                </div>
                <div>
                    <div className="color" onClick={()=>operation(prev=>prev+"7")}>7</div>
                    <div className="color" onClick={()=>operation(prev=>prev+"8")}>8</div>
                    <div className="color" onClick={()=>operation(prev=>prev+"9")}>9</div>
                    <div className="color" onClick={()=>operation(prev=>prev+"/")}>/</div>
                </div>
            </div>
            <div id="four" className="flex">
                <div className="color" onClick={()=>operation(prev=>prev+".")}>.</div>
                <div className="color" onClick={()=>operation(prev=>prev+"0")}>0</div>
                <div className="color" onClick={()=>operation(prev=>eval(prev))}>=</div>
            </div>
        </div>
    )
}
export default Look;