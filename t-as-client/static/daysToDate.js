daysToDate();
function daysToDate(days){
    var startDate = new Date(1900,0,1),
        processDays = days - 2,
        returnDate = startDate.setDate(startDate.getDate() + processDays);
        returnDate = new Date(returnDate);
    // console.log(formatDate(returnDate));
    return formatDate(returnDate);
};

function formatDate(date){
    var yyyy = date.getFullYear(),
        mm = date.getMonth()+1,
        dd = date.getDate();
        mm = mm > 9? mm: "0"+mm;
        dd = dd > 9? dd: "0"+dd;
    return `${yyyy}/${mm}/${dd}`;
}