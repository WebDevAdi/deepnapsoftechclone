import React from 'react'

function Message({title, description, svg}) {
    
  return (
    <div>
          <div>
            <div className="text-sky-500 flex items-center">
              <span className="text-5xl">{svg}</span>
              <span className="mx-5">{title}</span>
            </div>
            <div>
              {/* content */}
              <p className="text-white font-bold text-justify">
                {description}
              </p>
            </div>
          </div>
        </div>
  )
}

export default Message
