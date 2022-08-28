class Student{
    constructor(firstName, lastName, age, rollNo){
        this.firstName = firstName;
        this.lastName  = lastName;
        this.age       = age;
        this.rollNo    = rollNo;

    }
    
    setFirstName(newFirstName) {
        if (newFirstName === '') {
            throw 'The first name cannot be empty';
        }
        this.firstName = newFirstName;
    }
    setLastName(newLastName) {
        if (newLastName === '') {
            throw 'The last name cannot be empty';
        }
        this.lastName = newLastName;
    }
    setAge(newAge) {
        if (newAge === '') {
            throw 'The age cannot be empty';
        }
        this.age = newAge;
    }
    setrollNo(newrollNo) {
        if (newrollNo === '') {
            throw 'The roll no. cannot be empty';
        }
        this.rollNo = newrollNo;
    }

    getFirstName(){
        return this.firstName;
    }
    getLastName(){
        return this.lastName;
    }
    getAge(){
        return this.age;
    }
    getrollNo(){
        return this.rollNo;
    }


}

var s1 = new Student();

s1.setFirstName('Tanvi');
s1.setLastName('Radia');
s1.setAge(20);
s1.setrollNo('20CS067');

console.log('getter for first name '+s1.getFirstName());
console.log('getter for last name '+s1.getLastName());
console.log('getter for age '+s1.getAge());
console.log('getter for roll no. '+s1.getrollNo());
console.log('\n ');
console.log('\n ');
console.log('20CS067_Tanvi Radia');
console.log('\n ');
console.log('\n ');

