const birth_date = document.getElementById('birth_date');
birth_date.addEventListener('change', handleBirth);

function handleBirth() {
    let birth = new Date(birth_date.value);
    let date = new Date();

    let age = date.getFullYear() - birth.getFullYear();
    if (date.getMonth() >= birth.getMonth() && date.getDay() >= birth.getDay()) {
        --age;
    }
    if (age > 18) {
        let day = getDayOfWeek(birth);
        alert(`Your age is ${age}, you were born on ${day}`)
    }
    else {
        alert('You need adults!!!')
    }
}

function getDayOfWeek(date) {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayIndex = date.getDay();

  return daysOfWeek[dayIndex];
}