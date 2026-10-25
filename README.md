# Nexus-SIRH
A comprehensive B2B web application designed to centralize human resources management and internal support for businesses. This portal offers a high-performance information system with strict role management. It automates leave requests and time tracking.

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

* **Admin (HR)**: Has ultimate rights to grant/revoke major access, delete accounts, and validate new profiles.
* **Apprentice Trainer**: Supervises their apprentices, accesses global statistics.
* **User (Employee/Apprentice)**: Restricted to their personal workspace to check stats, log hours, (...).



## 2. **Secure Onboarding Workflow**
  * Public registration is strictly disabled.
  * Only the administration can create a new employee account.
  * The Admin receives the have access to all the other accounts timesheets and informations.




## 4. **Human Resources Module**
* **Time Tracking**: Entry form to log daily work hours.

---

#Database Architecture
The SQL relational database is specifically structured to support this routing and permission logic. It heavily relies on Foreign Keys (FOREIGN KEY) to consistently link Employees to their Managers, Employees to their Company, and Tickets to their designated Assignees.
