import tshirt from '../classic-tee.jpg'

function DropdownCard(size, quantity) {
  return (<div className="dropdown-card">
    <img className="dropdown-card-image" src={tshirt} alt="plain white t-shirt" />
    <div className="dropdown-card-body">
      <p>Classic Tee</p>
      <p>{quantity}x $75.00</p>
      <p>Size: {size}</p>
    </div>
  </div>)
}

export default DropdownCard