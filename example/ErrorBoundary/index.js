import React from 'react'

import { Message } from '../../src/index'

export default class ErrorBoundary extends React.Component {

    state = { error: null }

    componentDidCatch({ message }) {
        this.errorHasOccurred = true
        this.setState({ error: message })
    }    

    componentDidUpdate() {       
        if(this.state.error && !this.errorHasOccurred) {
            this.setState({ error: null })
        }else {
            this.errorHasOccurred = false
        }
    }

    render() {       

        if (this.state.error) {

            return (
                <Message borderless type='error'>
                    <h4>Something went wrong!</h4>
                    <pre>{this.state.error}</pre>
                </Message>
            )
        }

        return this.props.children;
    }
}