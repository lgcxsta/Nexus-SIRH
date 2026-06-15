# Nexus-SIRH
A comprehensive B2B web application designed to centralize human resources management and internal support for businesses. This portal offers a high-performance information system with strict role management. It automates leave requests, time tracking, and incident resolution through an intelligent ticketing system.

---

# Tech Stack

* **Back-end**: PHP (Business logic, security, authentication, and ticket routing).
* **Database**: SQL (Complex relational architecture utilizing foreign keys).
* **Front-end**: HTML, CSS, JavaScript (Fetch API/AJAX for dynamic rendering).
* **Data Visualization**: Chart.js for interactive dashboards.

--- 

# Core Features

## 1. **Role-Based Access Control (RBAC)**
  The system enforces strict hierarchical access to ensure security and relevance of actions.

* **Admin**: Has ultimate rights to grant/revoke major access, delete accounts, and validate new profiles.
* **Manager (Administration / HR)**: Supervises their team, accesses global statistics, and approves/rejects HR requests.
* **Technician (IT Support)**: Dedicated technical role with access only to the "IT / Hardware" ticket queue.
* **User (Employee)**: Restricted to their personal workspace to check stats, log hours, request time off, and open incident tickets.



## 2. **Secure Onboarding Workflow**
  * Public registration is strictly disabled.
  * Managers must submit an integration request form for new employees.
  * The Admin receives the notification, validates the request, and the system securely generates the credentials.



## 3. **Smart Ticketing & Dispatching**
* Employees use a dedicated interface to report issues (titles, descriptions, categories).
* PHP logic automatically routes tickets based on the selected category.
* "Software / IT Failures" are instantly routed to IT Technicians.
* "Payroll / Administrative" errors are sent directly to the Manager.



## 4. **Human Resources Module**
* **Leave Management**: Employees submit dates via a form. Managers receive alerts to approve or deny in one click, automatically updating the employee's leave balance.
* **Time Tracking**: Entry form to log daily work hours.

## 5. **Analytics & Data Visualization**
* The visual interface is powered by the Chart.js library.
* **Employee View**: Displays a pie chart of used vs. remaining leave days, and a line chart tracking monthly work hours.
* **Manager View**: Provides a global overview of the team. Features a large interactive calendar tracking absences and comparative charts of team hours.

---

#Database Architecture
The SQL relational database is specifically structured to support this routing and permission logic. It heavily relies on Foreign Keys (FOREIGN KEY) to consistently link Employees to their Managers, Employees to their Company, and Tickets to their designated Assignees.
