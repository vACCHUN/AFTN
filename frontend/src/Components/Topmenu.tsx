
const handleClose = () => {
  window.electron.closeApp();
};

function Topmenu() {
  return (
    <div><button onClick={handleClose}>Close App</button></div>
  )
}

export default Topmenu