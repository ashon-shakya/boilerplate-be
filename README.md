# Express API Boilerplate

## Overview

Welcome to the Express API Boilerplate for Rebbtech Company. This project provides a foundational setup for building robust APIs using Express.

## Getting Started

### Prerequisites

Make sure you have Node.js and Yarn installed on your machine.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Rebbtech/express-api-boilerplate
    cd express-api-boilerplate
    ```

2. Install dependencies:

    ```bash
    yarn install
    ```

3. Create a `.env` file in the root directory and add your environment variables. Refer to `.env.example` for the required variables.

### Running the Application

-   To start the application:

    ```bash
    yarn start
    ```

-   To run the application in development mode with live-reloading:

    ```bash
    yarn dev
    ```

-   To start the application using Docker Compose:
    ```bash
    docker-compose -f example.docker-compose.yml up
    ```

## Project Structure

-   `src/`: Contains the source code for the application.
    -   `config/`: Configuration files.
    -   `v1/`: Version 1 of source
        -   `controllers/`: Request handlers for the routes.
        -   `middlewares/`: Custom middleware functions.
        -   `models/`: Mongoose models.
        -   `routes/`: Express routes.
        -   `schemas/`: Schema for validations.
        -   `services/`: DB Service Layer.
        -   `utils/`: Utility functions and helpers.

## Packages and Dependencies

### Dependencies

-   **dotenv**: Load environment variables from a .env file.
-   **express**: Web framework for Node.js.
-   **fs-extra**: Provides additional file system methods that aren't included in the native fs module.
-   **http-status**: Utility to interact with HTTP status codes.
-   **joi**: Data validation library.
-   **mongoose**: MongoDB object modeling tool.

### Dev Dependencies

-   **nodemon**: Tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy coding! If you have any questions or issues, feel free to reach out to the Rebbtech development team.
