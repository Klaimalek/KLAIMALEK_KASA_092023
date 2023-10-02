import React from 'react'
import './tag.css'
function Tag({tags}) {
  return (
    <div className='accommodation-tag'>
        <ul className='tags-list'>
          {tags.map((tag) =>(
            <li className='elt-tag' key={tag}> {tag}</li>
          )

          )}
        </ul>
    </div>
  )
}

export default Tag