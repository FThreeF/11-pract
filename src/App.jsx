import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [request, setRequest] = useState('');
  const [responce, setResponce] = useState('');
  const getResponce = () => setResponce(eval(request));

  return (
    <div className='app'>
      Калькулятор
      <div className='calculator'>
        <input
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          className='input'
          type='text'
        />
        <button onClick={getResponce} className='button'>
          =
        </button>
      </div>
      <div>
        {`Ответ ${responce}`}
      </div>
    </div>
  );
};

export default App;
