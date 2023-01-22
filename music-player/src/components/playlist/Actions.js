import React from 'react'
// import playerContext from '../../context/playerContext'

// // Hooks
const fav = () => {
  console.log('I like this one')
}

// Component
function Actions() {
  return (
    <div className="actions">
      <img src="https://i0.wp.com/xclusiveloaded.com/wp-content/uploads/2022/10/Ruger-–-Red-Flags-1.webp?fit=700%2C700&ssl=1" />
      <div className="album_meta">
        <span className="alb_label">PLAYLIST</span>
        <h1>MP3 DJ MIX</h1>
      </div>
      <div className="action_btns">
        <button onClick={() => fav()} className="fav_btn">
          <i className="far fa-heart fa-2x"></i>
        </button>
        <button onClick={() => fav()} className="fav_btn">
          <i className="far fa-arrow-alt-circle-down fa-2x"></i>
        </button>
        <button onClick={() => fav()} className="fav_btn">
          <i className="fas fa-ellipsis-h fa-2x"></i>
        </button>
      </div>
    </div>
  )
}

export default Actions