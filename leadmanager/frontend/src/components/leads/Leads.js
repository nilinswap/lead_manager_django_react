import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {getLeads} from '../../actions/leads';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Leads extends Component{
    static propTypes = {
        leads: PropTypes.array.isRequired
    };


    componentDidMount(){
        this.props.getLeads();
    }
    render(){
        return (
                    <div>
                        <h1> Leads </h1>
                    </div>
        );
    }
}

const mapStateToProps = state => ({
    leads: state.leads.leads
});
export default connect(mapStateToProps, { getLeads })(Leads);


