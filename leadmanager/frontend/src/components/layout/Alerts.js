import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { withAlert } from 'react-alert';


class Alerts extends Component{
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    };
    componentDidUpdate(prevProps){
        const {alert, error, message} = this.props;
        if( prevProps.error !== error){
            if (error.msg.name){
                alert.error(`Name: ${error.msg.name.join()}`);
            }
            if (error.msg.email){
                alert.error(`Email: ${error.msg.email.join()}`);
            }
            if (error.msg.message){
                alert.error(`Message: ${error.msg.message.join()}`);
            }
        }
        if( prevProps.message !== message){
            if (message.leadDelete){
                alert.success(message.leadDelete);
            }
            if (message.leadAdd){
                alert.success(message.leadAdd);
            }

        }
    }
    render(){
        return <Fragment />;
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));

