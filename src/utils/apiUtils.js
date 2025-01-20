// utils/apiUtils.js
export const checkApiStatus = async (url, successMessage) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.warn(`Failed to fetch ${url}. Status: ${response.status}`);
            return;
        }

        const data = await response.text(); // Use text() if response is plain text
        if (data === 'ok') {
            console.log(successMessage);
        } else {
            console.warn(`Unexpected response from ${url}:`, data);
        }
    } catch (error) {
        console.error(`Error checking API at ${url}:`, error);
    }
};
