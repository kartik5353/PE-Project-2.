document.addEventListener('DOMContentLoaded', function() {
    // Video background setup
    const bgVideo = document.getElementById('bgVideo');
    const searchInput = document.getElementById('cosmicSearch');
    const searchButton = document.getElementById('searchButton');
    const eventsContent = document.getElementById('eventsContent');
    const discoveriesContent = document.getElementById('discoveriesContent');
    const factsContent = document.getElementById('factsContent');

    // Navigation setup
    const menuItems = document.querySelectorAll('.menu-item');
    const contentSections = document.querySelectorAll('.content-section');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetSection = item.getAttribute('data-section');
            
            // Update active states
            menuItems.forEach(mi => mi.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            item.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
        });
    });

    // Initialize charts
    function initializeCharts() {
        // Mission Success Rate Chart
        const successRateCtx = document.getElementById('successRateChart').getContext('2d');
        new Chart(successRateCtx, {
            type: 'doughnut',
            data: {
                labels: ['Successful', 'In Progress', 'Failed'],
                datasets: [{
                    data: [75, 20, 5],
                    backgroundColor: [
                        'rgba(0, 255, 0, 0.5)',
                        'rgba(255, 165, 0, 0.5)',
                        'rgba(255, 0, 0, 0.5)'
                    ],
                    borderColor: [
                        'rgba(0, 255, 0, 1)',
                        'rgba(255, 165, 0, 1)',
                        'rgba(255, 0, 0, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#fff'
                        }
                    }
                }
            }
        });

        // Cosmic Event Trends Chart
        const eventTrendsCtx = document.getElementById('eventTrendsChart').getContext('2d');
        new Chart(eventTrendsCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Events Detected',
                    data: [12, 19, 15, 25, 22, 30],
                    borderColor: 'rgba(79, 172, 254, 1)',
                    backgroundColor: 'rgba(79, 172, 254, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#fff'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#fff'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#fff'
                        }
                    }
                }
            }
        });

        // Observation Statistics Chart
        const observationStatsCtx = document.getElementById('observationStatsChart').getContext('2d');
        new Chart(observationStatsCtx, {
            type: 'bar',
            data: {
                labels: ['Planets', 'Stars', 'Galaxies', 'Nebulae', 'Comets'],
                datasets: [{
                    label: 'Observations',
                    data: [45, 30, 25, 15, 10],
                    backgroundColor: 'rgba(0, 242, 254, 0.5)',
                    borderColor: 'rgba(0, 242, 254, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#fff'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#fff'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#fff'
                        }
                    }
                }
            }
        });
    }

    // View Details Functions
    function showEventDetails(eventType) {
        const details = {
            'solar-eclipse': {
                title: 'Total Solar Eclipse - March 14, 2025',
                content: `
                    <h3>Event Details</h3>
                    <p>The total solar eclipse will begin at 09:30 UTC and reach totality at 10:45 UTC. The path of totality will be approximately 150km wide and will last for up to 4 minutes and 30 seconds at its maximum point.</p>
                    
                    <h3>Viewing Information</h3>
                    <ul>
                        <li>Best viewing locations: Madrid, Spain; Istanbul, Turkey; Moscow, Russia</li>
                        <li>Partial eclipse visible across most of Europe and Asia</li>
                        <li>Next occurrence: October 2, 2026 (South America)</li>
                    </ul>
                    
                    <h3>Safety Guidelines</h3>
                    <p>Always use proper solar viewing glasses during partial phases. Only during totality (when the sun is completely covered) can you safely view without protection.</p>
                `
            },
            'lyrid-meteor': {
                title: 'Lyrid Meteor Shower - April 22, 2025',
                content: `
                    <h3>Event Details</h3>
                    <p>The Lyrid meteor shower is expected to produce up to 20 meteors per hour at its peak. This year's shower coincides with a new moon, providing optimal dark sky conditions.</p>
                    
                    <h3>Viewing Information</h3>
                    <ul>
                        <li>Peak viewing time: 02:00 - 04:00 local time</li>
                        <li>Best viewed from dark sky locations away from city lights</li>
                        <li>Radiant point: Near the constellation Lyra</li>
                    </ul>
                    
                    <h3>Viewing Tips</h3>
                    <p>No special equipment needed. Lie back and let your eyes adjust to the dark for at least 20 minutes. The meteors will appear to radiate from the constellation Lyra.</p>
                `
            },
            'planetary-alignment': {
                title: 'Planetary Alignment - September 29, 2025',
                content: `
                    <h3>Event Details</h3>
                    <p>Venus, Mars, and Jupiter will form a tight triangle in the morning sky, visible to the naked eye. The planets will be within 5 degrees of each other.</p>
                    
                    <h3>Viewing Information</h3>
                    <ul>
                        <li>Best viewing time: 04:30 - 06:00 local time</li>
                        <li>Visible from all locations with clear eastern horizon</li>
                        <li>Next similar alignment: March 15, 2026</li>
                    </ul>
                    
                    <h3>Viewing Tips</h3>
                    <p>Look towards the eastern horizon before sunrise. Venus will be the brightest, followed by Jupiter and Mars. A small telescope will reveal Jupiter's moons.</p>
                `
            },
            'lunar-eclipse': {
                title: 'Total Lunar Eclipse - September 7, 2025',
                content: `
                    <h3>Event Details</h3>
                    <p>The total lunar eclipse will begin at 20:30 UTC and reach totality at 22:15 UTC. The "blood moon" effect will be visible for approximately 1 hour and 15 minutes.</p>
                    
                    <h3>Viewing Information</h3>
                    <ul>
                        <li>Visible across the Americas, Europe, and Africa</li>
                        <li>No special equipment needed - safe to view with naked eye</li>
                        <li>Next occurrence: March 3, 2026</li>
                    </ul>
                    
                    <h3>What to Expect</h3>
                    <p>The moon will gradually darken and turn a deep red color during totality. This is caused by sunlight being filtered through Earth's atmosphere and bending around our planet.</p>
                `
            }
        };

        const eventDetails = details[eventType];
        if (eventDetails) {
            // Create modal
            const modal = document.createElement('div');
            modal.className = 'event-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <div class="modal-header">
                        <h2>${eventDetails.title}</h2>
                        <button class="close-modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        ${eventDetails.content}
                    </div>
                </div>
            `;

            // Add modal to body
            document.body.appendChild(modal);

            // Add close functionality
            const closeBtn = modal.querySelector('.close-modal');
            closeBtn.addEventListener('click', () => {
                modal.remove();
            });

            // Close on outside click
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        }
    }

    function showDiscoveryDetails(discoveryId) {
        const discoveries = {
            'exoplanet': {
                title: 'New Habitable Exoplanet Discovery',
                date: 'March 10, 2024',
                description: 'NASA\'s TESS mission has discovered a new exoplanet in the habitable zone of its star. The planet, named TOI-715 b, is about 1.5 times the size of Earth and orbits a small, cool M-dwarf star.',
                details: {
                    'Distance': '137 light-years from Earth',
                    'Orbital Period': '19 days',
                    'Star Type': 'M-dwarf (red dwarf)',
                    'Potential': 'Could support liquid water',
                    'Size': '1.5 times Earth\'s radius',
                    'Temperature': 'Estimated surface temperature: -40°C to 30°C',
                    'Discovery Method': 'Transit Photometry',
                    'Mission': 'TESS (Transiting Exoplanet Survey Satellite)'
                }
            },
            'mars-water': {
                title: 'Water on Mars Discovery',
                date: 'March 8, 2024',
                description: 'The Perseverance rover has discovered new evidence of liquid water beneath the Martian surface, suggesting the possibility of current microbial life on Mars.',
                details: {
                    'Location': 'Jezero Crater',
                    'Depth': 'Approximately 10 meters below surface',
                    'Temperature': 'Stable at -10°C',
                    'Salinity': 'Similar to Earth\'s oceans',
                    'Discovery Method': 'Ground-penetrating radar',
                    'Significance': 'First direct evidence of current liquid water on Mars',
                    'Next Steps': 'Further analysis of water chemistry'
                }
            }
        };

        showModal(discoveries[discoveryId]);
    }

    function showFactDetails(factId) {
        const facts = {
            'black-hole': {
                title: 'Black Hole Facts',
                description: 'Black holes are among the most fascinating and mysterious objects in the universe. Here are some incredible facts about them:',
                details: {
                    'Fastest Spin': '1,000 rotations per second',
                    'Largest Known': 'TON 618 (66 billion solar masses)',
                    'Closest to Earth': 'Gaia BH1 (1,560 light-years)',
                    'Temperature': 'Near absolute zero (-273.15°C)',
                    'Event Horizon': 'Point of no return for matter and light',
                    'Time Dilation': 'Time runs slower near black holes',
                    'Formation': 'Result of massive star collapse',
                    'Detection': 'Through gravitational effects and radiation'
                }
            },
            'galaxy-formation': {
                title: 'Galaxy Formation Facts',
                description: 'Our understanding of galaxy formation has evolved significantly in recent years. Here are some fascinating facts about how galaxies form and evolve:',
                details: {
                    'Milky Way Age': 'Approximately 13.6 billion years',
                    'Andromeda Collision': 'Expected in 4.5 billion years',
                    'Galaxy Types': 'Spiral, Elliptical, Irregular',
                    'Dark Matter': 'Makes up 85% of galaxy mass',
                    'Star Formation': 'Ongoing process in spiral arms',
                    'Supermassive Black Holes': 'Found in most galaxy centers',
                    'Galaxy Clusters': 'Largest gravitationally bound structures'
                }
            }
        };

        showModal(facts[factId]);
    }

    function showModal(data) {
        // Create modal container
        const modal = document.createElement('div');
        modal.className = 'modal';
        
        // Create modal content
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        
        // Add close button
        const closeButton = document.createElement('span');
        closeButton.className = 'close-button';
        closeButton.innerHTML = '&times;';
        closeButton.onclick = () => modal.remove();
        
        // Add title
        const title = document.createElement('h2');
        title.textContent = data.title;
        
        // Add date if exists
        let date = '';
        if (data.date) {
            date = `<div class="modal-date">${data.date}</div>`;
        }
        
        // Add description
        const description = document.createElement('p');
        description.className = 'modal-description';
        description.textContent = data.description;
        
        // Add details
        const details = document.createElement('div');
        details.className = 'modal-details';
        
        for (const [key, value] of Object.entries(data.details)) {
            const detailItem = document.createElement('div');
            detailItem.className = 'detail-item';
            detailItem.innerHTML = `
                <span class="detail-label">${key}:</span>
                <span class="detail-value">${value}</span>
            `;
            details.appendChild(detailItem);
        }
        
        // Assemble modal
        modalContent.appendChild(closeButton);
        modalContent.appendChild(title);
        if (date) modalContent.innerHTML += date;
        modalContent.appendChild(description);
        modalContent.appendChild(details);
        modal.appendChild(modalContent);
        
        // Add to document
        document.body.appendChild(modal);
        
        // Add click outside to close
        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };
    }

    // Initialize charts when Analytics section is visible
    const analyticsSection = document.getElementById('analytics');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initializeCharts();
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(analyticsSection);

    // Search functionality
    searchButton.addEventListener('click', searchCosmicInfo);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchCosmicInfo();
        }
    });

    function searchCosmicInfo() {
        const query = searchInput.value.trim();
        if (query) {
            fetch('/api/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query: query })
            })
            .then(response => response.json())
            .then(data => {
                updateContent(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    }

    function updateContent(data) {
        if (data.events) eventsContent.textContent = data.events;
        if (data.discoveries) discoveriesContent.textContent = data.discoveries;
        if (data.facts) factsContent.textContent = data.facts;
    }

    // Ensure video plays
    bgVideo.play().catch(error => {
        console.log('Video autoplay failed:', error);
        // Try to play video on user interaction
        document.addEventListener('click', () => {
            bgVideo.play().catch(e => console.log('Video play failed:', e));
        }, { once: true });
    });

    // Cosmic Chat Functionality
    const chatInput = document.querySelector('.chat-input');
    const sendButton = document.querySelector('.send-button');
    const chatMessages = document.querySelector('.chat-messages');

    function addMessage(content, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user' : 'assistant'}`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.innerHTML = `<p>${content}</p>`;
        
        const messageTime = document.createElement('div');
        messageTime.className = 'message-time';
        messageTime.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        messageDiv.appendChild(messageContent);
        messageDiv.appendChild(messageTime);
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function handleUserMessage(message) {
        addMessage(message, true);
        
        // Simulate typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'message assistant typing';
        typingIndicator.innerHTML = '<div class="message-content"><p>Typing...</p></div>';
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Simulate response delay
        setTimeout(() => {
            typingIndicator.remove();
            
            // Generate response based on message content
            let response = generateResponse(message);
            addMessage(response);
        }, 1500);
    }

    function generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('eclipse') || lowerMessage.includes('solar')) {
            return "The next solar eclipse will occur on March 14, 2025. It will be visible across Europe and Asia, with the path of totality stretching from Spain through Turkey and into Russia. Make sure to use proper eye protection when viewing!";
        } else if (lowerMessage.includes('meteor') || lowerMessage.includes('shower')) {
            return "The Lyrid meteor shower peaks on April 22, 2025. It's best viewed in the early morning hours away from city lights. This year's shower coincides with a new moon, making it particularly spectacular with minimal moonlight interference. You can expect to see about 15-20 meteors per hour!";
        } else if (lowerMessage.includes('planet') || lowerMessage.includes('alignment')) {
            return "On September 29, 2025, Venus, Mars, and Jupiter will align in the morning sky. This is a great opportunity for planetary observation! The planets will be visible just before sunrise in the eastern sky.";
        } else if (lowerMessage.includes('lunar') || lowerMessage.includes('moon')) {
            return "The next total lunar eclipse will occur on September 7, 2025. It will be visible across the Americas, Europe, and Africa. During this event, the Moon will pass through Earth's shadow, creating a stunning 'blood moon' effect visible to the naked eye.";
        } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return "Hello! I'm here to help you explore cosmic events in 2025. You can ask me about upcoming eclipses, meteor showers, planetary alignments, or lunar events!";
        } else {
            return "I'm not sure about that specific event. You can ask me about upcoming solar eclipses (March 14, 2025), meteor showers (April 22, 2025), planetary alignments (September 29, 2025), or lunar eclipses (September 7, 2025)!";
        }
    }

    sendButton.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            handleUserMessage(message);
            chatInput.value = '';
        }
    });

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const message = chatInput.value.trim();
            if (message) {
                handleUserMessage(message);
                chatInput.value = '';
            }
        }
    });

    // User Management
    let currentUser = null;

    // Modal Functions
    function showLoginModal() {
        document.getElementById('loginModal').style.display = 'block';
    }

    function closeLoginModal() {
        document.getElementById('loginModal').style.display = 'none';
    }

    function showSignupModal() {
        closeLoginModal();
        document.getElementById('signupModal').style.display = 'block';
    }

    function closeSignupModal() {
        document.getElementById('signupModal').style.display = 'none';
    }

    function showForgotPasswordModal() {
        // Implement forgot password functionality
        alert('Forgot password functionality coming soon!');
    }

    // Form Handlers
    function handleLogin(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // In a real application, you would send this to your backend
        // For now, we'll use a simple mock authentication
        if (username && password) {
            currentUser = {
                username: username,
                avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`
            };
            updateUserProfile();
            closeLoginModal();
            showNotification('Login successful!');
        } else {
            showNotification('Please enter both username and password', 'error');
        }
    }

    function handleSignup(event) {
        event.preventDefault();
        const userData = {
            username: document.getElementById('signupUsername').value,
            email: document.getElementById('signupEmail').value,
            college: document.getElementById('college').value,
            age: document.getElementById('age').value,
            gender: document.getElementById('gender').value,
            fascination: document.getElementById('fascination').value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };

        // Store user data in Firestore
        const db = firebase.firestore();
        const user = firebase.auth().currentUser;

        if (user) {
            db.collection('users').doc(user.uid).set(userData)
                .then(() => {
                    updateUserProfile(userData);
                    closeSignupModal();
                    showNotification('Account created successfully!');
                })
                .catch((error) => {
                    console.error('Error saving user data:', error);
                    showNotification('Error saving user data', 'error');
                });
        }
    }

    function updateUserProfile(userData) {
        const userProfile = document.getElementById('userProfile');
        if (userData) {
            userProfile.innerHTML = `
                <img src="${userData.photoURL || 'https://via.placeholder.com/40'}" alt="${userData.username}">
                <span>${userData.username}</span>
                <button class="login-button" onclick="showProfileModal()">Profile</button>
            `;
        } else {
            userProfile.innerHTML = `
                <img src="https://via.placeholder.com/40" alt="Guest">
                <span>Guest</span>
                <button class="login-button" onclick="showLoginModal()">Login</button>
            `;
        }
    }

    function handleLogout() {
        currentUser = null;
        updateUserProfile();
        showNotification('Logged out successfully');
    }

    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Close modals when clicking outside
    window.onclick = function(event) {
        if (event.target.className === 'modal') {
            event.target.style.display = 'none';
        }
    }

    // Initialize user profile
    updateUserProfile();

    // Firebase configuration
    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Google Authentication
    function handleGoogleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                // Check if user exists in database
                checkUserExists(user.uid, user.email);
            })
            .catch((error) => {
                console.error('Google login error:', error);
                showNotification('Login failed. Please try again.', 'error');
            });
    }

    function checkUserExists(uid, email) {
        const db = firebase.firestore();
        db.collection('users').doc(uid).get()
            .then((doc) => {
                if (doc.exists) {
                    // User exists, update profile
                    updateUserProfile(doc.data());
                } else {
                    // New user, show signup form with pre-filled email
                    closeLoginModal();
                    showSignupModal();
                    document.getElementById('signupEmail').value = email;
                }
            })
            .catch((error) => {
                console.error('Error checking user:', error);
                showNotification('Error checking user data', 'error');
            });
    }

    function showProfileModal() {
        const user = firebase.auth().currentUser;
        if (user) {
            const db = firebase.firestore();
            db.collection('users').doc(user.uid).get()
                .then((doc) => {
                    if (doc.exists) {
                        const userData = doc.data();
                        const profileContent = document.getElementById('profileContent');
                        profileContent.innerHTML = `
                            <div class="profile-info">
                                <h3>Personal Information</h3>
                                <p><strong>Username:</strong> ${userData.username}</p>
                                <p><strong>Email:</strong> ${user.email}</p>
                                <p><strong>College:</strong> ${userData.college}</p>
                                <p><strong>Age:</strong> ${userData.age}</p>
                                <p><strong>Gender:</strong> ${userData.gender}</p>
                            </div>
                            <div class="profile-info">
                                <h3>Space Interest</h3>
                                <p>${userData.fascination}</p>
                            </div>
                        `;
                        document.getElementById('profileModal').style.display = 'block';
                    }
                })
                .catch((error) => {
                    console.error('Error fetching user data:', error);
                    showNotification('Error loading profile', 'error');
                });
        }
    }

    function closeProfileModal() {
        document.getElementById('profileModal').style.display = 'none';
    }

    function showEditProfile() {
        // Implement edit profile functionality
        showNotification('Edit profile functionality coming soon!');
    }

    function showUserFeedback() {
        // Implement user feedback functionality
        showNotification('Feedback functionality coming soon!');
    }

    // Auth State Listener
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in
            const db = firebase.firestore();
            db.collection('users').doc(user.uid).get()
                .then((doc) => {
                    if (doc.exists) {
                        updateUserProfile(doc.data());
                    }
                });
        } else {
            // User is signed out
            updateUserProfile(null);
        }
    });

    // Event filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const timelineItems = document.querySelectorAll('.timeline-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            timelineItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-type') === filter) {
                    item.style.display = 'flex';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateX(-20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}); 