import './App.css';
import Wrapper from './Components/Wrapper';
import Screen from './Components/Screen';
import BtnBox from './Components/BtnBox';
import Button from './Components/Button';
import CalcProvider from './context/CalcContext';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [".", 0, "="],
];

function App() {
  return (
    <CalcProvider>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        <h1 className="text-4xl font-bold mb-2 mt-6">MY CALCULATOR</h1>
        <Wrapper>
          <Screen />
          <BtnBox>
            {btnValues.flat().map((btn, i) => (
              <Button value={btn} key={i} />
            ))}
          </BtnBox>
        </Wrapper>
      </div>
    </CalcProvider>
  );
}

export default App;