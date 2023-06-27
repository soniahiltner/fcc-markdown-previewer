// eslint-disable-next-line react/prop-types
function EditorButton({ handleScrollTo }) {
  return (
    <button
      className='btn btn-dark btn-sm d-block d-md-none'
      onClick={() => {
        handleScrollTo('main-container')
      }}
    >
      EDITOR
    </button>
  )
}

export default EditorButton
