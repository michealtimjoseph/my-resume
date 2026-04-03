/* =====================================================
   script.js — Vanilla JavaScript Features
   
   Feature 1: Prompt-based personalization
   Feature 2: fetch() + JSON data rendering (DOM manipulation
              with createElement / appendChild / getElementById)
   Feature 3: Contact form validation with clear feedback
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {

  // --------------------------------------------------
  // FEATURE 1: Prompt-based personalization
  // Asks the visitor their name and updates the greeting
  // using getElementById + textContent (DOM manipulation)
  // --------------------------------------------------
  var visitorName = prompt("Welcome to my resume! What's your name?");
  var greetingEl = document.getElementById('greeting-text');

  if (visitorName !== null && visitorName.trim() !== '') {
    greetingEl.textContent = 'Hello, ' + visitorName.trim() + '! \uD83D\uDC4B';
  } else {
    greetingEl.textContent = 'Hello, visitor! \uD83D\uDC4B';
  }

  // --------------------------------------------------
  // FEATURE 2: Load and display data from resume.json
  // Uses fetch() + JSON, then renders sections with
  // createElement() and appendChild()
  // --------------------------------------------------
  fetch('data/resume.json')
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Failed to load resume.json');
      }
      return response.json();
    })
    .then(function (data) {
      renderHero(data);
      renderEducation(data.education);
      renderSkills(data.skills);
      renderProjects(data.projects);

      // Update footer and nav initials via getElementById
      var footerName = document.getElementById('footer-name');
      footerName.textContent = data.name;

      var navInitials = document.getElementById('nav-initials');
      var initials = data.name
        .split(' ')
        .map(function (w) { return w[0]; })
        .join('')
        .slice(0, 3)
        .toUpperCase();
      navInitials.textContent = initials;
    })
    .catch(function (err) {
      console.error('Error loading resume data:', err);
      document.getElementById('hero-name').textContent = 'Micheal Tim Joseph Enriquez';
    });

  // --------------------------------------------------
  // FEATURE 3: Form validation with clear user feedback
  // Uses getElementById, conditions, DOM manipulation
  // --------------------------------------------------
  var form = document.getElementById('contact-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var nameInput    = document.getElementById('fname');
    var emailInput   = document.getElementById('femail');
    var messageInput = document.getElementById('fmessage');
    var nameError    = document.getElementById('fname-error');
    var emailError   = document.getElementById('femail-error');
    var msgError     = document.getElementById('fmessage-error');
    var successMsg   = document.getElementById('form-success');

    // Clear previous feedback
    nameError.textContent  = '';
    emailError.textContent = '';
    msgError.textContent   = '';
    successMsg.textContent = '';
    nameInput.classList.remove('error');
    emailInput.classList.remove('error');
    messageInput.classList.remove('error');

    var isValid = true;

    // Condition: name check
    if (nameInput.value.trim() === '') {
      nameError.textContent = 'Name is required.';
      nameInput.classList.add('error');
      isValid = false;
    }

    // Condition: email check
    if (emailInput.value.trim() === '') {
      emailError.textContent = 'Email is required.';
      emailInput.classList.add('error');
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      emailError.textContent = 'Please enter a valid email address.';
      emailInput.classList.add('error');
      isValid = false;
    }

    // Condition: message check
    if (messageInput.value.trim() === '') {
      msgError.textContent = 'Message is required.';
      messageInput.classList.add('error');
      isValid = false;
    }

    // If all valid — show success and reset
    if (isValid) {
      successMsg.textContent = '\u2713 Message sent! I will get back to you soon.';
      form.reset();
      setTimeout(function () {
        successMsg.textContent = '';
      }, 4000);
    }
  });

});

// --------------------------------------------------
// RENDER FUNCTIONS — use createElement + appendChild
// --------------------------------------------------

function renderHero(data) {
  document.getElementById('hero-name').textContent  = data.name;
  document.getElementById('hero-title').textContent = data.title;
  document.getElementById('about-desc').textContent = data.about;

  var chipsContainer = document.getElementById('contact-chips');
  chipsContainer.innerHTML = '';

  var contactItems = [
    { label: data.contact.email,    href: 'mailto:' + data.contact.email },
    { label: data.contact.phone,    href: 'tel:'    + data.contact.phone },
    { label: data.contact.location, href: null },
    { label: 'GitHub',              href: data.contact.github,   target: '_blank' },
    { label: 'LinkedIn',            href: data.contact.linkedin, target: '_blank' }
  ];

  contactItems.forEach(function (item) {
    var chip;
    if (item.href) {
      // createElement + appendChild
      chip = document.createElement('a');
      chip.href = item.href;
      if (item.target) chip.target = item.target;
    } else {
      chip = document.createElement('span');
    }
    chip.className   = 'chip';
    chip.textContent = item.label;
    chipsContainer.appendChild(chip);
  });
}

function renderEducation(education) {
  var list = document.getElementById('education-list');
  list.innerHTML = '';

  education.forEach(function (edu) {
    var card   = document.createElement('div');
    card.className = 'edu-card';

    var degree = document.createElement('div');
    degree.className   = 'edu-degree';
    degree.textContent = edu.degree;

    var school = document.createElement('div');
    school.className   = 'edu-school';
    school.textContent = edu.school;

    var period = document.createElement('div');
    period.className   = 'edu-period';
    period.textContent = edu.period;

    card.appendChild(degree);
    card.appendChild(school);
    card.appendChild(period);
    list.appendChild(card);
  });
}

function renderSkills(skills) {
  var list = document.getElementById('skills-list');
  list.innerHTML = '';

  skills.forEach(function (skill) {
    var item = document.createElement('div');
    item.className = 'skill-item';

    var info     = document.createElement('div');
    info.className = 'skill-info';

    var nameSpan = document.createElement('span');
    nameSpan.className   = 'skill-name';
    nameSpan.textContent = skill.name;

    var pctSpan  = document.createElement('span');
    pctSpan.className   = 'skill-pct';
    pctSpan.textContent = skill.level + '%';

    info.appendChild(nameSpan);
    info.appendChild(pctSpan);

    var track = document.createElement('div');
    track.className = 'skill-bar-track';

    var fill  = document.createElement('div');
    fill.className = 'skill-bar-fill';
    fill.setAttribute('data-level', skill.level);
    // Starts at 0%; jQuery in main.js animates it

    track.appendChild(fill);
    item.appendChild(info);
    item.appendChild(track);
    list.appendChild(item);
  });
}

function renderProjects(projects) {
  var grid = document.getElementById('projects-grid');
  grid.innerHTML = '';

  projects.forEach(function (proj) {
    var card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-category', proj.category || 'Web');

    var cat = document.createElement('div');
    cat.className   = 'project-category';
    cat.textContent = proj.category || 'Web';

    var name = document.createElement('div');
    name.className   = 'project-name';
    name.textContent = proj.name;

    var desc = document.createElement('p');
    desc.className   = 'project-desc';
    desc.textContent = proj.description;

    var link = document.createElement('a');
    link.className   = 'project-link';
    link.href        = proj.link;
    link.target      = '_blank';
    link.textContent = 'View Project \u2192';

    card.appendChild(cat);
    card.appendChild(name);
    card.appendChild(desc);
    card.appendChild(link);
    grid.appendChild(card);
  });
}
