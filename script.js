const table = document.querySelector(".table");
const tbody = document.querySelector(".tbody");
table.innerHTML = `<thead>
  <th>Time</th>
  <th>Train</th>
  <th>Number</th>
  <th>To</th>
  <th>Status</th>
  <th>Track</th>
</thead>`;

const loadData = async () => {
  table.classList.add("loader");
  const response = await fetch(
    "https://classes.codingbootcamp.cz/assets/classes/api/departures-slow.php"
  );
  const data = await response.json();

  data.forEach((element) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td class="time">${element.time.hrs}:${element.time.mins}</td>
  <td class="name">${element.train}</td>
  <td class="numer">${element.no}</td>
  <td class="to">${element.to}</td>
  <td class="status">${element.status}</td>
  <td class="track">${element.track}</td>
  <td class="btn"><button class="button">Delay</button></td>
`;
    tbody.appendChild(tr);
  });

  table.classList.remove("loader");
  table.appendChild(tbody);
};

loadData();
