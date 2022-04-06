import CSS from 'csstype';

const wrapperStyle: CSS.Properties = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
};

function LoadingScreen () {
  return (
    <div style={wrapperStyle}>
      <p><b>Loading...</b></p>
      <img src={'/img/spinners/circle-loading.svg'} alt='preloader' />
    </div>
  );
}

export default LoadingScreen;
