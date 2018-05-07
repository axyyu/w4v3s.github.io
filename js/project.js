$(document).ready(function(){
    setupProjectChart();
});

function setupProjectChart(){
    var ctx = document.getElementById("progress");
    let per = parseInt($("#progress").attr("perc"));
    console.log($("#progress").attr("perc"));
    console.log(per);
    let data = {
        datasets: [{
            data: [per, 100-per]
        }],
        labels: [
            'Completed',
            'Remaining'
        ]
    };
    let options = {};
    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });
}