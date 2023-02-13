import Foundation
import Capacitor
import SSZipArchive

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(SmartZipPlugin)
public class SmartZipPlugin: CAPPlugin {
    @objc func unzip(_ call: CAPPluginCall) {
        guard let zipPath = call.getString("zipPath") else {
            call.reject("zipPath is missing")
            return
        }
        guard let destFolder = call.getString("destFolder") else {
            call.reject("destFolder is missing")
            return
        }
        print("unzip: \(zipPath) => \(destFolder)")
        
        SSZipArchive.unzipFile(atPath: zipPath, toDestination: destFolder, progressHandler: { [weak self] entry, zipInfo, entryNumber, total in
            print("progress: \(entry), \(entryNumber), \(total)")
            self?.notifyListeners("unzipProgress", data: [
                "entry": entry,
                "entryNumber": entryNumber,
                "total": total,
            ])
        }) { path, succeeded, error in
            if let error = error {
                print(error.localizedDescription)
            }
            
            if succeeded {
                call.resolve(["result": succeeded])
            } else {
                call.reject("fail unzip", "FAIL_UNZIP", error)
            }
        }
    }
}
