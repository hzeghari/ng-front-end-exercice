let users = [
    {
      id: "123456789",
      createdDate: "2021-01-06T00:00:00.000Z",
      status: "En validation",
      firstName: "Mohamed",
      lastName: "Taha",
      userName: "mtaha",
      registrationNumber: "2584",
    },
    {
      id: "987654321",
      createdDate: "2021-07-25T00:00:00.000Z",
      status: "Validé",
      firstName: "Hamid",
      lastName: "Orrich",
      userName: "horrich",
      registrationNumber: "1594",
    },
    {
      id: "852963741",
      createdDate: "2021-09-15T00:00:00.000Z",
      status: "Rejeté",
      firstName: "Rachid",
      lastName: "Mahidi",
      userName: "rmahidi",
      registrationNumber: "3576",
    }
  
];

console.log("users ::::"+users);

// var datatable = document.querySelector("#datatable");
loadUsers(users);

async function loadUsers(datain) {
  var datatable = await document.getElementById('datatables');

  var listItems = await datain.map((user, index) => {
    return `
    <tr key=${index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
        ${user.id}
    </th>
    <td class="px-6 py-4">
        ${moment(user.createdDate).format('DD/MM/YYYY')}
    </td>
    <td class="px-6 py-4">
        ${user.status === "Validé" ? ` <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-[#5BE881] dark:text-black">${user.status}</span> ` : user.status === "Rejeté" ? ` <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-[#FF0000] dark:text-black">${user.status}</span> ` : user.status === "En validation" ? ` <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-[#FDB64D] dark:text-black">${user.status}</span> ` : ` <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800>Status ??</span> `}
    </td>
    <td class="px-6 py-4">
        ${user.firstName}
    </td>
    <td class="px-6 py-4">
        ${user.lastName}
    </td>
    <td class="px-6 py-4">
        ${user.userName}
    </td>
    <td class="px-6 py-4">
        ${user.registrationNumber}
    </td>
    <td class="px-6 py-4 text-right">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
    </td>
    </tr>`
    ;
    
  });
  console.log("list :::::"+listItems);
  datatable.innerHTML = listItems.join('');


//   for (var i=0; i<datain.length; i++) {
//     var row = `
//     <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//     <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
//         ${datain[i].id}
//     </th>
//     <td class="px-6 py-4">
//         ${moment(datain[i].createdDate).format('DD/MM/YYYY')}
//     </td>
//     <td class="px-6 py-4">
//         ${datain[i].status}
//     </td>
//     <td class="px-6 py-4">
//         ${datain[i].firstName}
//     </td>
//     <td class="px-6 py-4">
//         ${datain[i].lastName}
//     </td>
//     <td class="px-6 py-4">
//         ${datain[i].userName}
//     </td>
//     <td class="px-6 py-4">
//         ${datain[i].registrationNumber}
//     </td>
//     <td class="px-6 py-4 text-right">
//         <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
//     </td>
//     </tr>`;
//     datatable.innerHTML += row;
//   }
}

// log(loadUsers(users));