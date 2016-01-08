//model
var model = {
    thisStudent: null,
    students: [
        {
            name: "Slappy",
            daysMissed: 0
        },
        {
            name: "Lily",
            daysMissed: 0
        }
    ]
};
console.log(model.students[0]);

var octo = {
    init: function() {
        //model.thisStudent = model.students[0];
        view.init();
    },
    getStudents: function() {
        return model.students;
    },
    incrementDaysMissed: function(thisStudent) {
        model.thisStudent.daysMissed++;
        view.render();
    }
};

var view = {
    init: function() {
        this.render();
    },
    render: function() {
        var tbl = document.createElement('table'); // creates table and styles
        tbl.style.width = '100%';
        tbl.setAttribute('border', '1');
        var tbdy = document.createElement('tbody');

        var students = octo.getStudents(); //gets students from octo
        var tayTableDiv = document.getElementById("tayTable");// gets table div from DOM

        for (var i = 0; i < students.length; i++) { //for each student
            var thisStudent = students[i];
            var tr = document.createElement('tr');
            var studentName = document.createElement('td')
            studentName.appendChild(document.createTextNode(students[i].name));
            tr.appendChild(studentName); //creates a new row for each student
            for (var j = 0; j < 12; j++) { //create the check boxes
                var td = document.createElement('td'); //creates a cell
                var newCheckBox = document.createElement('input');
                newCheckBox.type = 'checkbox';
                td.appendChild(newCheckBox); //add checkbox to cell
                tr.appendChild(td); // add cell to that row
                newCheckBox.addEventListener('click', (function(thisStudent) {//add event listener to each checkbox
                    return function() {
                        octo.incrementDaysMissed(thisStudent);
                    };
                })());
            }
            var daysMissed = document.createElement('td') //creates text for days missed
            daysMissed.appendChild(document.createTextNode(students[i].daysMissed));
            tr.appendChild(daysMissed);
            tbdy.appendChild(tr); // add each student row to the table body
        }

        tbl.appendChild(tbdy); //add the table body to the table
        tayTableDiv.appendChild(tbl); //add the table to the tayTableDiv
    }
}


octo.init();