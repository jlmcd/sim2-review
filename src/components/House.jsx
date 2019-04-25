import React, { Component } from 'react'
import axios from 'axios'

export default class House extends Component {
    constructor() {
        super()
        this.state = {
            id: 0,
            house_name: '',
            description: '',
            patron_animal: '',
            img: '',
            color_1: '',
            color_2: '',
            color_3: ''
        }
    }

    componentDidMount() {
        this.getHouseData()
    }

    getHouseData() {
        var { id: houseToGet } = this.props.match.params;
        axios.get(`/api/house/${houseToGet}`).then(({ data: house }) => {
            this.setState(house)
        })
    }

    componentDidUpdate(pastProps) {
        if (pastProps.match.params.id !== this.props.match.params.id) {
            this.getHouseData()
            console.log('it ran')
        }
    }

    render() {
        return (
            <div style={{ backgroundColor: this.state.color_1, width: '100%', height: '100vh' }}>
                <h1 style={{ color: this.state.color_3 }}>{this.state.house_name}</h1>
                <h3 style={{ color: this.state.color_3 }}>{this.state.description}</h3>
                <h2 style={{ color: this.state.color_3 }}>{this.state.patron_animal}</h2>
                <figure>
                    <img src={this.state.img} />

                </figure>

            </div>
        )
    }
}