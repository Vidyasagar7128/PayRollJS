const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const years = [2015, 2016, 2017, 2018, 2019, 2020]
var employees = [];
class Employee {

    _id;
    _name;
    _profilePic;
    _gender;
    _department;
    _salary;
    _note;
    _startDate;

    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (nameRegex.test(name)) this._name = name;
        else throw "Name is Incorrect!";
    }

    get profilePic() {
        return this._profilePic;
    }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }

    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }

    get department() {
        return this._department;
    }
    set department(department) {
        this._department = department;
    }

    get salary() {
        return this._salary;
    }
    set salary(salary) {
        this._salary = salary;
    }

    get note() {
        return this._note;
    }
    set note(note) {
        this._note = note;
    }

    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        this._startDate = startDate;
    }
}
function Days() {
    var dayOfMonths = document.getElementById('day');
    for (var i = 1; i < 32; i++) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        dayOfMonths.appendChild(opt);
    }
}
function Months() {
    var monthsOfYear = document.getElementById("months");
    for (let i = 0; i < months.length; i++) {
        var opt = document.createElement('option');
        opt.value = months[i];
        opt.innerHTML = months[i];
        monthsOfYear.appendChild(opt);
    }
}
function Years() {
    var year = document.getElementById("years");
    for (let i = 0; i < years.length; i++) {
        var opt = document.createElement('option');
        opt.value = years[i];
        opt.innerHTML = years[i]
        year.appendChild(opt)
    }
}
function Save(e) {
    e.preventDefault();
    var data = new FormData(e.target)
    console.log(data.values);
}
// function Save() {
//     var employee = new Employee();
//     employee.name = document.getElementById('name').value;
//     employee.image = document.getElementsByName('profile').value;
//     var select = document.getElementById('day');
//     var val = select.options[select.selectedIndex].value;
//     console.log(`${employee.name} ${select}`);
//     return false;
// }