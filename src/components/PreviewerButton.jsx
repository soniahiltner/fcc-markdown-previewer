// eslint-disable-next-line react/prop-types
function PreviewerButton({ handleScrollTo }) {
  return (
    <button
      className='btn  btn-dark btn-sm d-block d-md-none'
      onClick={() => {handleScrollTo('preview')}}
    >
      PREVIEWER
    </button>
  )
}

export default PreviewerButton
