/* eslint-disable react/prop-types */
import { marked } from 'https://cdn.skypack.dev/marked@4.0.16'
import '../stylessheets/previewer.css'

marked.setOptions({
  gfm: true,
  breaks: true
})

// INSERTS target="_blank" INTO HREF TAGS (required for Codepen links)
const renderer = new marked.Renderer()
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`
}

function Previewer(props) {
  const getMarkdownText = () => {
    const rawMarkup = marked(props.input, { renderer: renderer })
    return {
      __html: rawMarkup
    }
  }
  return (
    <div
      id='preview'
      className='display'
      dangerouslySetInnerHTML={getMarkdownText()}
    ></div>
  )
}

export default Previewer