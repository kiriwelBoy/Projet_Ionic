"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Settings = void 0;
var angular_1 = require("@ionic/angular");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var settings_page_1 = require("./settings.page");
var explore_container_module_1 = require("../explore-container/explore-container.module");
var settings_routing_module_1 = require("./settings-routing.module");
var Settings = /** @class */ (function () {
    function Settings() {
    }
    Settings = __decorate([
        core_1.NgModule({
            imports: [
                angular_1.IonicModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                explore_container_module_1.ExploreContainerComponentModule,
                router_1.RouterModule.forChild([{ path: '', component: settings_page_1.SettingsPage }]),
                settings_routing_module_1.SettingsPageRoutingModule,
            ],
            declarations: [settings_page_1.SettingsPage]
        })
    ], Settings);
    return Settings;
}());
exports.Settings = Settings;
PageModule;
{ }
