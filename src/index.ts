import 'bootstrap/dist/css/bootstrap.css'
import './styles/main.scss'
//TODO: maybe remove tooltip.js etc
import 'jquery/dist/jquery'
import 'bootstrap/js/dist/util.js'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/js/dist/tooltip.js'
import 'bootstrap/js/dist/modal.js'

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Root } from './root'

function main() {
    ReactDOM.render(
        React.createElement(Root),
        document.getElementById('app')
    )
}

main()
