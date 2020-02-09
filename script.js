const data = [
  {
    string: '"[DESIGN] Design user flow sketches", admin, admin, Task, ',
    estimatedMin: 30
  },
  {
    string: '"[DESIGN] Design low-fi user flow wireframes", admin, admin, Task, ',
    estimatedMin: 30
  },
  {
    string: '"[DESIGN] Design a mood board", admin, admin, Task, ',
    estimatedMin: 10
  },
  {
    string: '"[DESIGN] Design hi-fi user flow wireframes", admin, admin, Task, ',
    estimatedMin: 90
  },
  {
    string: '"[DEV] Create a Vue project with Vue CLI (ifunded)", admin, admin, Task, ',
    estimatedMin: 5
  },
  {
    string: '"[DEV] Install Vuex", admin, admin, Task, ',
    estimatedMin: 30
  },
  {
    string: '"[DEV] Connect the app with Reqres REST API /GET to access users data", admin, admin, Task, ',
    estimatedMin: 30
  },
  {
    string: '"[DEV] Feed users list into global data source", admin, admin, Task, ',
    estimatedMin: 30
  },
  {
    string: '"[DEV] Display raw data on the page", admin, admin, Task, ',
    estimatedMin: 10
  },
  {
    string: '"[DEV] Build the users list surrounding elements with style", admin, admin, Task, ',
    estimatedMin: 90
  },
  {
    string: '"[DEV] Build filters with style", admin, admin, Task, ',
    estimatedMin: 60
  },
  {
    string: '"[DEV] Build sorters with style", admin, admin, Task, ',
    estimatedMin: 60
  },
  {
    string: '"[DEV] Build the users list with style", admin, admin, Task, ',
    estimatedMin: 60
  },
  {
    string: '"[DEV] Build edit user action trigger", admin, admin, Task, ',
    estimatedMin: 15
  },
  {
    string: '"[DEV] Build edit user modal", admin, admin, Task, ',
    estimatedMin: 20
  },
  {
    string: '"[DEV] Build edit user validation", admin, admin, Task, ',
    estimatedMin: 30
  },
  {
    string: '"[DEV] Build edit user /PUT request", admin, admin, Task, ',
    estimatedMin: 30
  },
  {
    string: '"[DEV] Build edit user feedback (snack bar)", admin, admin, Task, ',
    estimatedMin: 30
  },
  {
    string: '"[DEV] Build add user action trigger", admin, admin, Task, ',
    estimatedMin: 15
  },
  {
    string: '"[DEV] Build add user modal", admin, admin, Task, ',
    estimatedMin: 20
  },
  {
    string: '"[DEV] Build add user validation", admin, admin, Task, ',
    estimatedMin: 30
  },
  {
    string: '"[DEV] Build add user /POST request", admin, admin, Task, ',
    estimatedMin: 30
  },
  {
    string: '"[DEV] Build add user feedback (snack bar)", admin, admin, Task, ',
    estimatedMin: 10
  },
  {
    string: '"[DEV] Test REST API Connection for /GET", admin, admin, Task, ',
    estimatedMin: 60
  },
  {
    string: '"[DEV] Test REST API Connection for /PUT", admin, admin, Task, ',
    estimatedMin: 60
  },
  {
    string: '"[DEV] Test REST API Connection for /POST", admin, admin, Task, ',
    estimatedMin: 60
  },
  {
    string: '"[DEV] Test container snapshots", admin, admin, Task, ',
    estimatedMin: 10
  },
  {
    string: '"[DEV] Test components snapshots", admin, admin, Task, ',
    estimatedMin: 10
  },
  {
    string: '"[DEV] Test the filtering feature", admin, admin, Task, ',
    estimatedMin: 60
  },
  {
    string: '"[DEV] Test the sorting feature", admin, admin, Task, ',
    estimatedMin: 60
  },
  {
    string: '"[DEV] Test that modal opens", admin, admin, Task, ',
    estimatedMin: 30
  },
  {
    string: '"[DEV] Test that users can be edited", admin, admin, Task, ',
    estimatedMin: 60
  },
  {
    string: '"[DEV] Test that users editing are validated", admin, admin, Task, ',
    estimatedMin: 60
  },
  {
    string: '"[DEV] Test that after user is edited, snack bar is triggered", admin, admin, Task, ',
    estimatedMin: 20
  },
  {
    string: '"[DEV] Test that users can be created", admin, admin, Task, ',
    estimatedMin: 60
  },
  {
    string: '"[DEV] Test that users creation are validated", admin, admin, Task, ',
    estimatedMin: 60
  },
  {
    string: '"[DEV] Test that after user is created, snack bar is triggered", admin, admin, Task, ',
    estimatedMin: 20
  }
];

const tickets = data.map((e) => {
  const estimatedSec = e.estimatedMin * 60;
  const line = e.string + estimatedSec;
  return line;
});

tickets.forEach((e) => {
  const node = document.createElement("span");
  const textnode = document.createTextNode(e);
  node.appendChild(textnode);
  document.getElementById("content").appendChild(node); 
});
