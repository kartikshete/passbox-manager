# Technical Documentation

This project uses **React + Vite** for the frontend and **LocalStorage** for data persistence.

## Project Structure
- `src/context`: Contains state management using React Context API.
- `src/components`: Reusable UI elements (Navbar, Cards).
- `src/pages`: Main application views.

## Data Schema
Each site object in `passbox_sites`:
```json
{
  "id": "uuid",
  "siteName": "string",
  "url": "string (https://...)",
  "username": "string",
  "email": "string",
  "password": "string",
  "createdAt": "iso-date"
}
```

## Security Note
This app stores everything in cleartext within `localStorage`. It is a personal project/prototype. 
**TODO**: Add encryption layer for production use.
