var a = angular.module("myapp", ['ui.router']);
a.controller("data", function ($scope, $http, $log) {
    $http.get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
            $scope.emp = response.data
            $log.info(response);
            console.log($scope.username);
        });
});

a.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('first', {
            url: '/login.html',
            templateUrl: 'login.html',
            controller: 'login'
        })
        .state('second', {
            url: '/home.html',
            templateUrl: 'medera.html',
            controller: ''
        })
        .state('third', {
            url: '/data.html',
            templateUrl: 'yourdata.html',
            controller: 'data'

        })
        .state('forth', {
            url: '/adminpage.html',
            templateUrl: 'adminpage.html',
            controller: 'admin'

        })
        .state('fifth', {
            url: '/userpage.html',
            templateUrl: 'userpage.html',
            controller: 'userCtrl'
        })
        .state('sixth', {
            url: '/register.html',
            templateUrl: 'register.html',
            controller: 'register'
        })

}]);
a.controller("login", function ($scope, $http, $location) {
    $scope.func = function () {
        var email = $scope.email;
        var pass = $scope.password;
        console.log(email);
        console.log(pass);
        var obj = { user_name: email, passw: pass }
        console.log(obj);



        // $http({
        //          method: "POST",
        //          url:"http://10.21.84.155:8000/login",
        //          data :JSON.stringify(obj),
        //          // header: {
        //          //     "Content-Type": "text/plain"
        //          // }
        //      })
        //      .then(function (response){
        //          console.log(response.status);
        //          if(response.status==200){

        //              Swal.fire(
        //                         'Good job!',
        //                         'You are now logged in ',
        //                         'success'
        //                     )
        //          }

        //      }).catch((err)=>{
        //          if(err.status==400){
        //                      swal.fire({
        //                          icon: 'error',
        //                          title: 'Oops...',
        //                          text: err.data[0].erro
        //                      })
        //                  }
        //          console.log(err)
        //      })
        //  }





        $http.get("https://jsonplaceholder.typicode.com/users")
            .then(function (response) {
                $scope.d = (response.data);
                for (var i = 0; i < $scope.d.length; i++) {
                    if ($scope.password == $scope.d[i].username && $scope.email == $scope.d[i].email) {
                        Swal.fire(
                            'Good job!',
                            'You are now logged in ',
                            'success'
                        )
                        $location.url("/userpage.html");
                        return;

                    }
                }
                $scope.p = "admin123";
                $scope.e = "admin";
                if ($scope.password == $scope.p && $scope.email == $scope.e) {
                    Swal.fire(
                        'Good job!',
                        'You are now logged in ',
                        'success'
                    )
                    $location.url("/adminpage.html");
                    return;
                }
                else {
                    swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'You entered wrong email or password',
                        footer: '<a href="">Forgot Password?</a>'
                    })
                }
                $http.get("https://jsonplaceholder.typicode.com/users")
                    .then(function (response) {
                        $scope.d = response.data
                        $log.info(response);
                        console.log($scope.d)
                    })

                })

    }
});
a.controller("admin", function ($scope, $http, $log) {
    $http.get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
            $scope.em = response.data
            $log.info(response);
        })
});
a.controller("user", function ($scope, $http, $log) {

});
a.controller("userCtrl", function ($scope, $http, $log) {

    $http.get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
            $scope.d = (response.data);
            for (var i = 0; i < $scope.d.length; i++) {
                if ($scope.password == $scope.d[i].username && $scope.email == $scope.d[i].email) {
                    console.log($scope.d[i].username);
                    console.log('success');
                }
            }

        })
});


a.controller("register", function ($scope, $http, $location) {
    $scope.funct = function () {
        var email = $scope.email;
        var pass = $scope.password;
        console.log(email);
        console.log(pass);
        var obj = { user_name: email, passw: pass }
        console.log(obj);

        $http.get("https://jsonplaceholder.typicode.com/users")
            .then(function (response) {
                $scope.d = (response.data);
                for (var i = 0; i < $scope.d.length; i++) {
                    if ($scope.password == $scope.d[i].username && $scope.email == $scope.d[i].email) {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Allready Exist! ',
                            footer: '<a href="">Forgot Password?</a>'
                        })
                    }
                }
                $scope.p = "admin123";
                $scope.e = "admin";
                if ($scope.password == $scope.p && $scope.email == $scope.e) {

                    swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Allready Exist! ',
                        footer: '<a href="">Forgot Password?</a>'
                    })
                }
                else {
                    swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'You entered wrong email or password',
                        footer: '<a href="">Forgot Password?</a>'
                    })
                }
            })

    }
});
