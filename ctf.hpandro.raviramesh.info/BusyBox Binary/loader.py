import frida
import time

package_id = "com.hpandro.androidsecurity"

device = frida.get_usb_device()
pid = device.spawn([package_id])
device.resume(pid)
time.sleep(1)
session = device.attach(pid)
script = session.create_script(open("evadeBusyBoxDetector.js").read())
script.load()

input()