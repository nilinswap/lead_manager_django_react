import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { withAlert } from 'react-alert';


class Alerts extends Component{
    static propTypes = {
        error: PropTypes.object.isRequired

    };
    componentDidUpdate(prevProps){
        const {alert, error} = this.props;
        if( prevProps.error !== error){
            alert.error("This is an error.");
        }

    }
    render(){
        return <Fragment />;
    }
}

const mapStateToProps = state => ({
    error: state.errors
});

export default connect(mapStateToProps)(withAlert()(Alerts));

