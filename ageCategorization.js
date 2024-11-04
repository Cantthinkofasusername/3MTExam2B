function ageCategorization() {
    age = prompt("How old are you?")
        if (age < 5) {
            alert("Toddler");
        } else if (age >=5 && age <= 12) {
            alert("Child");
        } else if (age >= 13 && age <= 19) {
            alert("Teenager");
        } else if (age >= 20 && age <= 35) {
            alert("Young Adult");
        } else if (age >= 36 && age <= 60) {
            alert("Middle-Aged");
        } else if (age > 60) {
            alert("Senior");
        }
}