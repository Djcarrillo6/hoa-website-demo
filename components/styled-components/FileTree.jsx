import React from 'react';
import Tree from '@naisutech/react-tree';
import { POWERSTONE_BLUE } from '../../utilities';

const FileTree = () => {
	const data = [
		{
			id: 'NRSpd6yXEI-sjER4fRWNy',
			label: 'Agendas',
			parentId: null,
		},
		{
			id: 'aYo91Q6WcPKoMGW1IPAWb',
			label: 'Board Meeting Minutes',
			parentId: null,
		},
		{
			id: 'HsKs9ZFLB4Yl1X5Oz3nBs',
			label: 'Committes',
			parentId: null,
		},
		{
			id: '5lYBbqzIMmEq7NcA-SUZk',
			items: [
				{
					id: 'NFgBs7fLX0DNyfeJgOA9F',
					label: 'File 1',
					parentId: '5lYBbqzIMmEq7NcA-SUZk',
				},
				{
					id: 'yC7chHQVRq0QbCYhI4SZh',
					label: 'File 2',
					parentId: '5lYBbqzIMmEq7NcA-SUZk',
				},
				{
					id: 'ufcWpc_gR8Hi94X7hb9Io',
					label: 'File 3',
					parentId: '5lYBbqzIMmEq7NcA-SUZk',
				},
			],
			label: '2019',
			parentId: 'NRSpd6yXEI-sjER4fRWNy',
		},
		{
			id: 'm7yWXfRSQ0o1GPghT5lOD',
			label: 'Child 2',
			parentId: 'aYo91Q6WcPKoMGW1IPAWb',
		},
		{
			id: 'xKKB9vaJ3zp64CRIm4BeJ',
			label: 'Child 3',
			parentId: 'aYo91Q6WcPKoMGW1IPAWb',
		},
		{
			id: 'sMbL0R8uHKhfxzxet5uTa',
			label: 'Child 4',
			parentId: 'HsKs9ZFLB4Yl1X5Oz3nBs',
		},
		{
			id: 'K4u-ROY-ACAYqC3RRJJi0',
			label: 'Child Child 1',
			parentId: '5lYBbqzIMmEq7NcA-SUZk',
		},
		{
			id: 'RCorXhbRJZhRBnK57smzx',
			items: [
				{
					id: '7k056N2xpLQXmv4-_N8CV',
					label: 'File 3',
					parentId: 'RCorXhbRJZhRBnK57smzx',
				},
				{
					id: 'niecLN3OSaQHAtx3PuN4p',
					label: 'File 4',
					parentId: 'RCorXhbRJZhRBnK57smzx',
				},
				{
					id: 'GIzV74VO0qhEfX9zukpdC',
					label: 'File 5',
					parentId: 'RCorXhbRJZhRBnK57smzx',
				},
			],
			label: 'Child Child 2',
			parentId: 'm7yWXfRSQ0o1GPghT5lOD',
		},
		{
			id: 'SVt76ysqxeW7H5AWiPOnR',
			label: 'Child Child 3',
			parentId: 'xKKB9vaJ3zp64CRIm4BeJ',
		},
	];

	const myThemes = {
		modifiedDarkLarge: {
			text: POWERSTONE_BLUE, // text color
			bg: 'transparent', // background color of whole tree
			indicator: POWERSTONE_BLUE, // open folder indicator color
			// separator: POWERSTONE_BLUE, // row seperator color
			icon: POWERSTONE_BLUE, // fill & stroke color of default icons - has no effect when using custom icons
			selectedBg: 'rgb(159, 190,	218)', // background of selected element
			selectedText: POWERSTONE_BLUE, // text color of selected element
			// hoverBg: 'rgb(159, 190,	218)', // background of hovered element
			// hoverText: '#fafafa', // text color of hovered element
			accentBg: '#2d3439', // background of empty folder element
			accentText: '#999', // text color of empty folder element
			textSize: 'large', // preferred text size
		},
	};

	return (
		<>
			<h1>My Documents</h1>
			<Tree
				nodes={data}
				size='narrow'
				theme='light'
				onOpenClose={function noRefCheck() {}}
				onSelect={function noRefCheck() {}}
				theme='modifiedDarkLarge'
				customTheme={myThemes}
			/>
		</>
	);
};

export default FileTree;
