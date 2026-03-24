interface SequenceProps {
  password: string;
}

function CharacterSequenceValidator(props: SequenceProps) {
  let count = 0;
  let hasMore = false;

  const checkSequence = () => {
    for (let i = 0; i < props.password.length - 3; i++) {
      if (
        /[A-Z][a-z][0-9][!@#$%^&*]/.test(props.password.substring(i, i + 4))
      ) {
        count++;
      }
    }
  };
  checkSequence();

  const checkCount = () => {
    if (count > 0) {
      hasMore = true;
    } else {
      hasMore = false;
    }
  };

  checkCount();

  return (
    <>
      <p>
        {hasMore
          ? 'Has ' + count + ' sequence(s)'
          : 'Doesnt have a sequence (Aa1@)'}
      </p>
    </>
  );
}

export default CharacterSequenceValidator;
