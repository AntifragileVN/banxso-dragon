# SpaceX Dragon Rocket Information Web Application

This project is a web application that displays detailed information about the SpaceX Dragon rocket. The application fetches data from the SpaceX API and presents it in a user-friendly interface designed according to the provided Figma design.

## Stack:

#### Frontend:

React, Typescript, RecoilJs, Swiper, React-player Axios, SCSS.

## Project commands

`npm i` - install dependencies <br />
`npm run dev` - run your frontend <br />
`npm run test` - run your tests <br />

### NOTES

Design: [figma](https://www.figma.com/design/JTokTA6Xfcy9Kb62xRBRKv/Test-Junior?node-id=0-1&t=sLcE18FQHZWMRKov-0)

## Deployment

This project is configured to automatically deploy to Netlify whenever changes are pushed to the repository.

### Deployment Workflow

The deployment process is managed through GitHub Actions and is defined in the `deploy.yml` file located in the `.github/workflows` directory.

### Key Points

-   **Automatic Deployment**: Any push to the repository triggers the deployment workflow.
-   **Production Deployment**: Changes pushed to the `main` branch are deployed as production.

In section `Deploy to Netlify` of Github Actions deploy logs you can find `Website draft URL` or `Website URL` that is link to your deployed website.

### Setting Up

To ensure the deployment process works smoothly, make sure the following secrets are configured in your GitHub repository:

-   `NETLIFY_SITE_ID`: Your Netlify site ID.
-   `NETLIFY_API_TOKEN`: Your Netlify API token.
