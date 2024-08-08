import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/services/firebase';
import { FirebaseError } from 'firebase/app';
import c from '@/components/elements/Form/Form.module.scss';

import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FiLock } from 'react-icons/fi';
import { FaGoogle } from 'react-icons/fa';
import { useAuth } from '@/services/auth.service';

const FirebaseAuthUI: React.FC = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	// const [emailError, setEmailError] = useState<string>('');
	// const [passwordError, setPasswordError] = useState<string>('');

	const provider = new GoogleAuthProvider();
	const { setCurrentUser } = useAuth();

	const onButtonClick = async () => {
		try {
			const result = await signInWithPopup(auth, provider);
			// This gives you a Google Access Token. You can use it to access the Google API.
			// const credential = GoogleAuthProvider.credentialFromResult(result);
			// const token = credential.accessToken;
			// The signed-in user info.
			const user = result?.user;
			setCurrentUser(user);

			// IdP data available using getAdditionalUserInfo(result)
			// ...
		} catch (error) {
			// Handle Errors here.
			// const errorCode = error.code;
			// const errorMessage = error.message;
			// The email of the user's account used.
			// const email = error.customData.email;
			// The AuthCredential type that was used.
			if (error instanceof FirebaseError) {
				const credential = GoogleAuthProvider.credentialFromError(error);
				console.log(credential);
			}
			// ...
		}
	};

	return (
		<div className="container">
			<div className={c.form__container}>
				<form className={c.form}>
					<h1 className={c.form__title}>Create Account</h1>
					<div className={c.form__socials}>
						<button
							type="button"
							className={c.form__socialsBtn}
							onClick={onButtonClick}
						>
							<FaGoogle className={c.form__socialsIcon} />
						</button>
					</div>
					<label className={c.form__label} htmlFor="logEmail">
						Email
					</label>
					<div className={c.form__inputWrapper}>
						<MdOutlineAlternateEmail className={c.form__inputIcon} />
						<input
							className={c.form__input}
							type="email"
							placeholder="example@domain.com"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</div>

					<label className={c.form__label} htmlFor="logEmail">
						Password
					</label>
					<div className={c.form__inputWrapper}>
						<FiLock className={c.form__inputIcon} />
						<input
							className={c.form__input}
							type="password"
							placeholder="●●●●●●●●●●●●"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>
					</div>
					<button type="submit" className={c.form__submit}>
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
};

export default FirebaseAuthUI;
