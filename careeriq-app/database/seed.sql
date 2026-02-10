-- Sample salary data for demonstration
-- Run this AFTER the main schema.sql

INSERT INTO salary_data (job_title, company, location, experience_level, min_salary, max_salary, currency, employment_type, remote_policy, verified, source) VALUES
-- Software Engineering
('Software Engineer', 'Google', 'San Francisco, CA', 'mid', 150000, 200000, 'USD', 'full-time', 'hybrid', true, 'levels.fyi'),
('Software Engineer', 'Meta', 'Menlo Park, CA', 'mid', 160000, 210000, 'USD', 'full-time', 'hybrid', true, 'levels.fyi'),
('Senior Software Engineer', 'Amazon', 'Seattle, WA', 'senior', 180000, 250000, 'USD', 'full-time', 'hybrid', true, 'levels.fyi'),
('Senior Software Engineer', 'Netflix', 'Los Gatos, CA', 'senior', 220000, 350000, 'USD', 'full-time', 'hybrid', true, 'levels.fyi'),
('Staff Engineer', 'Stripe', 'San Francisco, CA', 'lead', 280000, 400000, 'USD', 'full-time', 'hybrid', true, 'levels.fyi'),
('Software Engineer', 'Startup', 'Remote', 'mid', 120000, 160000, 'USD', 'full-time', 'remote', false, 'glassdoor'),
('Junior Software Engineer', 'Various', 'New York, NY', 'entry', 80000, 110000, 'USD', 'full-time', 'onsite', false, 'payscale'),

-- Product Management
('Product Manager', 'Google', 'Mountain View, CA', 'mid', 160000, 220000, 'USD', 'full-time', 'hybrid', true, 'levels.fyi'),
('Senior Product Manager', 'Meta', 'Menlo Park, CA', 'senior', 200000, 300000, 'USD', 'full-time', 'hybrid', true, 'levels.fyi'),
('Product Manager', 'Microsoft', 'Seattle, WA', 'mid', 150000, 200000, 'USD', 'full-time', 'hybrid', true, 'levels.fyi'),
('Lead Product Manager', 'Airbnb', 'San Francisco, CA', 'lead', 250000, 350000, 'USD', 'full-time', 'hybrid', true, 'levels.fyi'),

-- Design
('Product Designer', 'Apple', 'Cupertino, CA', 'mid', 140000, 190000, 'USD', 'full-time', 'onsite', true, 'levels.fyi'),
('Senior UX Designer', 'Adobe', 'San Jose, CA', 'senior', 150000, 200000, 'USD', 'full-time', 'hybrid', true, 'glassdoor'),
('UI/UX Designer', 'Figma', 'San Francisco, CA', 'mid', 130000, 180000, 'USD', 'full-time', 'remote', true, 'levels.fyi'),

-- Data Science
('Data Scientist', 'Meta', 'Menlo Park, CA', 'mid', 170000, 230000, 'USD', 'full-time', 'hybrid', true, 'levels.fyi'),
('Senior Data Scientist', 'Amazon', 'Seattle, WA', 'senior', 190000, 280000, 'USD', 'full-time', 'hybrid', true, 'levels.fyi'),
('Machine Learning Engineer', 'OpenAI', 'San Francisco, CA', 'senior', 220000, 400000, 'USD', 'full-time', 'hybrid', true, 'levels.fyi'),
('Data Analyst', 'Various', 'Remote', 'entry', 70000, 95000, 'USD', 'full-time', 'remote', false, 'payscale'),

-- Marketing
('Marketing Manager', 'HubSpot', 'Boston, MA', 'mid', 100000, 140000, 'USD', 'full-time', 'hybrid', false, 'glassdoor'),
('Senior Marketing Manager', 'Salesforce', 'San Francisco, CA', 'senior', 140000, 190000, 'USD', 'full-time', 'hybrid', true, 'glassdoor'),
('Growth Marketing Lead', 'Various', 'Remote', 'lead', 150000, 220000, 'USD', 'full-time', 'remote', false, 'built-in'),

-- Sales
('Account Executive', 'Salesforce', 'Various', 'mid', 90000, 150000, 'USD', 'full-time', 'hybrid', true, 'repvue'),
('Senior Account Executive', 'Oracle', 'Various', 'senior', 120000, 200000, 'USD', 'full-time', 'hybrid', true, 'repvue'),
('Sales Development Rep', 'Various', 'Remote', 'entry', 60000, 80000, 'USD', 'full-time', 'remote', false, 'glassdoor'),

-- Engineering Management
('Engineering Manager', 'Google', 'San Francisco, CA', 'lead', 220000, 320000, 'USD', 'full-time', 'hybrid', true, 'levels.fyi'),
('Engineering Manager', 'Meta', 'Menlo Park, CA', 'lead', 230000, 350000, 'USD', 'full-time', 'hybrid', true, 'levels.fyi'),
('Director of Engineering', 'Stripe', 'San Francisco, CA', 'executive', 350000, 500000, 'USD', 'full-time', 'hybrid', true, 'levels.fyi'),

-- DevOps / Infrastructure
('DevOps Engineer', 'Various', 'Remote', 'mid', 110000, 150000, 'USD', 'full-time', 'remote', false, 'glassdoor'),
('Senior DevOps Engineer', 'Netflix', 'Los Gatos, CA', 'senior', 180000, 270000, 'USD', 'full-time', 'hybrid', true, 'levels.fyi'),
('Site Reliability Engineer', 'Google', 'San Francisco, CA', 'senior', 180000, 260000, 'USD', 'full-time', 'hybrid', true, 'levels.fyi'),

-- Security
('Security Engineer', 'Various', 'Remote', 'mid', 130000, 180000, 'USD', 'full-time', 'remote', false, 'glassdoor'),
('Senior Security Engineer', 'Coinbase', 'San Francisco, CA', 'senior', 170000, 250000, 'USD', 'full-time', 'hybrid', true, 'levels.fyi'),

-- International (for comparison)
('Software Engineer', 'Various', 'London, UK', 'mid', 60000, 90000, 'GBP', 'full-time', 'hybrid', false, 'glassdoor'),
('Software Engineer', 'Various', 'Berlin, Germany', 'mid', 60000, 85000, 'EUR', 'full-time', 'hybrid', false, 'glassdoor'),
('Software Engineer', 'Various', 'Toronto, Canada', 'mid', 90000, 120000, 'CAD', 'full-time', 'hybrid', false, 'glassdoor');
