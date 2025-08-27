const { Builder, By, Key, until, Capabilities } = require('selenium-webdriver');
const {chrome} = require('selenium-webdriver/chrome')

async function bdbReportCollector(){
    const options = new chrome.Options();
    options.addArguments(
        '--disable-blink-features=AutomatedControlled',
        '--start-maximized',
        //'--disable-infobars', -- Deprecated
        '--disable-gpu',
        '--incognito'    

    );

    const prefs = {
        //'download.default_directory': downlaod_path,
        'profile.default_content_settings.cookie': 0,
        'credentials_enable_service': false,
        'pofile.password_manager_enabled': false
    }

    options.setUserPreferences(prefs);

    capabilities = Capabilities.chrome();
    capabilities.set(
        'goog:chromeOptions',
        {
            args: options.options_.args,
            prefs,
            excludeSwitches: ['enable-automation', 'enable-logging'],
            useAutomationExtension: false
        }
    )
}
