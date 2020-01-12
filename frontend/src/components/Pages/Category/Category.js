import React, {
    Component
} from 'react'
import {
    connect
} from 'react-redux'
import Auctions from '../../Auctions/Auctions'
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs'

class Category extends Component {

    currentCategory() {
        const {
            categories,
            match
        } = this.props

        const current = match.params.category
        const category = categories.filter((cat) => cat.slug === current)

        return category
    }

    render() {
        const {
            match
        } = this.props
        return (
            <div>
                <Breadcrumbs category={this.currentCategory()}/>
                <Auctions category={match.params.category}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.auctions.categories
    }
}

export default connect(
    mapStateToProps
)(Category)