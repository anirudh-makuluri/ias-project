import React, { useState } from 'react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import {
	SendIcon
} from 'lucide-react'

export default function ChatInput({ onSend }) {
	const [input, setInput] = useState("")
	const [isSendBtnEnabled, setSendBtnEnable] = useState(false);

	const updateInput = (e) => {
		const message = e.target.value
		setInput(message)

		if (message.length > 0) {
			setSendBtnEnable(true)
		} else {
			setSendBtnEnable(false)
		}

	}

	const handleKeyDown = (e) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			handleSendMessage();
		}
	}

	const handleSendMessage = () => {
		const message = input.trim()

		if (message.length > 0) {
			onSend(message)
			setInput("")
			setSendBtnEnable(false)
		}
	}

	return (
		<div className='absolute bottom-2 px-2 flex flex-row items-center w-full gap-2'>
			<form onSubmit={handleSendMessage} className='flex flex-row items-center w-full gap-2'>
				<Textarea
					type="text"
					onChange={updateInput}
					onKeyDown={handleKeyDown}
					value={input}
					placeholder="Type your message here" />
				<Button
					type="submit"
					disabled={!isSendBtnEnabled}
					onClick={handleSendMessage}
					className="disabled:opacity-30">
					<SendIcon />
				</Button>
			</form>
		</div>
	)
}
