document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);

// customer.json
function loadCustomer() {
  const xhr = new XMLHttpRequest()

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function() {
    if(this.status === 200) {
      // console.log(this.responseText);

      const customer = JSON.parse(this.responseText);

      const output = `
      <ul>
      <li>ID: ${customer.id}</li>
      <li>Name: ${customer.name}</li>
      <li>Company: ${customer.company}</li>
      <li>Phone: ${customer.phone}</li>
      </ul>
      `;

      document.getElementById('customer').innerHTML = output;
    }
  }
  
  xhr.send();
}

// customers.json
function loadCustomers(e) {
  const xhr = new XMLHttpRequest()

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function() {
    if(this.status === 200) {
      // console.log(this.responseText);

      const customers = JSON.parse(this.responseText);

      let output = ''; // customers.json is an array
      
      customers.forEach(function(customer) { // customers.json is an array
       output += `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
      </ul>
      `;
      });

      

      document.getElementById('customers').innerHTML = output;
    }
  }
  
  xhr.send();
}


