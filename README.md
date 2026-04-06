# Cloudy Learning

A ready-to-use Laravel development environment powered by Docker, Vite, and Vue.js.

## Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- (Optional) [Colima](https://github.com/abiosoft/colima) for improved Docker performance on macOS

## Getting Started

1. **Clone this repository:**
    ```sh
    git clone https://github.com/your-username/cloudy-learning.git
    cd cloudy-learning
    ```
2. **Copy the example environment file and update as needed:**
    ```sh
    cp .env.example .env
    # Edit .env if necessary
    ```
3. **Start the development environment:**
    ```sh
    docker-compose up -d
    ```
4. **Install dependencies:**
    ```sh
    docker-compose exec app composer install
    docker-compose exec app npm install
    ```
5. **Generate application key:**
    ```sh
    docker-compose exec app php artisan key:generate
    ```
6. **Access the application:**
    - Visit [http://localhost:9000](http://localhost:9000) in your browser.

## Useful Commands

- **Stop the environment:**
    ```sh
    docker-compose down
    ```
- **Run migrations:**
    ```sh
    docker-compose exec app php artisan migrate
    ```

## License

This project is licensed under the MIT License.
