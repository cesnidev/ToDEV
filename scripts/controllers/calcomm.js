calcomm.controller('CalcommCtrl',function($scope,Session,CalcommLogin,$location,CalcommUtils){
	
	$scope.GoTo = function(url){
		$location.path(url);
	};
	$scope.logout = function(){CalcommUtils.logout();}
	$scope.showImg = function(url){return CalcommUtils.getProfileImage(url);}
	$scope.MyStatus = function(){return CalcommUtils.getMyStatus();}
		
		
	if(CalcommLogin.isAuthenticated())
	{
		$scope.user = Session.getSession();
//		console.debug($scope.user);
		if(CalcommLogin.isAuthenticated()&&!$location.absUrl().indexOf("home")>-1&&!CalcommLogin.isAdmin())
		{
			if(!($scope.user.forms.basic && $scope.user.forms.profile && $scope.user.forms.experience && $scope.user.forms.availability && $scope.user.forms.legal) )
			{	
				notificar("you must complete all forms.");$location.path("/signup");
			}
		}
		

		if(CalcommLogin.isAdmin())
			$scope.advance=true;
		
	}
		
});