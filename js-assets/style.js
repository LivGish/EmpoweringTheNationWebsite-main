/*CODE ATTRIBUTION*/
/*TITLE: onclick event*/
/*AUTHOR: W3 schools*/
/*DATE: 20/10/2025*/
/*VERSION: 1.0*/
/*AVAILABLE: https://www.w3schools.com/jsref/event_onclick.asp*/

// This line runs when the JS file is loaded 
console.log("JavaScript is up and running!")

// Add Back button handler (uses history.back with a homepage fallback)
document.addEventListener('DOMContentLoaded', function () {
	const backBtn = document.getElementById('backBtn');
	if (!backBtn) return;
	backBtn.addEventListener('click', function () {
		// If there's a previous entry in the history, go back. Otherwise go to homepage.html
		if (window.history && window.history.length > 1) {
			window.history.back();
			// Some browsers may not navigate if no real previous page; set a short timeout fallback
			setTimeout(() => {
				if (document.visibilityState === 'visible') {
					window.location.href = 'homepage.html';
				}
			}, 250);
		} else {
			window.location.href = 'homepage.html';
		}
	});
});

// Store customer details
let customerDetails = {
    name: '',
    phone: '',
    email: ''
};

// Handle contact details form submission (only if form exists)
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent page reload
        
        // Get form values
        customerDetails.name = document.getElementById('name').value;
        customerDetails.phone = document.getElementById('number').value;
        customerDetails.email = document.getElementById('email').value;
        
        // Update invoice with customer details
        document.getElementById('inv-name').textContent = customerDetails.name;
        document.getElementById('inv-phone').textContent = customerDetails.phone;
        document.getElementById('inv-email').textContent = customerDetails.email;
        
        alert('Details saved! Now select your courses and click "Calculate total fee"');
    });
}

// Calculate button functionality (only if button exists)
const calculateBtn = document.getElementById('calculateBtn');
if (calculateBtn) {
    calculateBtn.addEventListener('click', function() {
    // Check if customer details are filled
    if (!customerDetails.name || !customerDetails.phone || !customerDetails.email) {
        alert('Please submit your contact details first!');
        return;
    }
    
    // Get all checked checkboxes
    const checkboxes = document.querySelectorAll('input[name="course"]:checked');
    
    if (checkboxes.length === 0) {
        alert('Please select at least one course!');
        return;
    }
    
    // Calculate total and gather course info
    let total = 0;
    let courses = [];
    
    checkboxes.forEach(checkbox => {
        const price = parseFloat(checkbox.value);
        const courseName = checkbox.getAttribute('data-course');
        total += price;
        courses.push({ name: courseName, price: price });
    });
    
    // Calculate discount
    let discount = 0;
    let discountPercent = 0;
    
    if (checkboxes.length === 2) {
        discountPercent = 5;
    } else if (checkboxes.length === 3) {
        discountPercent = 10;
    } else if (checkboxes.length >= 4) {
        discountPercent = 15;
    }
    
    discount = (total * discountPercent) / 100;
    const finalTotal = total - discount;
    
    // Update invoice with selected courses
    const coursesList = document.getElementById('inv-courses');
    coursesList.innerHTML = '';
    courses.forEach(course => {
        const li = document.createElement('li');
        li.textContent = `${course.name} - R${course.price.toFixed(2)}`;
        coursesList.appendChild(li);
    });
    
    // Update cost breakdown
    const breakdownList = document.getElementById('inv-breakdown');
    breakdownList.innerHTML = `
        <li>Subtotal: R${total.toFixed(2)}</li>
        <li>Number of courses: ${checkboxes.length}</li>
        <li>Discount (${discountPercent}%): -R${discount.toFixed(2)}</li>
        <li><strong>Total amount due: R${finalTotal.toFixed(2)}</strong></li>
    `;
    
    // Scroll to invoice
    document.querySelector('.invoice').scrollIntoView({ behavior: 'smooth' });
  });
}

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}