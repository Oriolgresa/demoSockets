/**
 * Created by OriolGresa on 2/3/17.
 */


var MainApp = angular.module('MainApp', ['luegg.directives']);

MainApp.controller('core', function ($scope) {
    var socket = io.connect('http://192.168.1.107:3010');
    $scope.glued = true;

    socket.on('messages', function (data) {
        $scope.$apply(function () {
            $scope.messages = data;
        });
        console.log(data);
    });

    $scope.addMessage = function () {
        var payload = {
            author: $scope.username,
            text: $scope.msgText
        };
        $scope.msgText = "";
        socket.emit('newmessage', payload);
    }

});