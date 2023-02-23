import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { FiDivide } from "react-icons/fi";
import { FaBackspace } from "react-icons/fa";

function App() {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");
    const ops = ["/", "*", "-", ".", "+"];

    const updateCalc = (value) => {
        if (
            (ops.includes(value) && calc === "") ||
            (ops.includes(value) && ops.includes(calc.slice(-1)))
        )
            return;

        setCalc(calc + value);

        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    };

    const calculate = () => {
        setCalc(result);
    };

    const deleteLast = () => {
        if (calc != "") {
            setCalc(calc.slice(0, -1));
        }
        setResult(eval(calc).toString());
    };

    const createDigits = () => {
        const digits = [];
        for (let i = 1; i < 10; i++) {
            digits.push(
                <button key={i} onClick={() => updateCalc(i.toString())}>
                    {i}
                </button>
            );
        }
        return digits;
    };
    
    useEffect(() => {
        const handleKeyPress = (event) => {
            var name = event.key;
            // var code = event.code;
            // console.log(name);
            switch (name) {
                case "+":
                    updateCalc("+");
                    break;
                case "-":
                    updateCalc("-");
                    break;
                case "*":
                    updateCalc("*");
                    break;
                case "/":
                    updateCalc("/");
                    break;
                case "0":
                    updateCalc("0");
                    break;
                case "1":
                    updateCalc("1");
                    break;
                case "2":
                    updateCalc("2");
                    break;
                case "3":
                    updateCalc("3");
                    break;
                case "4":
                    updateCalc("4");
                    break;
                case "5":
                    updateCalc("5");
                    break;
                case "6":
                    updateCalc("6");
                    break;
                case "7":
                    updateCalc("7");
                    break;
                case "8":
                    updateCalc("8");
                    break;
                case "9":
                    updateCalc("9");
                    break;
                case ".":
                    updateCalc(".");
                    break;
                case "Enter":
                    calculate();
                    break;
                case "Delete":
                    deleteLast();
                    break;
                default:
                    break;
            }
        };

        document.addEventListener("keypress", handleKeyPress, true);

        return () => {
            document.removeEventListener("keypress", handleKeyPress, true);
        };
    });

    return (
        <div className="App">
            <div className="calculator">
                <div className="display">
                    {result ? <span>({result})</span> : ""}
                    {calc || "0"}
                </div>
                <div className="operators">
                    <button onClick={() => updateCalc("/")}>
                        <FiDivide />
                    </button>
                    <button onClick={() => updateCalc("*")}>
                        <RxCross2 />
                    </button>
                    <button onClick={() => updateCalc("+")}>
                        <AiOutlinePlus />
                    </button>
                    <button onClick={() => updateCalc("-")}>
                        <AiOutlineMinus />
                    </button>

                    <button onClick={() => deleteLast()}>
                        <FaBackspace />
                    </button>
                </div>
                <div className="digits">
                    {createDigits()}
                    <button onClick={() => updateCalc("0")}>0</button>
                    <button onClick={() => updateCalc(".")}>.</button>
                    <button onClick={() => calculate()}>=</button>
                </div>
            </div>
        </div>
    );
}

export default App;
