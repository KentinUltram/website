function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
function getYears(start_date,end_date){
    var startDate = new Date(start_date);
    var endDate = new Date();
    if (end_date !==''){
    endDate = new Date(end_date);
    }
    const yearsDifference = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24 * 365.25));
    // console.log(`The difference in years is approximately ${yearsDifference} years.`);
    return yearsDifference;

}