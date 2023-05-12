let grade;

function Grade(grade) {
	grade = prompt("Enter grade: ")

	switch (true) {
		case (grade <= 70): 
			console.log("Your grade is " + grade + ", which is equivalent to letter F.");
			break;
		case (grade >= 71 && grade < 80): 
			console.log("Your grade is " + grade + ", which is equivalent to letter C.");
			break;
		case (grade >= 80 && grade < 90): 
			console.log("Your grade is " + grade + ", which is equivalent to letter B.");
			break;
		case (grade >= 90 && grade < 101): 
			console.log("Your grade is " + grade + ", which is equivalent to letter A.");
			break;
	}
}

Grade(grade);