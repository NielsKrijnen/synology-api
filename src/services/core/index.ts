import { Base } from "..";
import { System } from "./system";
import { BandwidthControl } from "./bandwidth-control";
import { Hardware } from "./hardware";
import { Group } from "./group";
import { Upgrade } from "./upgrade";
import { Report } from "./report";
import { PackageService } from "./package";
import { CMSService } from "./cms";
import { DDNSService } from "./ddns";
import { CertificateService } from "./certificate";
import { ShareService } from "./share";
import { UserService } from "./user";
import { NetworkService } from "./network";
import { WebService } from "./web";
import { QuickConnectService } from "./quickconnect";
import { ServiceService } from "./service";
import { PortForwardingService } from "./port-forwarding";

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

  get package() {
    return new PackageService(this._settings)
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