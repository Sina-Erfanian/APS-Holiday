// localStorage vs cookies vs session

// all three of them being stored on the users actual browser that they are using
// like chrome , firefox , ...
// this is really meant for storing information related to a single user and its not important if this information get lost for example since the user can always delete any of their at any time


//local storage and session storage are very similar in how they interact while cookies are almost completely different than the other two and are also older than other two

//cookies can store only a much smaller amount of information  the capacity here is 4kb

// local storage capacity : 10mb 
// session storage capacity : 5mb

// cookies support in older browsers

// cookies and local storage are available for any window inside the browser
// so if you have google chrome open on one tab or another tab the cookies are going to be available on all the different tabs that you have open to that website while session storage is only available in the single tab that you have open that you set it in so it won't be available if they open another tab and go to your website


// expires => cookies : manually set ,  local storage : never , session : on tab close

// storage location => local storage and session are stored in browser but cookies while they are stored in the browser they are sent to this server every time a user request something from the server the cookies get sent along with the request 

// which is why they have a much smaller capacity because all the information in the cookies gets sent to the server



// example 

// local storage

// localStorage.setItem("name","sina")

// console.log(localStorage.getItem("name"));

// localStorage.removeItem("name")


// session storage 

// sessionStorage.setItem("age","22")

// console.log(sessionStorage.getItem("age"));

// sessionStorage.removeItem("age")

// notice : we can overrides the item look at example below

// sessionStorage.setItem("name","sina")
// sessionStorage.setItem("name","ali")



// cookies

// document.cookie = "name = sina"
// document.cookie = "age = 20"

// let username = prompt("enter your name")

// document.cookie = `name = ${username}`



// set expire time for cookies

// document.cookie = `name = jasem ; expires = ${new Date(2030,1,1).toUTCString()}`

// document.cookie = `isLive = true; expires = ${new Date(9999,0,1).toUTCString()}`



