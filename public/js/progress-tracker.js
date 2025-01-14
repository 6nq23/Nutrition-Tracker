// Initialize empty progress data
const progressData = {
    labels: [], // Dates
    values: []  // Progress values
};

// Get form and chart elements
const progressForm = document.getElementById('progress-form');
const progressChartCtx = document.getElementById('progress-chart').getContext('2d');

// Create the chart
let progressChart = new Chart(progressChartCtx, {
    type: 'line',
    data: {
        labels: progressData.labels,
        datasets: [{
            label: 'Progress Over Time',
            data: progressData.values,
            borderColor: '#007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
            borderWidth: 2,
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Value'
                }
            }
        }
    }
});

// Handle form submission
progressForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const date = document.getElementById('date').value;
    const value = parseFloat(document.getElementById('value').value);

    if (!date || isNaN(value) || value <= 0) {
        alert('Please enter valid date and progress value.');
        return;
    }

    // Add data to progressData
    progressData.labels.push(date);
    progressData.values.push(value);

    // Update the chart
    progressChart.update();

    // Clear form
    progressForm.reset();
});
