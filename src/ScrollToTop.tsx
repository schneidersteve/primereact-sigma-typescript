import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface AppState {
}

class ScrollToTop extends React.Component<RouteComponentProps, AppState> {
    constructor(props: RouteComponentProps) {
        super(props)
    }

    componentDidUpdate(prevProps: RouteComponentProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }

    render() {
        return this.props.children
    }
}

export default withRouter(ScrollToTop)
