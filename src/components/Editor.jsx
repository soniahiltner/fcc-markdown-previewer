/* eslint-disable react/prop-types */
import '../stylessheets/editor.css'

function Editor(props) {
  return (
    <textarea
      id='editor'
      className='pt-sm-2'
      type='text'
      name='text'
      onChange={props.onChange}
      value={props.input}
    ></textarea>
  )
}
export default Editor
