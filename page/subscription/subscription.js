function getSubscriptionData() {
    const subscriptionData = localStorage.getItem('formData');
    return subscriptionData ? JSON.parse(subscriptionData) : null;
}

function displaySubscriptionData() {
    const subscriptionContainer = document.getElementById('subscription-details');
    const subscriptionData = getSubscriptionData();

    if (subscriptionData === null) {
        subscriptionContainer.innerHTML = '<p>No subscription data found.</p>';
        
    } else {
        const { name, phone, email, education, subjects } = subscriptionData;
        const subjectList = subjects.join(', ');

        subscriptionContainer.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Education:</strong> ${education}</p>
            <p><strong>Subjects:</strong> ${subjectList}</p>
        `;
    }
}

displaySubscriptionData();