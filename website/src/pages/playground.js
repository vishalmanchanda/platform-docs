import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

// Platform Engineering Lifecycle Stages with AI Agents
const lifecycleStages = {
	planning: {
		title: 'Planning & Requirements',
		agents: [
			{
				name: 'Requirements Analyzer',
				type: 'Reasoning-based',
				model: 'GPT-4',
				steps: [
					'Analyzing requirements document structure...',
					'Identifying key stakeholders and dependencies...',
					'Checking for requirement completeness...',
					'Generating requirement gaps report...',
					'Providing recommendations for improvement...'
				]
			},
			{
				name: 'Market Research Agent',
				type: 'Workflow-based',
				model: 'BERT',
				steps: [
					'Collecting market data from specified sources...',
					'Analyzing competitor features...',
					'Identifying industry trends...',
					'Generating market analysis report...',
					'Providing feature recommendations...'
				]
			}
		]
	},
	design: {
		title: 'Design & Architecture',
		agents: [
			{
				name: 'Architecture Pattern Recommender',
				type: 'Reasoning-based',
				model: 'Claude-3',
				steps: [
					'Analyzing system requirements...',
					'Evaluating architectural constraints...',
					'Identifying suitable patterns...',
					'Generating architecture recommendations...',
					'Creating component diagram...'
				]
			},
			{
				name: 'Infrastructure Planner',
				type: 'Workflow-based',
				model: 'Custom ML',
				steps: [
					'Analyzing workload patterns...',
					'Calculating resource requirements...',
					'Generating scaling recommendations...',
					'Estimating costs...',
					'Creating infrastructure blueprint...'
				]
			}
		]
	},
	development: {
		title: 'Development',
		agents: [
			{
				name: 'Code Generator',
				type: 'Workflow-based',
				model: 'StarCoder',
				steps: [
					'Analyzing requirements specification...',
					'Generating code structure...',
					'Implementing business logic...',
					'Adding error handling...',
					'Generating unit tests...'
				]
			},
			{
				name: 'Code Reviewer',
				type: 'Reasoning-based',
				model: 'CodeQL',
				steps: [
					'Scanning code for vulnerabilities...',
					'Checking coding standards...',
					'Analyzing performance patterns...',
					'Identifying potential bugs...',
					'Generating review report...'
				]
			}
		]
	},
	deployment: {
		title: 'Deployment & Operations',
		agents: [
			{
				name: 'Deployment Optimizer',
				type: 'Reasoning-based',
				model: 'GPT-4',
				steps: [
					'Analyzing deployment environment...',
					'Checking resource availability...',
					'Optimizing deployment sequence...',
					'Validating configuration...',
					'Executing deployment plan...'
				]
			},
			{
				name: 'Infrastructure Manager',
				type: 'Workflow-based',
				model: 'Custom ML',
				steps: [
					'Monitoring resource utilization...',
					'Adjusting scaling parameters...',
					'Optimizing resource allocation...',
					'Managing infrastructure costs...',
					'Generating performance report...'
				]
			}
		]
	}
};

export default function AIPlayground() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;
	
	const [selectedStage, setSelectedStage] = useState('planning');
	const [selectedAgent, setSelectedAgent] = useState(null);
	const [executionLogs, setExecutionLogs] = useState([]);
	const [isExecuting, setIsExecuting] = useState(false);

	const executeAgent = async (agent) => {
		setSelectedAgent(agent);
		setIsExecuting(true);
		setExecutionLogs([]);

		// Simulate step execution with delays
		for (const step of agent.steps) {
			await new Promise(resolve => setTimeout(resolve, 1000));
			setExecutionLogs(prev => [...prev, step]);
		}

		setIsExecuting(false);
	};

	return (
		<Layout
			title="AI Agents Playground"
			description="Platform Engineering AI Agents"
		>
			<div className="container margin-vert--lg">
				<div className="row">
					<div className="col col--3">
						<div className="card">
							<div className="card__header">
								<h3>Lifecycle Stages</h3>
							</div>
							<div className="card__body">
								{Object.entries(lifecycleStages).map(([key, stage]) => (
									<button
										key={key}
										className={`button button--block margin-bottom--sm ${
											selectedStage === key ? 'button--primary' : 'button--secondary'
										}`}
										onClick={() => setSelectedStage(key)}
									>
										{stage.title}
									</button>
								))}
							</div>
						</div>
					</div>
					
					<div className="col col--9">
						<div className="row">
							{lifecycleStages[selectedStage].agents.map((agent, index) => (
								<div key={index} className="col col--6 margin-bottom--lg">
									<div className="card" style={{ height: '100%' }}>
										<div className="card__header">
											<h4>{agent.name}</h4>
										</div>
										<div className="card__body">
											<p><strong>Type:</strong> {agent.type}</p>
											<p><strong>Model:</strong> {agent.model}</p>
											<button
												className={`button button--block ${
													selectedAgent?.name === agent.name && isExecuting
														? 'button--secondary'
														: 'button--primary'
												}`}
												onClick={() => executeAgent(agent)}
												disabled={isExecuting}
											>
												{selectedAgent?.name === agent.name && isExecuting
													? 'Executing...'
													: 'Execute Agent'}
											</button>
										</div>
									</div>
								</div>
							))}
						</div>

						{selectedAgent && (
							<div className="card margin-top--md">
								<div className="card__header">
									<h3>Execution Logs: {selectedAgent.name}</h3>
								</div>
								<div className="card__body">
									<div style={{ 
										backgroundColor: 'var(--ifm-pre-background)', 
										padding: '1rem',
										borderRadius: '4px',
										maxHeight: '300px',
										overflowY: 'auto'
									}}>
										{executionLogs.map((log, index) => (
											<div key={index} style={{ 
												marginBottom: '0.5rem',
												display: 'flex',
												alignItems: 'center'
											}}>
												<span style={{ 
													color: 'var(--ifm-color-success)',
													marginRight: '0.5rem'
												}}>
													●
												</span>
												{log}
											</div>
										))}
										{isExecuting && (
											<div className="loading-dots">
												Processing...
											</div>
										)}
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
}
