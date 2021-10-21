console.log("[+] Decrypted Flag Printing Loaded")

Java.perform(function(){
  console.log("[*] Printing Flag.")

  var rsa = Java.use('com.hpandro.androidsecurity.ui.activity.task.encryption.RSAActivity')
  rsa.decrypt.overload("java.security.PrivateKey", "[B").implementation = function(a, b){
    var decrypted = this.decrypt(a,b)
    console.log("Decrypted: " + Java.use('java.lang.String').$new(decrypted));

    return decrypted
  }

})