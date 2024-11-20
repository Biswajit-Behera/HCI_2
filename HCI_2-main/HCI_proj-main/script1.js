// Data for student marks
const studentMarks = {
    labels: ["Constructive AI", "HCI", "DSA", "DBMS", "Computer Science"],
    marks: [85, 90, 78, 88, 92],
  };
  
  // Bar Chart
  const barCtx = document.getElementById("barChart").getContext("2d");
  new Chart(barCtx, {
    type: "bar",
    data: {
      labels: studentMarks.labels,
      datasets: [
        {
          label: "Marks",
          data: studentMarks.marks,
          backgroundColor: [
            "rgba(75, 192, 192, 0.6)",
            "rgba(255, 99, 132, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(153, 102, 255, 0.6)",
          ],
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Marks",
          },
        },
        x: {
          title: {
            display: true,
            text: "Subjects",
          },
        },
      },
      animation: {
        duration: 2000, // Animation duration in milliseconds
      },
    },
  });
  
  // Pie Chart
  const pieCtx = document.getElementById("pieChart").getContext("2d");
  new Chart(pieCtx, {
    type: "pie",
    data: {
      labels: studentMarks.labels,
      datasets: [
        {
          data: studentMarks.marks,
          backgroundColor: [
            "rgba(75, 192, 192, 0.6)",
            "rgba(255, 99, 132, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(153, 102, 255, 0.6)",
          ],
          borderColor: "#fff",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
      animation: {
        animateScale: true,
        animateRotate: true,
        duration: 2000,
      },
    },
  });
  