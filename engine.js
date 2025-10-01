// engine.js - fetch helper for Fake Store API
const BASE = 'https://fakestoreapi.com';

/**
 * Build a query string from a plain object
 */
function qp(obj = {}) {
  const entries = Object.entries(obj).filter(([, v]) => v !== undefined && v !== null && v !== '');
  if (!entries.length) return '';
  return '?' + entries.map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&');
}

/**
 * Run a request
 * @param {object} request { label, path, params?, method?, body? }
 *   - path   : e.g. '/products' or '/products/category/electronics'
 *   - params : optional query params object (becomes ?limit=5, etc.)
 *   - method : GET by default
 *   - body   : JS object to JSON.stringify for POST examples (not needed for GET)
 */
export async function runRequest(request) {
  const {
    path = '/products',
    params = {},
    method = 'GET',
    body
  } = request;

  const url = `${BASE}${path}${qp(params)}`;
  const init = { method, headers: {} };
  if (body) {
    init.headers['Content-Type'] = 'application/json';
    init.body = JSON.stringify(body);
  }

  const res = await fetch(url, init);
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`);
  return res.json();
}

/**
 * Make a short, friendly preview from common Fake Store entities
 */
export function briefList(data) {
  const arr = Array.isArray(data) ? data : [data];
  return arr.map(item => {
    if (typeof item === 'string') return { name: item };
    return {
      id: item.id ?? undefined,
      name: item.title ?? item.name ?? '(no title)',
      price: item.price ?? undefined,
      category: item.category ?? undefined
    };
  });
}