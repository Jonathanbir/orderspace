import React from 'react';
import styles from './index.css';

const JWT = 'storage_token_id';

const isLogout = () => {
	localStorage.removeItem(JWT);
};

const UserProfile = props => {
	const logout = () => {
		isLogout();
		props.close('logout');
	};

	return (
		<div className="login-wrapper">
			<div className="box login-box">
				<p className="title has-text-centered">Profile</p>
				<fieldset disabled>
					<div className="field">
						<label className="label">Nickname</label>
						<div className="control">
							<input className="input" type="text" defaultValue={props.user.nickname} />
						</div>
					</div>
					<div className="field">
						<label className="label">Email</label>
						<div className="control">
							<input className="input" type="text" defaultValue={props.user.email} />
						</div>
					</div>
					<div className="field">
						<label className="label">Type</label>
						<div className="control">
							<input
								className="input"
								type="text"
								defaultValue={props.user.type === 1 ? 'Manager' : 'General User'}
							/>
						</div>
					</div>
				</fieldset>
				<div className="field is-grouped is-grouped-centered">
					<div className="control">
						<button className="button is-danger" onClick={logout}>
							Logout
						</button>
					</div>
					<div className="control">
						<button
							className="button"
							type="button"
							onClick={() => {
								props.close();
							}}
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default UserProfile;
