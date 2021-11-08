"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var angular_1 = require("@ionic/angular");
var explore_container_module_1 = require("../explore-container/explore-container.module");
var settings_page_1 = require("./settings.page");
describe('SettingsPage', function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [settings_page_1.SettingsPage],
            imports: [angular_1.IonicModule.forRoot(), explore_container_module_1.ExploreContainerComponentModule]
        }).compileComponents();
        fixture = testing_1.TestBed.createComponent(settings_page_1.SettingsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
