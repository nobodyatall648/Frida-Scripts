import frida
import time

package_id = "com.package.name"

device = frida.get_usb_device()
pid = device.spawn([package_id])
device.resume(pid)
time.sleep(1)
session = device.attach(pid)
script = session.create_script(open("actionPerform.js").read())
script.load()

input()