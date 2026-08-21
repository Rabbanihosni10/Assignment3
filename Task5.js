/* Find and fix every bug. Do not change the function name. */
function generateLeaderboard(students) {
    // if (!Array.isArray = students) {
    if (!Array.isArray(students)) {
        return "Invalid";
    }

    // if (students.length == []) {
    if (students.length === 0) {
        return "Invalid";
    }

    for (const student of students) {
        if (student === null || typeof student !== "object") {
            return "Invalid";
        }
        if (!("name" in student) || !("score" in student)) {
            return "Invalid";
        }
        if (typeof student.score !== "number" || Number.isNaN(student.score)) {
            return "Invalid";
        }
    }

    const qualified = students.filter(student =>
        // student.score > 70;
        student.score >= 70);

    const names = qualified.map(({ name }) => {
        // name.toUpperCase();
        return name.toUpperCase();
    });

    return names.slice(0, 3);
}

console.log(generateLeaderboard([{name:"Rafi",score:90},{name:"Sadia",score:65},{name:"Karim",score:85},{name:"Nafis",score:75}]))
