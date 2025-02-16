module.exports = {
	docs: {
		"Platform Engineering": [
			'platforms/overview',
			{
				type: 'category',
				label: 'Foundation',
				items: [
					'platforms/foundation/overview',
					'platforms/foundation/principles',
					'platforms/foundation/personas',
					'platforms/foundation/team-structure'
				],
			},
			{
				type: 'category',
				label: 'Architecture',
				items: [
					'platforms/architecture/overview',
					'platforms/architecture/microservices',
					'platforms/architecture/api-gateway',
					'platforms/architecture/event-driven',
					'platforms/architecture/data-management'
				],
			},
			{
				type: 'category',
				label: 'Development',
				items: [
					'platforms/development/overview',
					'platforms/development/practices',
					'platforms/development/ci-cd',
					'platforms/development/testing',
					'platforms/development/code-quality'
				],
			},
			{
				type: 'category',
				label: 'Infrastructure',
				items: [
					'platforms/infrastructure/overview',
					'platforms/infrastructure/iac',
					'platforms/infrastructure/containerization',
					'platforms/infrastructure/monitoring',
					'platforms/infrastructure/observability'
				],
			},
			{
				type: 'category',
				label: 'Security',
				items: [
					'platforms/security/overview',
					'platforms/security/authentication',
					'platforms/security/authorization',
					'platforms/security/vulnerabilities',
					'platforms/security/compliance'
				],
			},
			{
				type: 'category',
				label: 'Operations',
				items: [
					'platforms/operations/overview',
					'platforms/operations/deployment',
					'platforms/operations/scaling',
					'platforms/operations/maintenance',
					'platforms/operations/incident-management'
				],
			},
			{
				type: 'category',
				label: 'Team & Culture',
				items: [
					'platforms/team/overview',
					'platforms/team/collaboration',
					'platforms/team/communication',
					'platforms/team/knowledge-sharing'
				],
			},
			{
				type: 'category',
				label: 'Technology',
				items: [
					'platforms/technology/overview',
					'platforms/technology/cloud-platforms',
					'platforms/technology/languages-frameworks',
					'platforms/technology/databases',
					'platforms/technology/tools'
				],
			},
			{
				type: 'category',
				label: 'Cost & Optimization',
				items: [
					'platforms/optimization/overview',
					'platforms/optimization/cost-management',
					'platforms/optimization/performance',
					'platforms/optimization/resource-utilization'
				],
			},
			{
				type: 'category',
				label: 'Implementation',
				items: [
					'platforms/implementation/overview',
					'platforms/implementation/roadmap',
					'platforms/implementation/best-practices',
					'platforms/implementation/metrics'
				],
			}
		],
		'Getting Started': [
			'welcome',
			'requirements',
			'versions',
			'theme',
		],
		Basics: [
			'basics/basics-intro',
		],
		Tutorials: ['tutorials/intro'],
		Migrations: [
			'migrations/1-2',
		],
		
		
		'Crash Course': ['crash-course/intro'],
	},
};
