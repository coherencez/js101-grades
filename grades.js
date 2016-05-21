var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87],
		scoresLength = scores.length,
		fGrade = 0,
		dGrade = 0,
		cGrade = 0,
		bGrade = 0,
		aGrade = 0,
		scoreSort = scores.sort(),
		lowestGrade = scoreSort[0],
		highestGrade = scoreSort[(scoresLength - 1)];


		for (var i = 0; i < scoresLength; i++) {
			if (scores[i] < 61) {
				fGrade += 1;
			} else if (scores[i] > 60 && scores[i] < 71) {
				dGrade += 1;
			} else if (scores[i] > 70 && scores[i] < 81) {
				cGrade += 1;
			} else if (scores[i] > 80 && scores[i] < 91) {
				bGrade += 1;
			} else {
				aGrade += 1;
			}
}

console.log("There are " + fGrade + " F grades");
console.log("There are " + dGrade + " D grades");
console.log("There are " + cGrade + " C grades");
console.log("There are " + bGrade + " B grades");
console.log("There are " + aGrade + " A grades");

console.log("The lowest grade is ", lowestGrade);
console.log("The highest grade is ", highestGrade);



