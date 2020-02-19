import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { authFormType } from '../../types/types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
    onSubmit = (formProps: authFormType) => {
        const { signup,history }: any = this.props;
        signup(formProps,()=>history.push('/feature'));
    }
    render() {
        const { handleSubmit,errorMessage }: any = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Email</label>
                    <Field
                        name="email"
                        type="text"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field
                        name="password"
                        type="password"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <h3>{errorMessage}</h3>
                <button>Sign Up</button>
            </form>
        )
    }
}
function mapStateToProps(state:any){
    return {
        errorMessage:state.auth.errorMessage 
    }
}
export default compose(connect(mapStateToProps, actions), reduxForm({ form: 'signup' }))(Signup)
