import React, { useState } from 'react';

import FormFields from './FormFields';
import Enroll from './Enroll';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function InputForm() {
    const handleSubmit = event => {
        event.preventDefault();
        alert('You have submitted the form')
    }
    return (
        <>
            <div className="container-fluid">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <FormFields></FormFields>
                        </div>

                        <div className="col">
                            <Enroll></Enroll>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}