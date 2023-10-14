import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const [selectedColor, setSelectedColor] = useState('bg-blue-500');

  const changeColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className='grid place-content-center min-h-screen bg-black'>
      <div className='pt-5 font-semibold text-3xl pb-3 text-center text-white'>Color Picker</div>
      <div className={`h-[70vh] w-[70vw] shadow-md rounded-md ${selectedColor}`}></div>

      <div className='mt-4 flex justify-center'>
        <button
          className='mr-2 bg-blue-500 w-12 h-12 '
          onClick={() => changeColor('bg-blue-500')}
        ></button>
        <button
          className='mr-2 bg-red-500 w-12 h-12 '
          onClick={() => changeColor('bg-red-500')}
        ></button>
        <button
          className='mr-2 bg-green-500 w-12 h-12'
          onClick={() => changeColor('bg-green-500')}
        ></button>
        <button
          className='bg-yellow-500 w-12 h-12 mr-2 '
          onClick={() => changeColor('bg-yellow-500')}
        ></button>

        <button
          className='bg-orange-500 w-12 h-12 mr-2'
          onClick={() => changeColor('bg-orange-500')}
        ></button>

        <button
          className='bg-sky-500 w-12 h-12 mr-2'
          onClick={() => changeColor('bg-sky-500')}
        ></button>

        
      </div>
    </div>
  );
}

export default App;
