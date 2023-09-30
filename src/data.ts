export const fullVersionLink = ''; // TODO
export const sourceLink = 'https://github.com/srwx/resume';
export const ogImageUrl =
	'https://og-image.vercel.app/Resumette.png?theme=light&md=1&fontSize=200px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg';

export const introData = {
	name: 'Sorawong Leardmongkonrut',
	nickname: 'Wong',
	phone: '',
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
			'Chart.js, Radix UI, React Data Grid, React Query, GraphQL Codegen, clsx, Storybook, Zustand, Zod, TS-REST'
	},
	{
		section: 'Others:',
		details: 'Figma, LottieFiles, Postman, Docker, MongoDB, Vercel, SEO Optimization'
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
		position: 'Full-stack Developer, Co-founder',
		company: 'EventPop',
		url: 'https://eventpop.me',
		years: ['2015', 'Current'],
		details: [
			'Designed, developed and maintained several core services for EventPop website (Ticketing, Seating, Payment, Fee Calculation, Line Item, Billing, Reporting, APIs, etc.) using Ruby on Rails, sold 2M+ tickets within 6 years',
			'Researched & applied improvements for development workflow. Testing libraries : RSpec, Guard, VCR, Capybara, Selenium, Cucumber, Timecop. CI/CD : CircleCI, Github Actions, Drone CI, ArgoCD, FluxCD, Terraform',
			'Maintained server operations, deployments, containerization with Docker & Kubernetes, CI/CD. Also pioneered DevOps practices in the team keeping daily release & deployment possible.',
			'Integrated 3rd-party services : Kerry Express, DHL, Queue-It, Refund Protect, Skootar, Tanita Body Scale',
			'Integrated payment service providers : Omise, ThaiEPay, 123 by 2C2P, SCB-Easy, K-PayPlus, K-PaymentGateway. Processed more than 1 billion THB',
			'Helped interview more than 50 software engineers, gave insights & feedbacks on technical aspects of candidates, designed tech-related questions & on-site coding challenges'
		]
	},
	{
		position: 'Senior Infrastructure Software Engineer',
		company: 'OPN TH',
		url: 'https://opn.ooo/',
		years: ['2021', 'Current'],
		details: [
			'Containerized, developed, and maintained Opn.Store infrastructure on EKS across multiple environments using Terraform, Docker, Kubernetes, and Helm',
			'Designed architecture using Microservices Pattern & Domain-Driven Design on Sales Promotion feature for Opn.Store',
			'Helped, and collaborated with software engineering team on coding with good practices and lowering technical debt',
			'Researched & introduced modern web technologies to the team, such as SvelteJS, TailwindCSS, Vite, etc.',
			'Designed, bootstrapped, and developed 4 E-commerce related services for Opn.Store'
		]
	},
	{
		position: 'Maker, Co-founder',
		company: 'Maker Zoo',
		url: 'https://fb.me/makerzoo',
		years: ['2014', '2016'],
		details: [
			'Pioneered Maker Movement in Thailand by opening first of the Makerspaces in Bangkok & Thailand',
			'Hosted maker workshops eg. 3D-modeling, 3D-printing, Arduino, IoT, etc. Having more than 100 participants combined.',
			'Developed hardware-related products for 3-5 clients and startups',
			'Developed smart door lock system for Hubba, first co-working space in Bangkok',
			'Provided 3D-printing service & consultant to more than 50 clients',
			'Hosted 10+ chapters of tutorial videos on Intel Galileo development board, for Intel Thailand'
		]
	},
	{
		position: 'Web / IoT Developer (Contract)',
		company: 'Box24',
		url: 'https://washbox24.com',
		years: ['2015', '2016'],
		details: [
			'Developed internet connected Smart Lockers System using web technologies (Node.js, React.js) on embedded systems (Ubuntu Linux, Arduino, Raspberry Pi)',
			'Developed private Node.js library to connect with Nayax via serial port to receive cashless payment on vending machines, and also supported Thai Baht cash payment'
		]
	},
	{
		position: 'Web Developer',
		company: 'Figabyte',
		url: 'https://www.facebook.com/figabyte',
		years: ['2011', '2014'],
		details: [
			'Developed more than 20 Facebook web apps with CodeIgniter, using Facebook API',
			'Developed web platform using Ruby on Rails 3 & 4',
			'Made iOS apps for several clients using PhoneGap and RubyMotion'
		]
	},
	{
		position: 'Part-time Web Developer',
		company: 'Wongnai Media (wongnai.com)',
		url: 'https://wongnai.com',
		years: ['2010'],
		details: [
			'Developed a small part of website using Java with Spring MVC Framework built with Apache Maven',
			'Learned TDD practice & making early-stage startup'
		]
	}
];

export const projects = [
	{
		name: 'ChatOS',
		details: 'Hackable chatbot web application',
		url: 'chat.narze.live',
		hide: false
	},
	{
		name: 'Digital Garden',
		details: 'My notes & stuff (Second Brain)',
		url: 'garden.narze.live',
		hide: false
	},
	{
		name: 'Manoonchai',
		details:
			'Modern, productive, and data-driven Thai keyboard layout. A collection of projects built with TypeScript, Elixir, Svelte',
		url: 'manoonchai.com',
		hide: false
	},
	{
		name: 'Dotfiles',
		details:
			'macOS dotfiles with setup script for self use, tested on Apple Silicon Macs (Zsh, Zinit, Dotbot, GNU Make, etc.)',
		url: 'github.com/narze/dotfiles',
		hide: false
	},
	{
		name: 'Resumette',
		details:
			'Interactive & printable résumé with tailored skills fitted in single letter page (This page!)',
		url: 'resume.narze.live',
		hide: false
	},
	{
		name: 'Thwordle',
		details: 'Thai language Wordle clone.',
		url: 'thwordle.narze.live',
		hide: false
	},
	{
		name: '9armbot (Contributor)',
		details:
			'Twitch & Discord bot for 9arm (Thai technology Youtuber). I helped re-structuring the project using TypeScript & Prisma',
		url: 'github.com/thananon/twitch_tools',
		hide: true
	},
	{
		name: '#100DaysOfCode',
		details:
			'My take on practicing modern frontend development by building small projects in 100 days',
		url: '100daysofcode-narze.vercel.app',
		hide: true
	},
	{
		name: 'Baht.rb',
		details: 'Ruby gem to convert number to Thai Baht format',
		url: 'rubygems.org/gems/baht',
		hide: true
	},
	{
		name: 'Baht.js',
		details: 'Convert number to Thai Baht format, but 10x faster & fully typed.',
		url: 'npmjs.com/package/baht',
		hide: true
	},
	{
		name: 'Popyut',
		details:
			'Contributed to a clone of popcat.click meme clicking game, gone viral and got 2M visitors within one week',
		url: 'github.com/popyut/popyut',
		hide: true
	},
	{
		name: 'Resound',
		details:
			'Remote soundboard for meetings or streaming. Uses WebRTC instead of server to host rooms.',
		url: 'github.com/narze/resound',
		hide: true
	}
];

export const interests = [
	'Areas : Coding, Productivity & Life-hacks, Mechanical Keyboards',
	'Typing : 120+ words per minute (Colemak Mod-DH layout)',
	'Games : Music games, FPS, MOBA, Puzzle',
	'Music : EDM, Rock, Japanese',
	'Remote working is a OK. I extensively use self time tracking app for all my works.',
	'Pets : I have 3 dogs'
];