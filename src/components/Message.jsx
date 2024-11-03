import React from 'react'

export default function Message({ message }) {
	const isBot = message.sender === "bot"

	return (
		<div className={(isBot ? "justify-start" : "justify-end") + ' my-2 flex flex-row w-full'}>
			<div 
				className={(isBot ? "bg-slate-100 rounded-tl-none" : "bg-slate-300 rounded-tr-none") + 
				' mx-1 w-1/4 px-4 py-2 rounded-xl'}>
				<p>{message.text}</p>
			</div>
		</div>
	)
}
