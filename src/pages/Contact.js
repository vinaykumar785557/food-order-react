import React, { useRef } from 'react';
import '../styles/Contact.css';
import photo from '../assets/photo.jpeg';
function Contact() {
	const nameInputRef = useRef();
	const emailInputRef = useRef();
	const messageInputRef = useRef();

	const submitHandler = (e) => {
		e.preventDefault();

		const name = nameInputRef.current.value;
		const email = emailInputRef.current.value;
		const message = messageInputRef.current.value;

		const userEnteredData = { name, email, message };

		console.log(userEnteredData);

		nameInputRef.current.value = '';
		emailInputRef.current.value = '';
		messageInputRef.current.value = '';
	};

	return (
		<div className='contact'>
			<div
				className='leftSide'
				style={{ backgroundImage: `url(${photo})` }}></div>
			<div className='rightSide'>
				<h1> Contact Us</h1>
				<form onSubmit={submitHandler}>
					<label htmlFor='name'>Name</label>
					<input name='name' type='text' ref={nameInputRef} />
					<label htmlFor='email' value=''>
						Email
					</label>
					<input name='email' type='email' ref={emailInputRef} />
					<label htmlFor='message'>Message</label>
					<textarea
						rows='6'
						name='message'
						required
						ref={messageInputRef}></textarea>
					<button type='submit'> Send Message</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
