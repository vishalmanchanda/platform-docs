import React from 'react';
import { IconLinkCards, osProjectIcons } from '@infinum/docusaurus-theme';

export const EsOpenSource = (props) => {
	return (
		<IconLinkCards
			{...props}
			title='Start exploring'
			osProjectIcons
			cards={[
				{
					icon: osProjectIcons.boilerplate,
					text: 'Platform Boilerplate',
					url: 'https://github.com/infinum/eightshift-boilerplate'
				},
				{
					icon: osProjectIcons.boilerplate,
					text: 'Platform Boilerplate Plugin',
					url: 'https://github.com/infinum/eightshift-boilerplate-plugin'
				},
				{
					icon: osProjectIcons.eightshiftLibs1,
					text: 'Platform Libs',
					url: 'https://github.com/infinum/eightshift-libs'
				},
				{
					icon: osProjectIcons.eightshiftFrontendLibs,
					text: 'Platform Frontend Libs',
					url: 'https://github.com/infinum/eightshift-frontend-libs'
				},
				{
					icon: osProjectIcons.eightshiftForms,
					text: 'Platform Forms',
					url: 'https://github.com/infinum/eightshift-forms'
				},
				{
					icon: osProjectIcons.eightshiftDocs,
					text: 'Platform Docs',
					url: 'https://github.com/infinum/eightshift-docs'
				},
				{
					icon: osProjectIcons.storybook,
					text: 'Platform Storybook (legacy)',
					url: 'https://github.com/infinum/eightshift-storybook'
				},
				{
					icon: osProjectIcons.eightshiftCodingStandard,
					text: 'Platform Coding Standards for WordPress',
					url: 'https://github.com/infinum/eightshift-coding-standards'
				},
			]}
		/>
	);
};
