document.getElementById('calculateBtn').addEventListener('click', calculateCycleTime);

function calculateCycleTime() {
    const wip = document.getElementById('wip').value;
    const throughput = document.getElementById('throughput').value;

    if (wip && throughput && throughput != 0) {
        const cycleTime = wip / throughput;
        document.getElementById('cycleTime').innerText = cycleTime.toFixed(2);
        updateChart(cycleTime);
    } else {
        alert('Please enter valid WIP and Throughput values.');
    }
}

function updateChart(cycleTime) {
    const ctx = document.getElementById('cycleTimeChart').getContext('2d');

    if (window.cycleTimeChart) {
        window.cycleTimeChart.destroy();
    }

    window.cycleTimeChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Cycle Time'],
            datasets: [{
                label: 'Cycle Time (in days)',
                data: [cycleTime],
                backgroundColor: 'rgba(0, 123, 255, 0.5)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Include Chart.js library
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
document.head.appendChild(script);
