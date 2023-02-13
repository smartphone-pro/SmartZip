import Foundation

@objc public class SmartZip: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
