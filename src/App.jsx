import { useState } from 'react'
import './App.css'
import Editor from './components/Editor'
import Previewer from './components/Previewer'
import EditorButton from './components/EditorButton'
import ButtonClear from './components/ButtonClear'
import PreviewerButton from './components/PreviewerButton'

function App() {
  const placeholder = `# Hello!\n## \`I AM YOUR FAVORITE MARKDOWN PREVIEWER\`
  \n\n ## And I am ready for you.\n\n- You can write **inline-code** like this: \`<div></div>\`\n- Or you can write **multi-line code** like this:\n
  \`\`\` 
 
  function sum(a, b) {
     if (a != 0) {
     return a + b;
     }
     
\`\`\`

  - If you want, you can make [links](https://www.freecodecamp.com)\n- Or even \n> **_Blockquotes_**\n- You can make **lists** like this one you are reading or numbered ones like this:
  1.First
  2.Second
  3.Third
  - And finally, if you are in the mood why not add an **image**?\n
  ![Markdown-mark](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)
  > When you are ready click on **CLEAR** and **_Start typing!_**`
  const [input, setInput] = useState(placeholder)

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleScrollTo = (id) => {
    const element = document.getElementById(id)
    element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      id='main-container'
      className='container-fluid d-flex flex-column'
    >
      <div className='header container-fluid'>
        <h1>Markdown Previewer</h1>
      </div>
      <div className='body container-fluid'>
        <div
          id='main'
          className='row'
        >
          <div className='col-12 col-sm-6 d-flex flex-column editor'>
            <div className='subheader'>
              <h5>MARKDOWN</h5>
            </div>
            <Editor
              input={input}
              onChange={handleChange}
            />
          </div>

          <div className='col-12 col-sm-6 d-flex flex-column previewer'>
            <div className='subheader'>
              <h5>HTML</h5>
            </div>
            <Previewer input={input} />
          </div>
        </div>
      </div>

      <div className='buttons d-flex justify-content-center sm justify-content-around '>
        <EditorButton handleScrollTo={handleScrollTo} />
        <ButtonClear handleClear={() => setInput('')} />
        <PreviewerButton handleScrollTo={handleScrollTo} />
      </div>
    </div>
  )
}

export default App
