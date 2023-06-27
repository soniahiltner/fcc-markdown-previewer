/* eslint-disable react/prop-types */
function ButtonClear(props) {
  return (
    <button
      type='button'
      className='btn btn-dark btn-sm'
      onClick={props.handleClear}
    >
      CLEAR
    </button>
  )
}


export default ButtonClear
