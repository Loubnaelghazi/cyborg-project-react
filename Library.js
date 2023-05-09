import React from 'react'
import './Library.css'
import './MostPopular.css'
import LibraryDtata from './data/LibraryData/LibraryDtata';
import GamingLibraryCrad from './GamingLibraryCrad';
/* mn a7san kuna nswbu component buhdu li ikun feh dak wrapper  */

const librarys = LibraryDtata.map((library) => {  
 
  return (
    <GamingLibraryCrad
      key={library.id}
      title={library.title}
      date_added={library.date_added}
      hours_played={library.hours_played}
      download={library.download}
    />
  );
});
const Library = () => {
  return (
    <>
    
    <div className="section-wrapper">
        <div className="section-header">
          {" "}
          <h4> Gaming Library</h4>
        </div>

{/* {librarys}
 */}   
 <div className='gaming-library-cards'>
 {librarys}
  </div>     
 </div>
    </>
  )
}

export default Library
