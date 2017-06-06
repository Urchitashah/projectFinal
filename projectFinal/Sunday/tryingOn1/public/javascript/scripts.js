var app = angular.module("restaurant", ["ui.router", "ngResource"])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider.state("home", {
            url: "home",
            views: {
                main: {
                    templateUrl: "pages/home.html"
                }
            }
        })
            .state(
            "menu", {
                url: "/menu",

                views: {
                    main: {
                        templateUrl: "pages/menu.html",
                        controller: "menu"
                    }
                }
            })
            .state(
            "drinks", {
                url: "/drinks",

                views: {
                    main: {
                        templateUrl: "pages/drinks.html",
                       
                    }
                }
            })
            .state(
            "entree", {
                url: "/entree",

                views: {
                    main: {
                        templateUrl: "pages/entree.html",
                        
                    }
                }
            })
            .state(
            "mainCourse", {
                url: "/mainCourse",

                views: {
                    main: {
                        templateUrl: "pages/mainCourse.html",
                        
                    }
                }
            })
            .state(
            "desserts", {
                url: "/desserts",

                views: {
                    main: {
                        templateUrl: "pages/desserts.html",
                    }
                    }
                
            })
            .state(
            "User", {
                url: "/User",
                views: {
                    main: {
                        templateUrl: "users.html"
                    }
                }
            }
            )
            .state(
            "cart", {
                url: "/cart",
                views: {
                    main: {
                        templateUrl: "pages/cart.html",
                        controller: "cart"
                    }
                }
            }
            )
            .state(
            "login", {
                url: "/login",
                views: {
                    main: {
                        templateUrl: "pages/login.html",
                        controller: "checkUser"
                    }
                }
            }
            )
            .state(
            "about", {
                url: "/about",
                views: {
                    main: {
                        templateUrl: "pages/about.html",
                        controller: "about"
                    }
                }
            }
            )
            .state(
            "register", {
                url: "/register",
                views: {
                    main: {
                        templateUrl: "pages/register.html",
                        controller:"addUser"
                        

                    }
                }
            }
            );
       $locationProvider.html5Mode(true);

    });
/*app.controller("addUser", function ($scope, $resource) {
    $scope.save = function () {
        var request = $resource("/users/add");
        request.save(
            {
                firstName: $scope.firstName,
                lastName: $scope.lastName,
                email: $scope.email,
                password: $scope.password
            }, function (response) {
                if (response.error) {
                    $scope.message = response.error;
                }
                else {
                    $scope.message = "User has been successfully added.";
                }
            });
    }
}); */
app.controller("addUser", function ($scope, $resource) {
    $scope.save = function () {
        var request = $resource("/users/add");
        request.save(
            {
                name: $scope.name,
                email: $scope.email,
                password: $scope.password
            }, function (response) {
                if (response.error) {
                    $scope.message = response.error;
                }
                else {
                    $scope.message = "User has been successfully added. ";
                }
            });
    }
}); 
app.controller("about", function ($scope) {
    $scope.message = " Welcome to my website I have worked hard for it hope you like it";
});

app.controller("menu", function ($scope) {
    $scope.message = " Look at all that we serve, Our Menu.";
    $scope.entreeMessage = " The finest Entrees in the city ";
});

app.controller("checkUser", function ($scope, $resource, $window) {
    $scope.login = function () {
        var request = $resource("/userlogin/validate");
        request.save(
            {
                email: $scope.loginEmail,
                password: $scope.loginPassword
            }, function (response) {
                if (response.error) {
                    $scope.message = "Invalid Credentials";
                }
                else {
                    alert("Login Successful");
                    var userText = angular.element(document.querySelector('#userText'));
                    $window.location.href = '/';
                    userText.innerHTML = response.user.name;
                }
            });
    }
});

app.controller("dessert", function ($scope, $http) {
    
    $http.get('food/dessert').then(function callback(response) {
        $scope.items = response.data;
      
    });
});

app.controller("entree", function ($scope, $http) {

    $http.get('food/entree').then(function callback(response) {
        $scope.items = response.data;

    });
});


app.controller("drinks", function ($scope, $http) {

    $http.get('food/drinks').then(function callback(response) {
        $scope.items = response.data;

    });
});

app.controller("mainCourse", function ($scope, $http) {

    $http.get('food/mainCourse').then(function callback(response) {
        $scope.items = response.data;

    });
});