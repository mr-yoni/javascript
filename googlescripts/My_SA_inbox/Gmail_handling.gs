function deleteProcedure() {

  var delete_queries = [
// delete old barchart emails
    ,"from:(@barchart.com) older_than:28d"
// delete old Quora emails
    ,"from:(digest-noreply@quora.com) older_than:4d"
// delete old SA accounts emails
    ,"from:account@seekingalpha.com older_than:30d"
// delete old deploy emails
    ,"label:Production older_than:6m"
    ];
  
  
  while ( delete_queries.length>0 ) {
    var q = delete_queries.pop();
    var Threads = GmailApp.search(q);
    while ( Threads.length > 100 ) {
      var lessThreads = Threads.slice(0, 99);
      Threads = Threads.slice(100);
      GmailApp.moveThreadsToTrash(lessThreads);
    }
    GmailApp.moveThreadsToTrash(Threads);
  }
  
}


function archiveProcedure() {

  var archive_queries = [
    ,"from:(jira@seekingalpha.atlassian.net) subject:AN -{Mone:} label:Inbox older_than:3d"
    ,"from:(jira@seekingalpha.atlassian.net) subject:MW -{Mone:} label:Inbox older_than:3d"
    ,"from:(jira@seekingalpha.atlassian.net) subject:IOS -{Mone:} label:Inbox older_than:3d"
    ,"from:(jira@seekingalpha.atlassian.net) subject:Mone: label:Inbox older_than:7d"
    ,"from:(notifier@fabric.io) label:Inbox older_than:3d"
    ,"from:(digest-noreply@quora.com) label:Inbox older_than:3d"
    ,"label:Google+ AND label:Inbox older_than:7d"
    ,"label:Support/Crashlytics AND label:Inbox older_than:3d"
    ,"label:Alerts AND label:Inbox older_than:7d"
    ,"label:\"Google Docs\" AND label:Inbox older_than:3d"
    ];
  
  
  while ( archive_queries.length>0 ) {
    var q = archive_queries.pop();
    var Threads = GmailApp.search(q);
    while ( Threads.length > 100 ) {
      var lessThreads = Threads.slice(0, 99);
      Threads = Threads.slice(100);
      GmailApp.moveThreadsToArchive(lessThreads);
    }
    GmailApp.moveThreadsToArchive(Threads);
  }
  
}
