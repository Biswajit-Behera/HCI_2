// Data for Watch Time and Courses Sold
const watchTimeData = [1200, 900, 1500, 1100, 950]; // in minutes
const coursesSoldData = [150, 200, 250, 180, 210]; // Number of courses sold

// Labels for courses
const courseLabels = [
  "Constructive AI", 
  "Human-Computer Interaction", 
  "Data Structures & Algorithms", 
  "Database Management System", 
  "Computer Science"
];

// Watch Time Bar Chart
const watchTimeBarChart = new Chart(document.getElementById("watch-time-bar-chart"), {
  type: "bar",
  data: {
    labels: courseLabels,
    datasets: [
      {
        label: "Watch Time (in minutes)",
        data: watchTimeData,
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        tension: 0.4, // Add some animation curve
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Watch Time by Course" },
      datalabels: {
        display: true,
        color: "#fff", // Color of the numbers on the bars
        align: 'end',
        formatter: (value) => value, // Display the actual value on the bar
        font: {
          weight: 'bold',
          size: 14
        },
        animation: {
          duration: 1000,
          easing: 'easeInOutCubic'
        }
      }
    },
    animation: {
      duration: 1500, // Animation duration for bars
      easing: "easeInOutQuad", // Easing type
    }
  }
});

// Courses Sold Bar Chart
const coursesSoldBarChart = new Chart(document.getElementById("courses-sold-bar-chart"), {
  type: "bar",
  data: {
    labels: courseLabels,
    datasets: [
      {
        label: "Courses Sold",
        data: coursesSoldData,
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        tension: 0.4,
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Number of Courses Sold" },
      datalabels: {
        display: true,
        color: "#fff", // Color of the numbers on the bars
        align: 'end',
        formatter: (value) => value, // Display the actual value on the bar
        font: {
          weight: 'bold',
          size: 14
        },
        animation: {
          duration: 1000,
          easing: 'easeInOutCubic'
        }
      }
    },
    animation: {
      duration: 1500, // Animation duration for bars
      easing: "easeInOutQuad", // Easing type
    }
  }
});
