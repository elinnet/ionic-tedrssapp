var app = angular.module('tedrssapp.controllers', []);

app.controller('FeedCtrl', function ($scope, $ionicLoading, FeedService) {


	console.log("Loading FeedCtrl");
	$ionicLoading.show({template:'Loading feed...'});

	$scope.feed = FeedService;
	$scope.feed.loadFeed().then(function(){
		$ionicLoading.hide();
	});

	$scope.doRefresh = function () {
		$scope.feed.loadFeed().then(function () {
			$scope.$broadcast('scroll.refreshComplete');
		});
	};
});

app.controller('PostCtrl', function ($scope, $stateParams, FeedService) {
	console.log("Loading PostCtrl");
	console.log($stateParams); //this will get the url of what you click through
	$scope.postId = $stateParams.id;
	$scope.post = FeedService.getEntry($scope.postId); //this will match your url with the data pulled through from tedx rss, get the full file and then have this ready for the post.html page to present
	console.log($scope.post);

//


	$scope.share = function () {
		console.debug("Sharing post");
	};

	$scope.readMore = function () {
		console.debug("Read more post");
	};

});
