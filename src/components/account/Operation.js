import React from 'react'
import OperationStore from '../../stores/OperationStore';
import OperationService from '../../services/OperationService';

class Operation extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.getOperationState();
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        if (!this.state.operation) {
            this.requestOperation();
        }
        OperationStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        OperationStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        var state = this.getOperationState();
        if (state.operation && this.props.id === state.operation.id) {
            this.setState(state);
        }
    }
    
    requestOperation() {
        OperationService.findOne(this.props.id);
    }

    getOperationState() {
        return {
            operation: OperationStore.getOne(this.props.id)
        };
    }

    render()  {
        if (this.state.operation) {
            return (
                        <div className="c-list-item c-field c-field--default">
                            <div className="c-field__label">
                            <div className="c-ico fa fa-briefcase"></div>{this.state.operation ? this.state.operation.label : ''}
                            </div>
                            <div className="c-field__value">{this.state.operation ? this.state.operation.montant : ''} {this.state.operation ? this.state.operation.currency : ''}</div>
                        </div>
                    )
        }
        return(<div></div>)
    }
}

export default Operation;