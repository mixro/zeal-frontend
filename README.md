# Zeal Frontend – Documentation  

![React](https://img.shields.io/badge/React-v18-blue) 
![Redux](https://img.shields.io/badge/Redux-Toolkit-purple) 
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow) 
![CSS](https://img.shields.io/badge/CSS3-Styling-green)  

The **Zeal Frontend** application is the web interface for **Zeal Energy Systems and Recycles**, a company specializing in importing, exporting, servicing, and installing electrical equipment, as well as providing advanced recycling solutions. This project delivers a modern, responsive, and interactive user experience to showcase services, products, and sustainability initiatives.  


## Table of Contents  

- [Overview](#overview)  
- [Architecture](#architecture)  
- [Technologies](#technologies)  
- [Setup Instructions](#setup-instructions)  
- [Directory Structure](#directory-structure)  
- [Core Features](#core-features)  
- [Testing](#testing)  
- [Deployment](#deployment)  
- [Future Improvements](#future-improvements)  
- [Support](#support)  


## Overview  

The Zeal frontend is designed to:  

- Present **products and services** in an organized, user-friendly manner.  
- Showcase the company’s **vision, mission, and sustainability initiatives**.  
- Provide **real-time interaction** with APIs for products and customer engagement.  
- Ensure accessibility and responsiveness across devices.  

The application enhances **customer experience, branding, and communication** for Zeal Energy Systems and Recycles.  


## Architecture  

### Components  

- **React (Frontend)** – Builds dynamic user interfaces.  
- **Redux Toolkit** – Manages global application state.  
- **Axios (via requestMethod.js)** – Handles API communication.  
- **Dummy Data** – Supports frontend testing without backend dependencies.  

### Directory Structure  

```plaintext
zcal-fronted-app/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/               # Application pages (Home, Services, Products, Contact)
│   ├── redux/               # Redux store and slices
│   ├── App.css              # Global styles for App
│   ├── App.js               # Main application component
│   ├── dummyData.js         # Temporary mock data for testing
│   ├── index.css            # Root CSS
│   ├── index.js             # Application entry point
│   └── requestMethod.js     # API configuration and request handling
├── package.json             # Dependencies and scripts
├── README.md                # Documentation
```


## Technologies

- **React (v18)** – Frontend framework  
- **Redux Toolkit** – State management  
- **Axios** – API requests  
- **CSS3** – Styling and layout  
- **JavaScript (ES6)** – Core logic and functionality  


## Setup Instructions

### Prerequisites
- **Node.js v18+**
- **npm or yarn**

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/mixro/zcal-fronted-app
   cd zcal-fronted-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the app:**
   ```bash
   npm start
   ```
   The app runs at http://localhost:3000.

4. **Build for production:**
   ```bash
   npm run build
   ```


## Core Features

- 📦 **Product Showcase** – Display imported and exported electrical tools and equipment.
- ⚡ **Service Listings** – Highlight installation, servicing, and recycling solutions.
- 🌍 **Sustainability Focus** – Promote Zeal’s recycling and eco-friendly initiatives.
- 📊 **State Management** – Manage application data with Redux Toolkit.
- 🔗 **API Ready** – Connect to backend services with a centralized request handler.


## Testing

- **Dummy Data in dummyData.js** is provided for frontend UI testing.
- For unit and integration tests (if added):
  ```bash
  npm test
  ```


## Deployment

### Local
```bash
npm run build
serve -s build
```

### Production
- Deployable to:
  - Vercel
  - Netlify
  - AWS Amplify
  - Firebase Hosting


## Future Improvements

- 🔒 **Authentication system (user & admin dashboards).**
- 🛠 **Product management with backend integration.**
- 📈 **Analytics dashboards for business insights.**
- 🌐 **Multi-language support.**
- 📱 **Mobile-first enhancements for wider accessibility.**


## Support

For inquiries or support:\
📧 Email: josephchongola43@gmail.com\