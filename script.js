function displayPosition(company, title, jobDescription) {
    console.log(company + ' - ' + title + ' - ' + jobDescription);
}

function displaySkill(skillName, cool) {
    if (cool) {
        console.log('* BAM: ' + skillName);
    } else {
        console.log('* ' + skillName);
    }
}

var name = "Will Hearn";

console.log('Name: ' + name.toUpperCase());
console.log('Career: Aspiring Junior Web Developer');
console.log('Description: Web Design/Development enthusiast, lover of all things music, and future crazy cat guy in training.');
console.log('Interests:');
console.log('* Web Design/Development');
console.log('* Card and board games');
console.log('* Buying way too many CDs and records');
console.log('Past Positions:');

displayPosition('Stonecom Radio', 'Director of Digital and Interactive', 'Maintained company websites and social media accounts, created new company, promotional, and client graphics for web and print use, uploaded new music and new pieces of imaging for on-air use, and produced live broadcasts on four different stations.');
displayPosition('Old Navy', 'Sales Associate', 'Assisted customers with product recommendations, and completed transactions, often times as Head Cashier. Folded clothes and cleaned up displays around the store.');
displayPosition('Bonlife Coffee', 'Barista', 'Created delicious coffee-based beverages for customers ranging from lattes to specialty brewing methods such as the Chemex and Siphon. Often ran the smaller cafe located in the Cleveland Public Library by self despite not being a manager.');

console.log('Skills:');

displaySkill('HTML and CSS', false);
displaySkill('JavaScript and jQuery', false);
displaySkill('German', false);
displaySkill('Miniature Painting', true);
displaySkill('Adobe Photoshop and Illustrator', false);
displaySkill('Radio knowledge', true);
displaySkill('Nunchuck skills', false);
displaySkill('Random (mostly useless) music trivia knowledge', true);
