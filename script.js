let studentList = [];
let input = document.getElementById("exampleInputEmail1");
// let inputEl = input.value;
let selectedRow = null;

const handleOnSubmit = (e) => {
  const formDt = new FormData(e);
  const name = formDt.get("fullname");
  const email = formDt.get("email");
  const number = +formDt.get("number");
  const studentNumber = +formDt.get("student-number");
  const obj = {
    name,
    email,
    number,
    studentNumber,
  };
  studentList.push(obj);
  display(studentList);
};

const display = (studentArr) => {
  let str = "";
  studentArr.map((item, i) => {
    str += `
      <tr class="students-details">
                    <th scope="row">${i}</th>
                    <td class="name">${item.name}</td>
                    <td class="email">${item.email}</td>
                    <td class="status">${item.number}</td>
                    <td class="status">${item.studentNumber}</td>
                    <td class="buttons"><button class="btn  btn-primary" onclick =(onEdit()) ><i class="fa-solid fa-pen-to-square"></i></button><button onclick=(onDeleteHandler(${i})) class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> </button> </td>
                  
                    
                </tr>
    `;
  });
  document.getElementById("insert-table").innerHTML = str;
};

const onDeleteHandler = (i) => {
  const filteredArr = studentList.filter((item, index) => i !== index);
  console.log(filteredArr);

  studentList = filteredArr;
  display(studentList);
};

const handleOnSearch = (e) => {
  const str = e.value;
  const selectedStudents = studentList.filter((student) => {
    console.log(student);
    const name = student.name;
    console.log(`name: ${name}`);
    return name.toLocaleLowerCase().includes(str.toLocaleLowerCase());
  });
  console.log(selectedStudents);
  display(selectedStudents);
};
