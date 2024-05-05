const subjects_list = [
    { name: "Mathematics", field: "Science" },
    { name: "Physics", field: "Science" },
    { name: "Chemistry", field: "Science" },
    { name: "Economics", field: "Social" },
    { name: "History", field: "Social" },
    { name: "Biology", field: "Science" },
    { name: "Astronomy", field: "Science" },
    { name: "Philosophy", field: "Social" },
    { name: "English", field: "Social" },
    { name: "Computer", field: "Science" }
];

const subjects = subjects_list.map(subject => subject.name);
const science = subjects_list.filter(subject => subject.field === "Science").map(subject => subject.name);;
const social = subjects_list.filter(subject => subject.field === "Social").map(subject => subject.name);;

var startButtons = document.querySelectorAll(".startButton");

startButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        document.getElementById("overlay").style.display = "flex";
    });
});

document.getElementById("close").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
});

// FOREACH FOR SUBJECTS
const subjectListContainerDiv = document.getElementById("subject-list");
const choiceContainerDiv = document.getElementById("choice-container");
const scienceCheckbox = document.getElementById('Science');
const socialCheckbox = document.getElementById('Social');

subjects.forEach((subject) => {
    choiceContainerDiv.insertAdjacentHTML("beforeend", `<div class="choice">${subject}</div>`)
})
choiceContainerDiv.insertAdjacentHTML("beforeend", `<div class="choice">And so on...</div>`)
subjects.forEach((subject) => {
    subjectListContainerDiv.insertAdjacentHTML("beforeend", `<div class="subject-container">
    <input type="checkbox" id="${subject}" name="subject" value="${subject}">
    <label class="subject-choice" for="${subject}">${subject}</label><br>
</div>`);
});

// FILTER SUBJECTS
const filterButtons = [scienceCheckbox, socialCheckbox];
filterButtons.forEach((button) => {
    button.addEventListener("change", function() {
        subjectListContainerDiv.innerHTML = "";
        if ((!scienceCheckbox.checked && !socialCheckbox.checked) || (scienceCheckbox.checked && socialCheckbox.checked)) {
            subjects.forEach((subject) => {
                subjectListContainerDiv.insertAdjacentHTML("beforeend", `<div class="subject-container">
                <input type="checkbox" id="${subject}" name="subject" value="${subject}">
                <label class="subject-choice" for="${subject}">${subject}</label><br>
            </div>`);
            });
        } else if (scienceCheckbox.checked && !socialCheckbox.checked) {
            science.forEach((subject) => {
                subjectListContainerDiv.insertAdjacentHTML("beforeend", `<div class="subject-container">
                <input type="checkbox" id="${subject}" name="subject" value="${subject}">
                <label class="subject-choice" for="${subject}">${subject}</label><br>
            </div>`);
            });
        } else if (!scienceCheckbox.checked && socialCheckbox.checked) {
            social.forEach((subject) => {
                subjectListContainerDiv.insertAdjacentHTML("beforeend", `<div class="subject-container">
                <input type="checkbox" id="${subject}" name="subject" value="${subject}">
                <label class="subject-choice" for="${subject}">${subject}</label><br>
            </div>`);
            });
        }
    });
});

function saveFormData(formData) {
    localStorage.setItem('formData', JSON.stringify(formData));
}

function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const education = document.getElementById('education').value;
    const checkedSubjects = Array.from(document.querySelectorAll('input[name="subject"]:checked')).map(input => input.value);

    const formData = {
        name: name,
        phone: phone,
        email: email,
        education: education,
        subjects: checkedSubjects
    };

    saveFormData(formData);

    document.querySelector('form').reset();

    alert('Form data has been saved to Local Storage.');
}

document.getElementById('submitBtn').addEventListener('click', handleSubmit);
