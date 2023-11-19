# CURD

A simple note-taking API with CRUD operations using Node.js, Express, and MongoDB.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)


## Introduction

This project provides a basic API for managing notes, including functionalities such as fetching all notes, fetching a single note by ID, creating a new note, updating an existing note, and deleting a note. The API is built using Node.js, Express, and MongoDB.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. Install dependencies:

   ```bash
   cd your-repo
   npm install
   ```

3. Set up your MongoDB connection by updating the `connectToDb.js` file with your MongoDB connection link.

## Usage

To start the server, run the following command:

```bash
npm start
```

The server will be running at `http://localhost:3000`.

## Endpoints

- **Fetch All Notes**
  - **Endpoint:** `GET /notes`
  - **Description:** Retrieve all notes.
  - **Example Response:**
    ```json
    {
      "notes": [
        {
          "_id": "1",
          "title": "Sample Note 1",
          "body": "Lorem ipsum dolor sit amet."
        },
        {
          "_id": "2",
          "title": "Sample Note 2",
          "body": "Consectetur adipiscing elit."
        }
      ]
    }
    ```

- **Fetch Single Note**
  - **Endpoint:** `GET /notes/:id`
  - **Description:** Retrieve a single note by ID.
  - **Example Response:**
    ```json
    {
      "note": {
        "_id": "1",
        "title": "Sample Note 1",
        "body": "Lorem ipsum dolor sit amet."
      }
    }
    ```

- **Create Note**
  - **Endpoint:** `POST /notes`
  - **Description:** Create a new note.
  - **Example Request:**
    ```json
    {
      "title": "New Note",
      "body": "This is a new note."
    }
    ```
  - **Example Response:**
    ```json
    {
      "note": {
        "_id": "3",
        "title": "New Note",
        "body": "This is a new note."
      }
    }
    ```

- **Update Note**
  - **Endpoint:** `PUT /notes/:id`
  - **Description:** Update an existing note by ID.
  - **Example Request:**
    ```json
    {
      "title": "Updated Note",
      "body": "This note has been updated."
    }
    ```
  - **Example Response:**
    ```json
    {
      "updatedNote": {
        "_id": "3",
        "title": "Updated Note",
        "body": "This note has been updated."
      }
    }
    ```

- **Delete Note**
  - **Endpoint:** `DELETE /notes/:id`
  - **Description:** Delete a note by ID.
  - **Example Response:**
    ```json
    {
      "success": "deleted"
    }
    ```
