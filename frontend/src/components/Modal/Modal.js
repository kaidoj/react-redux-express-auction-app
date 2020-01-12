import React, {
    Component
} from 'react'
import {
    connect
} from 'react-redux'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap'
import PropTypes from 'prop-types'
import { closeModal } from './actions/modal'

class PopupModal extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.props.dispatch(closeModal())
    }

    render() {

        const {
            content,
            title,
            classes,
            open
        } = this.props;
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

        return (
            <div>
            <Modal backdrop={'static'} isOpen={open} toggle={this.toggle} className={classes} size="lg">
                <ModalHeader toggle={this.toggle}  close={closeBtn}>{title}</ModalHeader>
                <ModalBody>
                    {content}
                </ModalBody>
                <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>Close</Button>
                </ModalFooter>
            </Modal>
            </div>
        )
    }
}

PopupModal.propTypes = {
    classes: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        open: state.modal.open,
        title: state.modal.title,
        content: state.modal.content
    }
}

export default connect(
    mapStateToProps,
    null
)(PopupModal)