export const stack = {
  'Quality engineering': ['Playwright', 'Selenium', 'Serenity', 'Cucumber', 'Postman', 'Allure', 'Manual Testing', 'Accessibility Testing'],
  Development: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'NestJS', 'Laravel'],
  Database: ['PostgreSQL', 'MySQL', 'MongoDB'],
  DevOps: ['Git', 'GitHub', 'GitHub Actions', 'Docker'],
  CMS: ['WordPress', 'Joomla', 'Shopify'],
}

export const labs = [
  { id: '01', title: 'Frontend systems', detail: 'React · TypeScript · Responsive UI', status: 'ACTIVE' },
  { id: '02', title: 'Backend & APIs', detail: 'Node.js · NestJS · REST APIs', status: 'ACTIVE' },
  { id: '03', title: 'Data layer', detail: 'PostgreSQL · MySQL · MongoDB', status: 'READY' },
  { id: '04', title: 'Product quality', detail: 'Playwright · Accessibility · Regression', status: 'ACTIVE' },
  { id: '05', title: 'CMS & commerce', detail: 'WordPress · Shopify · Ecommerce', status: 'READY' },
  { id: '06', title: 'Delivery & CI/CD', detail: 'GitHub Actions · Docker · Deployments', status: 'ONLINE' },
]

export const cases = [
  {
    title: 'Manual & Functional Testing',
    type: 'Product Quality / Risk Analysis',
    challenge: 'I analyze requirements, user journeys and business rules to identify risks before they reach production.',
    approach: 'I combine exploratory testing with structured test design, clear evidence and effective communication with product and development teams.',
    testing: ['Test scenarios & cases', 'Exploratory testing', 'Smoke & regression', 'Edge and negative cases', 'Responsive validation', 'Bug reporting'],
    tools: 'Jira · DevTools · Test documentation',
    outcome: 'Clear risk visibility, reproducible defects and greater confidence in every release.'
  },
  {
    title: 'Test Automation',
    type: 'E2E / Regression / CI/CD',
    challenge: 'I transform repetitive and business-critical validations into maintainable automated test suites.',
    approach: 'I build reusable Playwright architecture with Page Object Model, stable selectors, test data strategies and useful reports.',
    testing: ['Critical user journeys', 'Cross-browser checks', 'Reusable page objects', 'Data-driven tests', 'Failure evidence', 'CI execution'],
    tools: 'Playwright · TypeScript · Allure · GitHub Actions',
    outcome: 'Faster regression cycles, consistent feedback and early detection of release-blocking issues.'
  },
  {
    title: 'API & Accessibility Quality',
    type: 'Integration / WCAG / Non-functional',
    challenge: 'I validate quality beyond the interface, covering service behavior, data integrity and inclusive user interaction.',
    approach: 'I test API contracts and error handling while evaluating semantics, keyboard navigation, focus and responsive behavior.',
    testing: ['REST contracts & schemas', 'Authentication & errors', 'Data integrity', 'Keyboard navigation', 'Focus management', 'WCAG checks'],
    tools: 'Postman · Playwright · Axe · DevTools',
    outcome: 'More robust integrations and accessible experiences that work for a broader range of users.'
  },
]

export const repositories = [
  ['Playwright Automation Lab', 'E2E test architecture and reporting', 'PLAYWRIGHT / TS'],
  ['API Testing Lab', 'API contracts, collections and checks', 'POSTMAN / CI'],
  ['Portfolio', 'This quality-focused digital command center', 'REACT / VITE'],
]
