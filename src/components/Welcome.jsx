import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Welcome extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>Houses</h1>
                <div>
                    <Link to='/house/1'><button>Hufflepuff</button></Link>
                    <Link to='/house/2'><button>Gryffindor</button></Link>
                    <Link to='/house/3'><button>Slytherin</button></Link>
                    <Link to='/house/4'><button>Ravenclaw</button></Link>
                </div>
            </div>
        )
    }
}