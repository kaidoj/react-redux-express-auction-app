import React from 'react'
import {
  connect
} from 'react-redux'
import {
    Link 
} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink 
} from 'reactstrap'

class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    const {
      categories
    } = this.props

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/">Auctions app</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {categories.map((cat, i) => {
                return <NavItem key={i}>
                  <NavLink tag={Link} to={'/' + cat.slug}>{cat.name}</NavLink>
                </NavItem>
              })}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.auctions.categories
  }
}

export default connect(
  mapStateToProps,
  null
)(Navigation)
