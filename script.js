const studentList = [];
const handleOnSubmit = (e) => {
  const formDt = new FormData(e);
  const name = formDt.get("fullname");
  const email = formDt.get("email");
  const status = formDt.get("status");
  const obj = {
    name,
    email,
    status,
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
                    <td class="status">${item.status}</td>
                </tr>
    `;
  });
  document.getElementById("insert-table").innerHTML = str;
};
