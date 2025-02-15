import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

// Predefined prompts for different platform components
const predefinedPrompts = {
	architecture: [
		{
			title: 'Microservices Design',
			prompt: 'Design a microservices architecture for a platform that handles user authentication, product management, and order processing.',
		},
		{
			title: 'API Gateway Setup',
			prompt: 'Create an API gateway configuration for managing multiple microservices with rate limiting and authentication.',
		},
	],
	development: [
		{
			title: 'CI/CD Pipeline',
			prompt: 'Design a CI/CD pipeline for a microservices-based platform using GitHub Actions and Kubernetes.',
		},
		{
			title: 'Testing Strategy',
			prompt: 'Develop a comprehensive testing strategy including unit tests, integration tests, and end-to-end tests for a platform.',
		},
	],
	security: [
		{
			title: 'Authentication System',
			prompt: 'Design a secure authentication system using OAuth 2.0 and JWT tokens.',
		},
		{
			title: 'Security Best Practices',
			prompt: 'List security best practices for protecting APIs and implementing secure data storage.',
		},
	],
	infrastructure: [
		{
			title: 'Cloud Infrastructure',
			prompt: 'Design a scalable cloud infrastructure using AWS/Azure/GCP for a microservices platform.',
		},
		{
			title: 'Monitoring Setup',
			prompt: 'Create a monitoring and alerting setup using Prometheus and Grafana for a distributed system.',
		},
	],
};

export default function AIPlayground() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;
	
	const [selectedCategory, setSelectedCategory] = useState('architecture');
	const [selectedPrompt, setSelectedPrompt] = useState('');
	const [customPrompt, setCustomPrompt] = useState('');
	const [response, setResponse] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handlePromptSelect = (prompt) => {
		setSelectedPrompt(prompt);
		setCustomPrompt(prompt);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		
		try {
			// Here you would integrate with your AI service
			// For now, we'll just simulate a response
			await new Promise(resolve => setTimeout(resolve, 1000));
			setResponse('AI response will appear here. Integration with AI service pending.');
		} catch (error) {
			setResponse('Error: Failed to get AI response.');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Layout
			title="AI Playground"
			description={siteConfig.tagline}
			keywords={siteConfig.customFields.keywords}
			metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
		>
			<div className="container margin-vert--lg">
				<div className="row">
					<div className="col col--3">
						<div className="card">
							<div className="card__header">
								<h3>Categories</h3>
							</div>
							<div className="card__body">
								{Object.keys(predefinedPrompts).map((category) => (
									<button
										key={category}
										className={`button button--block margin-bottom--sm ${
											selectedCategory === category ? 'button--primary' : 'button--secondary'
										}`}
										onClick={() => setSelectedCategory(category)}
									>
										{category.charAt(0).toUpperCase() + category.slice(1)}
									</button>
								))}
							</div>
						</div>
					</div>
					
					<div className="col col--9">
						<div className="card margin-bottom--lg">
							<div className="card__header">
								<h3>Predefined Prompts</h3>
							</div>
							<div className="card__body">
								<div className="row">
									{predefinedPrompts[selectedCategory].map((item) => (
										<div key={item.title} className="col col--6 margin-bottom--sm">
											<div
												className={`card ${
													selectedPrompt === item.prompt ? 'shadow--md' : ''
												}`}
												style={{ cursor: 'pointer' }}
												onClick={() => handlePromptSelect(item.prompt)}
											>
												<div className="card__body">
													<h4>{item.title}</h4>
													<p>{item.prompt}</p>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						<div className="card">
							<div className="card__header">
								<h3>AI Prompt</h3>
							</div>
							<div className="card__body">
								<form onSubmit={handleSubmit}>
									<textarea
										className="margin-bottom--sm"
										style={{
											width: '100%',
											minHeight: '100px',
											padding: '0.5rem',
											borderRadius: '4px',
											border: '1px solid var(--ifm-color-emphasis-300)',
										}}
										value={customPrompt}
										onChange={(e) => setCustomPrompt(e.target.value)}
										placeholder="Enter your prompt or select a predefined one..."
									/>
									<button
										type="submit"
										className="button button--primary button--block"
										disabled={isLoading || !customPrompt}
									>
										{isLoading ? 'Generating...' : 'Generate Response'}
									</button>
								</form>
							</div>
						</div>

						{response && (
							<div className="card margin-top--lg">
								<div className="card__header">
									<h3>AI Response</h3>
								</div>
								<div className="card__body">
									<pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
										{response}
									</pre>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
}
