# Portfolio

## Project Description

This portfolio project is built using React, Redux, React Router, React Query, and Material-UI. It serves as a showcase of my skills, projects, and certifications. Below are the key functionalities of the portfolio:

1. ### Projects Showcase
   The portfolio displays a collection of my projects, providing details such as project title, description, demo links, GitHub repository links, and preview images. Visitors can browse through the projects to learn more about each one.
2. ### Certifications Overview

   The portfolio includes a section dedicated to showcasing my certifications. It lists the certifications I've earned, along with details such as certification title, instructor, issuing organization, and completion date.

3. ### Backend API Integration

   I've created a backend API specifically for this portfolio project. The backend fetches data about my projects and certifications, which are then displayed on the portfolio website. This ensures that the portfolio content remains up-to-date and easily manageable.

4. ### Responsive Design
   The portfolio is designed to be responsive, ensuring a seamless experience across various devices and screen sizes. Whether viewed on desktop, tablet, or mobile, visitors can navigate the portfolio with ease and view content optimally.

## Usage

Feel free to explore the different sections of the portfolio to learn more about my projects and certifications. Click on project cards to view project details, and navigate through the certifications section to see my credentials.
![Portfolio preview 1](/server/public/projectsImg/portfolio-preview-1.jpg)
![Portfolio preview 2](/server/public/projectsImg/portfolio-preview-2.jpg)
![Portfolio preview 3](/server/public/projectsImg/portfolio-preview-3.jpg)

## Bash Section

```bash
**Note**: Before running this project locally, please ensure you have set up your own MongoDB Atlas connection. You can do this by signing up for a MongoDB Atlas account and configuring the connection string in the appropriate environment variables or configuration files.
```

```bash
# Clone
git clone https://github.com/LucasDaSilva96/Portfolio_v2.git

# From the root folder go to the Portfolio folder
cd Portfolio

# Install all dependencies
npm install

# Start the project
npm start
```

```bash
# From the root folder go to the server folder
cd server

# Install all dependencies
npm install

# Start the server in another terminal
npm run start
```

## React Query:

React Query is a library for managing, caching, and syncing asynchronous and remote data in React applications. It provides a set of hooks and utilities to simplify the process of fetching, caching, and updating data from various data sources such as REST APIs, GraphQL endpoints, and more. React Query offers features like automatic caching, background data fetching, optimistic updates, and pagination support, making it easy to handle complex data fetching requirements in React applications. With its declarative API and built-in error handling, React Query helps streamline data management and improves the performance and user experience of React applications.

I chose to use React Query for this project because it provides a powerful and convenient solution for managing data fetching and state management in React applications. With React Query, I can easily handle asynchronous data fetching tasks from various sources such as REST APIs and GraphQL endpoints. Its automatic caching mechanism helps improve performance by reducing unnecessary network requests and ensures that data remains consistent across components. Additionally, React Query's built-in error handling and pagination support simplify the process of managing and displaying data, allowing me to focus on building the user interface and application logic without worrying about data management concerns

## React Spring:

React Spring is a spring-physics based animation library for React applications. It enables developers to create fluid and interactive animations with ease using a simple and intuitive API. React Spring leverages spring physics to create smooth and natural animations that respond to user interactions or changes in component state. It supports a wide range of animation effects such as transitions, gestures, parallax scrolling, and more. With React Spring, developers can bring their UIs to life by adding dynamic and visually appealing animations that enhance the overall user experience. Its declarative approach and seamless integration with React make it a popular choice for building modern and engaging user interfaces

I opted to use React Spring for its robust animation capabilities, which enable me to create smooth and visually appealing animations that enhance the user experience of the project. React Spring's spring-physics based animation system allows for fluid and natural animations that respond to user interactions and changes in component state. By leveraging React Spring, I can easily implement interactive UI elements, transitions, and gestures that make the project more engaging and dynamic. Its declarative API and seamless integration with React provide a straightforward way to add animation effects to components, making it the ideal choice for building modern and interactive user interfaces.
