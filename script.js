const inputName = document.querySelector(".name-input");

const inputEmail = document.getElementById("exampleInputEmail2");

let studentsArr = [];

const submitHandler = (e) => {
  display();
};
const display = () => {
  // const nameVal = inputName.value;
  // const emailVal = inputEmail.value;
  // document.querySelector(".name").innerHTML = nameVal;
  // document.querySelector(".email").innerHTML = emailVal;
  let str = "";
  studentsArr.map(() => {
    str += `

                    <th scope="row">1</th>
                    <td class="name">Mark</td>
                    <td class="email">mark123@gamil.com</td>
                    <td class="status">Present</td>
              
  `;
  });
  document.querySelector(".students-details").innerHTML = str;
};
