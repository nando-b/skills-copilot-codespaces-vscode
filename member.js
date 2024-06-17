function skillsMember(){
    var member = {
        name: 'John Doe',
        age: 30,
        skills: ['js', 'python', 'nodejs'],
        getSkills: function(){
            return this.skills;
        }
    }
    return member;
}