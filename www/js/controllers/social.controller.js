(function() {
  'use strict';

    angular.module('woocommerce-api.controllers')

    // Social Controller
    .controller('SocialCtrl', function($scope, SocialData) {

        $scope.socialItems = SocialData.items;
        
        // In app browser
        $scope.openLink = function(url) {
            window.open(url, '_blank');
        };

    })

    // Terminos y condiciones
    // Social Controller
    .controller('TerminosCtrl', function($scope, SocialData, $http, $ionicPopup, UserData, ProductsData, $state, BasketData, MetaData, CONFIG) {})
    .controller('TarjetasCtrl', function($scope, SocialData, $http, $ionicPopup, UserData, ProductsData, $state, BasketData, MetaData, CONFIG) {})
    .controller('CerrarCtrl', function($scope, SocialData, $http, $ionicPopup, UserData, ProductsData, $state, BasketData, MetaData, CONFIG) {
      $scope.LogOut = function() {
        window.localStorage.clear();
        localStorage.clear();
        alert('Sesión Cerrada');
      }
    })

    //Search
    .controller('SearchCtrl', function($scope, $http, $ionicPopup, UserData, ProductsData, $state, BasketData, MetaData, CONFIG){
        var url2 = "https://naturapp.store/wc-api/v3/products?consumer_key=ck_4f75656f7008000c0f7c3f5974ac686319547da1&consumer_secret=cs_9d2ddeb675e8940526a844537fa0d872045c72c0";
        $.ajax({
            method: "GET",
            url: url2
          }).done(function(arguments1) {
            $scope.productos = arguments1.products;
              // console.log($scope.productos);
          }).fail(function(){
          });
    })

    //Mi cuenta
    .controller('MyAccountCtrl', function($scope, $http, $ionicPopup, UserData, ProductsData, $state, BasketData, MetaData, CONFIG, PAYMENT_CONFIG){
        var retrievedObject = localStorage.getItem('customer');
        $scope.Micuenta = JSON.parse(retrievedObject);
        // console.log('retrievedObject: ', JSON.parse(retrievedObject));
        console.log($scope.Micuenta);
        $scope.Editar_usuario = function() {
          var coockie = sessionStorage.getItem('autosave');
          var url3 = 'https://naturapp.store/api/user/update_user_meta/?cookie='+coockie+'&meta_key=first_name&meta_value='+encodeURIComponent($scope.Micuenta.first_name)+'&meta_key=last_name&meta_value='+encodeURIComponent($scope.Micuenta.last_name)+'&meta_key=shipping_address.first_name&meta_value='+encodeURIComponent($scope.Micuenta.shipping_address.first_name)+'&meta_key=shipping_address.last_name&meta_value='+encodeURIComponent($scope.Micuenta.shipping_address.last_name)+'&meta_key=shipping_address.company&meta_value='+encodeURIComponent($scope.Micuenta.shipping_address.company)+'&meta_key=shipping_address.address_1&meta_value='+encodeURIComponent($scope.Micuenta.shipping_address.address_1)+'&meta_key=shipping_address.address_2&meta_value='+encodeURIComponent($scope.Micuenta.shipping_address.address_2)+'&meta_key=shipping_address.city&meta_value='+encodeURIComponent($scope.Micuenta.shipping_address.city)+'&meta_key=shipping_address.state&meta_value='+encodeURIComponent($scope.Micuenta.shipping_address.state)+'&meta_key=shipping_address.postcode&meta_value='+encodeURIComponent($scope.Micuenta.shipping_address.postcode)+'&meta_key=shipping_address.country&meta_value='+encodeURIComponent($scope.Micuenta.shipping_address.country);

          console.log(url3);
          $.ajax({
            method: "POST",
            url: url3
          }).done(function( respuesta ) {
            console.log(respuesta);
            alert('Se han actualizado tus datos.');
            if (respuesta.status = 'ok') {
              window.location.href = "#/app/home";
            }
          });
        };
    })

    //Login
    .controller('loginCtrl', function($scope, $http, $ionicPopup, UserData, $state, BasketData, MetaData, CONFIG, PAYMENT_CONFIG){

        $scope.acceso = function() {
          var randomString = function(length) {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for(var i = 0; i < length; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        };
        var url = "https://naturapp.store/api/auth/generate_auth_cookie/?nonce="+randomString+"&";
        $.ajax({
            method: "POST",
            url: url,
            data: {username:$scope.username, password:$scope.password}
          }).done(function( respuesta ) {
            $scope.nombreU = localStorage.setItem('nombre', respuesta.user.displayname);
            $scope.emailU = localStorage.setItem('email', respuesta.user.email);
            $scope.UserIdU = localStorage.setItem('userID', respuesta.user.id);
            $scope.aliasU = localStorage.setItem('alias', respuesta.user.nicename);
            $scope.firstnameU = localStorage.setItem('primer_nombre', respuesta.user.firstname);
            $scope.lastnameU = localStorage.setItem('apellidos', respuesta.user.lastname);

            $scope.nombre = respuesta.user.displayname;
            $scope.email = respuesta.user.email;
            $scope.UserId = respuesta.user.id;
            $scope.alias = respuesta.user.nicename;
            $scope.firstname = respuesta.user.firstname;
            $scope.lastname = respuesta.user.lastname;
            $scope.registro = respuesta.user.fecha;

            if (respuesta.cookie || document.cookie) {
              alert("Bienvenido, "+respuesta.user.displayname);
              // window.location.href = "#/app/home";
              location.reload();
            };
            sessionStorage.setItem('autosave', respuesta.cookie);
            console.log(respuesta);

          }).fail(function() {
            alert( "Correo/Usuario Invalido." );
          });
     };
              
    });

})();