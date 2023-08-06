import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  return (
    <div>
      <Steps />
      <StepMessages step={1}>
        <p>Hello React</p>
      </StepMessages>
    </div>
  );
};

export default App;

const Steps = () => {
  //const step = 1;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    step > 1 && setStep((s) => s - 1);
  };
  const handleNext = () => {
    step < 3 && setStep((s) => s + 1);
  };
  return (
    <>
      {/* set fonksiyonun içerisine her zaman ilerdeki gğncellemelerde sıkıntı çıkmaması adına callback yazmak çok daha iyidir. */}
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        x
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          {/* <p className={"message"}>
            mesajı alırken array 0 tabanlı olduğu için step-1 yapıyoruz. Step ilerledikçe eksi 1 yaparak olduğumuz state'i bize gösteriyor 
            Step {step}: {messages[step - 1]}
          </p> */}

          <StepMessages step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessages>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

const StepMessages = ({ step, children }) => {
  return (
    <div className="message">
      <h3> Step: {step}</h3>
      {children}
    </div>
  );
};

const Button = ({ bgColor, textColor, onClick, children }) => {
  return (
    <>
      <button
        style={{ backgroundColor: bgColor, color: textColor }}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};
