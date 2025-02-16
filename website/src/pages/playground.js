import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

// Platform Engineering Lifecycle Stages with AI Agents
const lifecycleStages = {
	planning: {
		title: 'Planning & Requirements',
		icon: 'fa-solid fa-clipboard-list',
		agents: [
			{
				name: 'Requirements Analyzer',
				icon: 'fa-solid fa-magnifying-glass-chart',
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
				icon: 'fa-solid fa-chart-line',
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
		icon: 'fa-solid fa-compass-drafting',
		agents: [
			{
				name: 'Architecture Pattern Recommender',
				icon: 'fa-solid fa-diagram-project',
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
				icon: 'fa-solid fa-network-wired',
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
		icon: 'fa-solid fa-code',
		agents: [
			{
				name: 'Code Generator',
				icon: 'fa-solid fa-gears',
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
				icon: 'fa-solid fa-code-branch',
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
		icon: 'fa-solid fa-rocket',
		agents: [
			{
				name: 'Deployment Optimizer',
				icon: 'fa-solid fa-cloud-arrow-up',
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
				icon: 'fa-solid fa-server',
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
			<div className="container mx-auto px-4 py-8">
				<div className="flex flex-col md:flex-row gap-6">
					{/* Lifecycle Stages */}
					<div className="md:w-1/4">
						<div className="bg-white rounded-lg shadow-lg p-4">
							<h3 className="text-xl font-bold mb-4 flex items-center">
								<i className="fa-solid fa-layer-group mr-2"></i>
								Lifecycle Stages
							</h3>
							<div className="space-y-2">
								{Object.entries(lifecycleStages).map(([key, stage]) => (
									<button
										key={key}
										className={`w-full px-4 py-2 rounded-lg flex items-center transition-all ${
											selectedStage === key
												? 'bg-blue-600 text-white'
												: 'bg-gray-100 hover:bg-gray-200 text-gray-700'
										}`}
										onClick={() => setSelectedStage(key)}
									>
										<i className={`${stage.icon} mr-2`}></i>
										{stage.title}
									</button>
								))}
							</div>
						</div>
					</div>

					{/* Main Content */}
					<div className="md:w-3/4">
						{/* Agents Grid */}
						<div className="grid md:grid-cols-2 gap-6 mb-6">
							{lifecycleStages[selectedStage].agents.map((agent, index) => (
								<div key={index} className="bg-white rounded-lg shadow-lg transition-all hover:shadow-xl">
									<div className="p-4 border-b">
										<h4 className="text-lg font-bold flex items-center">
											<i className={`${agent.icon} mr-2 text-blue-600`}></i>
											{agent.name}
										</h4>
									</div>
									<div className="p-4">
										<div className="mb-4 space-y-2">
											<p className="flex items-center">
												<i className="fa-solid fa-robot mr-2 text-gray-500"></i>
												<span className="font-semibold">Type:</span>
												<span className="ml-2">{agent.type}</span>
											</p>
											<p className="flex items-center">
												<i className="fa-solid fa-microchip mr-2 text-gray-500"></i>
												<span className="font-semibold">Model:</span>
												<span className="ml-2">{agent.model}</span>
											</p>
										</div>
										<button
											className={`w-full px-4 py-2 rounded-lg transition-all ${
												selectedAgent?.name === agent.name && isExecuting
													? 'bg-gray-200 text-gray-700'
													: 'bg-blue-600 hover:bg-blue-700 text-white'
											}`}
											onClick={() => executeAgent(agent)}
											disabled={isExecuting}
										>
											<i className={`fa-solid ${isExecuting ? 'fa-spinner fa-spin' : 'fa-play'} mr-2`}></i>
											{selectedAgent?.name === agent.name && isExecuting
												? 'Executing...'
												: 'Execute Agent'}
										</button>
									</div>
								</div>
							))}
						</div>

						{/* Execution Logs */}
						{selectedAgent && (
							<div className="bg-white rounded-lg shadow-lg">
								<div className="p-4 border-b">
									<h3 className="text-lg font-bold flex items-center">
										<i className="fa-solid fa-terminal mr-2 text-blue-600"></i>
										Execution Logs: {selectedAgent.name}
									</h3>
								</div>
								<div className="p-4">
									<div className="bg-gray-900 text-gray-100 rounded-lg p-4 max-h-[300px] overflow-y-auto font-mono">
										{executionLogs.map((log, index) => (
											<div key={index} className="flex items-center mb-2">
												<i className="fa-solid fa-circle text-green-500 text-xs mr-2"></i>
												{log}
											</div>
										))}
										{isExecuting && (
											<div className="flex items-center text-blue-400">
												<i className="fa-solid fa-spinner fa-spin mr-2"></i>
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
