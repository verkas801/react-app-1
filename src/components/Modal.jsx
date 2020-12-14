import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class ModalComponent extends Component {
    state = { show:false }

    constructor(props){
        super(props);
        console.log(props);
    }

    openModal = () => {
        this.setState({show:true});
    }
    
    hideModal = () =>{
        this.setState({show:false});
    }

    render() { 
        return ( 
            <Modal.Dialog
                show={this.state.show}
                onHide={this.hideModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        );
    }
}
 
export default ModalComponent;