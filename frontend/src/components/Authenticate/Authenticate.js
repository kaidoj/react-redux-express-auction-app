import React, {
    Component
} from 'react'
import {
    connect
} from 'react-redux'
import {
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'
import {
    authenticateForm
} from './utils/validations/authenticateForm'
import { authenticate } from './actions';

class Authenticate extends Component {

    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleSubmit(e) {
        e.preventDefault()

        const data = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
        }

        const formValid = await authenticateForm(data)
        if (formValid) {
            this.props.dispatch(authenticate(data))
        }
    }

    render() {
        return (    
            <div>    
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <FormGroup>
                        <Label for="firstName">First name</Label>
                        <Input type="text" name="firstName" id="firstName" placeholder="Enter first name" />
                    </FormGroup>    
                    <FormGroup>
                        <Label for="lastName">Last name</Label>
                        <Input type="text" name="lastName" id="lastName" placeholder="Enter last name" />
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit">Authenticate</Button>
                    </FormGroup>
                </form>
            </div>   
        )
    }
}

export default connect(
    null,
    null
)(Authenticate)