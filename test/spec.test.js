//const { strictEqual } = require('assert');
const { assert } = require('chai');
const path = require('path');
const { isRegularExpressionLiteral } = require('typescript');
const specFolderLocation = './spec_files';
const splunkSpec = require("../out/spec.js");
const specFileVersion = "8.2";

describe('app.conf', () => {
	let specFileName = "app.conf.spec";
	let specFilePath = path.join(specFolderLocation, specFileVersion, specFileName)
	let specConfig = splunkSpec.getSpecConfig(specFilePath);

	it('stanza "[author=authorname]" should be valid', () => {
		assert.equal(splunkSpec.isStanzaValid(specConfig, "[author=authorname]"), true);
	});
});

describe('authorize.conf', () => {
	let specFileName = "authorize.conf.spec";
	let specFilePath = path.join(specFolderLocation, specFileVersion, specFileName)
	let specConfig = splunkSpec.getSpecConfig(specFilePath);

	it('stanza "[role_org_custom]" should be valid', () => {
		assert.equal(splunkSpec.isStanzaValid(specConfig, "[role_org_custom]"), true);
	});
});

describe('distsearch.conf', () => {
	let specFileName = "distsearch.conf.spec";
	let specFilePath = path.join(specFolderLocation, specFileVersion, specFileName)
	let specConfig = splunkSpec.getSpecConfig(specFilePath);

	it('stanza "[replicationBlacklist]" should be valid', () => {
		assert.equal(splunkSpec.isStanzaValid(specConfig, "[replicationBlacklist]"), true);
	});
});

describe('indexes.conf', () => {
	let specFileName = "indexes.conf.spec";
	let specFilePath = path.join(specFolderLocation, specFileVersion, specFileName)
	let specConfig = splunkSpec.getSpecConfig(specFilePath);

	it('setting "repFactor = auto" should be valid for stanza [default]', () => {
		assert.equal(splunkSpec.isSettingValid(specConfig, "[default]", "repFactor = auto"), true);
	});

	it('setting "frozenTimePeriodInSecs = 47347200" should be valid for stanza [default]', () => {
		assert.equal(splunkSpec.isSettingValid(specConfig, "[default]", "frozenTimePeriodInSecs = 47347200"), true);
	});

	it('setting "maxHotSpanSecs = 2678400" should be valid for stanza [default]', () => {
		assert.equal(splunkSpec.isSettingValid(specConfig, "[default]", "maxHotSpanSecs = 2678400"), true);
	});

	it('setting "maxTotalDataSizeMB = 512000" should be valid for stanza [default]', () => {
		assert.equal(splunkSpec.isSettingValid(specConfig, "[default]", "maxTotalDataSizeMB = 512000"), true);
	});

	it('setting "enableDataIntegrityControl = 0" should be valid for stanza [default]', () => {
		assert.equal(splunkSpec.isSettingValid(specConfig, "[default]", "enableDataIntegrityControl = 0"), true);
	});

	it('setting "enableTsidxReduction = 0" should be valid for stanza [default]', () => {
		assert.equal(splunkSpec.isSettingValid(specConfig, "[default]", "enableTsidxReduction = 0"), true);
	});
});

describe('inputs.conf', () => {
	let specFileName = "inputs.conf.spec";
	let specFilePath = path.join(specFolderLocation, specFileVersion, specFileName)
	let specConfig = splunkSpec.getSpecConfig(specFilePath);

	it('stanza "[script:///opt/splunk/etc/apps/ta-myscript/script.sh]" should be valid', () => {
		assert.equal(splunkSpec.isStanzaValid(specConfig, "[script:///opt/splunk/etc/apps/ta-myscript/script.sh]"), true);
	});
	
	it('setting "disabled = 1" should be valid', () => {
		assert.equal(splunkSpec.isSettingValid(specConfig, "[script:///opt/splunk/etc/apps/ta-myscript/script.sh]", "disabled = 1"), true);
	});

	it('setting "interval = 600" should be valid', () => {
		assert.equal(splunkSpec.isSettingValid(specConfig, "[script://./bin/lsof.sh]", "interval = 600"), true);
	});

});

describe('serverclass.conf', () => {
	let specFileName = "serverclass.conf.spec";
	let specFilePath = path.join(specFolderLocation, specFileVersion, specFileName)
	let specConfig = splunkSpec.getSpecConfig(specFilePath);

	it('setting "targetRepositoryLocation = path" should be valid for stanza [serverClass:serverClassName]', () => {
		assert.equal(splunkSpec.isSettingValid(specConfig, "[serverClass:serverClassName]", "targetRepositoryLocation = path"), true);
	});
});

describe('tags.conf', () => {
	let specFileName = "tags.conf.spec";
	let specFilePath = path.join(specFolderLocation, specFileVersion, specFileName)
	let specConfig = splunkSpec.getSpecConfig(specFilePath);

	it('stanza "[eventtype=eventtype]" should be valid', () => {
		assert.equal(splunkSpec.isStanzaValid(specConfig, "[eventtype=eventtype]"), true);
	});

	it('setting "authentication = enabled" should be valid', () => {
		assert.equal(splunkSpec.isSettingValid(specConfig, "[eventtype=eventtype]", "authentication = enabled"), true);
	});
});

describe('ui-tour.conf', () => {
	let specFileName = "ui-tour.conf.spec";
	let specFilePath = path.join(specFolderLocation, specFileVersion, specFileName)
	let specConfig = splunkSpec.getSpecConfig(specFilePath);

	it('stanza "[tour_name]" should be valid', () => {
		assert.equal(splunkSpec.isStanzaValid(specConfig, "[tour_name]"), true);
	});
});