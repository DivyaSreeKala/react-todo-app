import React, {Component} from 'react';

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked
        };
    }

    handleChange(e) {
        const {checked} = e.target;
        if(checked){
            if (window.confirm('Do you want to mark the task as completed ?')){
                this.setState({checked});
                this.props.onChange(checked);
            }
        }else{
            this.setState({checked});
            this.props.onChange(checked);
        }
    }

    render() {
        return (<input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)}/>);
    }
}

export default CheckBox;
