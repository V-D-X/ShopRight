// requests/myCall.template.js
// Copy this file to something like "mySecondCall.js" and edit the strings below.
// Feel free to browse the other example calls in this folder for inspiration!

export default {
  label: 'My first call (edit me)',
  // Try some of these:
  // path: '/products',                 // list products (use params: { limit: 3 })
  // path: '/products/category/jewelery',
  // path: '/products/5',               // single product by id
  // path: '/users',                    // list users
  // path: '/carts',                    // list carts
  path: '/products',
  params: { limit: 3 }
};