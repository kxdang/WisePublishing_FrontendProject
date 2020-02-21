const form = document.getElementById("submit");

// const email = document.getElementById;

const formSubmit = e => {
  e.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const homeOwner = document.getElementById("homeOwnerYes").checked;
  const buyingWhen = document.getElementById("buyingWhen").value;

  console.log(buyingWhen);

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      //   title: "foo",
      //   body: "bar",
      //   userId: 1
      firstName,
      lastName,
      email,
      homeOwner
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(json => console.log(json));
};

form.addEventListener("click", formSubmit);
