console.log("[+] Evading BusyBox Detection Script Loaded")

Java.perform(function(){
  console.log("[*] Performing BusyBox Detection Evading.")

  var deActivity = Java.use('com.hpandro.androidsecurity.ui.activity.task.rootDetection.BusyBoxBinaryTaskActivity')
  
  deActivity.checkFlagBusyBoxBinaries.implementation = function(){
    return false
  }
  
})