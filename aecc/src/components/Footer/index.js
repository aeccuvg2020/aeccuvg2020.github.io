import React, { Component } from 'react';
import './styles.css';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container-fluid">
                    <div>
                        <ul className="social-links">
                            <li>
                                <a title="FB AECCUVG" href="https://www.facebook.com/aeccti.uvg">
                                    <FacebookIcon style={{ fontSize: '50px'}} />
                                </a>
                            </li>
                            <li>
                                <a title="IG AECCUVG" href="https://www.instagram.com/aeccuvg/">
                                    <InstagramIcon style={{ fontSize: '50px'}} />
                                </a>
                            </li>
                        </ul>

                    </div>
                    <div id="go-top">
                        <a title="Ir Inicio" href="#home">
                            <ExpandLessIcon style={{ fontSize: '50px'}} />
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}