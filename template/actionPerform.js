console.log("[+] Script Loaded")

Java.perform(function(){
  console.log("[*] Performing action.")

  var alterDebugger = Java.use('android.os.Debug')
  alterDebugger.isDebuggerConnected.implementation = function() {
    return true
  }
  
})