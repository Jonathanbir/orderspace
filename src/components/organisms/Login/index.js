import React, { setState } from 'react';
import axios from '../../../commons/axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import styles from './index.css';

const JWT = 'storage_token_id';

const setToken = token => {
	localStorage.setItem(JWT, token);
};

export default function Login(props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async data => {
		//2.獲取表單數據
		//3.處理登陸邏輯
		try {
			const { email, password } = data;
			const res = await axios.post('/auth/login', { email, password });
			const jwToken = res.data;
			setToken(jwToken);
			toast.success('Login Success');
			//4.跳轉到首頁
			props.history.push('/');
		} catch (error) {
			const message = error.response.data.message;
			toast.error('Incorrect email or password');
		}
	};

	return (
		<div className="login-wrapper">
			<form className="box login-box" onSubmit={handleSubmit(onSubmit)}>
				<div className="field">
					<label className="label">Email</label>
					<div className="control">
						<input
							className={`input ${errors.email && 'is-danger'}`}
							type="text"
							placeholder="Text email"
							name="email"
							{...register('email', {
								required: 'email is required',
								pattern: {
									value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
									message: 'invalid emial',
								},
							})}
						/>
						{errors.email && <span>{errors.email.message}</span>}
					</div>
				</div>
				<div className="field">
					<label className="label">Password</label>
					<div className="control">
						<input
							className={`input ${errors.password && 'is-danger'}`}
							type="password"
							placeholder="Text password"
							name="password"
							{...register('password', {
								required: 'password is required',
								minLength: {
									value: 6,
									message: 'cannot be less than 6 digits',
								},
							})}
						/>
						{errors.password && <span>{errors.password.message}</span>}
					</div>
				</div>
				<div className="control">
					<button className="button is-fullwidth is-danger">Login</button>
				</div>
			</form>
		</div>
	);
}
