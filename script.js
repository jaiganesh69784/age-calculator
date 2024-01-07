function calculateFunAge() {
    const birthdate = document.getElementById("birthdate").value;
    const resultElement = document.getElementById("result");

    if (birthdate) {
        const today = new Date();
        const birthDate = new Date(birthdate);

        let ageYears = today.getFullYear() - birthDate.getFullYear();
        let ageMonths = today.getMonth() - birthDate.getMonth();
        let ageDays = today.getDate() - birthDate.getDate();

        if (ageDays < 0) {
            ageMonths--;
            ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }

        resultElement.innerHTML = `You're <span class="green">${ageYears} years, ${ageMonths} months, and ${ageDays} days old!</span> 🎉`;
    } else {
        resultElement.innerHTML = "Hey there! Don't forget to input your BIRTH date! <span class='red'></span>";
    }
}