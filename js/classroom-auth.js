/**
 * Classroom Management Authentication
 * Handles instructor authentication via card swipe
 */

(function() {
    'use strict';

    // Instructor card data - the part between ^ symbols: REED/BOBBY
    const INSTRUCTOR_CARD_PATTERN = 'REED/BOBBY';
    const AUTH_KEY = 'classroom_auth';
    const AUTH_TIMEOUT = 8 * 60 * 60 * 1000; // 8 hours in milliseconds

    /**
     * Parse card swipe data to extract name
     */
    function parseCardData(rawData) {
        const match = rawData.match(/\^([^\/]+)\/([^\^]+)\^/);
        if (match) {
            const lastName = match[1].trim();
            const firstName = match[2].trim();
            return `${lastName}/${firstName}`;
        }
        return null;
    }

    /**
     * Check if user is authenticated
     */
    function isAuthenticated() {
        const authData = sessionStorage.getItem(AUTH_KEY);
        if (!authData) return false;

        try {
            const data = JSON.parse(authData);
            const now = Date.now();

            // Check if auth is expired
            if (now - data.timestamp > AUTH_TIMEOUT) {
                sessionStorage.removeItem(AUTH_KEY);
                return false;
            }

            return data.authenticated === true;
        } catch (e) {
            return false;
        }
    }

    /**
     * Authenticate with card swipe
     */
    function authenticate(cardData) {
        const parsed = parseCardData(cardData);

        if (parsed === INSTRUCTOR_CARD_PATTERN) {
            sessionStorage.setItem(AUTH_KEY, JSON.stringify({
                authenticated: true,
                timestamp: Date.now(),
                instructor: 'Bobby Reed'
            }));
            return true;
        }

        return false;
    }

    /**
     * Logout
     */
    function logout() {
        sessionStorage.removeItem(AUTH_KEY);
    }

    /**
     * Initialize authentication UI
     */
    function initAuthUI(options = {}) {
        const {
            onSuccess = () => {},
            pageName = 'Page'
        } = options;

        // Check if already authenticated
        if (isAuthenticated()) {
            onSuccess();
            return;
        }

        // Create auth overlay
        const overlay = document.createElement('div');
        overlay.id = 'auth-overlay';
        overlay.innerHTML = `
            <style>
                #auth-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.95);
                    z-index: 10000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                #auth-card {
                    background: linear-gradient(135deg, #00447c 0%, #003057 100%);
                    padding: 50px;
                    border-radius: 15px;
                    box-shadow: 0 10px 50px rgba(0, 191, 223, 0.3);
                    text-align: center;
                    max-width: 500px;
                    color: white;
                }

                #auth-card h2 {
                    font-size: 2em;
                    margin-bottom: 20px;
                    color: white;
                }

                #auth-card p {
                    font-size: 1.2em;
                    margin-bottom: 30px;
                    opacity: 0.9;
                }

                .auth-icon {
                    font-size: 4em;
                    margin-bottom: 20px;
                    animation: pulse 2s infinite;
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.7; transform: scale(1.05); }
                }

                #auth-status {
                    margin-top: 20px;
                    padding: 10px;
                    border-radius: 5px;
                    font-weight: bold;
                    display: none;
                }

                #auth-status.error {
                    background: rgba(220, 53, 69, 0.3);
                    border: 2px solid #dc3545;
                    display: block;
                }

                #auth-status.success {
                    background: rgba(40, 167, 69, 0.3);
                    border: 2px solid #28a745;
                    display: block;
                }

                #auth-input {
                    position: absolute;
                    left: -9999px;
                }
            </style>

            <div id="auth-card">
                <div class="auth-icon">🔒</div>
                <h2>Instructor Authentication Required</h2>
                <p>Please swipe your instructor ID card to access ${pageName}</p>
                <p style="font-size: 0.9em; opacity: 0.7;">This page is locked for security</p>
                <input type="text" id="auth-input" autocomplete="off">
                <div id="auth-status"></div>
            </div>
        `;

        document.body.appendChild(overlay);

        const input = document.getElementById('auth-input');
        const status = document.getElementById('auth-status');

        // Focus the input
        input.focus();
        setInterval(() => {
            if (document.activeElement !== input && overlay.parentNode) {
                input.focus();
            }
        }, 500);

        // Handle card swipe
        input.addEventListener('input', (e) => {
            const value = e.target.value;

            // Card data ends with ?
            if (value.includes('?')) {
                const success = authenticate(value);

                if (success) {
                    status.textContent = '✓ Authentication successful!';
                    status.className = 'success';

                    setTimeout(() => {
                        overlay.remove();
                        onSuccess();
                    }, 500);
                } else {
                    status.textContent = '✗ Invalid instructor card. Please try again.';
                    status.className = 'error';

                    setTimeout(() => {
                        status.style.display = 'none';
                    }, 3000);
                }

                input.value = '';
            }
        });
    }

    // Export to window
    window.ClassroomAuth = {
        isAuthenticated,
        authenticate,
        logout,
        initAuthUI
    };
})();
