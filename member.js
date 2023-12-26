function skillsMember() {
    var skills = ['HTML', 'CSS', 'JS', 'PHP'];
    var member = {
        name: 'Nguyen Van A',
        age: 20,
        skills: skills
    };
    console.log(member.skills);
    console.log(member['skills']);
    console.log(member.skills[0]);
    console.log(member.skills[1]);
    console.log(member.skills[2]);
    console.log(member.skills[3]);
}