// app.js
import { runRequest, briefList } from './engine.js';

// Requests students can tweak/copy
import products from './requests/products.js';
import electronics from './requests/electronics.js';
import singleProduct from './requests/singleProduct.js';
import categories from './requests/categories.js';
import templateRequest from './requests/myCall.template.js';

// Students add their import and push to this array
const REQUESTS = [products, electronics, singleProduct, categories, templateRequest];

const out = document.getElementById('out');
const requestsel = document.getElementById('request');

// Fill dropdown
for (const r of REQUESTS) {
  const opt = document.createElement('option');
  opt.value = r.label;
  opt.textContent = r.label;
  requestsel.appendChild(opt);
}

function print(title, data) {
  out.textContent =
    `# ${title}\n\n` +
    (typeof data === 'string' ? data : JSON.stringify(data, null, 2));
}

document.getElementById('run').addEventListener('click', async () => {
  const label = requestsel.value;
  const request = REQUESTS.find(r => r.label === label);
  if (!request) return print('Error', 'Request not found');

  try {
    print('Running…', { request: request.label });
    const data = await runRequest(request);

    const brief = briefList(data);
    const summary = Array.isArray(data)
      ? { count: data.length }
      : { type: typeof data };

    print('Summary', summary);
    out.textContent += '\n\nBrief:\n' + JSON.stringify(brief, null, 2);
    out.textContent += '\n\nRaw:\n' + JSON.stringify(data, null, 2);
  } catch (e) {
    print('Error', e.message || String(e));
  }
});