## Getting Started

1. Add the **Live Server** extension (by Ritwick Dey) using VS Code's Extensions tab.
2. **Fork** this repo, then add your groupmate(s) as collaborators.
3. In VS Code, right-click on `index.html` and choose **“Open with Live Server.”**
4. Pick a request from the dropdown and click **Run.**

You’ll see data from the Fake Store API appear on the page.


## What is an API?

An API (Application Programming Interface) is a way for one program to talk to another; it abstracts away the complexity of how the system works and just gives you a clear set of requests you can make and responses you’ll get back.

The Fake Store API is a REST API; that means it uses web URLs (like /products/5) and returns structured data (in JSON; not scary promise). When you pick a request and click Run, the app makes a REST request to the API, which responds with fake store data. The browser then displays that data for you.

## Adding Your Own Request

1. Copy `requests/myCall.template.js` and rename it (for example: `requests/mySecondCall.js`).
2. Edit these fields:

   * **`label`** - the name that shows up in the dropdown.
   * **`path`** - the API path, such as `/products`, `/products/5`, `/products/category/jewelery`, `/users`, or `/carts`.
   * **`params`** - optional query parameters, like `{ limit: 3 }`.
3. Import your new file in `app.js` and add it to the `REQUESTS` array.

Through the power of Live Server, your new request will now show up in the dropdown.


## Exploring the API

The Fake Store API has a few main endpoints you can try:

* `/products` - all products
* `/products/{id}` - a single product
* `/products/category/{cat}` - products in a category (`electronics`, `jewelery`, `men's clothing`, `women's clothing`)
* `/products/categories` - list of all categories
* `/users` - user accounts
* `/carts` - shopping carts

Check out the docs for more: [https://github.com/keikaavousi/fake-store-api](https://github.com/keikaavousi/fake-store-api)