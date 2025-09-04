

class N8nDemo extends HTMLElement {

  connectedCallback() {

    const data = this.getAttribute("file");
    // if (isValidN8nWorkflow(data)) {
    this.innerHTML = `<n8n-demo theme="dark" frame="true" clicktointeract="true" hidecanvaserrors="true" workflow='${data}'></n8n-demo>`;
    // } else {
      // this.innerHTML = `<p>Invalid JSON:</p><pre>${JSON.stringify(data, null, 2)}</pre>`;
    // }

    // const parsed = JSON.parse(data);

    // const data_str = JSON.stringify(data);


    
    // this.innerHTML = `${JSON.stringify(parsed, null, 2)}`;
    // this.innerHTML = `<n8n-demo workflow='${JSON.stringify(data, null, 2)}'></n8n-demo>`;

    // <n8n-demo workflow='{"nodes":[{"name":"Workflow-Created","type":"n8n-nodes-base.webhook","position":[512,369],"parameters":{"path":"webhook","httpMethod":"POST"},"typeVersion":1}],"connections":{}}'></n8n-demo>
  }
}
//         <pre style="white-space: pre-wrap; word-wrap: break-word;">
// ${JSON.stringify(parsed, null, 2)}
//         </pre>
customElements.define("n8n-demo-wrapper", N8nDemo);
