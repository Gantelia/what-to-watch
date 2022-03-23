import { useAppSelector } from '../../hooks';
import CSS from 'csstype';

const errorStyle: CSS.Properties = {
  position: 'fixed',
  top: '30px',
  right: '30px',
  padding: '10px',
  backgroundColor: '#d96666',
  color: 'white',
  borderRadius: '5px',
};

function ErrorMessage(): JSX.Element | null {
  const {error} = useAppSelector((state) => state);

  if (error) {
    return (
      <div
        style={errorStyle}
      >
        {error}
      </div>
    );
  }

  return null;
}

export default ErrorMessage;
