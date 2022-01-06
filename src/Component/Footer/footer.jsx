import React, { Component } from 'react';
import './footer.css'

class Footer extends Component
{
    render(){
        return(
            <footer>
                <div className ="container">
                <div className="referinte">
            <a href="#">CONTACT US</a>
            <a href="#">ABOUT US</a>
                </div>
                <div className="footer-title">
                    <h1>FIRE-STOCK <br/> LIVE 2021</h1>
                </div>
                <div className="info-footer">
                    <p>RETUR GRATUIT</p>
                    <p>VERIFICARE COLET</p>
                    <p>PLATA LA LIVRARE</p>
                </div>
                </div>
            </footer>
        )
    }

}


export default Footer