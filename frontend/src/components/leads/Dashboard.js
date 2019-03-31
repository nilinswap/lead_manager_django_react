import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import Form from './Form';
import Leads from './Leads';


export default function Dashboard(){

        return (
                <Fragment>
                    <Form />
                    <Leads />
                </Fragment>
        )

}
