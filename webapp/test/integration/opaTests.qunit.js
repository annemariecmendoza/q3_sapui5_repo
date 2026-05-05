/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["githubbootcampintegration/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
