import { useState } from 'react';
import Button from '../components/visual/buttons/Button';
import SidesSeparator from '../components/visual/containers/SidesSeparator';
import TextSymbol from '../components/visual/TextSymbol';

export default function ContactMe() {
	const [sendState, setSendState] = useState('');
	const [showMessage, setShowMessage] = useState(false);

	const onSubmit = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;

		const data = Object.fromEntries(new FormData(form));

		try {
			const response = await fetch(
				'https://formsubmit.co/a4615a61aca2ce82fa53a02e302524a6 ',
				{
					method: 'POST',
					body: JSON.stringify(data, null, 2),
				},
			);

			if (response.ok) {
				setSendState('Thanks! Your message was sent.');
				setShowMessage(true);
				form.reset();
				setTimeout(() => {
					setShowMessage(false);
				}, 3000);
			} else {
				setSendState('Something went wrong. Please try again.');
				setShowMessage(true);
				setTimeout(() => {
					setShowMessage(false);
				}, 3000);
			}
		} catch (error) {
			setSendState('Connection error. Please try again.');
			setShowMessage(true);
			setTimeout(() => {
				setShowMessage(false);
			}, 3000);
		}
	};

	return (
		<>
			<SidesSeparator>
				<>
					<div className='mb-4'>
						<h1 className='text-3xl md:text-5xl uppercase font-bold'>
							Let's connect
						</h1>
						<p className='text-zinc-700'>
							You can reach me through any of these channels - I respond quickly
							and love hearing about new projects.
						</p>
					</div>
					<h2 className='text-2xl uppercase font-bold'>Send me a message</h2>
					<form
						className='flex w-full justify-center items-center space-y-4 flex-col'
						onSubmit={onSubmit}>
						<div className='flex flex-col md:flex-row gap-4 w-full'>
							<div className='flex flex-col gap-4 md:max-w-md w-full'>
								<label className='flex flex-col gap-2'>
									Subject:{' '}
									<input
										className='bg-white border-2 border-amber-200 p-2'
										required
										name='subject'
										type='text'
										placeholder='Tell me the topic...'
										autoComplete='true'
									/>
								</label>

								<label className='flex flex-col gap-2'>
									Reply eMail:{' '}
									<input
										className='bg-white border-2 border-amber-200 p-2'
										required
										name='email'
										placeholder='Where I can send back a response?'
										type='email'
										autoComplete='true'
									/>
								</label>
							</div>
							<div className='flex flex-col gap-4 w-full'>
								<div className='w-full'>
									<label
										htmlFor='other'
										className='origin-top-left shrink-0 rtl:origin-top-right subpixel-antialiased block text-small relative will-change-auto !duration-200 !ease-out motion-reduce:transition-none transition-[transform,color,left,opacity,translate,scale] pb-1.5 pe-2 max-w-full overflow-hidden text-ellipsis text-foreground'>
										Message
									</label>
									<textarea
										id='other'
										className='align-middle w-full resize-none font-normal text-small placeholder:text-foreground-500 shadow-xs px-3 py-2 bg-white border-2 border-amber-200 p-2 h-[100px] min-h-10 rounded-medium transition-background motion-reduce:transition-none !duration-150 outline-solid outline-transparent !h-auto'
										rows='5'
										name='other'
										placeholder="I'd love to hear your message..."></textarea>
								</div>
							</div>
						</div>
						<div className='flex gap-4 w-full'>
							<Button
								fullWidth
								className='max-w-md'
								color='primary'
								type='submit'>
								Send message
							</Button>
							<Button fullWidth type='reset'>
								Restart
							</Button>
						</div>
					</form>

					<p
						className={`text-sm p-2 text-secondary text-center ${showMessage ? 'inline-block' : 'hidden'}`}>
						{sendState}
					</p>
					<div className='flex flex-col pt-4'>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
							<div className='text-sm flex flex-col gap-2'>
								<h2 className='font-bold uppercase tracking-wider text-lg'>
									Email me
								</h2>
								<div className='flex gap-2'>
									<TextSymbol>mail</TextSymbol>
									<a
										className='font-bold border-b-2 hover:border-primary'
										href='mailto:gif.poto@gmail.com'>
										gif.poto@gmail.com
									</a>
								</div>
								<p className='text-secondary'>
									I'd love to hear from you! Send me a message about your
									project, share what you're working on, or just say hi. Whether
									you want to collaborate, hire me, or explore ideas together.
								</p>
							</div>
							<div className='text-sm flex flex-col gap-2'>
								<h2 className='font-bold uppercase tracking-wider text-lg'>
									Call me
								</h2>
								<div className='flex gap-2'>
									<TextSymbol>phone</TextSymbol>
									<a
										className='font-bold border-b-2 hover:border-primary'
										href='tel:+57 310 575 5269'>
										+57 310 575 5269
									</a>
								</div>
								<p className='text-secondary'>
									For quick calls or urgent questions. I'm available Monday -
									Friday, 9 AM - 6 PM EST.
								</p>
							</div>
							<div className='text-sm flex flex-col gap-2'>
								<h2 className='font-bold uppercase tracking-wider text-lg'>
									Let's chat
								</h2>
								<div className='flex gap-2'>
									<TextSymbol>chat</TextSymbol>
									<a
										className='font-bold border-b-2 hover:border-primary'
										href='https://www.linkedin.com/in/rafael-salcedo-a70a96272/'>
										www.linkedin.com/in/rafael-salcedo-a70a96272
									</a>
								</div>
								<p className='text-secondary'>
									Let's chat on LinkedIn! I'm always open to connecting with
									people who are creating something interesting. Tell me about
									your work, share what you're building, or just drop a message,
									I'd be happy to hear from you and see if we can work together.
								</p>
							</div>
						</div>
						<div>
							<h3 className='uppercase font-bold text-2xl'>
								Pick your favorite
							</h3>
							<p className='text-secondary text-sm'>
								I'm happy to connect wherever you feel most comfortable. Just
								let me know what you're working on, and I'll get back to you as
								soon as possible.
							</p>
						</div>
					</div>
				</>
			</SidesSeparator>
		</>
	);
}
