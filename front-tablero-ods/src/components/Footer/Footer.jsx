import React from 'react'
import "./footer.scss";

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='container footer__container'>
        <hr />
          <div className='row'>
            <div className='col-xs-12 col-md-6 footer__container-copy'>
              <p>Copyright - 2022 - Centro de computo</p>
            </div>
            <div className='col-xs-12 col-md-6 footer__container-name'>
              <p>Objetivos de Desarrollo Sustentable</p>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer