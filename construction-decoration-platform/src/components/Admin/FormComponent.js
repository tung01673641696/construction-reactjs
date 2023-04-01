import React from 'react';
import {useController} from "react-hook-form";
import './FormComponent.scss'
const FormComponent = props => {

	const {name,style, placeholder, label, rules, control, defaultValue, ...inputProps} = props

	const {field,fieldState} = useController({name, control: control, rules, defaultValue})


	const {error} = fieldState

	return (
		<div className={`form-group ${style}`}>
			<label style={{float:'left'}}>{label}</label>
			<input
				defaultValue={field.defaultValue}
				value={field.value}
				name={field.name}
				onChange={field.onChange}
				onBlur={field.onBlur}
				ref={field.ref}
				className={`input-field form-control`} placeholder={placeholder}
				style={{width:'100%'}}
				{...inputProps}
			/>
			{error&&<p className={'error-message'} style={{color: 'red', fontSize: '12px',float:'left', marginTop: '3px',position:'fixed'}}>{
			error.message}</p>
		}


		</div>
	);
};

export default FormComponent;