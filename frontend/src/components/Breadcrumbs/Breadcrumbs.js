import React from 'react'
import {
    Link
} from 'react-router-dom'
import {
    Breadcrumb,
    BreadcrumbItem
} from 'reactstrap'

import './scss/style.scss'

const Breadcrumbs = (props) => {
    let category = '';
    if (props.category[0]) {
        category = props.category[0].name;
    }
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active><h1>{category}</h1></BreadcrumbItem>
            </Breadcrumb>
        </div>
    )
}

export default Breadcrumbs