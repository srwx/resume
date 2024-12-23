// export const fullVersionLink = 'https://srwong.dev';
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
	location: 'Bangkok, Thailand'
	// website: 'srwong.dev'
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
			'RadixUI, Shadcn, Chart.js, Tanstack, TS-REST, GraphQL Codegen, Apollo Client, Storybook, Zustand'
	},
	{
		section: 'Others:',
		details: 'Git, Figma, LottieFiles, Postman, MongoDB, Firestore, Vercel, SEO Optimization'
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
		position: 'Software Engineer (Full-time)',
		company: 'Skooldio',
		url: 'https://www.skooldio.com',
		years: ['Jan 2024', 'Current'],
		details: [
			'Developed a Back-end service to create a job which executes a task at any given time using node-schedule.',
			'Developed a back-office web app for HR to upload CSV files and visualize employee data differences using Shadcn and TanStack Table.',
			`Extended a Performance Review web app by enabling feedback re-submission and integrating Gemini AI to summarize feedback for managers on subordinates, enhancing the review process.`,
			`Developed an AI-powered symptom diagnosis system integrated with LINE API, using Gemini AI for message analysis and prompting to provide accurate health insights based on user inputs.`,
			`Built a web app to verify users' state welfare eligibility via ID card number and phone number, integrating Infobip for OTP verification, within a 1-month hackathon timeframe to validate the team's concept.`,
			'Developed a User Interface of Back-office web application which allow admin to manage courses, workshops, etc.'
		]
	},
	{
		position: 'Software Engineer (Part-time)',
		company: 'Softnetics',
		url: 'https://www.softnetics.tech',
		years: ['Nov 2023', 'Dec 2023'],
		details: [
			'Developed a form input application with validation using react-hook-form with Zod.',
			'Integrated to Back-end with TS-REST for server-side, also using react-query on client-side for query and mutation.',
			'Developed an API for form input application using NestJS with Prisma which follows the Controller-Service-Repository pattern.'
		]
	},
	{
		position: 'Software Engineer (Contract 5 months)',
		company: 'Cleverse',
		url: 'https://cleverse.com',
		years: ['Jun 2023', 'Oct 2023'],
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
		name: 'NoteGenius AI',
		details:
			'AI-Powered Note Summarization to summarizes handwritten class notes stored in PDFs and extracts essential data, transformed into simplified summaries tailored specifically for Thai students. This project participated in the "APAC region at the GenAI Hackathon 2024" by Google I/O. Also, our team are one of the 10 teams from Thailand that qualified for the final round.',
		url: 'sk-hackathon-wangdee-ai.web.app',
		hide: false
	},
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
	'<b>Areas</b> : Software Engineer, Product Engineer, Web Development, Mobile App Development',
	'<b>Technologies stacks</b> : Docker, Kubernetes, GCP, CI/CD, Microservices, Serverless'
];
