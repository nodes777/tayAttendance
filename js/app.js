

//model
var model = {
    thisStudent: null,
    students: [
        {
            name: "Slappy",
            daysMissed: 0
        }
    ]
};
console.log(model.students[0]);
//octo
var octo = {
    init: function(){
        //model.thisStudent = model.students[0];
        view.init();
    },
    getStudents: function(){
        return model.students;
    },
    incrementDaysMissed: function(){
        model.thisStudent.daysMissed++;
        view.render();
    }
};

var view = {
    init: function(){
       //this.studentTable = document.getElementById("taylorStudent");
       this.render();
    },
    render: function(){
        var tbl = document.createElement('table');
        tbl.style.width = '100%';
        tbl.setAttribute('border', '1');// creates table and styles
        var tbdy = document.createElement('tbody');//creates table body

        var  elem, i, thisStudent, j;// declares variables
        var students = octo.getStudents();//gets students from octo
        //
        var tayTableDiv = document.getElementById("tayTable");

        for(i=0; i<students.length; i++){//for each student
            var tr = document.createElement('tr');//creates a new row for each student
                while(j<12){
                    var td = document.createElement('td');//creates a cell
                    td.appendChild(document.createTextNode('test'));
                    tr.appendChild(td);// add cell to that row
                    j++//until you have 12 cells
                }

        tbdy.appendChild(tr);// add each student row to the table body
        }
        tbl.appendChild(tbdy);//add the table body to the table
        tayTableDiv.appendChild(tbl);//add the table to the tayTableDiv
    }
};


octo.init();
view.render();