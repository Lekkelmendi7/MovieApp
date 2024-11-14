Movie App Project – Detailed Overview
This movie app, developed as part of a college project of Lab Course 1 at the University of Business and Technology (UBT), serves as a user-friendly platform for discovering movies while also offering a comprehensive content management system (CMS) for administrators. The app integrates various features including user authentication, movie categorization, detailed movie pages, advanced filtering, a dynamic rating system, and full administrative controls.

Functionalities

1. User Authentication and Authorization

Authentication: This process requires users to log in to access certain features, ensuring that only registered users can perform specific actions, such as rating movies. User credentials are securely stored and verified to provide a safe environment for users.
Authorization: The app distinguishes between two types of users:
Admin: The admin role grants full control over content management within the app, allowing for extensive use of the CMS to create, update, and delete movie-related data.
User: Regular users can browse movies, view detailed information, and submit ratings once logged in. This restricted access maintains the integrity of the app’s content by limiting sensitive actions to admins.

2. Movie Catalog Organization

Movies are organized into two main sections:

In Theaters: Lists movies that are currently playing in theaters.
Upcoming Releases: Shows movies scheduled to release in theaters soon, allowing users to see what's on the horizon.
Movie Details Page: Each movie in the catalog includes a detailed page with the following information:
Title and Poster: The movie title and poster image give users a quick visual cue about the movie’s theme and appearance.
Release Date: Provides a clear date indicating when the movie was or will be released, helping users plan their visits to theaters.
Trailer: Users can watch the movie trailer within the app, offering an engaging preview experience without needing to leave the platform.
Genres: Each movie is tagged with one or more genres (e.g., Action, Drama, Comedy), making it easy for users to find movies that match their preferences.
Theaters: A list of available theaters is shown for each movie, complete with map locations. This map integration allows users to visualize theater locations and choose one based on convenience.
Cast and Characters: A list of the main actors involved in the movie, along with their character names, gives users a sense of who’s starring in the film.
Average Rating: Displays the movie’s average rating based on all user ratings, giving users an idea of how well the audience has received the movie.
Movie Filtering and Search

3. Filter by Genre and Title: 

Users can filter movies by selecting specific genres (e.g., Horror, Romance) or search for movies by title, allowing for a customized browsing experience.
Category Selection: Users can view movies in only one category at a time—either In Theaters or Upcoming Releases. This reduces clutter and allows users to focus on the movie category that interests them.
Rating System

4. User Ratings:

Logged-in users can rate movies on a scale from 1 to 10 stars. Each rating influences the movie's average rating, providing real-time feedback on the movie’s popularity and quality.
Rating Restriction: Only logged-in users can rate movies, ensuring that the rating system is used by authenticated users, thus improving reliability and preventing spam ratings.
Dynamic Average Rating: As users submit their ratings, the app recalculates the movie’s average rating in real-time, giving immediate feedback on how each rating affects the overall score.

5. Content Management System (CMS) for Admins:

The CMS allows admins to fully control the content displayed on the platform, with specific CRUD (Create, Read, Update, Delete) capabilities for each entity:
Movies: Admins can add new movies, update existing ones, or delete movies from the catalog. This flexibility allows for an up-to-date and accurate listing of movies.
Actors: Admins can add or edit actor details, such as:
Full Name: Ensures the actor’s complete name is available for users.
Date of Birth: Provides additional background information for users interested in actors’ details.
Biography: Allows for a brief biography of the actor, offering insights into their career and background.
Photo: A photograph of the actor is displayed on their profile, helping users visually identify them.
Theaters: Admins can manage theaters by adding or updating details such as:
Theater Name: Identifies the theater where a movie is playing.
Map Location: Provides a visual map location for each theater, helping users find the most convenient option.
Genres: The CMS includes CRUD functionality for genres, allowing admins to add, update, or delete genres. This ensures that the genre list remains relevant and organized.

6. User Role Management:
Admins can manage user permissions, assigning and updating roles to ensure secure and accurate access control.

Tech Stack
The movie app’s tech stack has been carefully chosen to ensure performance, scalability, and user-friendliness:

Frontend:

React.js: React is a powerful JavaScript library that helps build a fast and responsive user interface. It enables components to render dynamically, providing users with a seamless experience as they navigate through the app. React’s component-based structure also makes it easier to manage complex UI elements, such as filtering and movie detail views.
TypeScript: By adding static types to JavaScript, TypeScript reduces runtime errors and makes the codebase more robust. TypeScript improves code reliability, which is crucial for a project with many interconnected parts, like user roles, ratings, and CMS functions.

Backend:

.NET: The .NET framework offers a scalable backend solution that manages core functions, including user authentication, authorization, and CMS operations. .NET is known for its security features and performance, making it ideal for handling sensitive data, such as user credentials, and ensuring data consistency with CRUD operations across multiple entities (movies, actors, theaters, and genres).
JWT (JSON Web Token): Used for secure, stateless user authentication. JWT tokens are issued upon login and verified for each request to protected routes.
Identity: Provides user management, secure password storage, and role-based access (Admin and User roles).

Database:

MSSQL: MSSQL provides efficient and reliable data storage, managing the app’s data in a structured format. It supports all entities, such as movies, users, roles, genres, actors, and theaters, ensuring data integrity and fast querying. MSSQL’s robust querying capabilities allow for real-time updates to the rating system, smooth filtering, and efficient data retrieval for the CMS.

Summary:

This movie app offers a complete experience for both moviegoers and admins. Users can discover and interact with movies through detailed listings, search options, and ratings, while admins benefit from a powerful CMS for managing content, roles, and overall app settings. By leveraging React.js, TypeScript, .NET, and MSSQL, the app is designed for high performance, reliability, and a user-friendly experience.


Photos of the project:

![Screenshot_15-11-2024_02242_localhost](https://github.com/user-attachments/assets/79257ced-99f7-4916-bad8-85ac24208de9)
![Screenshot_15-11-2024_02232_localhost](https://github.com/user-attachments/assets/f4785119-bb7c-47ed-9098-b77daf033e36)
![Screenshot_15-11-2024_02220_localhost](https://github.com/user-attachments/assets/4f00381e-9fc5-43a6-ad59-61a0abc7efd5)
![Screenshot_15-11-2024_02149_localhost](https://github.com/user-attachments/assets/24af1e0c-b993-4506-91c6-5f5898139191)
![Screenshot_15-11-2024_02135_localhost](https://github.com/user-attachments/assets/8349c2b3-198c-4504-ba6f-339f01c53c42)
![Screenshot_15-11-2024_02058_localhost](https://github.com/user-attachments/assets/002de46f-a51c-4bdf-8e70-94e993116f34)
![Screenshot_15-11-2024_01958_localhost](https://github.com/user-attachments/assets/ec5d3904-7f5d-480a-bc90-f2bac3a9bcdd)
![Screenshot_15-11-2024_0242_localhost](https://github.com/user-attachments/assets/7a85ff74-2ba2-4293-93a9-1afc1f8a65e9)
![Screenshot_15-11-2024_0239_localhost](https://github.com/user-attachments/assets/e9405bbe-7251-44b9-9b76-93f2b3f0ba41)
![Screenshot_15-11-2024_0227_localhost](https://github.com/user-attachments/assets/8174af2c-5337-4cf7-8077-ba635e2a6c59)
![Screenshot_15-11-2024_0219_localhost](https://github.com/user-attachments/assets/7c50a2a8-c57a-455d-992b-7eb1f9682de8)
![Screenshot 2024-11-15 001735](https://github.com/user-attachments/assets/2d062709-36c4-4e25-b3dd-65b949a3b781)
![Screenshot 2024-11-15 001726](https://github.com/user-attachments/assets/59d9d070-c193-4b80-8c3f-b5ae96d22f66)
![Screenshot 2024-11-15 001716](https://github.com/user-attachments/assets/5fcac8ef-a4db-4015-9f0f-3c5ca8a82c0f)
![Screenshot_15-11-2024_02256_localhost](https://github.com/user-attachments/assets/025c64ab-bf03-4fd6-b837-89c8ed3eff75)


