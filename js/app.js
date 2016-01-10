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
        view.init();
    },
    getStudents: function() {
        return model.students;
    },
    incrementDaysMissed: function(thisStudentCopy) {
        model.thisStudent = thisStudentCopy;
        model.thisStudent.daysMissed++;
        var n = model.thisStudent.daysMissed++;//gets all checked boxes. Need just that row's
        model.thisStudent.daysMissed = n;
        view.dayUpdate(n);
    }
};

var view = {
    init: function() {
        this.render();
    },
    dayUpdate: function(){
         var students = octo.getStudents();
         for (var i = 0; i< students.length; i++){
            var daysMissedId = document.getElementById(i);
            daysMissedId.textContent = students[i].daysMissed;
         }


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
            var rowId = "row"+i;
            tr.setAttribute('id', rowId);// gives each row an id with row[i]
            var studentName = document.createElement('td');
            studentName.appendChild(document.createTextNode(students[i].name));
            tr.appendChild(studentName); //creates a new row for each student

                for (var j = 0; j < 12; j++) { //create the check boxes
                    var td = document.createElement('td'); //creates a cell
                    var newCheckBox = document.createElement('input');
                    newCheckBox.type = 'checkbox';
                    td.appendChild(newCheckBox); //add checkbox to cell
                    tr.appendChild(td); // add cell to that row

                    newCheckBox.addEventListener('click', (function(thisStudentCopy) {//add event listener to each checkbox
                        return function() {
                            octo.incrementDaysMissed(thisStudentCopy);
                        };
                    })(thisStudent));//step 1 pass in thisStudent
                }
            var daysMissed = document.createElement('td') //creates text for days missed
            daysMissed.appendChild(document.createTextNode(students[i].daysMissed));
            daysMissed.setAttribute('id', i)
            tr.appendChild(daysMissed);
            tbdy.appendChild(tr); // add each student row to the table body
        }

        tbl.appendChild(tbdy); //add the table body to the table
        tayTableDiv.appendChild(tbl); //add the table to the tayTableDiv
    }
}


octo.init();