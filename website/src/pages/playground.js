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
			},
			{
				name: 'Cost Estimation Agent',
				icon: 'fa-solid fa-calculator',
				type: 'Reasoning-based',
				model: 'GPT-4',
				steps: [
					'Analyzing project scope...',
					'Calculating resource requirements...',
					'Estimating development timeline...',
					'Computing infrastructure costs...',
					'Generating detailed cost breakdown...'
				]
			},
			{
				name: 'Team Composition Advisor',
				icon: 'fa-solid fa-users-gear',
				type: 'Reasoning-based',
				model: 'Claude-3',
				steps: [
					'Analyzing project requirements...',
					'Determining required skill sets...',
					'Calculating team size...',
					'Suggesting team structure...',
					'Generating resource allocation plan...'
				]
			}
		]
	},
	design: {
		title: 'Design & Architecture',
		icon: 'fa-solid fa-compass-drafting',
		agents: [
			{
				name: 'Microservices Architect',
				icon: 'fa-solid fa-cubes',
				type: 'Reasoning-based',
				model: 'GPT-4',
				steps: [
					'Analyzing domain boundaries...',
					'Designing service interfaces...',
					'Planning data management...',
					'Defining communication patterns...',
					'Generating architecture diagram...'
				]
			},
			{
				name: 'Serverless Architect',
				icon: 'fa-solid fa-cloud-bolt',
				type: 'Reasoning-based',
				model: 'Claude-3',
				steps: [
					'Analyzing function requirements...',
					'Designing event flows...',
					'Planning resource allocation...',
					'Optimizing cold starts...',
					'Creating serverless architecture...'
				]
			},
			{
				name: 'Database Designer',
				icon: 'fa-solid fa-database',
				type: 'Reasoning-based',
				model: 'GPT-4',
				steps: [
					'Analyzing data requirements...',
					'Designing schema structure...',
					'Optimizing query patterns...',
					'Planning data migration...',
					'Generating database diagram...'
				]
			},
			{
				name: 'API Designer',
				icon: 'fa-solid fa-plug-circle-bolt',
				type: 'Workflow-based',
				model: 'Custom ML',
				steps: [
					'Analyzing API requirements...',
					'Designing endpoints...',
					'Creating OpenAPI spec...',
					'Validating API patterns...',
					'Generating API documentation...'
				]
			}
		]
	},
	development: {
		title: 'Development',
		icon: 'fa-solid fa-code',
		agents: [
			{
				name: 'Frontend Generator (React)',
				icon: 'fa-brands fa-react',
				type: 'Workflow-based',
				model: 'StarCoder',
				steps: [
					'Analyzing UI requirements...',
					'Generating component structure...',
					'Implementing React components...',
					'Adding state management...',
					'Creating unit tests...'
				]
			},
			{
				name: 'Backend Generator (Node.js)',
				icon: 'fa-brands fa-node-js',
				type: 'Workflow-based',
				model: 'CodeGen',
				steps: [
					'Setting up Express server...',
					'Implementing API routes...',
					'Adding middleware...',
					'Implementing database logic...',
					'Creating API tests...'
				]
			},
			{
				name: 'Backend Generator (Java)',
				icon: 'fa-brands fa-java',
				type: 'Workflow-based',
				model: 'CodeGen',
				steps: [
					'Setting up Spring Boot...',
					'Implementing REST controllers...',
					'Adding service layer...',
					'Implementing JPA entities...',
					'Creating unit tests...'
				]
			},
			{
				name: 'Mobile App Generator',
				icon: 'fa-solid fa-mobile-screen',
				type: 'Workflow-based',
				model: 'Custom ML',
				steps: [
					'Setting up React Native...',
					'Generating screen components...',
					'Implementing navigation...',
					'Adding state management...',
					'Creating mobile tests...'
				]
			}
		]
	},
	quality: {
		title: 'Quality Assurance',
		icon: 'fa-solid fa-check-double',
		agents: [
			{
				name: 'Unit Test Generator',
				icon: 'fa-solid fa-vial',
				type: 'Workflow-based',
				model: 'CodeQL',
				steps: [
					'Analyzing code structure...',
					'Identifying test cases...',
					'Generating unit tests...',
					'Adding mock data...',
					'Creating test documentation...'
				]
			},
			{
				name: 'Integration Test Designer',
				icon: 'fa-solid fa-puzzle-piece',
				type: 'Reasoning-based',
				model: 'GPT-4',
				steps: [
					'Analyzing service interactions...',
					'Designing test scenarios...',
					'Creating test data...',
					'Implementing integration tests...',
					'Generating test report...'
				]
			},
			{
				name: 'Performance Test Generator',
				icon: 'fa-solid fa-gauge-high',
				type: 'Workflow-based',
				model: 'Custom ML',
				steps: [
					'Analyzing performance requirements...',
					'Creating load test scenarios...',
					'Generating test scripts...',
					'Executing performance tests...',
					'Creating performance report...'
				]
			},
			{
				name: 'Security Test Generator',
				icon: 'fa-solid fa-shield-halved',
				type: 'Workflow-based',
				model: 'Custom ML',
				steps: [
					'Scanning for vulnerabilities...',
					'Testing authentication...',
					'Checking authorization...',
					'Testing data protection...',
					'Generating security report...'
				]
			}
		]
	},
	deployment: {
		title: 'Deployment & Operations',
		icon: 'fa-solid fa-rocket',
		agents: [
			{
				name: 'AWS Deployment Agent',
				icon: 'fa-brands fa-aws',
				type: 'Workflow-based',
				model: 'Custom ML',
				steps: [
					'Configuring AWS services...',
					'Setting up VPC...',
					'Deploying ECS clusters...',
					'Configuring auto-scaling...',
					'Setting up monitoring...'
				]
			},
			{
				name: 'Azure Deployment Agent',
				icon: 'fa-solid fa-cloud',
				type: 'Workflow-based',
				model: 'Custom ML',
				steps: [
					'Configuring Azure services...',
					'Setting up virtual network...',
					'Deploying AKS clusters...',
					'Configuring scaling sets...',
					'Setting up Azure Monitor...'
				]
			},
			{
				name: 'GCP Deployment Agent',
				icon: 'fa-brands fa-google',
				type: 'Workflow-based',
				model: 'Custom ML',
				steps: [
					'Configuring GCP services...',
					'Setting up VPC network...',
					'Deploying GKE clusters...',
					'Configuring auto-scaling...',
					'Setting up Cloud Monitoring...'
				]
			},
			{
				name: 'Kubernetes Operator',
				icon: 'fa-solid fa-dharmachakra',
				type: 'Reasoning-based',
				model: 'GPT-4',
				steps: [
					'Analyzing cluster requirements...',
					'Configuring namespaces...',
					'Setting up service mesh...',
					'Implementing auto-scaling...',
					'Configuring monitoring...'
				]
			}
		]
	},
	monitoring: {
		title: 'Monitoring & Analytics',
		icon: 'fa-solid fa-chart-simple',
		agents: [
			{
				name: 'Metrics Analyzer',
				icon: 'fa-solid fa-chart-column',
				type: 'Reasoning-based',
				model: 'Custom ML',
				steps: [
					'Collecting system metrics...',
					'Analyzing performance patterns...',
					'Detecting anomalies...',
					'Generating insights...',
					'Creating performance report...'
				]
			},
			{
				name: 'Log Analyzer',
				icon: 'fa-solid fa-magnifying-glass-chart',
				type: 'Reasoning-based',
				model: 'GPT-4',
				steps: [
					'Collecting system logs...',
					'Analyzing log patterns...',
					'Identifying issues...',
					'Correlating events...',
					'Generating log analysis...'
				]
			},
			{
				name: 'Cost Optimizer',
				icon: 'fa-solid fa-money-bill-trend-up',
				type: 'Reasoning-based',
				model: 'Custom ML',
				steps: [
					'Analyzing resource usage...',
					'Identifying optimization opportunities...',
					'Calculating potential savings...',
					'Generating recommendations...',
					'Creating cost report...'
				]
			},
			{
				name: 'Security Monitor',
				icon: 'fa-solid fa-shield-halved',
				type: 'Reasoning-based',
				model: 'Custom ML',
				steps: [
					'Monitoring security events...',
					'Detecting threats...',
					'Analyzing attack patterns...',
					'Generating alerts...',
					'Creating security report...'
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
				{/* Header Section */}
				<div className="mb-8 text-center">
					<h1 className="text-3xl font-bold mb-2">Platform Engineering AI Agents</h1>
					<p className="text-gray-600">Explore and execute AI agents across different platform engineering stages</p>
				</div>

				<div className="flex flex-col lg:flex-row gap-6">
					{/* Lifecycle Stages Sidebar */}
					<div className="lg:w-1/4">
						<div className="bg-white rounded-xl shadow-lg p-4 sticky top-4">
							<h3 className="text-xl font-bold mb-4 flex items-center text-gray-800">
								<i className="fa-solid fa-layer-group mr-2 text-blue-600"></i>
								Lifecycle Stages
							</h3>
							<div className="space-y-2">
								{Object.entries(lifecycleStages).map(([key, stage]) => (
									<button
										key={key}
										className={`w-full px-4 py-3 rounded-lg flex items-center transition-all ${
											selectedStage === key
												? 'bg-blue-600 text-white shadow-md'
												: 'bg-gray-50 hover:bg-gray-100 text-gray-700'
										}`}
										onClick={() => setSelectedStage(key)}
									>
										<i className={`${stage.icon} mr-3 text-lg ${
											selectedStage === key ? 'text-white' : 'text-blue-600'
										}`}></i>
										<span className="font-medium">{stage.title}</span>
									</button>
								))}
							</div>
						</div>
					</div>

					{/* Main Content Area */}
					<div className="lg:w-3/4">
						{/* Stage Header */}
						<div className="mb-6 bg-white rounded-xl shadow-lg p-4">
							<h2 className="text-2xl font-bold flex items-center text-gray-800">
								<i className={`${lifecycleStages[selectedStage].icon} mr-3 text-blue-600`}></i>
								{lifecycleStages[selectedStage].title}
							</h2>
						</div>

						{/* Agents Grid */}
						<div className="grid md:grid-cols-2 gap-6 mb-6">
							{lifecycleStages[selectedStage].agents.map((agent, index) => (
								<div key={index} className="bg-white rounded-xl shadow-lg transition-all hover:shadow-xl">
									<div className="p-4 border-b border-gray-100">
										<h4 className="text-lg font-bold flex items-center text-gray-800">
											<i className={`${agent.icon} mr-3 text-xl text-blue-600`}></i>
											{agent.name}
										</h4>
									</div>
									<div className="p-4">
										<div className="mb-4 space-y-3">
											<p className="flex items-center text-gray-700">
												<i className="fa-solid fa-microchip mr-3 text-blue-500"></i>
												<span className="font-medium">Type:</span>
												<span className="ml-2">{agent.type}</span>
											</p>
											<p className="flex items-center text-gray-700">
												<i className="fa-solid fa-brain mr-3 text-blue-500"></i>
												<span className="font-medium">Model:</span>
												<span className="ml-2">{agent.model}</span>
											</p>
										</div>
										<button
											className={`w-full px-4 py-3 rounded-lg transition-all flex items-center justify-center ${
												selectedAgent?.name === agent.name && isExecuting
													? 'bg-gray-100 text-gray-600'
													: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg'
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
							<div className="bg-white rounded-xl shadow-lg">
								<div className="p-4 border-b border-gray-100">
									<h3 className="text-lg font-bold flex items-center text-gray-800">
										<i className="fa-solid fa-terminal mr-3 text-blue-600"></i>
										Execution Logs: {selectedAgent.name}
									</h3>
								</div>
								<div className="p-4">
									<div className="bg-gray-900 text-gray-100 rounded-lg p-4 max-h-[400px] overflow-y-auto font-mono">
										{executionLogs.map((log, index) => (
											<div key={index} className="flex items-start mb-3 last:mb-0">
												<i className="fa-solid fa-circle text-green-500 text-[8px] mt-2 mr-3"></i>
												<span className="flex-1">{log}</span>
											</div>
										))}
										{isExecuting && (
											<div className="flex items-center text-blue-400">
												<i className="fa-solid fa-spinner fa-spin mr-3"></i>
												<span>Processing...</span>
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
