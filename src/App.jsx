import { useState } from 'react'
import Message from './components/Message'
import ChatInput from './components/ChatInput'

function App() {
	const [messages, setMessages] = useState([
		{ text: "Welcome to financial risk management bot. How can I help you?", sender: "bot" }
	])

	const handleUserMessage = async (message) => {
		setMessages([...messages, { text: message, sender: "user" }]);

		const botResponse = await getBotResponse(message);

		setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: "bot" }]);
	};

	const getBotResponse = async (message) => {
		const lowerMessage = message.toLowerCase();

		const responses = [
			{
				keywords: ["market risk", "stock", "equity", "market"],
				response: "Market risk involves potential losses due to factors like stock price fluctuations or interest rate changes. Would you like to discuss strategies for mitigating this?"
			},
			{
				keywords: ["credit risk", "default", "creditworthiness", "credit"],
				response: "Credit risk is the risk of loss if a borrower fails to repay a loan or meet contractual obligations. I can guide you on assessing credit risk or diversifying to manage exposure. Which would you prefer?"
			},
			{
				keywords: ["liquidity risk", "liquid assets", "cash flow", "liquidity"],
				response: "Liquidity risk arises when assets cannot be sold quickly without significant loss. Do you want advice on improving liquidity or managing cash flow?"
			},
			{
				keywords: ["operational risk", "process failure", "fraud", "operational"],
				response: "Operational risk stems from internal processes, people, or systems failures. Common mitigation strategies include strong internal controls and risk assessments. Would you like more details on these?"
			},
			{
				keywords: ["systematic risk", "systemic risk", "market crash", "systemic"],
				response: "Systematic risk affects the entire market, not just specific assets. Hedging or diversification are common strategies to manage it. Are you interested in exploring these?"
			},
			{
				keywords: ["risk mitigation", "reduce risk", "hedging", "risk"],
				response: "Risk mitigation includes strategies like hedging, diversification, and insurance. I can suggest specific techniques tailored to your needs. What area are you focused on?"
			},
			{
				keywords: ["portfolio", "investment risk", "asset allocation"],
				response: "Managing investment risk through diversified portfolios and strategic asset allocation is crucial. I can help evaluate your portfolio's risk exposure. Shall we discuss this further?"
			}
		];

		for (let entry of responses) {
			if (entry.keywords.some(keyword => lowerMessage.includes(keyword))) {
				return entry.response;
			}
		}

		return "I'm here to assist with financial risk management. Could you clarify the type of risk you're interested in or provide more details?";
	};


	return (
		<div id='chatbot-container'>
			<div className='h-[85vh] overflow-y-auto'>
				{
					messages.map((message, index) => (
						<Message message={message} key={index} />
					))
				}
			</div>
			<ChatInput onSend={handleUserMessage} />
		</div>
	)
}

export default App
