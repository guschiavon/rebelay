/*
By default, Klaro will load the config from a global 'klaroConfig' variable. You
can change this by specifying the 'data-klaro-config' attribute on your script:
<script src="klaro.js" data-klaro-config="myConfigVariableName"
*/
var klaroConfig = {
    version: 1,
    elementID: 'klaro',
    storageMethod: 'cookie',
    storageName: 'rebelay',
    noAutoLoad: false,
    styling: {
        theme: ['bottom', 'wide'],
    },
    htmlTexts: false,
    // cookieDomain: '.example.com',
    cookieExpiresAfterDays: 120,
    default: false,
    mustConsent: false,
    acceptAll: true,
    hideDeclineAll: true,
    hideLearnMore: false,
    disablePoweredBy: true,
    translations: {        
        zz: {
            privacyPolicyUrl: '/privacy',
        },        
        en: {
            privacyPolicyUrl: '/privacy',
            consentModal: {
                description:
                    'Here you can see and customize the information that we collect about you. Please note that disabling some of these might affect website functionality.' + 
                    'Entries marked as "Example" are just for demonstration purposes and are not ' + 
                    'really used on this website.',
            },
            purposes: {
                analytics: {
                    title: 'Analytics'
                },
                security: {
                    title: 'Security'
                },
                livechat: {
                    title: 'Livechat'
                },
                advertising: {
                    title: 'Advertising'
                },
                styling: {
                    title: 'Styling'
                },
            },
        },
    },

    /*
    Here you specify the third-party services that Klaro will manage for you.
    */
    services: [
        {
            name: 'googleAnalytics',
            default: true,
            translations: {
                zz: {
                    title: 'Google Analytics'
                },
                en: {
                    description: 'Google Analytics collects ANONYMOUS website use data. It does not collect personal, identifyable information from you.'
                }          
            },            
            purposes: ['analytics'],
            cookies: [               
                [/^_pk_.*$/, '/', 'klaro.kiprotect.com'],
                [/^_pk_.*$/, '/', 'localhost'],
                'piwik_ignore',
            ],
            callback: function(consent, service) {
               return
            },

            required: false,
            optOut: false,
            onlyOnce: true,
        },    
        {
            name: 'YouTube',
            default: true,
            translations: {
                zz: {
                    title: 'YouTube'
                },
                en: {
                    description: 'Allows you to watch Youtube videos on the site and posts'
                }          
            },            
            purposes: ['advertisement'],
            cookies: [               
                [/^_pk_.*$/, '/', 'klaro.kiprotect.com'],
                [/^_pk_.*$/, '/', 'localhost'],
                'piwik_ignore',
            ],
            callback: function(consent, service) {
               return
            },

            required: false,
            optOut: false,
            onlyOnce: true,
        },    
        {
            name: 'googleAdsense',
            default: false,
            translations: {
                zz: {
                    title: 'Google Adsense'
                },
                en: {
                    description: 'Google Adsense displays ads based on your interests and recommendations. Uses existing Google data and may acquire new data for Google by using this application.'
                }          
            },            
            purposes: ['advertisement'],
            cookies: [
                /*
                you an either only provide a cookie name or regular expression (regex) or a list
                consisting of a name or regex, a path and a cookie domain. Providing a path and
                domain is necessary if you have services that set cookies for a path that is not
                "/", or a domain that is not the current domain. If you do not set these values
                properly, the cookie can't be deleted by Klaro, as there is no way to access the
                path or domain of a cookie in JS. Notice that it is not possible to delete
                cookies that were set on a third-party domain, or cookies that have the HTTPOnly
                attribute: https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie#new-
                cookie_domain
                */

                /*
                This rule will match cookies that contain the string '_pk_' and that are set on
                the path '/' and the domain 'klaro.kiprotect.com'
                */
                [/^_pk_.*$/, '/', 'klaro.kiprotect.com'],

                /*
                Same as above, only for the 'localhost' domain
                */
                [/^_pk_.*$/, '/', 'localhost'],

                /*
                This rule will match all cookies named 'piwik_ignore' that are set on the path
                '/' on the current domain
                */
                'piwik_ignore',
            ],
            callback: function(consent, service) {
                return
            },

            required: false,
            optOut: false,
            onlyOnce: true,
        },
    ],

    /*
    You can define an optional callback function that will be called each time the
    consent state for any given service changes. The consent value will be passed as
    the first parameter to the function (true=consented). The `service` config will
    be passed as the second parameter.
    */
    callback: function(consent, service) {
        console.log(
            'User consent for service ' + service.name + ': consent=' + consent
        );
    },

};