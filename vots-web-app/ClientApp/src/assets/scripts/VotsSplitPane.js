//var VotsSplitPane = (function () {
//  var mainContentNotificationSplit = Split(['#contentNavigationSplit', '#searchPanel']);
//  var searchPanelSplit = Split(['#contentPanel', '#notifcationPanel'], {
//    direction: 'vertical'
//  });

//  return {
//    CloseSearchSplitPane: function () {
//      searchPanelSplit.destroy();
//    },
//    ReCreateSearchSplitPane: function () {
//      searchPanelSplit = Split(['#contentPanel', '#notifcationPanel'], {
//        direction: 'vertical'
//      });
//    },
//    init: function () {
//      if (mainContentNotificationSplit != null) {
//        mainContentNotificationSplit = Split(['#contentNavigationSplit', '#searchPanel']);
//      }
//      if (searchPanelSplit != null) {
//        searchPanelSplit = Split(['#contentPanel', '#notifcationPanel'], {
//          direction: 'vertical'
//        });
//      }
//    } 
//  }

//})(VotsSplitPane || {})


var VotsSplitPane = (function () {
  var CurrentTime = new Date();
  //alert($("#contentNavigationSplit") + "\n" + $("#searchPanel") + $("#contentPanel") + $("#notifcationPanel"));
  //var mainContentNotificationSplit = Split(['#contentNavigationSplit', '#searchPanel']);
  //var searchPanelSplit = Split(['#contentPanel', '#notifcationPanel'], {
  //  direction: 'vertical'
  //});
  //var mainContentNotificationSplit = Split([$("#contentNavigationSplit"), $("#searchPanel")]);
  //var searchPanelSplit = Split([$("#contentPanel"), $("#notifcationPanel")], {
  //  direction: 'vertical'
  //});

  return {
    CloseSearchSplitPane: function () {
     // searchPanelSplit.destroy();
    },
    ReCreateSearchSplitPane: function () {
      //searchPanelSplit = Split(['#contentPanel', '#notifcationPanel'], {
      //  direction: 'vertical'
      //});
    },
    PrintCurrentDate: function () {
      //alert("Current Time is :"+CurrentTime);
    },
    init: function () {
      //alert($("#contentNavigationSplit"));
      if (mainContentNotificationSplit != null) {
        mainContentNotificationSplit = Split(['#contentNavigationSplit', '#searchPanel']);
      }
      if (searchPanelSplit != null) {
        searchPanelSplit = Split(['#contentPanel', '#notifcationPanel'], {
          direction: 'vertical'
        });
      }
    }
  }

})(VotsSplitPane || {})

