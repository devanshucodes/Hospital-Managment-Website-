var a = angular.module("myapp", ['ui.router']);
a.controller("data", function ($scope, $http, $log) {
  $http.get("http://10.21.85.48:8000/medera/doctor/register")
    .then(function (response) {
      $scope.emp = response.data
      $log.info(response);
      console.log($scope.username);
    });
});

// var a = angular.module("myapp", []);





a.config(['$stateProvider', function ($stateProvider) {
  $stateProvider
    .state('first', {
      url: '/front.html',
      templateUrl: 'front.html',
      controller: ''
    })
    .state('second', {
      url: '/login.html',
      templateUrl: 'login.html',
      controller: ''
    })
    .state('third', {
      url: '/register.html',
      templateUrl: 'register.html',
      controller: ''

    })
    .state('forth', {
      url: '/loginp.html',
      templateUrl: 'loginp.html',
      controller: 'loginp'

    })
    .state('fifth', {
      url: '/logind.html',
      templateUrl: 'logind.html',
      controller: 'login'
    })
    .state('sixth', {
      url: '/patient(r).html',
      templateUrl: 'registerp.html',
      controller: 'datap'
    })
    .state('seventh', {
      url: '/doctor(r).html',
      templateUrl: 'registerd.html',
      controller: 'data'
    })
    .state('eight', {
      url: '/patient.html',
      templateUrl: 'patient.html',
      controller: 'patient'
    })
    .state('nine', {
      url: '/doctor.html',
      templateUrl: 'doctor.html',
      controller: 'doctor'


    })
    .state('ten', {
      url: '/pendingappointments_doctor.html',
      templateUrl: 'doctorpendapp.html',
      controller: 'pendingapp'


    })
    .state('eleven', {
      url: '/doctorbooked.html',
      templateUrl: 'doctorbooked.html',
      controller: 'booked'


    })
    .state('twelve', {
      url: '/patientbookapp.html',
      templateUrl: 'patientbookapp.html',
      controller: 'appointment'
    })
    .state('thirteen', {
      url: '/medicalhistory.html',
      templateUrl: 'medicalhistory.html',
      controller: 'medicalhistory'
    })
    .state('fourteen', {
      url: '/prescription.html',
      templateUrl: 'prescription.html',
      controller: 'prescription'
    })
    .state('fifteen', {
      url: '/paymenthistory.html',
      templateUrl: 'paymenthistory.html',
      controller: 'payment'
    })
    .state('sixteen', {
      url: '/loginrec.html',
      templateUrl: 'loginrec.html',
      controller: 'loginr'
    })
    .state('seventeen', {
      url: '/receptionist.html',
      templateUrl: 'receptionist.html',
      controller: 'receprofile'

    })
    .state('eighteen', {
      url: '/alldoc.html',
      templateUrl: 'alldoc.html',
      controller: 'alldoc'
    })
    .state('nineteen', {
      url: '/allpat.html',
      templateUrl: 'allpat.html',
      controller: 'allpat'
    })
    .state('twenty', {
      url: '/docpre.html',
      templateUrl: 'docpre.html',
      controller: 'docpre'
    })
    .state('twentyone', {
      url: '/updateapp.html',
      templateUrl: 'updateapp.html',
      controller: 'update'
    })
    .state('twentytwo', {
      url: '/appup.html',
      templateUrl: 'appup.html',
      controller: 'appup'
    })
    .state('twentythree', {
      url: '/details.html',
      templateUrl: 'details.html',
      controller: 'details'
    })







}]);





a.controller("data", function ($scope, $http, $location) {
  $scope.func = function () {
    var email = $scope.email;

    var phoneno = $scope.phoneno;

    var fname = $scope.fname;

    var lname = $scope.lname;

    var pass = $scope.password;

    var cpass = $scope.cpassword;

    var user = $scope.user;

    var degree = $scope.degree;

    var dob = $scope.dob;
    var d = new Date(dob.replace(/-/g, '\/'));

    var college = $scope.college;

    var gender = $scope.gender;


    var obj = { mail: email, pass1: pass, pass2: cpass, user: user, phone: phoneno, fname: fname, lname: lname, dob: d, college: college, degree: degree, gender: gender }

    console.log(obj);
    $http({
      method: "POST",
      url: "http://10.21.85.48:8000/medera/doctor/register",
      data: JSON.stringify(obj),
      header: {
        "Content-Type": "application/json"
      }
    })
      .then(function (response) {
        console.log(response.status);
        if (response.status == 201) {

          Swal.fire(
            'Good job!',
            'Account Successfully Created ',
            'success'
          )

          console.log(response.data)
          $scope.username = response.data.user;
          console.log($scope.username)
          localStorage.setItem("b", JSON.stringify($scope.user));

          $location.path("/logind.html");

        }


      })
      .catch((response) => {
        if (response.status == 401) {
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: response.data
          })
        }
        console.log(err)
      })


  }


});

a.controller("drop", function ($scope, $http, $log) {
  $http.get("http://10.21.85.48:8000/:8000/medera/doctor/register")
    .then(function (response) {

      $scope.emp = response.data
      $log.info(response);
      console.log($scope.fname);
    })
})



// a.controller("drop", function ($scope, $http, $log) {
//     $http.get("http://10.21.85.48:8000/medera/doctor/register")
//         .then(function (response) {

//             $scope.emp = response.data
//             $log.info(response);
//             console.log($scope.fname);
//         })
// })



a.controller("datap", function ($scope, $http, $location) {
  $scope.func = function () {
    var email = $scope.email;

    var phoneno = $scope.phoneno;

    var fname = $scope.fname;

    var lname = $scope.lname;

    var pass = $scope.password;

    var cpass = $scope.cpassword;

    var user = $scope.user;


    var gender = $scope.gender;
    // var d=new Date(dob.replace(/-/g,'\/'));






    var obj = { mail: email, pass1: pass, pass2: cpass, user: user, phone: phoneno, fname: fname, lname: lname, gender: gender }

    console.log(obj);
    $http({
      method: "POST",
      url: "http://10.21.85.48:8000/medera/patient/register",
      data: JSON.stringify(obj),
      header: {
        "Content-Type": "application/json"
      }
    })
      .then(function (response) {
        console.log(response.status);
        if (response.status == 201) {

          Swal.fire(
            'Good job!',
            'Account Successfully Created ',
            'success'
          )

          console.log(response.data)
          $scope.username = response.data.user;
          console.log($scope.username)
          localStorage.setItem("b", JSON.stringify($scope.user));

          $location.path("/loginp.html");

        }


      })
      .catch((response) => {
        if (response.status == 401) {
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: response.data
          })
        }
        console.log(err)
      })


  }


});








a.controller("loginp", function ($scope, $http, $location) {
  $scope.func = function () {


    var pass = $scope.password;

    var user = $scope.user;

    var obj = { pass1: pass, user: user }

    console.log(obj);
    $http({
      method: "POST",
      url: "http://10.21.85.48:8000/medera/patient/login",
      data: JSON.stringify(obj),
      header: {
        "Content-Type": "application/json"
      }
    })

      .then(function (response) {
        console.log(response.status);
        if (response.status == 200) {

          Swal.fire(
            'Good job!',
            'You are now logged in ',
            'success'
          )

          console.log(response.data)
          $scope.username = response.data.user;
          console.log($scope.username)
          localStorage.setItem("b", JSON.stringify($scope.user));

          $location.path("/patient.html");

        }


      })
      .catch((response) => {
        if (response.status == 401) {
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: response.data
          })
        }
        console.log(err)
      })
  }


})


a.controller("loginr", function ($scope, $http, $location) {
  $scope.func = function () {


    var pass = $scope.password;

    var user = $scope.user;

    var obj = { pass1: pass, user: user }

    console.log(obj);
    $http({
      method: "POST",
      url: "http://10.21.85.48:8000/medera/reception/login",
      data: JSON.stringify(obj),
      header: {
        "Content-Type": "application/json"
      }
    })

      .then(function (response) {
        console.log(response.status);
        if (response.status == 200) {

          Swal.fire(
            'Good job!',
            'You are now logged in ',
            'success'
          )

          console.log(response.data)
          $scope.username = response.data.user;
          console.log($scope.username)
          localStorage.setItem("b", JSON.stringify($scope.user));

          $location.path("/receptionist.html");

        }


      })
      .catch((response) => {
        if (response.status == 401) {
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: response.data
          })
        }
        console.log(err)
      })
  }


})











a.controller("patient", function ($scope, $http, $location) {

  let username = JSON.parse(localStorage.getItem("b"));
  $http({
    method: "POST",
    url: "http://10.21.85.48:8000/medera/patient/home",
    data: JSON.stringify({ "user": username }),
    header: {
      "Content-Type": "application/json"
    }
  })
    .then(function (response) {
      // var name = localStorage.getItem("a");
      console.log(response.data);
      $scope.userdata = response.data;
      $scope.fname = response.data.fname;
      $scope.lname = response.data.lname;
      $scope.gender = response.data.gender;
      $scope.degree = response.data.degree;
      $scope.mail = response.data.mail;
      $scope.user = response.data.user;
      $scope.degree = response.data.degree;
      $scope.college = response.data.college;
      $scope.phone = response.data.phone;
      $scope.cgpa = response.data.cgpa;


      console.log(response.data.fname);
      console.log(response.data.lname);
    })

    $scope.logout = function (){

      $http({
        method: "POST",
        url: "http://10.21.85.48:8000/medera/patient/logout",
        data: JSON.stringify({ "user": username }),
        header: {
          "Content-Type": "application/json"
        }
      })
      .then(function (response) {
        console.log(response.status);
        if (response.status == 200) {

          Swal.fire(
            'Successfully',
            'Log Out ',
            'success'
          )
          
          $location.path("/front.html");
          localStorage.clear()

        }
      })

    }





})


a.controller("appointment",function ($scope, $http, $log, $filter) {

  let username = JSON.parse(localStorage.getItem("b"));
  $http({
    method: "POST",
    url: "http://10.21.85.48:8000/medera/doctor/getdoctor",
    data: JSON.stringify({ "user": username }),
    header: {
      "Content-Type": "application/json"
    }
  })
    .then(function (response) {
      // var name = localStorage.getItem("a");
      console.log(response.data);


      $scope.emp = response.data
      $log.info(response);
      console.log(response.data[0].fields.fname);

      // $scope.doctor = response.data[0].pk;

      console.log($scope.doctor)

      console.log(response.data.fname);
      console.log(response.data.lname);
    })
    $scope.logout = function (){

      $http({
        method: "POST",
        url: "http://10.21.85.48:8000/medera/patient/logout",
        data: JSON.stringify({ "user": username }),
        header: {
          "Content-Type": "application/json"
        }
      })
      .then(function (response) {
        console.log(response.status);
        if (response.status == 200) {
  
          Swal.fire(
            'Successfully',
            'Log Out ',
            'success'
          )
          
          $location.path("/front.html");
          localStorage.clear()
  
  
  
  
  
        }
  
  
      })
  
    } 

    $scope.appoint = function () {
    var appointment = $scope.date;
    var d = $filter('date')(appointment, "yyyy-MM-dd", "Asia/Kolkata")
    var doctor = $scope.doctor.user;
    console.log($scope.date)
    console.log($scope.doctor.user)
    let username = JSON.parse(localStorage.getItem("b"));
    $http({
      method: "POST",
      url: "http://10.21.85.48:8000/medera/patient/appointment",
      // data: JSON.stringify({ "user": username }),
      data: JSON.stringify({ doctor: doctor, "user": username, appointment: d }),
      //  data: JSON.stringify(response.data),
      header: {
        "Content-Type": "application/json"
      }
    })
    
    .then(function (response) {
      console.log(response.status);
      if (response.status == 200) {

        Swal.fire(
          'Successfully',
          ' Appointment Booked ',
          'success'
        )





      }


    })
  };

 




})

















// a.controller("appointment", function ($scope, $http, $log) {
//   $http.post("http://10.21.85.48:8000/medera/doctor/getdoctor")

//     .then(function (response) {

//       $scope.emp = response.data
//       $log.info(response);
//       console.log(response.data[0].fields.fname);

//     $scope.doctor = response.data[1].pk;

//     console.log($scope.doctor)
//     console.log($scope.username)
//     console.log($scope.appointment)
//     })


// })


//patient js
function openNav() {
  document.getElementById("myNav").style.width = "30%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}





a.controller("login", function ($scope, $http, $location) {
  $scope.func = function () {


    var pass = $scope.password;

    var user = $scope.user;

    var obj = { pass1: pass, user: user }

    console.log(obj);
    $http({
      method: "POST",
      url: "http://10.21.85.48:8000/medera/doctor/login",
      data: JSON.stringify(obj),
      header: {
        "Content-Type": "application/json"
      }
    })

      .then(function (response) {
        console.log(response.status);
        if (response.status == 200) {

          Swal.fire(
            'Good job!',
            'You are now logged in ',
            'success'
          )

          console.log(response.data)
          $scope.username = response.data.user;
          console.log($scope.username)
          localStorage.setItem("b", JSON.stringify($scope.user));

          $location.path("/doctor.html");

        }


      })
      .catch((response) => {
        if (response.status == 401) {
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: response.data
          })
        }
        console.log(err)
      })
  }


})



a.controller("doctor", function ($scope, $http, $location) {

  let username = JSON.parse(localStorage.getItem("b"));
  $http({
    method: "POST",
    url: "http://10.21.85.48:8000/medera/doctor/doctordetail",
    data: JSON.stringify({ "user": username }),
    header: {
      "Content-Type": "application/json"
    }
  })
    .then(function (response) {
      // var name = localStorage.getItem("a");
      console.log(response.data);
      $scope.userdata = response.data;
      $scope.fname = response.data.fname;
      $scope.lname = response.data.lname;
      $scope.degree = response.data.degree;
      $scope.mail = response.data.mail;
      $scope.user = response.data.user;
      $scope.degree = response.data.degree;
      $scope.college = response.data.college;
      $scope.phone = response.data.phone;
      $scope.gender = response.data.gender;


      console.log(response.data.fname);
      console.log(response.data.lname);
    })

    $scope.signout = function (){

      $http({
        method: "POST",
        url: "http://10.21.85.48:8000/medera/patient/logout",
        data: JSON.stringify({ "user": username }),
        header: {
          "Content-Type": "application/json"
        }
      })
      .then(function (response) {
        console.log(response.status);
        if (response.status == 200) {

          Swal.fire(
            'Successfully',
            'Log Out ',
            'success'
          )
          
          $location.path("/front.html");
          localStorage.clear()

        }
      })

    }



})


a.controller("pendingapp", function ($scope, $http, $location) {

  let username = JSON.parse(localStorage.getItem("b"));
  $http({
    method: "POST",
    url: "http://10.21.85.48:8000/medera/doctor/pending",
    data: JSON.stringify({ "user": username }),
    header: {
      "Content-Type": "application/json"
    }
  })
    .then(function (response) {

      $scope.emp = response.data;
      $scope.doctor = response.data[0].doctor_id;
      $scope.user = response.data[0].user_id;
      $scope.id = response.data[0].id;
      // $scope.appointment = response.data[0].fields.appointment;
      // $scope.appoin = response.data[0].fields.appoint;



      console.log(response.data)
      console.log($scope.doctor)
      console.log($scope.user)
      // console.log($scope.appointment)
      // console.log($scope.appoin)
      // $log.info(response.data);




    })
  {

    $scope.myFunc = function () {
      $http({
        method: "POST",
        url: "http://10.21.85.48:8000/medera/doctor/delappointment",
        // data: JSON.stringify({ "user": username }),
        data: JSON.stringify({ 'id': $scope.id }),
        //  data: JSON.stringify(response.data),
        header: {
          "Content-Type": "application/json"
        }
      })
        .then(function (response) {
          console.log(response.status);
          if (response.status == 200) {

            Swal.fire(
              'Successfully',
              'Declined the Appointment ',
              'success'
            )





          }


        })
    };
    $scope.myFunct = function () {
      $http({
        method: "POST",
        url: "http://10.21.85.48:8000/medera/doctor/approve",
        // data: JSON.stringify({ "user": username }),
        data: JSON.stringify({ 'id': $scope.id }),
        //  data: JSON.stringify(response.data),
        header: {
          "Content-Type": "application/json"
        }
      })
        .then(function (response) {
          console.log(response.status);
          if (response.status == 200) {

            Swal.fire(
              'Successfully',
              'Accepted the Appointment',
              'success'
            )
          }

        })
    };
  };
})
a.controller("booked", function ($scope, $http, $location) {

  let username = JSON.parse(localStorage.getItem("b"));
  $http({
    method: "POST",
    url: "http://10.21.85.48:8000/medera/doctor/booked",
    data: JSON.stringify({ "user": username }),
    header: {
      "Content-Type": "application/json"
    }
  })
    .then(function (response) {

      // this.response.splice(index,1)
      $scope.book = response.data;
      $scope.id = response.data[0].id;


      // $scope.doctor = response.data[0].doctor;
      // $scope.user = response.data[0].user;
      // $scope.appointment = response.data[0].fields.appointment;
      console.log(response.data)
      // console.log($scope.book)
      // console.log($scope.user)
      // console.log($scope.doctor)
      // console.log($scope.appointment)
      // $log.info(response.data);
    })
  {
    $scope.accept = function () {
      $http({
        method: "POST",
        url: "http://10.21.85.48:8000/medera/doctor/delappointment",
        // data: JSON.stringify({ "user": username }),
        data: JSON.stringify({ 'id': $scope.id }),
        //  data: JSON.stringify(response.data),
        header: {
          "Content-Type": "application/json"
        }
      })
        .then(function (response) {
          console.log(response.status);
          if (response.status == 200) {

            Swal.fire(
              'Successfully',
              'Appointment Completed',
              'success'
            )
          }


        })


    };


  };
})



a.controller("receprofile", function ($scope, $http) {

  let username = JSON.parse(localStorage.getItem("b"));
  $http({
    method: "POST",
    url: "http://10.21.85.48:8000/medera/reception/confirm",
    data: JSON.stringify({ "user": username }),
    header: {
      "Content-Type": "application/json"
    }
  })
    .then(function (response) {

      $scope.emp = response.data;
      // $scope.doctor = response.data[0].fields.doctor;
      $scope.user = response.data[0].user_id;
      $scope.doctor = response.data[0].doctor_id;
      $scope.appointment = response.data[0].appointment;
      $scope.appoint = response.data[0].appoint;
      $scope.pay = response.data[0].pay;
      $scope.id = response.data[0].id;
      // $scope.appointment = response.data[0].fields.appointment;
      console.log($scope.emp)
      // console.log($scope.doctor)
      console.log($scope.user)
      console.log($scope.doctor)
      console.log($scope.appointment)
      console.log($scope.appoint)
      console.log($scope.pay)
      // console.log($scope.appointment)
      // $log.info(response.data);




    })
    
  {

    $scope.myFunc = function () {
      $http({
        method: "POST",
        url: "http://10.21.85.48:8000/medera/doctor/delappointment",
        // data: JSON.stringify({ "user": username }),
        data: JSON.stringify({ 'id': $scope.id }),
        //  data: JSON.stringify(response.data),
        header: {
          "Content-Type": "application/json"
        }
      })
        .then(function (response) {
          console.log(response.status);
          if (response.status == 200) {

            Swal.fire(
              'Successfully',
              'Declined the Appointment ',
              'success'
            )
            //  location.reload(true);





          }


        })
      $http({
        method: "POST",
        url: "http://10.21.85.48:8000/medera/reception/confirm",
        data: JSON.stringify({ "user": username }),
        header: {
          "Content-Type": "application/json"
        }
      })
        .then(function (response) {

          $scope.emp = response.data;
          // $scope.doctor = response.data[0].fields.doctor;
          $scope.user = response.data[0].user_id;
          $scope.doctor = response.data[0].doctor_id;
          $scope.appointment = response.data[0].appointment;
          $scope.appoint = response.data[0].appoint;
          $scope.pay = response.data[0].pay;
          $scope.id = response.data[0].id;
          // $scope.appointment = response.data[0].fields.appointment;
          console.log($scope.emp)
          // console.log($scope.doctor)
          console.log($scope.user)
          console.log($scope.doctor)
          console.log($scope.appointment)
          console.log($scope.appoint)
          console.log($scope.pay)
          // console.log($scope.appointment)
          // $log.info(response.data);




        })
    };
    $scope.myFunct = function () {
      $http({
        method: "POST",
        url: "http://10.21.85.48:8000/medera/reception/approve",
        // data: JSON.stringify({ "user": username }),
        data: JSON.stringify({ 'id': $scope.id }),
        //  data: JSON.stringify(response.data),
        header: {
          "Content-Type": "application/json"
        }
      })
        .then(function (response) {
          console.log(response.status);
          if (response.status == 200) {

            Swal.fire(
              'Successfully',
              'Accepted the Appointment',
              'success'
            )
          }

        })
      $http({
        method: "POST",
        url: "http://10.21.85.48:8000/medera/reception/confirm",
        data: JSON.stringify({ "user": username }),
        header: {
          "Content-Type": "application/json"
        }
      })
        .then(function (response) {

          $scope.emp = response.data;
          // $scope.doctor = response.data[0].fields.doctor;
          $scope.user = response.data[0].user_id;
          $scope.doctor = response.data[0].doctor_id;
          $scope.appointment = response.data[0].appointment;
          $scope.appoint = response.data[0].appoint;
          $scope.pay = response.data[0].pay;
          // $scope.appointment = response.data[0].fields.appointment;
          console.log($scope.emp)
          // console.log($scope.doctor)
          console.log($scope.user)
          console.log($scope.doctor)
          console.log($scope.appointment)
          console.log($scope.appoint)
          console.log($scope.pay)
          // console.log($scope.appointment)
          // $log.info(response.data);




        })
    };
  
    $scope.sign = function (){

      $http({
        method: "POST",
        url: "http://10.21.85.48:8000/medera/patient/logout",
        data: JSON.stringify({ "user": username }),
        header: {
          "Content-Type": "application/json"
        }
      })
      .then(function (response) {
        console.log(response.status);
        if (response.status == 200) {

          Swal.fire(
            'Successfully',
            'Log Out ',
            'success'
          )
          
          $location.path("/front.html");
          localStorage.clear()

        }
      })

    }
    
  };
})

a.controller("alldoc", function ($scope, $http, $location) {
  $scope.submit = function () {
    var gender = $scope.gender;

    $http({
      method: "POST",
      url: "http://10.21.85.48:8000/medera/reception/d1",

      data: JSON.stringify({ 'gender': $scope.gender }),
      header: {
        "Content-Type": "application/json"
      }
    })
      .then(function (response) {

        $scope.emp = response.data;

        console.log($scope.emp)

        // $log.info(response.data);




      })
  }
})
a.controller("allpat", function ($scope, $http, $location) {
  $scope.submit = function () {
    var gender = $scope.gender;

    $http({
      method: "POST",
      url: "http://10.21.85.48:8000/medera/reception/allpatient",

      data: JSON.stringify({ 'gender': $scope.gender }),
      header: {
        "Content-Type": "application/json"
      }
    })
      .then(function (response) {

        $scope.emp = response.data;

        console.log($scope.emp)

        // $log.info(response.data);




      })
  }
})

a.controller("docpre", function ($scope, $http, $location) {

  let user = JSON.parse(localStorage.getItem("b"));
  $http({
    method: "POST",
    url: "http://10.21.85.48:8000/medera/reception/d2",
    data: JSON.stringify({ "doctor": user }),
    header: {
      "Content-Type": "application/json"
    }
  })
    .then(function (response) {

      // this.response.splice(index,1)
      $scope.emp = response.data;



      console.log($scope.emp)

      // $log.info(response.data);
    })
  $scope.prescription = function () {

    var user = $scope.patient.user;

    var prescription = $scope.pre;






    var obj = { user: user, prescription: prescription }

    console.log(obj);
    $http({
      method: "POST",
      url: "http://10.21.85.48:8000/medera/doctor/updateprescription",
      data: JSON.stringify(obj),
      header: {
        "Content-Type": "application/json"
      }
    })
      .then(function (response) {
        console.log(response.status);
        if (response.status == 200) {

          Swal.fire(
            'Good job!',
            'Prescription Updated ',
            'success'
          )






          $

        }


      })



  }



})

a.controller("medicalhistory", function ($scope, $http, $log) {

  let username = JSON.parse(localStorage.getItem("b"));
  $http({
    method: "POST",
    url: "http://10.21.85.48:8000/medera/patient/mhistory",
    data: JSON.stringify({ "user": username }),
    header: {
      "Content-Type": "application/json"
    }
  })
    .then(function (response) {

      $scope.emp = response.data;
      console.log($scope.emp)
    })
    
})









a.controller("prescription", function ($scope, $http, $log) {

  let username = JSON.parse(localStorage.getItem("b"));
  $http({
    method: "POST",
    url: "http://10.21.85.48:8000/medera/patient/prescription",
    data: JSON.stringify({ "user": username }),
    header: {
      "Content-Type": "application/json"
    }
  })
    .then(function (response) {

      $scope.emp = response.data;
      console.log($scope.emp)
    })
})






a.controller("payment", function ($scope, $http, $log) {

  let username = JSON.parse(localStorage.getItem("b"));
  $http({
    method: "POST",
    url: "http://10.21.85.48:8000/medera/patient/pay",
    data: JSON.stringify({ "user": username }),
    header: {
      "Content-Type": "application/json"
    }
  })
    .then(function (response) {

      $scope.emp = response.data;
      $scope.id = response.data[0].id;
      console.log($scope.emp)
      console.log($scope.id)
    })
  {
    $scope.myPay = function () {
      $http({
        method: "POST",
        url: "http://10.21.85.48:8000/medera/reception/payment",
        // data: JSON.stringify({ "user": username }),
        data: JSON.stringify({ 'id': $scope.id }),
        //  data: JSON.stringify(response.data),
        header: {
          "Content-Type": "application/json"
        }
      })
        .then(function (response) {
          console.log(response.status);
          if (response.status == 200) {

            Swal.fire(
              'Successfully',
              'Payment Done',
              'success'
            )
          }

        })
    };


  };
})

// $scope.myPay = function ($scope) {
//   $http({
//     method: "POST",
//     url: "http://10.21.85.48:8000/medera/reception/payment",
//     // data: JSON.stringify({ "user": username }),
//     data: JSON.stringify({ 'id': $scope.id  }),
//     //  data: JSON.stringify(response.data),
//     header: {
//       "Content-Type": "application/json"
//     }
//   })
// }
//     .then(function (response) {
//       console.log(response.status);
//       if (response.status == 200) {

//         Swal.fire(
//           'Successfully',
//           'Accepted the Appointment',
//           'success'
//         )
//       }

//     })



a.controller("update", function ($scope, $http, $location) {

  let user = JSON.parse(localStorage.getItem("b"));
  $http({
    method: "POST",
    url: "http://10.21.85.48:8000/medera/doctor/booked",
    data: JSON.stringify({ "user": user }),
    header: {
      "Content-Type": "application/json"
    }
  })
    .then(function (response) {


      $scope.emp = response.data;
      $scope.id = response.data[0].id;



      console.log($scope.emp)
      console.log($scope.id)


    })
  {
    $scope.update = function (index) {



      // $scope.id = index ;


      var obj = { "id": $scope.id }

      console.log(obj);
      $http({
        method: "POST",
        url: "http://10.21.85.48:8000/medera/doctor/req",
        data: JSON.stringify(obj),
        header: {
          "Content-Type": "application/json"
        }
      })
        .then(function (response) {
          console.log(response.status);
          if (response.status == 200) {

            Swal.fire(
              'Good job!',
              'Update Prescription ',
              'success'
            )


            localStorage.setItem("id", JSON.stringify($scope.id));
            $location.path("/appup.html");








          }


        })




    }
  }
})





a.controller("appup", function ($scope, $http, $location, $filter) {

  let id = JSON.parse(localStorage.getItem("id"));
  $http({
    method: "POST",
    url: "http://10.21.85.48:8000/medera/doctor/req",
    data: JSON.stringify({ "id": id }),
    header: {
      "Content-Type": "application/json"
    }
  })
    .then(function (response) {

      console.log(response.data)
      $scope.user = response.data.user
      $scope.id = response.data.id
      $scope.appointment = response.data.appointment
      console.log(response.data.user)
      console.log(response.data.appointment)
      console.log($scope.id)


    })
  {
    $scope.updat = function () {


      var date = $scope.date;
      var d = $filter('date')(date, "yyyy-MM-dd", "Asia/Kolkata")

      var obj = { "id": $scope.id, newappoint: d }

      console.log(obj);
      $http({
        method: "POST",
        url: "http://10.21.85.48:8000/medera/doctor/updateappointments",
        data: JSON.stringify(obj),
        header: {
          "Content-Type": "application/json"
        }
      })
        .then(function (response) {
          console.log(response.status);
          if (response.status == 200) {

            Swal.fire(
              'Good job!',
              'Prescription Updated ',
              'success'
            )

            $location.path("/doctor.html");







          }


        })




    }
  }
})

a.controller("details", function ($scope, $http) {
  $scope.doc = function () {
    $http({
      method: "POST",
      url: "http://10.21.85.48:8000/medera/reception/doctorname",
      // data: JSON.stringify({ "id": id }),
      header: {
        "Content-Type": "application/json"
      }
    })
      .then(function (response) {
        $scope.data = response.data;
        console.log($scope.data)
      })
  }
  $scope.patient = function () {

    $http({
      method: "POST",
      url: "http://10.21.85.48:8000/medera/reception/d2",
      data: { 'doctor': $scope.doctor },
      header: {
        "Content-Type": "application/json"
      }
    })
    // $http.post("http://10.21.85.48:8000/medera/reception/d2", 
      .then(function (response) {
        $scope.patient = response.data;
        console.log($scope.patient)
      })
  }
  $scope.submit = function () {
    var user = $scope.patient
    console.log($scope.patient)
    $http({
      method: "POST",
      url: "http://10.21.85.48:8000/medera/patient/home",

      data: JSON.stringify({ user: user }),

      header: {
        "Content-Type": "application/json"
      }
    })
    .then(function (response) {

      $scope.emp = response.data;
  
      console.log($scope.emp)
    
  
      $scope.fname = response.data.fname;
      $scope.lname = response.data.lname;
      $scope.mail = response.data.mail;
      $scope.phone = response.data.phone;
      $scope.gender = response.data.gender;
      console.log($scope.fname)
      console.log($scope.lname)
  
      // $log.info(response.data);
  
  
  
  
    })
    

  }
  
  
    

});








