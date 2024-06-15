function fetchResults() {
    const regNumber = document.getElementById('reg-number').value;
    const resultsDisplay = document.getElementById('resultsDisplay');

    // Simulating fetching results from a server or database
    const mockResults = {
        "12345": {
            "name": "Omkar Padashetty",
            "photo": "omkar.jpg", // Ensure the path is correct and the image is in the right directory
            "scores": {"Math": 85, "Science": 90, "English": 88}
        },
        "67890": {
            "name": "Jane Smith",
            "photo": "jane_smith.jpg", // Ensure the path is correct and the image is in the right directory
            "scores": {"Math": 78, "Science": 82, "English": 80}
        },
        // Add more mock results as needed
    };

    resultsDisplay.innerHTML = ''; // Clear previous results

    if (mockResults[regNumber]) {
        const student = mockResults[regNumber];
        const results = student.scores;
        let table = '<table>';
        table += `<tr><th colspan="2" style="font-weight: bold; font-size: 1.5em;">Results for <span style="font-weight: bold;">${student.name}</span> (Reg No: <span style="font-weight: bold;">${regNumber}</span>)</th></tr>`;
        table += `<tr><td colspan="2" style="text-align: center; padding: 10px;"><img src="${student.photo}" alt="${student.name}'s photo" style="width:100px;height:100px;border-radius:50%;"></td></tr>`;
        table += '<tr><th style="color: red; text-align: left;">Subject</th><th style="color: blue; text-align: left;">Score</th></tr>';
        for (const subject in results) {
            table += `<tr><td style="color: red;">${subject}</td><td style="color: blue;">${results[subject]}</td></tr>`;
        }
        table += '</table>';
        resultsDisplay.innerHTML = table;
    } else {
        resultsDisplay.textContent = "No results found for this registration number.";
    }
    
}
