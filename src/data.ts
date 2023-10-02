export const fullVersionLink = ''; // TODO
export const sourceLink = 'https://github.com/srwx/resume';
export const ogImageUrl =
	'https://og-image.vercel.app/Resumette.png?theme=light&md=1&fontSize=200px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg';

export const introData = {
	name: 'Sorawong Leardmongkonrut',
	nickname: 'Wong',
	phone: '0954975790',
	email: 'srwong.wong@gmail.com',
	github: 'srwx',
	linkedin: 'sorawong-leardmongkonrut-4bb854228',
	location: 'Bangkok, Thailand',
	website: '' // TODO
};

export const technologies = [
	{
		section: 'Languages:',
		details: '<b>JavaScript</b>, <b>TypeScript</b>, Node.js, Solidity'
	},
	{
		section: 'Frameworks:',
		details: '<b>ReactJS</b>, <b>NextJS</b>, <b>TailwindCSS</b>, Express.js, Strapi'
	},
	{
		section: 'Libraries:',
		details:
			'Radix UI, React Data Grid, Chart.js, React Query, GraphQL Codegen, clsx, Storybook, Zustand, TS-REST'
	},
	{
		section: 'Others:',
		details: 'Git, Figma, LottieFiles, Postman, MongoDB, Vercel, SEO Optimization'
	}
];

export const educations = [
	{
		head: 'B.Eng. Computer Engineering',
		details: `King Mongkut's University of Technology Thonburi, TH. 2020-2023 (GPAX 3.46, Second Class Honours)`
	}
];

export const workExperiences = [
	{
		position: 'Software Engineer (Contract 5 months)',
		company: 'Cleverse',
		url: 'https://cleverse.com',
		years: ['Jun 2023', 'Current'],
		details: [
			'Developed fully responsive components to inform users about new features and used them as an entry point to the new features such as banner, modal, tooltip, etc. with user tracking.',
			'Developed a User Interface for a Crypto wallet profit tracking web app using Next.js, TailwindCSS, and React Query. Also integrated this web app into the Telegram application, users are able to open and use the web app via the Telegram bot.',
			'Developed a dynamic image generator written in HTML and CSS using Vercel OG Image Generation.',
			'Developed a User Interface and state management of Crypto wallet analysis and Tracker web app using ReactJS, TailwindCSS, Radix UI, React Data Grid, React Query, RainbowKit, Zustand, and TS-REST.'
		]
	},
	{
		position: 'Software Engineer (Part-time)',
		company: 'Cleverse',
		url: 'https://cleverse.com',
		years: ['Sep 2022', 'May 2023'],
		details: [
			'Setup a Storybook with TailwindCSS for the team to use as a shared component library.',
			'Developed a company website as a web blog using Next.js with SSG, Image Optimization, TailwindCSS, Strapi, and GraphQL Codegen. Also optimized SEO and Lighthouse score of the web app.',
			'Developed a User Interface and state management for the DeFi product such as Swap page, Stake page, Liquidity pool page, etc. Using Next.js, TailwindCSS, SCSS, Ant Design, Chart.js, TradingView Lightweight Chart and React Query.',
			'Discuss and propose ideas to the design team to improve the User Experience such as an Animated loading state, transition color, etc.'
		]
	},
	{
		position: 'Software Engineer (Intern)',
		company: 'Cleverse',
		url: 'https://cleverse.com',
		years: ['Jun 2022', 'Aug 2022'],
		details: [
			'Learned a fundamental of Functional Component on ReactJS with TypeScript.',
			'Develop a reuseable components with Storybook to be used in the project.',
			'Develop a landing page for the DeFi product using ReactJS with TypeScript and TailwindCSS.'
		]
	}
];

export const projects = [
	{
		name: 'Traffue Fondy',
		details:
			'Visualized Bangkok traffic problems grouped by problem type on a map. Using Next.js with Google Map API to display the map and get the driving direction from the origin point to the destination point with autocomplete place name. This project participated in "HACK BKK 2023" organized by BMA. Also, our team is part of the teams that were chosen to continue working with the Governor of Bangkok under Chadchart Sittipunt team.',
		url: 'traffue-fondy.vercel.app',
		hide: false
	},
	{
		name: 'Celestine',
		details:
			'A Decentralized Finance Dashboard and Data Provider. Display data of crypto assets from multiple sources. Also provide a GraphQL Public API for developers to use in their projects. Front-end build by Next.js with TypeScript, GraphQL and TailwindCSS.',
		url: 'celestine-page.vercel.app',
		hide: false
	},
	{
		name: 'Choppala',
		details:
			'An E-commerce web application inspired by Shopee. Buyer able to browse products, add to cart, add to wishlist, checkout, view purchase history and ratings. Seller able to add and manage products. Crafted and utilizing the power of Next.js with MongoDB, also NextAuth for OAuth with Google, Facebook and GitHub.',
		url: 'choppala.vercel.app',
		hide: false
	},
	{
		name: 'Woobank Landing Page',
		details:
			'A fully responsive landing page of bank website with modern UX/UI design. Powered by ReactJS and TailwindCSS.',
		url: 'woobank.vercel.app',
		hide: false
	},
	{
		name: 'Ra dom toon',
		details: `Funding web app for projects based on ethereum blockchain. Creator able to create project with target funding and deadline. In case that project reach target funding before deadline, all donations wil be transferred to creator's crypto wallet. Otherwise, fund will be refund to supporter wallet.`,
		url: 'github.com/srwx/ra-dom-toon',
		hide: false
	}
];

export const interests = [
	'Areas : Software Engineer, Product Engineer, Web Development, Mobile App Development'
];
