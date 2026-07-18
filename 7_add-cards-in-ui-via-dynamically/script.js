const form = document.querySelector("form");
const inp1 = document.querySelector("#name");
const inp2 = document.querySelector("#email");
const users = document.querySelector(".users");
const url = document.querySelector("#url");

let usersData = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dob: "1998-04-15",
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya.verma@example.com",
    image: "https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dob: "1996-09-28",
  },
  {
    id: 3,
    name: "Rohan Mehta",
    email: "rohan.mehta@example.com",
    image: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dob: "2000-01-12",
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    email: "sneha.kapoor@example.com",
    image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dob: "1997-07-03",
  },
];

const ui = () => {
  users.innerHTML = "";
  usersData.forEach((elem, index) => {
    users.innerHTML += `<div class="user_card">
              <div class="img_box">
                <img
                  src="${elem.image}"
                  alt="image here"
                />
              </div>
              <div class="text">
                <h3>Name - ${elem.name}</h3>
                <p>Email - ${elem.email}</p>
                <p>DOB - ${elem.dob}</p>
              </div>
              <div class="actions">
          <button id="edit">Edit</button>
          <button onclick="deleteCard(${index})" id="del">Delete</button>
        </div>
            </div>`;
  });
};

ui();

form.addEventListener("submit", (events) => {
  events.preventDefault();
  let name = inp1.value;
  let email = inp2.value;
  let image = url.value;

  if (name.trim() === "" && email.trim() === "" && image.trim() === "") return;

  usersData.push({
    name,
    email,
    image,
  });

  ui();

  form.reset();
});

let deleteCard = (index) => {
  usersData.splice(index, 1)
  ui();
};