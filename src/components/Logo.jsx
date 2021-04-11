import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

export default function Logo() {
    return (
        <Router>
            <Link to="/">
                <img src='img/logo.svg' alt='Logo' />
            </Link>
        </Router>
    )
}
