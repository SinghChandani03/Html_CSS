
//Function for validation
function validateForm() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementsByName("gender").value;
    var phone = document.getElementById("phone").value;
    var country = document.getElementById("country").value;
    var city = document.getElementById("city").value;

    const passwordInput = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    const emailInput = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const phoneInput = /^[0-9]{10}$/;

    if (fname == "" || lname == "" || email == "" || password == "" || gender == "" || phone == "" || country == "" || city == "") {
        alert("All Field Required.");
        return false;
    }
    else if (!emailInput.test(email)) {
        alert("Enter Valid email.");
        return false;
    }
    else if (!passwordInput.test(password)) {
        alert("Enter Valid Password.")
        return false;
    }
    else if (!phoneInput.test(phone)) {
        alert("Enter Valid Phone number.")
        return false;
    }
    else {
        return true;
    }
}

//Display Data
function showdata() {
    var userData;
    if (localStorage.getItem("userData") == null) {
        userData = [];
    }
    else {
        userData = JSON.parse(localStorage.getItem("userData"));
    }
    var html = "";
    userData.forEach(function (element, index) {


        html += "<tr>";

        html += "<td>" + index + "</td>";
        html += "<td>" + element.fname + "</td>";
        html += "<td>" + element.lname + "</td>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.password + "</td>";
        html += "<td>" + element.gender + "</td>";
        html += "<td>" + element.phone + "</td>";
        html += "<td>" + element.country + "</td>";
        html += "<td>" + element.city + "</td>";

        html += `<td><button class="btn btn-danger tbl-button" onclick =

          "deleteData(' + index + ')">
            Delete</i ></button >
            <button class="btn btn-warning tbl-button" onclick =
          "UpdateData(` + index + `)">
            Update </button>
            
        </tr>`;

    });

    document.querySelector("#crudTable tbody").innerHTML = html;

}
//Load all data when page load
document.onload = showdata();

//Insert Record [Adding Data]
function AddData() {
    if (validateForm() == true) {
        //retreieve value
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var gender = getGender();
        var phone = document.getElementById("phone").value;
        var country = document.getElementById("country").value;
        var city = document.getElementById("city").value;

        let chkstatus = 0;
        var userData;
        if (localStorage.getItem("userData") == null) {
            userData = [];
        }
        else {
            userData = JSON.parse(localStorage.getItem("userData"));
        }

        for (let v of userData) {
            if (v.email == email || v.phone == phone) {
                chkstatus = 1;
                break;
            }
        }
        if (chkstatus == 1) {
            alert("Email or phone nmber already exist");
        }
        else {
            userData.push({
                fname: fname,
                lname: lname,
                email: email,
                password: password,
                gender: gender,
                phone: phone,
                country: country,
                city: city,

            });
        }
    }

    localStorage.setItem("userData", JSON.stringify(userData));

    showdata();
}


//Function to delete Data From Local Storage
function deleteData(index) {
    var userData;
    let getData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : []

    getData.splice(index, 1);
    localStorage.setItem("userData", JSON.stringify(getData));
    showdata();
}

function showGender(gen) {

    if (gen === 'female') {
        document.getElementById('femalebtn').checked = true;
    }
    else if (gen === 'male') {
        document.getElementById('malebtn').checked = true;
    }
    else {
        document.getElementById('otherbtn').checked = true;
    }

}

function getGender() {

    var genderElements = document.getElementsByName('gender');

    let gender;

    for (var i = 0; i < genderElements.length; i++) {

        if (genderElements[i].checked) {
            gender = genderElements[i].value;
            break;
        }
    }
    return gender;
}

try {
    //function for update

    function UpdateData(index) {

        document.getElementById("submit").style.display = "none";
        document.getElementById("Update").style.display = "block";

        var userData;

        if (localStorage.getItem("userData") == null) {
            userData = [];
        }

        else {
            userData = JSON.parse(localStorage.getItem("userData"));
        }

        document.getElementById("fname").value = userData[index].fname;
        document.getElementById("lname").value = userData[index].lname;
        document.getElementById("email").value = userData[index].email;
        document.getElementById("password").value = userData[index].password;
        document.getElementById("phone").value = userData[index].phone;
        document.getElementById("country").value = userData[index].country;
        document.getElementById("city").value = userData[index].city;
       // document.querySelector('input[name="gender"]:checked').value = userList1[index].gender;;


        document.querySelector("#Update").onclick = function () {

            userData[index].fname = document.getElementById("fname").value;
            userData[index].lname = document.getElementById("lname").value;
            userData[index].email = document.getElementById("email").value;
            userData[index].password = document.getElementById("password").value;
            userData[index].phone = document.getElementById("phone").value;
            userData[index].country = document.getElementById("country").value;
            userData[index].city = document.getElementById("city").value;
           // userList1[index].gender = document.getElementsByName('gender').value = showGender(formData.gen);



            /*   if (validateForm == true) { }*/
            if (validateForm() == true) {

                localStorage.setItem("userData", JSON.stringify(userData));
                showdata();

                let chkstatus = 0;
                for (let v of userData) {
                    if (v.email == email || v.phone == phone) {
                        chkstatus = 1;
                        break;
                    }
                }
                if (chkstatus == 1) {
                    alert("Email or phone nmber already exist");
                }

            }
            //update button will hide ans submit button will show data
            document.getElementById("submit").style.display = "block";
            document.getElementById("Update").style.display = "none";
        }
    }
}
catch (error) {
    console.error(error);
    alert(err.name); // ReferenceError
    alert(err.message);
    alert(err.stack);
}
