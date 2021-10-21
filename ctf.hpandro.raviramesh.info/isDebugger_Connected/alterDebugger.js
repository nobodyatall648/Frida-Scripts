console.log("[+] Alter Debugger Loaded")

Java.perform(function(){
  console.log("[*] Debugger always true activated.")

  var alterDebugger = Java.use('android.os.Debug')
  alterDebugger.isDebuggerConnected.implementation = function() {
    return true
  }
  
})