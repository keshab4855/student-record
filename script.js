const studentList = [];
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
                </tr>
    `;
  });
  document.getElementById("insert-table").innerHTML = str;
};
