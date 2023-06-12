# [VenTour website](https://rkomi98.github.io/VenTour/)

This is the official repository of the Hypermedia Web Application project, course followed in Politecnico di Milano during the Academic year 2022/23

This website has been designed for a Venture Capital Company. Attached you can find the Design document and the implementation code (and usability inspection?) of the website.

The authors are:

    Mirko Calcaterra
    Emma Lodetti
    Nikolina Zallemi

## Project Description
In this repository you can find the design and the implementation of a website of a possible Venture Capital Company. As a VC, its goal is to show the areas of interest and  the companies in which the people of the VC invest. 

The requirements contain some constraints about the relationships of the main entities of the website. The project is divided into four main parts: Design, Backend, Frontend and Usability test.

### Requirements
Before starting you have to download or fork the project on your PC and follow the installation of [NodeJS](https://nodejs.org/en). Once done, you have to run in the both Backend and Frontend folders:

`
npm install
`

When everything is ready, use:

`
node index.js
`

in the backend folder to ensure that everything is ok there. Therefore go in the frontend folder and run the project:

`
      npm run dev
`

### Architecture:
In this section we talk about the high-level structure and organization of the hypermedia application. It describes the major components and their relationships, providing an understanding of how different sections of the system work together to achieve the specific functionality.

1. **System Components**: The repository is split in two main part: Backend and Frontend. We will better focus in the specific section. In Backend you can find the relational database and the package needed to run the application (see the section Backend for more information). In the folder ''Frontend'' there is everything that is due to the design and implementation of the website: it means we put all the HTML/CSS code used to see the pages, the VUE components and the function used to see some interactive tool developed in the website.
2. **Component Interaction**: Backend and frontend communicate one each other thanks to JavaScript functions, like:

`
const { data: WhatYouWantToRetrieve } = await useFetch(useRuntimeConfig().public.serverURL + '/WhatYouWantToRetrieveFolder')
`

Remember to run both backend, with and the command in the terminal

`
node index.js
`

And Frontend with the command:

`
npm run dev
`

3. **Data Flow**: All Data is stored in the file dbInit.js and it is static. It means that it is not updated externally by the user, but can be updated only by the developer adding new fields or modyfying the one already existing in the dbInit.js file and in index.js file
4. **Scalability and Performance**: The website is optimized for both Mobile and Desktop. We simplified some features in the mobile version of the code in order to make the application faster and more usable.
5. **Deployment Considerations**: All the code needed to run the application is contained in this repository and the host of the website online used to run this application is github pages.
6. **Technologies Used**: The website has been developed thanks to the VUE.js framework together with NodeJS and it has been published online using Github pages. List the technologies, frameworks, and tools used in the project. 
7. **Hosting service**: We decided to use github pages because we designed a static website and we don't need to update the database when the user needs.
8. **Rendering mode**: we don't need to update data frequently or when we prefer not to pre-render pages to mantain a good performance of the webiste. So we exluded the CSR method. We didn't have dynamic data in our design of the Database so we decided not to use neither SSR. It is the reason why at the end we used SSG. With static-site generation (SSG), the page fetches data once during build-time. You can see it running the `node index.js` in the Backend older. We decided to use **static-generated pages** because they are very fast and perform well because all the pages are built beforehand. We needed to maximize the performance on all the devices. In general we know that SSG is perfect for pages and it is exactly our case.



### Design
Design in-the-large with C-IDM, and in the small with the Wireframes can be found, together with use case scenarios and database design, in the folder Design Document.

#TODO TO BE ADDED

### Backend
Backend is mainly made by 4 files, two javascript files and two are jjson files:
- **dbInit.js**: here all data of the database needed in the website is contained and defined.
- **index.js**: Definition of all tables needed to make the website working. The Server is initialized with company and people (where you can find all the data related to those table) and they are connected one each other (as defined in the Realtional schema of the database) 
- **package-lock.json**: here all the package and modules needed are defined, in order to make the website working.
- **pagkage.json**: General information about the application with the dependencies needed

 The list of extra modules imported in the project and that you need to install are:
 - "cors": "^2.8.5": used to fix the localhost address (link used to open the project):

`
const corsOptions = {
    origin: "http://localhost:3000" // The link of your project when run locally
}
`
- "express": "^4.18.2": It is used to manage the routing and the get function in HTTP methods
- "sequelize": "^6.29.3" and "sqlite3": "^5.1.6" are used to work in SQL and manage database.


### Frontend
Frontend folder is split in many folders and many parts:
- In **assets** you can find some of the images used in the webiste (some others are directly retrieved by link from the Web) and the global css model of the website. Here, in particular, the tailwind library is defined. Also default.vue in layout folder gives a default setting
- In **Components** there are all the components that have been used in the pages of the website. For component we mean a modular, reusable, and self-contained unit of code that performs a specific function. It is a building block or a piece of code that encapsulates related functionality and data together.
- **dist** folder is used only to render the github page online. It is in practice one folder of the **output** folder, used to render all the website.
- **pages** folder contains all the pages of the website. The order mantains the structure you can find in the website, so the branches will be in folders and then the leaves subfolders.

> You can notice that we could make all the areas with a single page connected to the database (like [id].vue file in both folders people and companies). We decided to put in the database only data that can change in time, so people and companies. We think that areas will be immutable in the story of the company, or at least will not change as fast as the other two components mentioned above.
> For this reason we preferred to put the areas in static pages without a connection to the database.


- In package.json there is a list of extra modules imported in the project:
    - "autoprefixer": A tool that automatically adds vendor prefixes to CSS properties, ensuring better cross-browser compatibility.
    - "gh-pages": A utility for publishing web pages directly from a Git repository to GitHub Pages.
    - "nuxt": A Vue.js framework for building static websites. 
    - "postcss": A tool for transforming CSS styles using JavaScript plugins, enabling tasks such as autoprefixing, minification, and more.
    - "tailwindcss": A highly customizable CSS framework that provides utility classes for quickly building responsive and modern user interfaces. We used it only for the form in "Get in Touch" section.

### Functionalities
The main components of the application are:


Brief description of the project explaining the chosen theme
o Available server endpoint with short description
• List of Components implemented with description, props and emit (if used)
Additionally, you can add descriptions (not mandatory) of:
• Extra functionalities implemented (e.g., store, filters, etc...)
• different approaches from what was discussed during lectures.
• Approaches used to comply with accessibility and SEO guidelines.

### Usability test?


