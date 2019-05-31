angular.module('starter.controllers', [])

.controller('DashCtrl', function($rootScope, $scope, $state, configuration, PostsRes) {
    $scope.websiteName = configuration.websiteName
    $scope.init = {
        busy: true,
        after: 1,
        page: 1,
        perPage: 10
    };
    $scope.items = [];
    $scope.loadMore = function() {
        var theQquery = 'filter[posts_per_page]=' + $scope.init.perPage + '&page=' + $scope.init.page;
        PostsRes.query({
            theQquery: theQquery
        }, function(data) {
            for (var i = 0; i < data.length; i++) {
                $scope.items.push(data[i]);
            }
            $scope.init.page++;
            data.length === 0 ? $scope.init.busy = false : $scope.init.busy = true; // 是否结束
            $rootScope.$broadcast('scroll.infiniteScrollComplete');
        });
    };

    $scope.$on('$stateChangeSuccess', function() {
        $scope.loadMore();
    });

    $scope.postItem = function(postId) {
        $state.go('tab.post-item', {
            postId: postId
        });
    };
})


/**
function($scope, Data) {
   Data.get().then(function(resp){
      $scope.posts = resp.data
   });
})
**/

.controller('DashDetailCtrl', function($scope, Data, $stateParams ) {
   Data.getId($stateParams.id).then(function(resp){
      $scope.post = resp.data
      console.log(JSON.parse(resp.data));
   });
})
/**

.controller('DashDetailCtrl', function($scope, $stateParams, PostItemRes) {
    var postId = $stateParams.postId;
    PostItemRes.get({
        postId: postId
    }, function(data) {
        $scope.postItem = data;
    });
})
**/
.controller('ChatsCtrl', function($rootScope, $scope, $state, config, HmoneRes) {
    $scope.websiteName = config.websiteName
    $scope.init = {
        busy: true,
        after: 1,
        page: 1,
        perPage: 10
    };
    $scope.items = [];
    $scope.loadMore = function() {
        var theQquery = 'filter[posts_per_page]=' + $scope.init.perPage + '&page=' + $scope.init.page;
        HmoneRes.query({
            theQquery: theQquery
        }, function(data) {
            for (var i = 0; i < data.length; i++) {
                $scope.items.push(data[i]);
            }
            $scope.init.page++;
            data.length === 0 ? $scope.init.busy = false : $scope.init.busy = true; // 是否结束
            $rootScope.$broadcast('scroll.infiniteScrollComplete');
        });
    };

    $scope.$on('$stateChangeSuccess', function() {
        $scope.loadMore();
    });

    $scope.postItem = function(postId) {
        $state.go('tab.post-item', {
            postId: postId
        });
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($rootScope, $scope, $state, config, HmoneRes) {
    $scope.websiteName = config.websiteName
    $scope.init = {
        busy: true,
        after: 1,
        page: 1,
        perPage: 10
    };
    $scope.items = [];
    $scope.loadMore = function() {
        var theQquery = 'filter[posts_per_page]=' + $scope.init.perPage + '&page=' + $scope.init.page;
        HmoneRes.query({
            theQquery: theQquery
        }, function(data) {
            for (var i = 0; i < data.length; i++) {
                $scope.items.push(data[i]);
            }
            $scope.init.page++;
            data.length === 0 ? $scope.init.busy = false : $scope.init.busy = true; // 是否结束
            $rootScope.$broadcast('scroll.infiniteScrollComplete');
        });
    };

    $scope.$on('$stateChangeSuccess', function() {
        $scope.loadMore();
    });

    $scope.postItem = function(postId) {
        $state.go('tab.post-item', {
            postId: postId
        });
    };
});
