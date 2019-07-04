import React from 'react'

import {Field, reduxForm} from 'redux-form';

class StreamCreate extends React.Component{

	renderError({touched,error}){
		if(touched && error){
			return(
				<div className="ui error message" >
					<div className="header">{error}</div>
				</div>
				);
		}
	}

	renderInput = ({input,label,meta}) => {
		const className = `field ${meta.touched && meta.error ? 'error' : ''}`;
		return(
				<div className={className}>
					<label>{label}</label>
					<input {...input} autoComplete="off"/>
					{this.renderError(meta)}
				</div>
			); 
	}

	onSubmit(formValues){
		// console.log(formValues);
	}

	render(){
		return (
				<form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)} >
					<Field name="title" component={this.renderInput} label="Title"/>
					<Field name="description" component={this.renderInput} label="Description"/>
					<button className="ui button primary">Submit</button>
				</form>
			);
	}
}

const validate = formValues => {
	let errors = {};

	if(!formValues.title)
		errors.title = "Enter a title!";
	if(!formValues.description)
		errors.description = "Enter a description";

	return errors;
}

export default reduxForm({form : 'StreamCreate',validate:validate})(StreamCreate);

