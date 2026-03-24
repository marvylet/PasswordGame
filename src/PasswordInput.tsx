import React, { useEffect, useState } from 'react';

interface PasswordInputProps {
  setPassword: (password: string) => void;
}

function PasswordInput(props: PasswordInputProps) {
  const [password, setLocalPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const sabotageInterval = setInterval(() => {
      setLocalPassword(prevPassword => {
        // Náhodně rozhodneme, zda přidáme emoji nebo odebereme znak
        const action = Math.random() < 0.5 ? 'add' : 'remove';
        if (action === 'add') {
          // Přidáme emoji ke stávajícímu heslu
          return prevPassword + '🐴';
        } else {
          // Odebereme náhodný znak, pokud heslo není prázdné
          if (prevPassword.length === 0) return prevPassword;
          const index = Math.floor(Math.random() * prevPassword.length);
          return prevPassword.slice(0, index) + prevPassword.slice(index + 1);
        }
      });
    }, 10000); // 10 sekund pro test; reálně 120000 ms (2 minuty)
    return () => clearInterval(sabotageInterval);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setLocalPassword(newPassword);
    props.setPassword(newPassword);
  };

  return (
    <div>
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handleChange}
        placeholder='Type a password'
        className={'passInput'}
      />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}

export default PasswordInput;
