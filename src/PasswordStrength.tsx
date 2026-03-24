import React, { useEffect } from 'react';
import './PasswordStrength.css';

interface PasswordStrengthProps {
  password: string;
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
  const checkStrength = () => {
    const lengthCriteria = password.length >= 8;
    const uppercaseCriteria = /[A-Z]/.test(password);
    const numberCriteria = /\d/.test(password);
    const specialCharCriteria = /[!@#$%^&*]/.test(password);

    const criteriaMet = [
      lengthCriteria,
      uppercaseCriteria,
      numberCriteria,
      specialCharCriteria,
    ];
    const strengthScore = criteriaMet.filter(Boolean).length;

    return {
      score: strengthScore,
      metCriteria: criteriaMet,
    };
  };

  const { score, metCriteria } = checkStrength();
  const strengthLabels = ['None', 'Weak', 'Medium', 'Okay', 'Strong'];
  const strengthColors = ['grey', 'red', 'orange', '#dfce15', 'green'];

  const displayIndex = Math.min(score, 4);

  useEffect(() => {
    document.title = `Síla hesla: ${strengthLabels[displayIndex]}`;
  }, [strengthLabels[displayIndex]]);

  return (
    <div>
      <div
        style={{
          backgroundColor: strengthColors[displayIndex],
          height: '10px',
          width: '100%',
        }}
      />
      <p>Password strength: {strengthLabels[displayIndex]}</p>
      <ul className={'list'}>
        <li
          style={{ textDecoration: metCriteria[0] ? 'line-through' : 'none' }}
        >
          Minimum of 8 characters
        </li>
        <li
          style={{ textDecoration: metCriteria[1] ? 'line-through' : 'none' }}
        >
          Atleast one capital letter
        </li>
        <li
          style={{ textDecoration: metCriteria[2] ? 'line-through' : 'none' }}
        >
          Atleast one number
        </li>
        <li
          style={{ textDecoration: metCriteria[3] ? 'line-through' : 'none' }}
        >
          Atleast one special character (!@#$%^&*)
        </li>
      </ul>
    </div>
  );
};

export default PasswordStrength;
