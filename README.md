# Node.js Fundamentals

A lightweight project demonstrating core Node.js concepts and features without external frameworks like Express.

## Project Structure

* **`server.js`**: Native HTTP server using Node's built-in `http` module. Handles basic routing (`/`, `/api/data`) and standard status responses (`200`, `404`).
* **`file-demo.js`**: Demonstrates asynchronous file operations (`writeFile`, `appendFile`, `readFile`) using `fs/promises`.
* **`package.json`**: Configured as ES Module (`"type": "module"`) for standard `import`/`export` syntax.

## Concepts Covered

* **Event Loop & Asynchronous I/O**: Understanding non-blocking execution in single-threaded Node.js.
* **Core Modules**: Working directly with `http` and `fs`.
* **ES Modules**: Standard JavaScript module syntax in Node environments.
