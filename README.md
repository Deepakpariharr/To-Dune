# To-Dune

# Todo List Application

## Overview

The Todo List application is a task management tool built using Next.js. It allows users to create, update, mark tasks as completed, and search through tasks. The application utilizes server-side rendering (SSR) for better performance and SEO, and manages search functionality via URL parameters. Data is simulated using a dummy JSON file.

## Implementation

### System Design

1. **Frontend**:
   - **Framework**: Next.js is used to leverage server-side rendering (SSR) and efficient routing.
   - **Components**:
     - **TaskForm**: For adding new tasks.
     - **TaskItem**: Displays and manages individual tasks, including editing and completion status.
     - **TaskList**: Handles and displays the list of tasks with integrated search functionality.
   - **Styles**: Basic styling is applied using global CSS for a clean interface.
   - **Data Management**: Uses a dummy JSON file (`dummyData.js`) to simulate task data storage.

2. **Search Functionality**:
   - Implemented through URL parameters to filter tasks in real-time based on user input.
   - The search bar updates the URL, which is used to filter tasks.

3. **Expandable List**:
   - Tasks are displayed in an expandable format, showing additional details such as the last update timestamp when expanded.

### Implementation Details

1. **Components**:
   - **TaskForm**: Handles task creation with user input and form submission.
   - **TaskItem**: Provides functionality to edit tasks and toggle completion status, showing details and last update timestamp.
   - **TaskList**: Renders and filters tasks based on the search query.

2. **State Management**:
   - Managed using React hooks (`useState`, `useEffect`) for task updates and search filtering.

3. **Server-Side Rendering**:
   - Next.js handles SSR, pre-rendering pages on the server to enhance performance and SEO.

4. **URL Parameters**:
   - Search functionality is managed through URL parameters, allowing filtering of tasks and maintaining search state across page navigations.

## Instructions

### Set Up and Run the Application

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>

Navigate to the Project Directory:

cd todo-list-app


Install Dependencies:

npm install


Run the Development Server:

npm run dev


Access the Application: Open http://localhost:3000 in your web browser to view the application.
