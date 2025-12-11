import { Base } from ".."
import { BackgroundTaskService } from "./background-task"
import { BandwidthControl } from "./bandwidth-control"
import { CertificateService } from "./certificate"
import { CMSService } from "./cms"
import { DDNSService } from "./ddns"
import { DesktopService } from "./desktop"
import { ExternalDeviceService } from "./external-device"
import { Group } from "./group"
import { Hardware } from "./hardware"
import { NetworkService } from "./network"
import { PackageService } from "./package"
import { PortForwardingService } from "./port-forwarding"
import { QuickConnectService } from "./quickconnect"
import { QuickStartService } from "./quickstart"
import { Report } from "./report"
import { SecurityScan } from "./security-scan"
import { ServiceService } from "./service"
import { ShareService } from "./share"
import { System } from "./system"
import { Upgrade } from "./upgrade"
import { UserService } from "./user"
import { WebService } from "./web"

export class Core extends Base {
  get cms() {
    return new CMSService(this._settings)
  }

  get system() {
    return new System(this._settings)
  }

  get ddns() {
    return new DDNSService(this._settings)
  }

  get certificate() {
    return new CertificateService(this._settings)
  }

  get bandwidthControl() {
    return new BandwidthControl(this._settings)
  }

  get hardware() {
    return new Hardware(this._settings)
  }

  get group() {
    return new Group(this._settings)
  }

  get upgrade() {
    return new Upgrade(this._settings)
  }

  get report() {
    return new Report(this._settings)
  }

  get securityScan() {
    return new SecurityScan(this._settings)
  }

  get package() {
    return new PackageService(this._settings)
  }

  get externalDevice() {
    return new ExternalDeviceService(this._settings)
  }

  get desktop() {
    return new DesktopService(this._settings)
  }

  get quickstart() {
    return new QuickStartService(this._settings)
  }

  get backgroundTask() {
    return new BackgroundTaskService(this._settings)
  }

  get share() {
    return new ShareService(this._settings)
  }

  get user() {
    return new UserService(this._settings)
  }

  get network() {
    return new NetworkService(this._settings)
  }

  get web() {
    return new WebService(this._settings)
  }

  get quickconnect() {
    return new QuickConnectService(this._settings)
  }

  get service() {
    return new ServiceService(this._settings)
  }

  get portForwarding() {
    return new PortForwardingService(this._settings)
  }
}
