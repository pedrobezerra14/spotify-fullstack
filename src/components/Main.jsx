import React from 'react'

const Main = () => {
  return (
    <div className="main">
        <div className="item__list">
            <div className="item-list__header">
                <h2>Artistas Populares</h2>
                <a className="item-list__link" href="/">Mostrar tudo</a>
            </div>
        </div>

        <div className="single-item">
            <img className="single-item__image" src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Imagem do artista X" />
            <p>Henrique & Juliano</p>
            <p>Artista</p>
        </div>
    </div>
  )
}

export default Main