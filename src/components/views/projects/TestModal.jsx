import { useState } from 'react';
import { Modal } from '../../visual/containers/Modal';
import Button from '../../visual/buttons/Button';

export default function TestModal() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Button onClick={() => setIsOpen(true)}>Open modal</Button>

			<Modal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				title='Send me a message'
				size='md'>
				<p>pepe</p>
			</Modal>
		</>
	);
}
