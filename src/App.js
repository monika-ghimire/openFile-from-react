import React from 'react'
import {  create, registerPlugin } from 'filepond';
import 'filepond/dist/filepond.css';
import * as FilePond from 'filepond';

import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

export default function App() {
  
registerPlugin(FilePondPluginImagePreview);
  FilePond.registerPlugin(
    FilePondPluginImagePreview,
   
  );


FilePond.create(
  document.querySelector('input')
);

  return (
 <>
<input type="file" 
    className="filepond"
    name="filepond"
    // multiple 
    // // allowMultiple='true'
    // data-max-files="3"
   />
 </>
  
  )
}
