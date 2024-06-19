import React, { useState } from 'react';
import { convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './editor.css';
import draftToHtml from 'draftjs-to-html';
import DOMPurify from 'dompurify';

export const EditorConvertToHTML = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const createMarkup = (html: any) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  return (
    <div className="App">
      <header className="App-header">Rich Text Editor Example</header>
      <Editor editorState={editorState} onEditorStateChange={setEditorState} />
      <h3>fwefwef</h3>
      <textarea
        className={'w-full h-48'}
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      />
      <button
        type={'button'}
        onClick={() =>
          console.log(
            draftToHtml(convertToRaw(editorState.getCurrentContent()))
          )
        }
      >
        testanfwe
      </button>

      <div
        dangerouslySetInnerHTML={createMarkup(
          draftToHtml(convertToRaw(editorState.getCurrentContent()))
        )}
      ></div>
    </div>
  );
};
