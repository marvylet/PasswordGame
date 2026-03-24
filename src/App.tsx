import './App.css';
import PasswordInput from './PasswordInput.tsx';
import PasswordStrength from './PasswordStrength.tsx';
import { useState } from 'react';
import CountryFlagValidator from './CountryFlagValidator.tsx';
import CharacterSequenceValidator from './CharacterSequenceValidator.tsx';

function App() {
  const [password, setPassword] = useState('');

  return (
    <>
      <div className={'idk'}>
        <h1>Password Game</h1>
        <CountryFlagValidator password={password} />
        <PasswordInput setPassword={setPassword} />
        <PasswordStrength password={password} />
        <CharacterSequenceValidator password={password} />
      </div>
    </>
  );
}

export default App;
