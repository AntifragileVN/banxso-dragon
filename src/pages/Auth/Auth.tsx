import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/services/firebase';
import { useRecoilState } from 'recoil';
import { currentUserState } from '@/store/user.store';
import { FirebaseError } from 'firebase/app';

const FirebaseAuthUI: React.FC = () => {
	const [, setCurrentUser] = useRecoilState(currentUserState);
	const provider = new GoogleAuthProvider();

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
			<button onClick={onButtonClick}>SignIn with Google</button>
		</div>
	);
};

export default FirebaseAuthUI;
